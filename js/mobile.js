const menuBtn = document.querySelector('.hamburger__btn');
const mobileNav = document.getElementById('navbar');
const mobileLinks = document.querySelectorAll('.header__link')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen
  if (menuOpen) {
    menuBtn.classList.add('close');
    menuOpen = true;
    mobileNav.style.display = 'flex';
    mobileNav.classList.add('active');
    
   }else {
    menuBtn.classList.remove('close');
    menuOpen = false;
    mobileNav.style.display = 'flex';
    mobileNav.classList.remove('active');
   }
})

mobileLinks.forEach(Link => {
  Link.addEventListener('click', () => {
    menuOpen = false;
    mobileNav.style.display = 'flex';
    mobileNav.classList.remove('active');
  })
})

