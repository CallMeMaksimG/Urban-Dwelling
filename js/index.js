const burgerBtn = document.querySelector('.nav__btn');
const closeMenuBtn = document.querySelector('.mobile-nav-btn-close');
const mobileMenu = document.querySelector('.mobile-nav-wrapper');

burgerBtn.addEventListener('click', () =>
  mobileMenu.classList.add('mobile-nav-wrapper--open')
);

closeMenuBtn.addEventListener('click', () =>
  mobileMenu.classList.remove('mobile-nav-wrapper--open')
);
