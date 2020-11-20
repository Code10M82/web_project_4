export default class FormValidation {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }
  _showErrorMessage(errorClass, inputErrorClass) {

    const error = this._formElement.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;
  
    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
  }

  _hideErrorMessage(errorClass, inputErrorClass) {

    const error = this._formElement.querySelector('#' + input.id + '-error');
    error.textContent = '';

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
  }

  _checkInputValidity(errorClass, inputErrorClass) {
      if(this._formElement.validity.valid) {
        _hideErrorMessage(errorClass, inputErrorClass);
      } else {
        _showErrorMessage(errorClass, inputErrorClass);
      }
    }
  }

  _toggleButtonState(settings, formElement, inactiveButtonClass) {
      const isValid = this._formElement.every((input) => this._settings.validity.valid);
      if(isValid) {
        button.classList.remove(inactiveButtonClass);
      } else {
        button.classList.add(inactiveButtonClass);
      }
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const button = this._formElement.querySelector(this._settings.submitButtonSelector);
  
    inputs.forEach((input) => {
    input.addEventListener('input', () => {
      this._checkInputValidity(input);
      this._toggleButtonState(inputs, button);
    });
  });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
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

