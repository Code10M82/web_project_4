export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //opens modal
  open() {
    this._popupElement.classList.add('.popup_open');
    document.addEventListener('keyup', this._handleEscClose);
  }

  //closes modal
  close() {
    this._popupElement.classList.remove('.popup_open');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  //handler for Esc close
  _handleEscClose(e) {
    if(e.keyCode === 27) {
      this.close();
    }
  }

  //listener location

  setEventListeners() {
    this._popupElement.addEventListener('click', (e) => {
      if(e.target.classList.contains('.button_close') || !e.target.closest('.popup__container')) {
        this.close();
      }
    })
  }
  // setEventListeners() {
  //   const closeButton = this._popupElement.querySelector('.button_close');
  //   closeButton.addEventListener('click', () => {
  //     this.close();
  //   })
  // }

}