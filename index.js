console.log('1234')
const editButton = document.querySelector('.button__edit');
const closeButton = document.querySelector('.button__close');
const modal = document.querySelector('.modal');
const saveButton = document.querySelector('.button__save');


function toggleModal() {
  modal.classList.toggle('modal__open');
}

editButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', toggleModal);

saveButton.addEventListener('submit', function(e) {
  
  e.preventDefault();
  e.stopImmediatePropagation();
  console.log('grrr');
  

  
});

