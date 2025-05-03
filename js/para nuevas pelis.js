const peliculasLista = document.querySelector('.peliculas-lista');
const flechaIzquierda = document.querySelector('.flecha-izquierda');
const flechaDerecha = document.querySelector('.flecha-derecha');

let currentIndex = 0;
let peliculas = Array.from(peliculasLista.children);

flechaIzquierda.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = peliculas.length - 1;
  }
  peliculasLista.scrollLeft = peliculas[currentIndex].offsetLeft;
});

flechaDerecha.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= peliculas.length) {
    currentIndex = 0;
  }
  peliculasLista.scrollLeft = peliculas[currentIndex].offsetLeft;
});
