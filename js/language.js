export function initLanguage() {
  const saved = localStorage.getItem('napoli-lang') || 'ar'
  applyLanguage(saved)
  const btn = document.querySelector('[data-lang-toggle]')
  if (!btn) return
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('lang') || 'ar'
    const next = current === 'ar' ? 'en' : 'ar'
    applyLanguage(next)
    localStorage.setItem('napoli-lang', next)
  })
}

export function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang)
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    const text = getText(key, lang)
    if (text) el.textContent = text
  })
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html')
    const text = getText(key, lang)
    if (text) el.innerHTML = text
  })
  const toggle = document.querySelector('[data-lang-toggle]')
  if (toggle) toggle.textContent = lang === 'ar' ? 'EN' : 'العربية'
  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }))
}

function getText(path, lang) {
  const parts = path.split('.')
  let obj = window.__napoliT
  for (const p of parts) {
    if (!obj) return null
    obj = obj[p]
  }
  return obj && obj[lang] ? obj[lang] : null
}
