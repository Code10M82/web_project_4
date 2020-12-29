export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._cardTitleValue = data.name;
    this._cardImageLink = data.link;
    this._cardSelector = document.querySelector(cardSelector).content;
    this._cardImage = handleCardClick;
  }

  _createNewTemplate() {
    this._card = this._cardSelector.querySelector('.places__card').cloneNode(true);
    this._cardImage = this._card.querySelector('.places__image');
    this._cardTitle = this._card.querySelector('.places__title');
    this._likeButton = this._card.querySelector('.button_like');
    this._deleteButton = this._card.querySelector('.button_delete');
  }

  _like(evt) {
    evt.target.classList.toggle('button_like_active');
  }

  _delete(evt) {
    evt.target.closest('.places__card').remove();
  }

  _eventHandlers() {
    this._likeButton.addEventListener('click', this._like);
    this._deleteButton.addEventListener('click', this._delete);
    this._cardImage.addEventListener('click', this._cardImage.bind(this));
  }
  
  newCard() {
    this._createNewTemplate();
    this._cardTitle.textContent = this._cardTitleValue;
    this._cardImage.style.backgroundImage = `url(${this._cardImageLink})`;
    this._eventHandlers();
    return this._card;
  }
}
