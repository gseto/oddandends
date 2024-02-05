const nav = document.querySelector('.navbar');
const collaspebar = document.querySelector('#navbarCollapse');
const hamburger = document.querySelector('.navbar-toggler');
var boo = 1;
window.addEventListener('scroll', () => {
  if(window.scrollY >= 56) {
    nav.classList.add('navbar-scrolled')
  }else if(window.scrollY < 56 && boo) {
    nav.classList.remove('navbar-scrolled')
  }
})

collaspebar.addEventListener('hidden.bs.collapse', function () {
  if(window.scrollY < 56) {
    nav.classList.remove('navbar-scrolled')
    boo = 1;
  }
});
// collaspebar.addEventListener('shown.bs.collapse', function () {
//   nav.classList.add('navbar-scrolled')
//   boo = 0;
// });


hamburger.addEventListener('click', function () {
  if(window.scrollY < 56) {
    nav.classList.remove('navbar-scrolled')
    boo = 1;
  }
});
hamburger.addEventListener('click', function () {
  nav.classList.add('navbar-scrolled')
  boo = 0;
});