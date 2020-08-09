//Open Buttons
const editButton = document.querySelector('.button__edit');
const addButton = document.querySelector('.button__add');

//Close Buttons
const closeEditButton = document.querySelector('.button__close_edit');
const closeAddButton = document.querySelector('.button__close_add');

//Save Buttons
const saveEditButton = document.querySelector('.button__save_edit');
const saveAddButton = document.querySelector('.button__save_add');

//Like Button

//Delete Button

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

//Form Inputs Add Card


//Toggle Function
function togglePopup(modal) {
  modal.classList.toggle('popup_open');
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
formEdit.addEventListener('submit', function formSubmitHandler(e) {
  e.preventDefault();
  nameProfile.textContent = nameEdit.value;
  titleProfile.textContent = titleEdit.value; 
});

//Save Edit Button Function
saveEditButton.addEventListener('click', () => {
  togglePopup(popupEdit);
});

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

const placesTemplate = document.querySelector('.places__template').content.querySelector('.places__card');
const list = document.querySelector('.places');




const nameAdd = document.querySelector('.popup__add_image-name'); 
const linkAdd = document.querySelector('.popup__add_image-link');


const cardElement = placesTemplate.cloneNode(true);


initialCards.forEach(data => {
  const cardElement = placesTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.places__image');
  const cardTitle = cardElement.querySelector('.places__title');
  const cardLikeButton = cardElement.querySelector('.button__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('button__like_active');
  }); 
  const cardDeleteButton = cardElement.querySelector('.button__delete');
  cardImage.style.backgroundImage = `url(${data.link})`;
  cardTitle.textContent = data.name;
  list.prepend(cardElement);
  console.log(456);
});

function addCard(cardTitle, cardImage) {
  const cardElement = placesTemplate.cloneNode(true);
  cardElement.getElementbyClassName('.places__title').textContent = cardTitle;
  cardElement.getElementbyClassName('.places__image').style.backgroundImage = `url(${cardImage})`;
  formAdd.addEventListener('submit', event => {
    event.preventDefault();
    addCard(cardTitle.value, cardImage.value);
    list.prepend(cardElement);
  });
}

// formAdd.addEventListener('submit', event => {
//   event.preventDefault();
//   addCard(cardTitle.value, cardImage.value);
//   list.prepend(cardElement);
// });

saveAddButton.addEventListener('click', () => {
  togglePopup(popupAddCard);
})
 

  
 

  // cardLikeButton.addEventListener('click', () => {
  //   cardLikeButton.classList.toggle('button__like_active');
  // });

 

  // cardDeleteButton.addEventListener('click', () => {
  //   //handleCardDelete
  // });

  // cardImage.addEventListener('click', () => {
  //   const popupImage = popupImageModal.querySelector('.popup__image');
  //   const popupImageTitle = popupImageModal.querySelector('.popup__image-title');
  //   //data not defined
  //   popupImage.src = data.link;
  //   popupImageTitle.textContent = data.name;

  //   togglePopup(popupImageModal);
  // });
  

// https://unsplash.com/photos/R3pUGn5YiTg Aurora Borealis
