import FormValidation from '../scripts/FormValidation.js';
import Card from '../scripts/Card.js';

// import Toggle from "../scripts/Utils.js";
console.log("after imports index");
 const defaultConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__value",
    submitButtonSelector: ".button_save",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  };

  // const formEdit = document.querySelector('.popup__form popup__form_edit');
  // const formAdd = document.querySelector('.popup__form popup__form_add');

  const editFormValidator = new FormValidation(defaultConfig, formEdit);
  const addFormValidator = new FormValidation(defaultConfig, formAdd);

  editFormValidator.enableValidation();
  addFormValidator.enableValidation();


//Open Buttons
const editButton = document.querySelector('.button_edit');
const addButton = document.querySelector('.button_add');

//Close Buttons
const closeEditButton = document.querySelector('.button_close_edit');
const closeAddButton = document.querySelector('.button_close_add');
const closeImagePopup = document.querySelector('.button_close_image');

//Save Buttons
const saveEditButton = document.querySelector('.button_save_edit');
const saveAddButton = document.querySelector('.button_save_add');

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

//Create Card
const placesTemplate = document.querySelector('.places__template').content.querySelector('.places__card');
const list = document.querySelector('.places');


//close Image Popup
closeImagePopup.addEventListener('click', () => {
  togglePopup(popupImageModal);
});

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
});

//Save Edit Button Function
saveEditButton.addEventListener('click', () => {
  togglePopup(popupEdit);
});

//create card 
const inputTitle = document.querySelector('.popup__add_image-name');
const inputImage = document.querySelector('.popup__add_image-link');

//Gallery Array
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

initialCards.forEach((data) => {
  console.log("hi");
  new Card (data, cardTemplateSelector);
  list.append(Card);
});

// function createCard(title, link) {
//   const cardElement = placesTemplate.cloneNode(true);
//   const cardImage = cardElement.querySelector('.places__image');
//   const cardTitle = cardElement.querySelector('.places__title');
//   const cardLikeButton = cardElement.querySelector('.button_like');
//   const cardDeleteButton = cardElement.querySelector('.button_delete');

//   cardTitle.textContent = title;
//   cardImage.style.backgroundImage = `url(${link})`;

//   //like
//   cardLikeButton.addEventListener('click', (evt) => {
//     evt.target.classList.toggle('button_like_active');
//   });

//   //delete
//   cardDeleteButton.addEventListener('click', () => {
//     list.removeChild(cardElement);
//   });

//   cardImage.addEventListener('click', () => {
//     togglePopup(popupImageModal);
//     const popupImage = popupImageModal.querySelector('.popup__image');
//     const popupImageTitle = popupImageModal.querySelector('.popup__image-title');
//     cardImage.setAttribute("alt", title);
//     popupImage.src = link;
//     popupImageTitle.textContent = title;
//   });

//   return cardElement;
// }

// formAdd.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const cardElement = createCard(inputImage.value, inputTitle.value);
//   list.prepend(cardElement);
//   togglePopup(popupAddCard);
// });