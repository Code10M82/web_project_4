import css from "./index.css";
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';
import FormValidation from '../scripts/FormValidation.js';
import Card from '../scripts/Card.js';
import initialCards from '../scripts/InitialCards.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';

const handleCardClick = (link, caption) => popupImage.open(link, caption);
const renderer = item => new Card({items, handleCardClick}, '.places__card').newCard();
const addSection = new Section({items, renderer}, '.places');
const userInfo = new UserInfo(['#profile-name', '#profile-text']);
const editSubmit = ([name,job]) => userInfo.setUserInfo(name,job);
const addSubmit = ([link, caption]) => addSection([{link,caption}]);
const popupEditProfile = new PopupWithForm('.popup__form_edit', {
  popupSelector: userInfo,
  submitHandler: editSubmit
});
const popupAddCard = new PopupWithForm('.popup__form_add', {submit: addSubmit});
const formValidation = formElement => new FormValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__value',
  submitButtonSelector: '.button_save',
  inactiveButtonClass: '.popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
 }, formElement).enableValidation();
const popupImage = new PopupWithImage('.popup__image');

addSection(initialCards);
document.querySelectorAll('.popup__form').forEach(form => formValidation(form));
document.querySelector('.button_save_edit').addEventListener('click', () => popupEditProfile.open());
document.querySelector('.button_save_add').addEventListener('click', () => popupAddCard.open());