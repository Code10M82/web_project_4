import togglePopup from './Utils.js';
const popupImageModal = document.querySelector('.popup_image-modal');
const popupImage = popupImageModal.querySelector('.popup__image');
const popupImageTitle = popupImageModal.querySelector('.popup__image-title');

export default class Card {
  constructor(data, cardSelector) {
    this._cardTitleValue = data.name;
    this._cardImageLink = data.link;
    this._cardSelector = cardSelector;
  }

  _createNewTemplate() {
    return this._cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.places__card');
  }

  _like(evt) {
    evt.target.classList.toggle('button_like_active');
  }

  _delete(evt) {
    evt.target.closest('.places__card').remove();
  }

  _imageModal() {
    popupImage.setAttribute('src', this._cardImageLink);
    popupImage.setAttribute('alt', this._cardTitleValue);
    popupImageTitle.textContent = this._cardTitleValue;
  }

  _imagePopup() {
    this._imageModal();
    togglePopup(popupImageModal);
  }
  _eventHandlers() {
    this._likeButton.addEventListener('click', this._like);
    this._deleteButton.addEventListener('click', this._delete);
    this._cardImage.addEventListener('click', this._imagePopup.bind(this));
  }
  
  newCard() {
    const template = this._createNewTemplate();
    this._card = template.cloneNode(true)
    this._cardImage = this._card.querySelector('.places__image');
    this._cardTitle = this._card.querySelector('.places__title');
    this._likeButton = this._card.querySelector('.button_like');
    this._deleteButton = this._card.querySelector('.button_delete');

    this._cardTitle.textContent = this._cardTitleValue;
    this._cardImage.style.backgroundImage = `url(${this._cardImageLink})`;

    this._eventHandlers();
  
    return this._card;
  }
}
