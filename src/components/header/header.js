const menu = document.querySelector(".headerMenu");
const menuOpenBtn = document.querySelector("[data-menu-open]");
const menuCloseBtn = document.querySelector("[data-menu-close]");
const menuGroups = document.querySelectorAll(".headerMenu__group");

if (menu && menuOpenBtn && menuCloseBtn) {
  const openMenu = () => {
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");

    menu.setAttribute("aria-hidden", "false");
    menuOpenBtn.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");

    menu.setAttribute("aria-hidden", "true");
    menuOpenBtn.setAttribute("aria-expanded", "false");
  };

  menuOpenBtn.addEventListener("click", openMenu);
  menuCloseBtn.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  menuGroups.forEach((group) => {
    const button = group.querySelector(".headerMenu__group-btn");

    if (!button) return;

    button.addEventListener("click", () => {
      if (window.innerWidth >= 768) return;

      const isOpen = group.classList.contains("is-open");

      menuGroups.forEach((item) => {
        item.classList.remove("is-open");

        const itemButton = item.querySelector(".headerMenu__group-btn");

        if (itemButton) {
          itemButton.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        group.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}
