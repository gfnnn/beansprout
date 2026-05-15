function toggleMenu() {
    const menu = document.getElementById("menu");
    const btn = document.querySelector(".menu-button");
    const isShown = menu.classList.toggle("show");
    btn.setAttribute("aria-expanded", String(isShown));
}
