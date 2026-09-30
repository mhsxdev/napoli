export function initNavigation() {
  const nav = document.querySelector('.nav')
  const burger = document.querySelector('.nav-burger')
  const mobileMenu = document.querySelector('.mobile-menu')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) nav.classList.add('scrolled')
    else nav.classList.remove('scrolled')
  }, { passive: true })

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open')
      burger.classList.toggle('active', open)
      burger.querySelectorAll('span')[0].style.transform = open ? 'translateY(6.5px) rotate(45deg)' : ''
      burger.querySelectorAll('span')[1].style.opacity = open ? '0' : '1'
      burger.querySelectorAll('span')[2].style.transform = open ? 'translateY(-6.5px) rotate(-45deg)' : ''
      document.body.style.overflow = open ? 'hidden' : ''
    })
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
        burger.classList.remove('active')
        burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1' })
        document.body.style.overflow = ''
      })
    })
  }
}
