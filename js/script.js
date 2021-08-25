const startNojs = function () {
  const hamburgerActivate = document.querySelector(".nojs__header-toggle");
  const menuActivate = document.querySelector(".nojs__main-menu");

  window.onload = function () {
    hamburgerActivate.classList.remove("nojs__header-toggle");
    menuActivate.classList.remove("nojs__main-menu");
  };
}

const startMobileMenu = function () {
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav__list");

  hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger--active");
    mainNav.classList.toggle("main-nav__list--active");
  };
}

startNojs();
startMobileMenu();
