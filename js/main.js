import {
  t,
  galleryImages,
  signatureDishes,
  heroImage,
  interiorImages,
  storyImage,
  finalCtaImage,
} from "../data/content.js";

import { initTheme } from "./theme.js";
import { initLanguage } from "./language.js";
import { initNavigation } from "./navigation.js";
import { initMenu } from "./menu.js";
import { initGallery } from "./gallery.js";
import { initAnimations } from "./animations.js";

window.__napoliT = t;

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <nav class="nav">
      <a href="#top" class="nav-wordmark" aria-label="NAPOLI">
   <img src="/assets/images/logo.webp"/>
</a>
      <div class="nav-links">
        <a href="#menu" class="nav-link" data-i18n="nav.menu"></a>
        <a href="#social" class="nav-link" data-i18n="nav.social"></a>
        <a href="#gallery" class="nav-link" data-i18n="nav.gallery"></a>
        <a href="#location" class="nav-link" data-i18n="nav.location"></a>
      </div>
      <div class="nav-actions">
        <button class="lang-toggle" data-lang-toggle aria-label="Switch language"></button>
        <button class="theme-toggle" data-theme-toggle aria-label="Switch theme"></button>
        <a href="#location" class="btn-reserve" data-i18n="nav.reserve"></a>
        <div class="nav-burger" aria-label="Menu"><span></span><span></span><span></span></div>
      </div>
    </nav>

    <div class="mobile-menu">
      <a href="#menu" data-i18n="nav.menu"></a>
      <a href="#social" class="nav-link" data-i18n="nav.social"></a>
      <a href="#gallery" data-i18n="nav.gallery"></a>
      <a href="#location" data-i18n="nav.location"></a>
      <a href="#location" data-i18n="nav.reserve"></a>
    </div>

    <header class="hero" id="top">
      <div class="hero-img-wrap">
        <img class="hero-img" src="${heroImage}" alt="Italian pasta, editorial" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-eyebrow eyebrow" data-i18n="hero.eyebrow"></p>
        <h1 class="hero-title display" data-i18n="hero.title"></h1>
        <p class="hero-subtitle" data-i18n="hero.subtitle"></p>
        <div class="hero-ctas">
          <a href="#menu" class="btn-primary" data-i18n="hero.cta"></a>
          <a href="#social" class="btn-ghost" data-i18n="hero.cta2"></a>
        </div>
      </div>
    </header>

    <section id="intro">
      <div class="container">
        <div class="grid-12">
          <div>
            <p class="eyebrow reveal" data-i18n="intro.eyebrow"></p>
            <h2 class="section-title display reveal reveal-delay-1" style="margin: 1rem 0 2rem;" data-i18n="intro.title"></h2>
            <p class="intro-body reveal reveal-delay-2" data-i18n="intro.body"></p>
          </div>
          <div class="reveal reveal-delay-1">
            <img class="intro-img" src="${interiorImages.wide}" alt="Elegant restaurant interior with warm lighting and natural materials" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section id="signature">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow" data-i18n="signature.eyebrow"></p>
          <h2 class="section-title display" data-i18n="signature.title"></h2>
        </div>
        <div class="signature-grid">
          ${signatureDishes
            .map(
              (d, i) => `
            <div class="sig-item ${d.size} reveal ${i > 0 ? "reveal-delay-1" : ""}">
              <img src="${d.src}" alt="${d.en}" loading="lazy" />
              <div class="sig-meta">
                <h4 data-sig-name="${i}">${d.en}</h4>
                <p data-sig-detail="${i}">${d.detailEn}</p>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="menu">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow" data-i18n="menu.eyebrow"></p>
          <h2 class="section-title display" data-i18n="menu.title"></h2>
        </div>
        <div class="menu-tabs reveal" data-menu-tabs></div>
        <div class="menu-list" data-menu-list></div>
        <p class="menu-note reveal" data-i18n="menu.note"></p>
      </div>
    </section>

    <section id="social">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow" data-i18n="social.eyebrow"></p>
          <h2 class="section-title display" data-i18n="social.title"></h2>
          <p class="intro-body reveal reveal-delay-1" style="margin-top: 1.5rem;" data-i18n="social.body"></p>
        </div>
        <div class="social-links-large reveal reveal-delay-2">
          <a href="https://www.instagram.com/napoli_restocafe?stkn=MWpvY2psdWJmemphag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>Instagram</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            <span>Facebook</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="social-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>

    <section id="gallery">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow" data-i18n="gallery.eyebrow"></p>
          <h2 class="section-title display" data-i18n="gallery.title"></h2>
        </div>
        <div class="gallery-grid reveal">
          ${galleryImages
            .map(
              (img) => `
            <div class="gallery-item">
              <img src="${img.src}" alt="${img.alt}" loading="lazy" />
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section id="location">
      <div class="container">
        <div class="grid-2">
          <div>
            <p class="eyebrow reveal" data-i18n="location.eyebrow"></p>
            <h2 class="section-title display reveal reveal-delay-1" style="margin: 1rem 0 2rem;" data-i18n="location.title"></h2>
            <p class="intro-body reveal reveal-delay-2" data-i18n="location.address"></p>
          </div>
          <div class="loc-card reveal reveal-delay-1">
            <div class="loc-row">
              <span class="loc-label" data-i18n="location.phoneLabel"></span>
              <span class="loc-value" data-i18n="location.phonePlaceholder"></span>
            </div>
            <div class="loc-row">
              <span class="loc-label" data-i18n="location.emailLabel"></span>
              <span class="loc-value" data-i18n="location.emailPlaceholder"></span>
            </div>
            <div class="loc-row">
              <span class="loc-label" data-i18n="location.hoursLabel"></span>
              <span class="loc-value" data-i18n="location.hoursPlaceholder"></span>
            </div>
            <a href="${t.location.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="align-self: start; margin-top: 0.5rem;" data-i18n="location.mapsLabel"></a>
          </div>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <img class="final-cta-img" src="${finalCtaImage}" alt="Elegant table setting ready for guests" loading="lazy" />
      <div class="final-cta-overlay"></div>
      <div class="final-cta-content reveal">
        <p class="eyebrow" data-i18n="finalCta.eyebrow"></p>
        <h2 class="final-cta-title display" data-i18n="finalCta.title"></h2>
        <p class="intro-body reveal reveal-delay-1" style="margin: 0 auto 2rem;" data-i18n="finalCta.body"></p>
        <a href="#location" class="btn-primary" data-i18n="finalCta.cta"></a>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">NAPOLI</div>
            <p class="footer-tagline" data-i18n="footer.tagline"></p>
            <div class="footer-social">
              <span class="footer-social-label" data-i18n="footer.socialLabel"></span>
              <div class="social-links">
                <a href="https://www.instagram.com/napoli_restocafe?stkn=MWpvY2psdWJmemphag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="social-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-links">
            <a href="#menu" data-i18n="nav.menu"></a>
            <a href="#story" data-i18n="nav.story"></a>
            <a href="#gallery" data-i18n="nav.gallery"></a>
            <a href="#location" data-i18n="nav.location"></a>
          </div>
        </div>
        <div class="footer-bottom">
          <span data-i18n="footer.rights"></span>
          <span>NAPOLI · Damascus</span>
        </div>
      </div>
    </footer>

    <div class="lightbox" data-lightbox role="dialog" aria-label="Gallery lightbox" aria-modal="true">
      <img class="lightbox-img" src="" alt="" />
      <button class="lightbox-btn lightbox-close" aria-label="Close">✕</button>
      <button class="lightbox-btn lightbox-prev" aria-label="Previous">‹</button>
      <button class="lightbox-btn lightbox-next" aria-label="Next">›</button>
    </div>
  `;

  initTheme();
  initLanguage();
  initNavigation();
  initMenu();
  initGallery();
  initAnimations();
  initImageErrorHandler();

  document.addEventListener("languagechange", (e) => {
    const lang = e.detail.lang;
    signatureDishes.forEach((d, i) => {
      const nameEl = document.querySelector(`[data-sig-name="${i}"]`);
      const detailEl = document.querySelector(`[data-sig-detail="${i}"]`);
      if (nameEl) nameEl.textContent = d[lang];
      if (detailEl)
        detailEl.textContent =
          d["detail" + lang.charAt(0).toUpperCase() + lang.slice(1)];
    });
  });
}

function initImageErrorHandler() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.opacity = '0.5';
      this.alt = 'Image not available';
    });
  });
}

render();
