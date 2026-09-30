(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();const b={nav:{menu:{ar:"القائمة",en:"Menu"},social:{ar:"تواصل",en:"social"},gallery:{ar:"المعرض",en:"Gallery"},location:{ar:"الموقع",en:"Location"},reserve:{ar:"احجز طاولة",en:"Reserve a table"}},hero:{eyebrow:{ar:"مطبخ إيطالي ",en:"Italian cuisine"},title:{ar:"نكهة إيطاليا، في قلب دمشق",en:"The flavour of Italy, in the heart of Damascus"},subtitle:{ar:"تجربة طعام هادئة، مكونات مختارة بعناية، و ضيافة عصرية.",en:"A quiet dining ritual, carefully sourced ingredients, modern hospitality."},cta:{ar:"اكتشف القائمة",en:"Discover the menu"},cta2:{ar:"تابعنا",en:"Follow us"}},intro:{eyebrow:{ar:"فلسفتنا",en:"Our philosophy"},title:{ar:"كل طبق، لحظة مُفكَّر فيها",en:"Every dish, a considered moment"},body:{ar:"نبدأ من المكوّن، نحترم الأصل، ونترك للحرفية مساحة لتظهر. نابولي ليس مطعماً كبيراً — إنه مكان صغير يهتم بالتفاصيل.",en:"We start with the ingredient, respect its origin, and let craft reveal itself. Napoli is not a large restaurant — it is a small place that cares about detail."}},signature:{eyebrow:{ar:"أطباق مميزة",en:"Signature dishes"},title:{ar:"ما يُذكَّر، لا ما يُؤكَل فقط",en:"What is remembered, not only eaten"}},menu:{eyebrow:{ar:"القائمة",en:"The menu"},title:{ar:"قائمة مفتوحة على المواسم",en:"A menu open to the seasons"},note:{ar:"* الأسعار قد تتغير حسب توفر المكونات الموسمية",en:"* Prices may vary based on seasonal ingredient availability"}},experience:{eyebrow:{ar:"الغرفة",en:"The room"},title:{ar:"إضاءة خافتة، طاولات واسعة، وقت بطيء",en:"Low light, wide tables, slow time"},body:{ar:"صُمِّمت غرفة نابولي لتكون هادئة: ضوء دافئ، خامة طبيعية، و مساحة كافية بين الطاولات لتمنح كل ضيف خصوصيته.",en:"Napoli was designed to be calm: warm light, natural materials, and enough space between tables to give every guest privacy."}},story:{eyebrow:{ar:"قصة",en:"Story"},title:{ar:"طقس، لا قائمة فقط",en:"A ritual, not merely a menu"},body:{ar:"نطبخ كما يُكتب نص: ببطء، بانتباه، و بنية. من أول لقمة إلى فنجان القهوة الأخير، نسعى لأن يكون الوقت الذي تقضيه هنا مختلفاً.",en:"We cook the way a text is written: slowly, attentively, with structure. From the first bite to the final coffee, we want the time you spend here to feel different."}},gallery:{eyebrow:{ar:"معرض",en:"Gallery"},title:{ar:"لحظات من المكان و الطبق",en:"Moments from the room and the plate"}},social:{eyebrow:{ar:"تواصل",en:"Connect"},title:{ar:"كن جزءاً من قصتنا",en:"Be part of our story"},body:{ar:"تابعنا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والعروض الخاصة ولحظات من نابولي.",en:"Follow us on social media for the latest news, special offers, and moments from Napoli."}},location:{eyebrow:{ar:"موقع",en:"Location"},title:{ar:"تجدنا في ساحة المطاعم",en:"Find us at Restaurant Square"},address:{ar:"ساحة المطاعم، أبو رمانة، دمشق، سوريا",en:"Restaurant Square, Abu Rummaneh, Damascus, Syria"},contactNote:{ar:"للحجز والاستفسار: تواصل معنا",en:"For reservations & inquiries: contact us"},phoneLabel:{ar:"هاتف",en:"Phone"},phonePlaceholder:{ar:"963946915918+",en:"+963946915918"},emailLabel:{ar:"بريد",en:"Email"},emailPlaceholder:{ar:"hello@napoli.resto",en:"hello@napoli.resto"},hoursLabel:{ar:"ساعات",en:"Hours"},hoursPlaceholder:{ar:"تُحدَّد لاحقاً",en:"To be confirmed"},mapsLabel:{ar:"فتح في خرائط جوجل",en:"Open in Google Maps"},mapsUrl:"https://www.google.com/maps/place/Napoli+restocaf%C3%A9/@33.519432,36.2798233,17z/data=!3m1!4b1!4m6!3m5!1s0x1518e700717f1bf3:0xd2cc0734db9202ba!8m2!3d33.519432!4d36.2823983!16s%2Fg%2F11w2h5n8fs?entry=ttu&g_ep=EgoyMDI2MDkyNy4wIKXMDSoASAFQAw%3D%3D"},finalCta:{eyebrow:{ar:"احجز",en:"Reserve"},title:{ar:"طاولتك بانتظارك",en:"Your table is waiting"},body:{ar:"نستقبل عدد محدود من الضيوف كل مساء. احجز مسبقاً.",en:"We welcome a limited number of guests each evening. Reserve ahead."},cta:{ar:"احجز الآن",en:"Reserve now"}},footer:{tagline:{ar:"مطبخ إيطالي · دمشق",en:"Contemporary Italian cuisine · Damascus"},rights:{ar:"© 2026 NAPOLI. جميع الحقوق محفوظة.",en:"© 2026 NAPOLI. All rights reserved."},socialLabel:{ar:"تابعنا",en:"Follow us"}}},f=[{src:"./assets/images/res.webp",alt:"Warm restaurant interior"},{src:"./assets/images/dish10.webp",alt:"Italian pasta on a dark plate"},{src:"./assets/images/dish11.webp",alt:"Wine glasses and warm light"},{src:"./assets/images/dish12.webp",alt:"Pasta with pesto drizzle"},{src:"./assets/images/dish3.webp",alt:"Margherita pizza on black backdrop"},{src:"./assets/images/dish4.webp",alt:"Elegant restaurant seating"},{src:"./assets/images/dish7.webp",alt:"Hands adding basil to spaghetti"},{src:"./assets/images/dish8.webp",alt:"Cozy table setting with warm lighting"}],u=[{src:"./assets/images/dish10.webp",ar:"تاغلياتيلي بالليمون",en:"Lemon tagliatelle",detailAr:"زبدة، ليمون، فلفل أسود، بارميزان",detailEn:"Butter, lemon, black pepper, parmesan",size:"large"},{src:"./assets/images/dish9.webp",ar:"مارغريتا نابوليتانا",en:"Margherita Napoletana",detailAr:"طماطم، فيور دي لاتيه، ريحان",detailEn:"Tomato, fior di latte, basil",size:"medium"},{src:"./assets/images/dish12.webp",ar:"فطر و ترافل",en:"Mushroom & truffle",detailAr:"فطر بري، كريمة، زيت ترافل",detailEn:"Wild mushrooms, cream, truffle oil",size:"medium"},{src:"./assets/images/dish11.webp",ar:"بانّا كوتا الفانيلا",en:"Vanilla panna cotta",detailAr:"فانيلا، توت موسمي، قشر ليمون",detailEn:"Vanilla, seasonal berries, lemon zest",size:"large"}],y="./assets/images/hero.webp",w={wide:"./assets/images/res1.webp"},k="./assets/images/last.webp";function E(){const s=localStorage.getItem("napoli-theme");s&&document.documentElement.setAttribute("data-theme",s);const e=document.querySelector("[data-theme-toggle]");e&&(e.addEventListener("click",()=>{const t=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("napoli-theme",t),p(e,t)}),p(e,document.documentElement.getAttribute("data-theme")||"dark"))}function p(s,e){s.innerHTML=e==="dark"?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'}function L(){const s=localStorage.getItem("napoli-lang")||"ar";g(s);const e=document.querySelector("[data-lang-toggle]");e&&e.addEventListener("click",()=>{const t=(document.documentElement.getAttribute("lang")||"ar")==="ar"?"en":"ar";g(t),localStorage.setItem("napoli-lang",t)})}function g(s){document.documentElement.setAttribute("lang",s),document.documentElement.setAttribute("dir",s==="ar"?"rtl":"ltr"),document.querySelectorAll("[data-i18n]").forEach(a=>{const t=a.getAttribute("data-i18n"),r=v(t,s);r&&(a.textContent=r)}),document.querySelectorAll("[data-i18n-html]").forEach(a=>{const t=a.getAttribute("data-i18n-html"),r=v(t,s);r&&(a.innerHTML=r)});const e=document.querySelector("[data-lang-toggle]");e&&(e.textContent=s==="ar"?"EN":"العربية"),document.dispatchEvent(new CustomEvent("languagechange",{detail:{lang:s}}))}function v(s,e){const a=s.split(".");let t=window.__napoliT;for(const r of a){if(!t)return null;t=t[r]}return t&&t[e]?t[e]:null}function x(){const s=document.querySelector(".nav"),e=document.querySelector(".nav-burger"),a=document.querySelector(".mobile-menu");window.addEventListener("scroll",()=>{window.scrollY>60?s.classList.add("scrolled"):s.classList.remove("scrolled")},{passive:!0}),e&&a&&(e.addEventListener("click",()=>{const t=a.classList.toggle("open");e.classList.toggle("active",t),e.querySelectorAll("span")[0].style.transform=t?"translateY(6.5px) rotate(45deg)":"",e.querySelectorAll("span")[1].style.opacity=t?"0":"1",e.querySelectorAll("span")[2].style.transform=t?"translateY(-6.5px) rotate(-45deg)":"",document.body.style.overflow=t?"hidden":""}),a.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{a.classList.remove("open"),e.classList.remove("active"),e.querySelectorAll("span").forEach(r=>{r.style.transform="",r.style.opacity="1"}),document.body.style.overflow=""})}))}const h=[{id:"starters",ar:"المقبلات",en:"Starters"},{id:"pizza",ar:"البيتزا",en:"Pizza"},{id:"pasta",ar:"الباستا",en:"Pasta"},{id:"mains",ar:"الأطباق الرئيسية",en:"Main courses"},{id:"desserts",ar:"الحلويات",en:"Desserts"},{id:"drinks",ar:"المشروبات",en:"Drinks"}],A=[{category:"starters",ar:"بوراتا و طماطم مشوية",en:"Burrata & roasted tomatoes",detailAr:"ريحان، زيت زيتون بكر، ملح البحر",detailEn:"Basil, extra virgin olive oil, sea salt",price:"12",image:"./assets/images/dish10.webp",featured:!0},{category:"starters",ar:"كارباشيو الخضار",en:"Vegetable carpaccio",detailAr:"خضار موسمية، ليمون، بارميزان",detailEn:"Seasonal vegetables, lemon, parmesan",price:"10",image:"./assets/images/dish9.webp"},{category:"pizza",ar:"مارغريتا نابوليتانا",en:"Margherita Napoletana",detailAr:"طماطم، فيور دي لاتيه، ريحان",detailEn:"Tomato, fior di latte, basil",price:"14",image:"./assets/images/dish8.webp",featured:!0},{category:"pizza",ar:"فطر و ترافل",en:"Mushroom & truffle",detailAr:"فطر بري، كريمة، زيت ترافل",detailEn:"Wild mushrooms, cream, truffle oil",price:"17",image:"./assets/images/dish7.webp"},{category:"pasta",ar:"تاغلياتيلي بالليمون",en:"Lemon tagliatelle",detailAr:"زبدة، ليمون، فلفل أسود، بارميزان",detailEn:"Butter, lemon, black pepper, parmesan",price:"15",image:"./assets/images/dish6.webp",featured:!0},{category:"pasta",ar:"أرابياتا حارة",en:"Spicy arrabbiata",detailAr:"طماطم، فلفل، بقدونس، زيت زيتون",detailEn:"Tomato, chilli, parsley, olive oil",price:"13",image:"./assets/images/dish1.webp"},{category:"mains",ar:"دجاج بالزبدة و الأعشاب",en:"Herb butter chicken",detailAr:"أعشاب طازجة، خضار موسمية",detailEn:"Fresh herbs, seasonal vegetables",price:"19",image:"./assets/images/dish2.webp"},{category:"desserts",ar:"تيراميسو نابولي",en:"Napoli tiramisu",detailAr:"قهوة، ماسكاربوني، كاكاو",detailEn:"Coffee, mascarpone, cocoa",price:"9",image:"./assets/images/dish3.webp",featured:!0},{category:"desserts",ar:"بانّا كوتا الفانيلا",en:"Vanilla panna cotta",detailAr:"فانيلا، توت موسمي، قشر ليمون",detailEn:"Vanilla, seasonal berries, lemon zest",price:"9",image:"./assets/images/dish4.webp"},{category:"drinks",ar:"ليمون و ريحان",en:"Lemon & basil spritz",detailAr:"ليمون طازج، ريحان، ماء فوار",detailEn:"Fresh lemon, basil, sparkling water",price:"7",image:"./assets/images/dish5.webp"}];function C(){const s=document.querySelector("[data-menu-tabs]"),e=document.querySelector("[data-menu-list]");if(!s||!e)return;function a(i){s.innerHTML="",h.forEach((n,d)=>{const l=document.createElement("button");l.className="menu-tab"+(d===0?" active":""),l.textContent=n[i],l.setAttribute("data-cat",n.id),l.addEventListener("click",()=>{s.querySelectorAll(".menu-tab").forEach(c=>c.classList.remove("active")),l.classList.add("active"),t(n.id,i)}),s.appendChild(l)}),t(h[0].id,i)}function t(i,n){const d=A.filter(l=>l.category===i);e.style.opacity="0",setTimeout(()=>{e.innerHTML="",d.forEach(l=>{const c=document.createElement("div");c.className="menu-item";const o=`detail${n.charAt(0).toUpperCase()}${n.slice(1)}`;c.innerHTML=`
        <div class="menu-item-image">
          <img
            src="${l.image}"
            alt="${l[n]}"
            loading="lazy"
          />
        </div>

        <div class="menu-item-content">
          <div class="menu-item-header">
            <span class="menu-item-name">
              ${l[n]}
            </span>

            <span class="menu-item-price">
            ${l.price} $ 
            </span>
          </div>

          <span class="menu-item-detail">
            ${l[o]}
          </span>
        </div>
      `,e.appendChild(c)}),e.style.transition="opacity 0.4s",e.style.opacity="1"},200)}let r=document.documentElement.getAttribute("lang")||"ar";a(r),document.addEventListener("languagechange",i=>{r=i.detail.lang,a(r)})}function S(){const s=document.querySelectorAll(".gallery-item");if(!s.length)return;let e=0;const a=document.querySelector("[data-lightbox]");if(!a)return;const t=a.querySelector(".lightbox-img"),r=a.querySelector(".lightbox-close"),i=a.querySelector(".lightbox-prev"),n=a.querySelector(".lightbox-next");s.forEach((o,m)=>{o.addEventListener("click",()=>d(m))});function d(o){e=o;const m=s[o].querySelector("img").src;t.src=m.replace("w=1200","w=1600").replace("w=900","w=1400"),a.classList.add("open"),document.body.style.overflow="hidden"}function l(){a.classList.remove("open"),document.body.style.overflow=""}function c(o){e=(e+o+s.length)%s.length;const m=s[e].querySelector("img").src;t.style.opacity="0",setTimeout(()=>{t.src=m.replace("w=1200","w=1600").replace("w=900","w=1400"),t.style.opacity="1"},150)}r.addEventListener("click",l),i.addEventListener("click",()=>c(-1)),n.addEventListener("click",()=>c(1)),a.addEventListener("click",o=>{o.target===a&&l()}),document.addEventListener("keydown",o=>{a.classList.contains("open")&&(o.key==="Escape"&&l(),o.key==="ArrowLeft"&&c(document.documentElement.dir==="rtl"?1:-1),o.key==="ArrowRight"&&c(document.documentElement.dir==="rtl"?-1:1))})}function M(){const s=document.querySelectorAll(".reveal");if(!s.length)return;if(!("IntersectionObserver"in window)){s.forEach(a=>a.classList.add("visible"));return}const e=new IntersectionObserver(a=>{a.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),e.unobserve(t.target))})},{threshold:.12,rootMargin:"0px 0px -60px 0px"});s.forEach(a=>e.observe(a))}window.__napoliT=b;function q(){const s=document.getElementById("app");s.innerHTML=`
    <nav class="nav">
      <a href="#top" class="nav-wordmark" aria-label="NAPOLI">
   <img src="./assets/images/logo.webp"/>
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
        <img class="hero-img" src="${y}" alt="Italian pasta, editorial" />
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
            <img class="intro-img" src="${w.wide}" alt="Elegant restaurant interior with warm lighting and natural materials" loading="lazy" />
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
          ${u.map((e,a)=>`
            <div class="sig-item ${e.size} reveal ${a>0?"reveal-delay-1":""}">
              <img src="${e.src}" alt="${e.en}" loading="lazy" />
              <div class="sig-meta">
                <h4 data-sig-name="${a}">${e.en}</h4>
                <p data-sig-detail="${a}">${e.detailEn}</p>
              </div>
            </div>
          `).join("")}
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
          ${f.map(e=>`
            <div class="gallery-item">
              <img src="${e.src}" alt="${e.alt}" loading="lazy" />
            </div>
          `).join("")}
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
            <a href="${b.location.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="align-self: start; margin-top: 0.5rem;" data-i18n="location.mapsLabel"></a>
          </div>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <img class="final-cta-img" src="${k}" alt="Elegant table setting ready for guests" loading="lazy" />
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
  `,E(),L(),x(),C(),S(),M(),z(),document.addEventListener("languagechange",e=>{const a=e.detail.lang;u.forEach((t,r)=>{const i=document.querySelector(`[data-sig-name="${r}"]`),n=document.querySelector(`[data-sig-detail="${r}"]`);i&&(i.textContent=t[a]),n&&(n.textContent=t["detail"+a.charAt(0).toUpperCase()+a.slice(1)])})})}function z(){document.querySelectorAll("img").forEach(s=>{s.addEventListener("error",function(){this.style.opacity="0.5",this.alt="Image not available"})})}q();(function(){if(!window.matchMedia("(pointer: fine)").matches||document.querySelector(".fork-cursor"))return;var s='<svg viewBox="139 83 225 349" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#000" fill-rule="evenodd" d="M336.7 430.9C328.0 429.5 326.4 426.6 273.2 320.0C229.2 231.7 230.0 233.2 221.2 223.9C215.6 217.9 213.1 216.2 203.6 211.6C190.8 205.4 188.7 203.5 182.4 192.0C173.0 174.8 142.0 113.3 140.5 108.9L139.0 104.5L141.0 106.8C142.1 108.1 148.7 118.7 155.6 130.3C177.3 166.4 189.5 184.0 192.9 184.0C195.4 184.0 195.0 180.8 191.8 173.3C188.6 166.1 185.5 160.4 164.5 124.0C155.7 108.7 150.8 98.9 151.6 98.1C152.5 97.1 155.7 102.0 170.7 127.0C186.8 154.1 196.3 168.8 201.0 173.8C204.7 177.9 207.6 177.8 207.2 173.5C206.8 170.2 198.7 152.5 193.1 143.0C172.4 107.7 164.7 93.5 165.2 91.3C165.7 88.6 169.2 94.1 195.0 138.0C207.7 159.7 214.5 169.0 217.7 169.0C221.7 169.0 216.2 155.1 201.8 129.0C197.7 121.6 190.4 108.4 185.5 99.7C170.7 73.2 176.1 78.9 200.2 115.5C232.0 163.8 236.2 170.6 237.7 176.3C238.7 180.2 238.7 183.3 237.8 190.9C235.5 210.5 239.3 219.1 270.5 265.0C328.2 349.9 361.4 400.9 363.1 407.2C366.6 420.5 352.1 433.5 336.7 430.9Z"/></svg>',e=document.createElement("div");e.className="fork-cursor",e.innerHTML=s,document.body.appendChild(e),document.documentElement.classList.add("fork-cursor-on");var a=e.getBoundingClientRect(),t=a.width*.094,r=a.height*.039,i=0,n=0,d=!1;function l(){d=!1,e.style.transform="translate3d("+(i-t)+"px,"+(n-r)+"px,0)"}document.addEventListener("mousemove",function(c){i=c.clientX,n=c.clientY,e.classList.add("is-visible"),d||(d=!0,requestAnimationFrame(l))},{passive:!0}),document.addEventListener("mousedown",function(){e.classList.add("is-down")}),document.addEventListener("mouseup",function(){e.classList.remove("is-down")}),document.documentElement.addEventListener("mouseleave",function(){e.classList.remove("is-visible")}),document.documentElement.addEventListener("mouseenter",function(){e.classList.add("is-visible")})})();
