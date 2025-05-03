const peliculasSlider = document.querySelector('.peliculas-slider');
const peliculasPrev = document.querySelector('.peliculas-prev');
const peliculasNext = document.querySelector('.peliculas-next');

let currentSlide = 0;
const slideWidth = peliculasSlider.children[0].offsetWidth;

peliculasPrev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = peliculasSlider.children.length - 1;
  }
  peliculasSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

peliculasNext.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= peliculasSlider.children.length) {
    currentSlide = 0;
  }
  peliculasSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});
