const showPopupCatalog = function () {
  const buttonOrder = document.querySelectorAll(".button-order");
  const popupOrder = document.querySelector(".popup__order");
  const popup = document.querySelector(".popup");
  const popupButtonProceed = document.querySelector(".popup__button--proceed");
  const popupButtonOrder = document.querySelector(".popup__button--order");

  buttonOrder.forEach(function (btn) {
    btn.addEventListener("click", function () {
      popup.classList.add("popup--active");
    })

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        popup.classList.remove("popup--active");
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.classList.remove("popup--active");
      }
    });

    popupButtonProceed.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("popup--active");
    });

    popupButtonOrder.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("popup--active");
    });
  });
};

showPopupCatalog();
