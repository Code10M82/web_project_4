import css from "./index.css";
import FormValidation from '../scripts/FormValidation.js';
import Card from '../scripts/Card.js';
import initialCards from '../scripts/InitialCards.js';
import togglePopup from '../scripts/Utils.js';


const defaultConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__value",
  submitButtonSelector: ".button_save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

//Open Buttons
const editButton = document.querySelector('.button_edit');
const addButton = document.querySelector('.button_add');

//Close Buttons
const closeEditButton = document.querySelector('.button_close_edit');
const closeAddButton = document.querySelector('.button_close_add');
const closeImagePopup = document.querySelector('.button_close_image');

//Modals
const popupEdit = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupImageModal = document.querySelector('.popup_image-modal');

//Form
const formEdit = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add');

//Form Inputs Edit Profile
const nameEdit = document.querySelector('.popup__edit-name');
const titleEdit = document.querySelector('.popup__edit-title');
const nameProfile = document.querySelector('.profile__name');
const titleProfile = document.querySelector('.profile__title');

const list = document.querySelector('.places');

//close Image Popup
closeImagePopup.addEventListener('click', () => {
  togglePopup(popupImageModal);
});

const editFormValidator = new FormValidation(defaultConfig, formEdit);
const addFormValidator = new FormValidation(defaultConfig, formAdd);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//Open/Close Edit Profile
editButton.addEventListener('click', () => {
  togglePopup(popupEdit);
});

closeEditButton.addEventListener('click', () => {
  togglePopup(popupEdit);
});

//Open/Close Add Card
addButton.addEventListener('click', () => {
  togglePopup(popupAddCard);
});
closeAddButton.addEventListener('click', () => {
  togglePopup(popupAddCard);
});

//Edit Profile Form
formEdit.addEventListener('submit', (e) => {
  e.preventDefault();
  nameProfile.textContent = nameEdit.value;
  titleProfile.textContent = titleEdit.value;
  togglePopup(popupEdit);
});

//Add Profile Image and Link
const inputTitle = document.querySelector('.popup__add_image-name');
const inputImage = document.querySelector('.popup__add_image-link');


initialCards.forEach((data) => {
  const cardObj = new Card(data, '.places__template', list);
  list.prepend(cardObj.newCard());
});

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const cardAdd = new Card({name: inputTitle.value, link: inputImage.value}, '.places__template', list);
  list.prepend(cardAdd.newCard());
  togglePopup(popupAddCard);
});