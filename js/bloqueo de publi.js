// Bloquea el evento "click" en enlaces que abren nuevas pestañas
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.target === '_blank') {
      e.preventDefault();
    }
  });
  
  // Bloquea el método `window.open()`
  window.open = function() {
    return false;
  };
  