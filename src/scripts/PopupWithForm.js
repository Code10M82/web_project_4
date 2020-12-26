import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this.form = this._popupElement.querySelector('.popup__form');
  }

  //takes form values and puts into an object and returns them 
  _getInputValues() {
    const inputs = [...this.form.querySelector('.popup__value')];
    const inputValues = {};
    
    inputs.forEach(input => {
      //name refers to html attribute
      inputValues[input.name] = input.value;
    })

    return inputValues;
  }

  //close extended from Popup and added reset to the form
  close() {
    super.close();
    this.form.reset();
    
  }

  //extended event listeners from Popup and added submit
  setEventListeners() {
    super.setEventListeners();

    this._popupElement.addEventListener('submit', () => {
      this._submitHandler;
    })
  }
}