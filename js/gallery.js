export function initGallery() {
  const items = document.querySelectorAll('.gallery-item')
  if (!items.length) return

  let currentIndex = 0
  const lightbox = document.querySelector('[data-lightbox]')
  if (!lightbox) return

  const img = lightbox.querySelector('.lightbox-img')
  const close = lightbox.querySelector('.lightbox-close')
  const prev = lightbox.querySelector('.lightbox-prev')
  const next = lightbox.querySelector('.lightbox-next')

  items.forEach((item, i) => {
    item.addEventListener('click', () => open(i))
  })

  function open(index) {
    currentIndex = index
    const src = items[index].querySelector('img').src
    img.src = src.replace('w=1200', 'w=1600').replace('w=900', 'w=1400')
    lightbox.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  function closeLb() {
    lightbox.classList.remove('open')
    document.body.style.overflow = ''
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + items.length) % items.length
    const src = items[currentIndex].querySelector('img').src
    img.style.opacity = '0'
    setTimeout(() => {
      img.src = src.replace('w=1200', 'w=1600').replace('w=900', 'w=1400')
      img.style.opacity = '1'
    }, 150)
  }

  close.addEventListener('click', closeLb)
  prev.addEventListener('click', () => navigate(-1))
  next.addEventListener('click', () => navigate(1))
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb() })

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return
    if (e.key === 'Escape') closeLb()
    if (e.key === 'ArrowLeft') navigate(document.documentElement.dir === 'rtl' ? 1 : -1)
    if (e.key === 'ArrowRight') navigate(document.documentElement.dir === 'rtl' ? -1 : 1)
  })
}
