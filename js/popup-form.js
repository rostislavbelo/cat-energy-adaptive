const showPopupForm = function () {
  const sendForm = document.querySelector(".form__fields");
  const catName = document.querySelector(".cat-name");
  const catWeight = document.querySelector(".cat-weight");
  const popupSucces = document.querySelector(".popup__succes-wrapper");
  const popupFailed = document.querySelector(".popup__failed-wrapper");
  const contactsEmail = document.querySelector(".form__contacts-email-input");
  const contactsPhone = document.querySelector(".form__contacts-telephone-input");
  const buttonFailed = document.querySelector(".popup__button-failed");
  const buttonSuccess = document.querySelector(".popup__button-success");
  const imgEmail = document.querySelector(".form__contacts-img--email");
  const imgPhone = document.querySelector(".form__contacts-img--telephone");

  catName.required = false;
  catWeight.required = false;
  contactsEmail.required = false;
  contactsPhone.required = false

  sendForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!catName.value || !catWeight.value || !contactsEmail.value || !contactsPhone.value) {
      popupFailed.classList.add("popup--active");

      if (!catName.value) {
        catName.classList.add("error");
      }
      if (!catWeight.value) {
        catWeight.classList.add("error");
      }
      if (!contactsEmail.value) {
        contactsEmail.classList.add("error");
        imgEmail.classList.add("error__stroke");
      }
      if (!contactsEmail.value) {
        contactsPhone.classList.add("error");
        imgPhone.classList.add("error__fill");
      }
    }
    else { popupSucces.classList.add("popup--active"); }

    catName.addEventListener("change", function () {
      this.classList.remove("error");
    });

    catWeight.addEventListener("change", function () {
      this.classList.remove("error");
    });

    contactsEmail.addEventListener("change", function () {
      this.classList.remove("error");
      imgEmail.classList.remove("error__stroke");
    });

    contactsPhone.addEventListener("change", function () {
      this.classList.remove("error");
      imgPhone.classList.remove("error__fill");
    });

    buttonFailed.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupFailed.classList.remove("popup--active");
    });

    buttonSuccess.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupSucces.classList.remove("popup--active");
    });

    document.addEventListener("click", function (e) {
      if (e.target === popupFailed) {
        popupFailed.classList.remove("popup--active");
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target === popupSucces) {
        popupSucces.classList.remove("popup--active");
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        popupSucces.classList.remove("popup--active");
        popupFailed.classList.remove("popup--active");
      }
    });
  });
};

showPopupForm();
