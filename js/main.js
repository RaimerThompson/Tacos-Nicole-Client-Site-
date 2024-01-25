const slides = document.querySelector('.home__slider').children;
let index = 0;

function nextSlide(){
  if (index == slides.length-1){
    index = 0;
  }else{
    index++;
  }
  changeSlide();
}

function changeSlide(){
  for (let i=0; i<slides.length; i++){
      slides[i].classList.remove('active');
  }

  slides[index].classList.add('active');
}

function autoPlay(){
  nextSlide();
}
let timer = setInterval(autoPlay, 5000)