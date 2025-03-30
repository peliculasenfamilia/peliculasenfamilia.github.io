// Obtener el formulario de búsqueda
const searchForm = document.getElementById('searchform');
const peliculasLista = document.getElementById('peliculas-lista');

// Agregar un evento de envío al formulario
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener el valor de la búsqueda
  const searchValue = document.getElementById('keysss').value;

  // Buscar las películas y series en la lista
  const peliculas = [
    { title: 'Blue Beetle', url: 'reproductor-bluebeetle.html' },
    { title: 'Megalodón 2: El gran abismo', url: 'reproductor-megalodon2.html' },
    { title: 'Barbie', url: 'reproductor-barbie.html' },
    { title: 'Spiderman: Across', url: 'reproductor-spidermanacross.html' },
    { title: 'Wolf Pack', url: 'reproductor-wolfpack.html' },
    { title: 'megalodon', url: 'reproductor-wolfpack.html' },
    // Agregar más películas y series aquí...
  ];

  // Filtrar las películas y series según el valor de búsqueda
  const filteredPeliculas = peliculas.filter((pelicula) => {
    return pelicula.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  // Objeto que relaciona los alt con las imágenes
const imagenes = {
  "bluebeetle": "img/bluebeetle.jpg",
  "megalodon2": "img/megalodon2.jpg",
  "barbie": "img/barbie.jpg",
  // ...
};

// Función para encontrar la imagen por el alt
function getImagenUrl(pelicula) {
  const alt = pelicula.title.toLowerCase().replace(' ', '');
  return imagenes[alt] || 'img/default.jpg'; // Ruta de la imagen por defecto si no se encuentra
}

// ...

// Mostrar las películas y series filtradas
peliculasLista.innerHTML = '';
filteredPeliculas.forEach((pelicula) => {
  const imagenUrl = getImagenUrl(pelicula);
  const peliculaHTML = `
    <a href="${pelicula.url}">
      <div class="div-block">
        <div class="div-block-2"><img src="https://uploads-ssl.webflow.com/64a5fa02f0bb2c4bf6dbdf77/64a5fa02f0bb2c4bf6dbdfb4_botonplay.png" loading="lazy" alt="bodon de play" class="iconoplay" /></div>
        <img src="${imagenUrl}" loading="lazy" alt="${pelicula.title}" class="image-2" />
        <h3>${pelicula.title}</h3>
      </div>
    </a>
  `;
  peliculasLista.insertAdjacentHTML('beforeend', peliculaHTML);
});
});