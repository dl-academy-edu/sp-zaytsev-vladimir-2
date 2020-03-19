var button = document.querySelector(".slider-link_js");
var modalForm = document.querySelector(".modal-form_js");
var buttonClose = document.querySelector(".button-close_js");
var input = document.querySelector(".form-input_js")


button.addEventListener("click", function () {
  modalForm.classList.remove("modal-form_none");
  input.focus();
});

buttonClose.addEventListener("click", function() {
  modalForm.classList.add("modal-form_none");
  button.focus();
});

window.addEventListener("keydown", function (event) {
  if (event.code == "Escape" && !modalForm.classList.contains("modal-form_none")) {
    modalForm.classList.add("modal-form_none");
    button.focus();        
  }
});