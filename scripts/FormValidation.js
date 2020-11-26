export default class FormValidation {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._subtmitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }
  _showErrorMessage(input) {

    const error = this._form.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;
  
    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
  }

  _hideErrorMessage(input) {

    const error = this._form.querySelector('#' + input.id + '-error');
    error.textContent = '';

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
  }

  _checkInputValidity(input) {
      if(input.validity.valid) {
        _hideErrorMessage(input, this._form);
      } else {
        _showErrorMessage(input, this._form);
      }
  }

  _toggleButtonState(inputs, button) {
      const isValid = inputs.every((input) => input.validity.valid);
      
      if(isValid) {
        button.classList.remove(this._inactiveButtonClass);
      } else {
        button.classList.add(this._inactiveButtonClass);
      }
    }
  

  _setEventListeners() {
    const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    const button = this._form.querySelector(this._submitButtonSelector);
  
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity();
        this._toggleButtonState();
      });
   });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    this._setEventListeners();
  }
}

//  const defaultConfig = {
//     formSelector: ".popup__form",
//     inputSelector: ".popup__value",
//     submitButtonSelector: ".button_save",
//     inactiveButtonClass: "popup__button_disabled",
//     inputErrorClass: "popup__input_type_error",
//     errorClass: "popup__error_visible"
//   };

// const editForm = document.querySelector('.popup__form popup__form_edit');
// const editAddCard = document.querySelector('.popup__form popup__form_add');

// const formValidator = new FormValidation(defaultConfig, editForm, editAddCard);

