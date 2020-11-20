import Toggle from 'utils.js';

export default class Card {
  constructor(data, cardTemplateSelector) {
    this._cardTitle = data.title;
    this._cardImage = data.link;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.places__template');
  }

  _eventHandlers() {
    const cardImage = this._card.querySelector('.places__image');
    const cardLikeButton = this._card.querySelector('.button_like');
    const cardDeleteButton = this._card.querySelector('.button_delete');

    cardImage.addEventListener('click', () => this._imagePopup(data));
    cardLikeButton.addEventListener('click', this._likeButton);
    cardDeleteButton.addEventListener('click', this._delete);

  }

  _createNewTemplate() {
    this._card = _cardTemplate.cloneNode(true);
    this._cardTitle = this._card.querySelector('.places__title');

    this._cardTitle.textContent = _title;
    this._cardImage.style.backgroundImage = `url(${link})`;

    return this._card;
  }

  _imagePopup() {
    this._cardImage.addEventListener('click', () => {
      const popupImage = popupImageModal.querySelector('.popup__image');
      const popupImageTitle = popupImageModal.querySelector('.popup__image-title');

      this._cardImage.setAttribute("alt", title);
      popupImage.src = this._cardImage;
      popupImageTitle.textContent = this._cardTitle;

      togglePopup(popupImageModal);



    });
  }

  _LikeButton() {
    this._card.addEventListener('click', (evt) => {
      evt.target.classList.toggle('button_like_active');
    });

    _delete() {
      this._card.remove();
    }
    const card = new Card();
  }
}
