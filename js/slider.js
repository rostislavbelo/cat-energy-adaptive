const runSlider = function () {
  const compSliderControl = document.querySelector(".progress-slider__input");
  const imageBefore = document.querySelector(".example__img-box--before");
  const imageAfter = document.querySelector(".example__img-box--after");
  const buttonBefore = document.querySelector(".progress-slider__button--start");
  const buttonAfter = document.querySelector(".progress-slider__button--end");


  compSliderControl.addEventListener("input", function () {
    imageBefore.style.width = 100 - compSliderControl.value + "%";
    imageAfter.style.width = compSliderControl.value + "%"
  });

  buttonBefore.addEventListener("click", function () {
    imageBefore.style.width = "100%";
    imageAfter.style.width = 0;
    compSliderControl.value = 0;
  });

  buttonAfter.addEventListener("click", function () {
    imageAfter.style.width = "100%";
    imageBefore.style.width = 0;
    compSliderControl.value = 100;
  });
}

runSlider();
