const slideshow = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');

let slidePosition = 0;
const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginLeft) + parseInt(getComputedStyle(slides[0]).marginRight);
const numSlides = slides.length;
const numVisibleSlides = 4;
const intervalTime = 3000;
let intervalId = null;

// avança o slider
function nextSlide() {
  slidePosition += numVisibleSlides;
  if (slidePosition > numSlides - numVisibleSlides) {
    slidePosition = 0;
  }
  slideshow.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
}

// volta o slider
function prevSlide() {
  slidePosition -= numVisibleSlides;
  if (slidePosition < 0) {
    slidePosition = numSlides - numVisibleSlides;
  }
  slideshow.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
}

// configura o intervalo de tempo
function setSlideInterval() {
  intervalId = setInterval(nextSlide, intervalTime);
}

// inicia o slider
function startSlide() {
  setSlideInterval();
}

// para o intervalo de tempo
function stopSlide() {
  clearInterval(intervalId);
  intervalId = null;
}

// adiciona os listeners nos botões
prevBtn.addEventListener('click', () => {
  prevSlide();
  stopSlide();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  stopSlide();
});

// inicia o slider
startSlide();

// adiciona listener para quando o mouse entrar no slider
slideshow.addEventListener('mouseenter', () => {
  stopSlide();
});

// adiciona listener para quando o mouse sair do slider
slideshow.addEventListener('mouseleave', () => {
  startSlide();
});
