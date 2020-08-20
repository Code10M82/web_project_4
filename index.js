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

//Form Inputs Add Card
const placesTemplate = document.querySelector('.places__template').content.querySelector('.places__card');
const list = document.querySelector('.places');
// const cardElement = placesTemplate.cloneNode(true);
const nameAdd = document.querySelector('.popup__add_image-name'); 
const linkAdd = document.querySelector('.popup__add_image-link');
// const cardImage = cardElement.querySelector('.places__image');
// const cardTitle = cardElement.querySelector('.places__title');

//close Image Popup
closeImagePopup.addEventListener('click', () => {
  togglePopup(popupImageModal);
});

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

// //image popup
// function imagePopup() {
//   cardImage.addEventListener('click', () => {
//   togglePopup(popupImageModal);
//   const popupImage = popupImageModal.querySelector('.popup__image');
//   const popupImageTitle = popupImageModal.querySelector('.popup__image-title');
//   popupImage.src = data.link;
//   popupImageTitle.textContent = data.name;
// });
// }
// imagePopup();

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
  const cardElement = addCard(data.name, data.link);
  list.append(cardElement);
});

function addCard(title, link) {
  const cardElement = placesTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.places__image');
  const cardTitle = cardElement.querySelector('.places__title');
  const cardLikeButton = cardElement.querySelector('.button__like');
  const cardDeleteButton = cardElement.querySelector('.button__delete');
  
  cardTitle.textContent = title;
  cardImage.style.backgroundImage = `url(${link})`;
  cardImage.setAttribute("alt", title);
  
  //delete
  cardLikeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('button__like_active');
  });

  //like
  cardDeleteButton.addEventListener('click', function() {
        list.removeChild(cardElement);
  });

  formAdd.addEventListener('click', event => {
      event.preventDefault();
      const cardElement = addCard(cardTitle.value, cardImage.value);
      togglePopup(popupAddCard); 
  });

  cardImage.addEventListener('click', () => {
    togglePopup(popupImageModal);
    const popupImage = popupImageModal.querySelector('.popup__image');
    const popupImageTitle = popupImageModal.querySelector('.popup__image-title');
    popupImage.src = link;
    popupImageTitle.textContent = title;
  });

  list.prepend(cardElement);

  return cardElement;
}

// formAdd.addEventListener('submit', () => {
//   event.preventDefault();
//   addCard(cardTitle.value, cardImage.value);
//   list.prepend(cardElement);
//   togglePopup(popupAddCard);
// });

document.querySelector('.button__save_add').addEventListener('click', event => {
    event.preventDefault();
    linkAdd.style.backgroundImage = `url(${data.link})`;
    nameAdd.textContent = data.name;
    addCard(nameAdd, linkAdd);
    list.prepend(cardElement);
    togglePopup(popupAddCard);
  }); 



  // document.querySelector('.button__save_add') 

// //initial 6 cards
// initialCards.forEach(data => {
//   // addCard(data.name, data.link);
//   const cardElement = placesTemplate.cloneNode(true);
// const cardImage = cardElement.querySelector('.places__image');
// const cardTitle = cardElement.querySelector('.places__title');
  
//   //like button
//   const cardLikeButton = cardElement.querySelector('.button__like').addEventListener('click', function(evt) {
//     evt.target.classList.toggle('button__like_active');
//   });
  
//   //delete button
//   const cardDeleteButton = cardElement.querySelector('.button__delete').addEventListener('click', function(){
//     list.removeChild(cardElement);
//   });

//  //image popup open
//   cardImage.addEventListener('click', () => {
//     togglePopup(popupImageModal);
//     const popupImage = popupImageModal.querySelector('.popup__image');
//     const popupImageTitle = popupImageModal.querySelector('.popup__image-title');
//      popupImage.src = data.link;
//     popupImageTitle.textContent = data.name;
//   });

//   cardImage.style.backgroundImage = `url(${data.link})`;
//   cardTitle.textContent = data.name;
//   list.prepend(cardElement);
// });


// function addCard(cardTitle, cardImage) {
//   const cardElement = placesTemplate.cloneNode(true);
//   cardImage = cardElement.querySelector('.places__image');
//   cardTitle = cardElement.querySelector('.places__title');
  
//   //like button
//   const cardLikeButton = cardElement.querySelector('.button__like').addEventListener('click', function(evt) {
//     evt.target.classList.toggle('button__like_active');
//   });
  
//   //delete button
//   const cardDeleteButton = cardElement.querySelector('.button__delete').addEventListener('click', function(){
//     list.removeChild(cardElement);
//   });

//  //image popup open
//   cardImage.addEventListener('click', () => {
//     togglePopup(popupImageModal);
//     const popupImage = popupImageModal.querySelector('.popup__image');
//     const popupImageTitle = popupImageModal.querySelector('.popup__image-title');
//      popupImage.src = data.link;
//     popupImageTitle.textContent = data.name;
//   });
//   document.querySelector('.button__save_add').addEventListener('click', event => {
//   event.preventDefault();
//   cardImage.style.backgroundImage = `url(${data.link})`;
//   cardTitle.textContent = data.name;
//   list.prepend(cardElement);
// }); 
// }