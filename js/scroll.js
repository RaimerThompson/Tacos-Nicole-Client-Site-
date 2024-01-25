document.addEventListener('scroll', () =>{
  const header = document.querySelector('nav');

if (window.scrollY > 100) {
  header.classList.add('scrolled');
} else{
  header.classList.remove('scrolled')
}
})


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
//     document.getElementById("nav").style.height = "90vh";
//   } else {
//     document.getElementById("nav").style.height = "50vh";
//   }
// }