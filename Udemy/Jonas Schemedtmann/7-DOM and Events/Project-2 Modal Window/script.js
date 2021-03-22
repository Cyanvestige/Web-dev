//Project #2 Modal Window(lecture 79~81)
'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
console.log(btnShowModal);
console.log(modal.classList);

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  //if(!modal.classList.contains('hidden'))
  if (e.key === 'Escape') {
    closeModal();
  }
});
