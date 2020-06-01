var button = document.querySelector(".sliders__link_js");
var modalForm = document.querySelector(".popup_js");
var buttonClose = document.querySelector(".popup-form__button-close_js");
var input = document.querySelector(".popup-form_js")


button.addEventListener("click", function () {
  modalForm.classList.remove("popup_none");
  input.focus();
});

buttonClose.addEventListener("click", function() {
  modalForm.classList.add("popup_none");
  button.focus();
});

window.addEventListener("keydown", function (event) {
  if (event.code == "Escape" && !modalForm.classList.contains("popup_none")) {
    modalForm.classList.add("popup_none");
    button.focus();        
  }
});