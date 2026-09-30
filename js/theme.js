export function initTheme() {
  const saved = localStorage.getItem('napoli-theme')
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved)
  }
  const btn = document.querySelector('[data-theme-toggle]')
  if (!btn) return
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark'
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('napoli-theme', next)
    updateIcon(btn, next)
  })
  updateIcon(btn, document.documentElement.getAttribute('data-theme') || 'dark')
}

function updateIcon(btn, theme) {
  btn.innerHTML = theme === 'dark'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
}
