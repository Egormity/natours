const navBackEl = document.querySelector('.navigation__background');
const navEl = document.querySelector('.navigation__nav');
const navLinks = document.querySelectorAll('.navigation__link');
const navIconTopEl = document.querySelector('.navigation__icon--top');
const navIconMiddleEl = document.querySelector('.navigation__icon--middle');
const navIconBottomEl = document.querySelector('.navigation__icon--bottom');
const navBtnEl = document.querySelector('.navigation__button');

navBtnEl.addEventListener('click', () => {
  navBackEl.classList.toggle('navigation__background--scale');

  if (navIconMiddleEl.style.backgroundColor != 'transparent') {
    navIconMiddleEl.style.backgroundColor = 'transparent';
  } else {
    navIconMiddleEl.style.backgroundColor = '#333';
  }
  navIconTopEl.classList.toggle('navigation__icon--top--rotate');
  navIconBottomEl.classList.toggle('navigation__icon--bottom--rotate');

  navEl.classList.toggle('navigation__nav--show');
});

navBtnEl.addEventListener('mouseover', () => {
  navIconTopEl.classList.add('navigation__icon--top--hover');
  navIconBottomEl.classList.add('navigation__icon--bottom--hover');
});

navBtnEl.addEventListener('mouseleave', () => {
  navIconTopEl.classList.remove('navigation__icon--top--hover');
  navIconBottomEl.classList.remove('navigation__icon--bottom--hover');
});

navLinks.forEach(el => {
  el.addEventListener('click', () => {
    navBackEl.classList.toggle('navigation__background--scale');

    navEl.classList.toggle('navigation__nav--show');

    navIconTopEl.classList.toggle('navigation__icon--top--rotate');
    navIconBottomEl.classList.toggle('navigation__icon--bottom--rotate');

    navIconMiddleEl.style.backgroundColor = '#333';
  });
});
