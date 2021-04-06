'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
const slides = document.querySelectorAll('.slide');
const sliderbtnLeft = document.querySelector('.slider__btn--left');
const sliderbtnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Creating cookie message

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</buton>';
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Scroll
btnScrollTo.addEventListener('click', function (e) {
  // The old way
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo(
  //   s1coords.left, //+ window.pageXOffset,
  //   s1coords.top //+ window.pageYOffset
  // ); //relative to the view port
  // window.scrollBy({
  //   left: s1coords.left,
  //   top: s1coords.top,
  //   behavior: 'smooth',
  // });
  //The new way
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = el.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Event Delegation
document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tags

tabsContainer.addEventListener('click', e => {
  const click = e.target.closest('.operations__tab');
  console.log(click);
  if (!click) return;
  console.log(tabsContent);
  tabs.forEach(el => {
    el.classList.remove('operations__tab--active');
  });
  tabsContent.forEach(el => {
    el.classList.remove('operations__content--active');
  });
  // .contains('operations__tab--active');
  click.classList.add('operations__tab--active');
  const matching = click.getAttribute('data-tab');
  document
    .querySelector(`.operations__content--${matching}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e) {
  console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el != link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};
//Menu fade animation
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation //not a good way because updating scroll all the time
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//Sticky navigation: Intersection Observer API

// const obsCallback = function (entries) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(header);
//Don't use logo.className = 'xxx' It will overwrite all classes
//lecture
//Date Attributes
console.log(logo.dataset.versionNumber); //camelCase!

//Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (sec) {
  sectionObserver.observe(sec);
  sec.classList.add('section--hidden');
});

//remove lazy img
const removeBlur = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(removeBlur, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

const imgs = document.querySelectorAll('.features__img');
imgs.forEach(function (img) {
  imgObserver.observe(img);
});
const gotoSlide = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
let currSlide = 0;

gotoSlide(currSlide);

const maxSlide = slides.length;

const nextSlide = function () {
  if (currSlide == maxSlide - 1) currSlide = 0;
  else currSlide++;
  gotoSlide(currSlide);
};
//not a good way because updating scroll all the time
const prevSlide = function () {
  if (currSlide == 0) currSlide = 2;
  else currSlide--;
  gotoSlide(currSlide);
};

sliderbtnLeft.addEventListener('click', prevSlide);

sliderbtnRight.addEventListener('click', nextSlide);

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

createDots();
const eachDot = document.querySelectorAll('.dots__dot');

dotContainer.addEventListener('click', function (e) {
  eachDot.forEach(function (e) {
    e.classList.remove('dots__dot--active');
  });
  if (e.target.classList.contains('dots__dot')) {
    e.target.classList.add('dots__dot--active');
    const { slide } = e.target.dataset;
    gotoSlide(slide);
  }
});
