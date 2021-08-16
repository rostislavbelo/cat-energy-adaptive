const hamburgerActivate = document.querySelector(".nojs__header-toggle");
const menuActivate = document.querySelector(".nojs__main-menu");

window.onload = function () {
  hamburgerActivate.classList.remove("nojs__header-toggle");
  menuActivate.classList.remove("nojs__main-menu")
};

var hamburger = document.querySelector(".hamburger");
var mainNav = document.querySelector(".main-nav__list");

hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger--active");
  mainNav.classList.toggle("main-nav__list--active")
};

const compSliderControl = document.querySelector(".progress-slider__input");
const imageBefore = document.querySelector(".example__img-box--before")
const imageAfter = document.querySelector(".example__img-box--after")
const buttonBefore = document.querySelector(".progress-slider__button--start")
const buttonAfter = document.querySelector(".progress-slider__button--end");


compSliderControl.oninput = function () {
  imageBefore.style.width = 100 - compSliderControl.value + "%";
  imageAfter.style.width = compSliderControl.value + "%"
};

buttonBefore.onclick = function () {
  imageBefore.style.width = "100%";
  imageAfter.style.width = 0;
  compSliderControl.value = 0;
};

buttonAfter.onclick = function () {
  imageAfter.style.width = "100%";
  imageBefore.style.width = 0;
  compSliderControl.value = 100;
};



