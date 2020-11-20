export default class Toggle {
  constructor(modal) {
    this._modal = modal;
  }
  _modal(modal) {

    //esc key event
    const escKey = 27;

    const closeEsc = ({ keyCode }) => {
      if (keyCode === escKey) {
        const modal = document.querySelector('.popup_open');
        togglePopup(modal);
      }
    }

    //mouse click event
    const closeClick = ({ target }) => {
      if (target === document.querySelector('.popup_open')) {
        togglePopup(target);
      }
    }
    if (modal.classList.contains('popup_open')) {
      modal.addEventListener('click', closeClick);
      document.addEventListener('keydown', closeEsc);
    } else {
      modal.removeEventListener('click', closeClick);
      document.removeEventListener('keydown', closeEsc);
    }
  }
}