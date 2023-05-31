const btns = document.querySelectorAll('.navbar__right-btn');
const modal = document.querySelector('.modal__wrapper');
const modalContent = document.querySelector('.modal__content');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.toggle('modal__wrapper--active');
  })
})

modal.addEventListener('click', (e) => {
  modal.classList.toggle('modal__wrapper--active');
})

modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
})