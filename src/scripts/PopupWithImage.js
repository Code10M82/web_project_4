import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  //extends open from Popup and adds data for image modal
  open(link, caption) {
    this._popupElement.querySelector('.popup__image').src = link;
    this._popupElement.querySelector('.popup__image-title').textContent = caption;
    super.open();
  }
}