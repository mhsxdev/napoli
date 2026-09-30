export function initAnimations() {
  const reveals = document.querySelectorAll('.reveal')
  if (!reveals.length) return

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })

  reveals.forEach(el => observer.observe(el))
}
