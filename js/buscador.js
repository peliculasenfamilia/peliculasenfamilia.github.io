// Obtener el formulario de búsqueda
const searchForm = document.getElementById('searchform');
const searchInput = document.getElementById('keysss');
const peliculasLista = document.getElementById('peliculas-lista');
// Agregar un evento de input al formulario
searchInput.addEventListener('input', (e) => {
  // Obtener el valor de la búsqueda
  const searchValue = searchInput.value.trim().toLowerCase();
  // Buscar las películas y series en la lista
  const peliculas = [
    { title: 'Blue Beetle', url: 'reproductor-bluebeetle.html' },
    { title: 'Megalodón 2: El gran abismo', url: 'reproductor-megalodon2.html' },
    { title: 'Barbie', url: 'reproductor-barbie.html' },
    { title: 'Spiderman: Across', url: 'reproductor-spidermanacross.html' },
    { title: 'Wolf Pack', url: 'reproductor-wolfpack.html' },
    { title: 'series', url: 'series.html' },
    { title: ' el eternauta', url: 'reproductor-eleternauta.html' },
    // Agregar más películas y series aquí...
  ];
  // Filtrar las películas y series según el valor de búsqueda
  const filteredPeliculas = peliculas.filter((pelicula) => {
    return pelicula.title.toLowerCase().includes(searchValue);
  });
  // Mostrar las películas y series filtradas
  peliculasLista.innerHTML = '';
  filteredPeliculas.forEach((pelicula) => {
    const peliculaHTML = `
      <a href="${pelicula.url}">
        <div class="div-block">
          
         
          <h3>${pelicula.title}</h3>
        </div>
      </a>
`;
    peliculasLista.insertAdjacentHTML('beforeend', peliculaHTML);
  });
});