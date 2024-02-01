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

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23931.73142081389!2d-74.42422233688274!3d41.42909994009198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c32d3ad3c1ebb7%3A0x89e2de83e9bb6f0c!2sTacos%20Nicole!5e0!3m2!1sen!2sus!4v1706746392629!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

function myLocation(){
  location= "https://maps.app.goo.gl/3qkTVz9UYvpMETtp9"
}