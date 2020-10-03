//Open Buttons
const editButton = document.querySelector('.button__edit');
const addButton = document.querySelector('.button__add');

//Close Buttons
const closeEditButton = document.querySelector('.button__close_edit');
const closeAddButton = document.querySelector('.button__close_add');
const closeImagePopup = document.querySelector('.button__close_image');

//Save Buttons
const saveEditButton = document.querySelector('.button__save_edit');
const saveAddButton = document.querySelector('.button__save_add');

//Modals
const popupEdit = document.querySelector('.popup__edit-profile');
const popupAddCard = document.querySelector('.popup__add-card');
const popupImageModal = document.querySelector('.popup__image-modal');

//Form
const formEdit = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add');

//Form Inputs Edit Profile
const nameEdit = document.querySelector('.popup__edit_name');
const titleEdit = document.querySelector('.popup__edit_title');
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
const closeEsc = ({ keyCode }) => {
  if (keyCode === 27) {
    const firstModal = document.querySelector('.popup_open');
    togglePopup(firstModal);
  }
};

//mouse click event
const closeClick = ({ target }) => {
  if (target.classList.contains('.button__close') ||
    target.classList.contains('.popup')) {
    togglePopup();
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
const inputImage = document.querySelector('.popup__add_image-name');
const inputTitle = document.querySelector('.popup__add_image-link');

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
  const cardElement = createCard(data.name, data.link);
  list.append(cardElement);
});

function createCard(title, link) {
  const cardElement = placesTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.places__image');
  const cardTitle = cardElement.querySelector('.places__title');
  const cardLikeButton = cardElement.querySelector('.button__like');
  const cardDeleteButton = cardElement.querySelector('.button__delete');

  cardTitle.textContent = title;
  cardImage.style.backgroundImage = `url(${link})`;

  //like
  cardLikeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('button__like_active');
  });

  //delete
  cardDeleteButton.addEventListener('click', () => {
    list.removeChild(cardElement);
  });

  cardImage.addEventListener('click', () => {
    togglePopup(popupImageModal);
    const popupImage = popupImageModal.querySelector('.popup__image');
    const popupImageTitle = popupImageModal.querySelector('.popup__image-title');
    cardImage.setAttribute("alt", title);
    popupImage.src = link;
    popupImageTitle.textContent = title;
  });

  return cardElement;
}

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const cardElement = createCard(inputImage.value, inputTitle.value);
  list.prepend(cardElement);
  togglePopup(popupAddCard);
});