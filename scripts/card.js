// import Toggle from './Utils.js';

//esc key event
const escKey = 27;

const closeEsc = ({ keyCode }) => {
  if (keyCode === escKey) {
    const modal = document.querySelector('.popup_open');
    togglePopup(modal);
  }
};

//mouse click event
const closeClick = ({ target }) => {
  if (target === document.querySelector('.popup_open')) { 
    togglePopup(target);
  }
}


//Toggle Function
function togglePopup(modal) {
  modal.classList.toggle('popup_open');
  if (modal.classList.contains('popup_open')) {
    modal.addEventListener('click', closeClick);
    document.addEventListener('keydown', closeEsc);
  } else {
    modal.removeEventListener('click', closeClick);
    document.removeEventListener('keydown', closeEsc);
  }
}

export default class Card {
  constructor(data, cardSelector) {
    this._cardTitle = data.name;
    this._cardImage = data.link;
    this._cardSelector = cardSelector;
    // this._cardSelector = document.querySelector('.places__template');
  
  }

  _createNewTemplate() {
    
    this._cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.places__template');
  }

  _eventHandlers() {
    //Like Button
    this._likeButton = this._card.querySelector('.button_like');

    this._likeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle('button_like_active');
    });
    
    //Delete Button
    this._delete = this._card.querySelector('.button_delete');

    this._delete.addEventListener('click', () => {
      this._card.remove();
    });

    //Image Popup
    this._cardImage.addEventListener('click', () => {
      this._popupImage = popupImageModal.querySelector('.popup__image');
      this._popupImageTitle = popupImageModal.querySelector('.popup__image-title');
  
      this._cardImage.setAttribute("alt", name);
      this._popupImage.src = this._cardImage;
      this._popupImageTitle.textContent = this._cardTitle;
        
      togglePopup(popupImageModal);
    });
  }
  
  newCard() {
    
    this._card = this._createNewTemplate().cloneNode(true);

    this._cardImage = this._card.querySelector('.places__image');
    this._cardTitle = this._card.querySelector('.places__title');

    this._cardTitle.textContent = this._name;
    this._cardImage.style.backgroundImage = `url(${link})`;

    this._eventHandlers();
  
    return this._card;
  }
}

// const card = new Card();
