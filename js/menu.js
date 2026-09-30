import { menuCategories, menuItems } from "../data/menu.js";

export function initMenu() {
  const tabsEl = document.querySelector("[data-menu-tabs]");
  const listEl = document.querySelector("[data-menu-list]");
  if (!tabsEl || !listEl) return;

  function render(lang) {
    tabsEl.innerHTML = "";
    menuCategories.forEach((cat, i) => {
      const btn = document.createElement("button");
      btn.className = "menu-tab" + (i === 0 ? " active" : "");
      btn.textContent = cat[lang];
      btn.setAttribute("data-cat", cat.id);
      btn.addEventListener("click", () => {
        tabsEl
          .querySelectorAll(".menu-tab")
          .forEach((t) => t.classList.remove("active"));
        btn.classList.add("active");
        renderItems(cat.id, lang);
      });
      tabsEl.appendChild(btn);
    });
    renderItems(menuCategories[0].id, lang);
  }

  function renderItems(catId, lang) {
    const items = menuItems.filter((item) => item.category === catId);

    listEl.style.opacity = "0";

    setTimeout(() => {
      listEl.innerHTML = "";

      items.forEach((item) => {
        const el = document.createElement("div");

        el.className = "menu-item";

        const detailKey = `detail${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;

        el.innerHTML = `
        <div class="menu-item-image">
          <img
            src="${item.image}"
            alt="${item[lang]}"
            loading="lazy"
          />
        </div>

        <div class="menu-item-content">
          <div class="menu-item-header">
            <span class="menu-item-name">
              ${item[lang]}
            </span>

            <span class="menu-item-price">
            ${item.price} $ 
            </span>
          </div>

          <span class="menu-item-detail">
            ${item[detailKey]}
          </span>
        </div>
      `;

        listEl.appendChild(el);
      });

      listEl.style.transition = "opacity 0.4s";
      listEl.style.opacity = "1";
    }, 200);
  }

  let currentLang = document.documentElement.getAttribute("lang") || "ar";
  render(currentLang);

  document.addEventListener("languagechange", (e) => {
    currentLang = e.detail.lang;
    render(currentLang);
  });
}
