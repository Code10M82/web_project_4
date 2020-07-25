console.log("I've refreshed");

const editButton = document.querySelector('.button__edit');
const closeButton = document.querySelector('.button__close');
const popup = document.querySelector('.popup');
const saveButton = document.querySelector('.button__save');
const form = document.querySelector('.popup__form');
const nameValue = document.querySelector('.popup__value_name');
const titleValue = document.querySelector('.popup__value_title');
const nameField = document.querySelector('.profile__name');
const titleField = document.querySelector('.profile__title');

function togglePopup() {
  popup.classList.toggle('popup_open');
}
//  function e() {
//    e.preventDefault();
//  }

editButton.addEventListener('click', togglePopup);
  

closeButton.addEventListener('click', togglePopup);

form.addEventListener('submit', function(e) {
  e.preventDefault();

  nameField.textContent = nameValue.value;
  titleField.textContent = titleValue.value;
});

saveButton.addEventListener('click', togglePopup);


console.log('does this work yet,');