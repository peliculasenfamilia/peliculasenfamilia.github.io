// Bloquea anuncios de YouTube
function blockYouTubeAds() {
  var ads = document.querySelectorAll(".ad-container");
  for (var i = 0; i < ads.length; i++) {
    ads[i].style.display = "none";
  }
}

blockYouTubeAds();