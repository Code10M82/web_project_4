export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popupElement.classList.add('.popup_open');
    document.addEventListener('keyup', this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove('.popup_open');
    document.removeEventListener('keyup', this._handleEscClose);
  }
  _handleEscClose(e) {
    if(e.keyCode === 27) {
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector('.button_close');
    closeButton.addEventListener('click', () => {
      this.close()
    })
  }

}