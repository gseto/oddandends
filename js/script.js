const nav = document.querySelector('.navbar');
const collaspebar = document.querySelector('#navbarCollapse');
window.addEventListener('scroll', () => {
  if(window.scrollY >= 56) {
    nav.classList.add('navbar-scrolled')
  }else if(window.scrollY < 56) {
    nav.classList.remove('navbar-scrolled')
  }
})

collaspebar.addEventListener('hidden.bs.collapse', function () {
  if(window.scrollY < 56) {
    nav.classList.remove('navbar-scrolled')
  }
});
collaspebar.addEventListener('shown.bs.collapse', function () {
  nav.classList.add('navbar-scrolled')
});