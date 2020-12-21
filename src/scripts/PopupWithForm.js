import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this.form = this._popupElement.querySelector('.popup__form');
  }
  _getInputValues() {
    const inputs = [...this.form.querySelector('.popup__value')];
    const inputValues = {};
    
    inputs.forEach(input => {
      inputValues[input.name] = input.value;
    })

    return inputValues;
  }

  close() {
    super.close();
    this.form.reset();
    
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupElement.addEventListener('submit', () => {
      this._submitHandler;
    })
  }
}