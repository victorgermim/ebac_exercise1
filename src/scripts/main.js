function changeHeaderColor() {
    var mapContainer = document.getElementById('header');
    if (mapContainer) {
      mapContainer.style.backgroundColor = '#87CEEB';
    }
  }

  // Chama a função ao carregar a página
  window.onload = function() {
    changeMapColor();
  };