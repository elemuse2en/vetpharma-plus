const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(function(enlace) {
  enlace.addEventListener("click", function() {
    enlaces.forEach(function(item) {
      item.classList.remove("activo");
    });

    enlace.classList.add("activo");
  });
});

const musicaFondo = document.getElementById("musicaFondo");
const btnMusica = document.getElementById("btnMusica");

if (musicaFondo && btnMusica) {
  musicaFondo.volume = 0.15;

  btnMusica.addEventListener("click", function() {
    if (musicaFondo.paused) {
      musicaFondo.play();
      btnMusica.textContent = "Pausar musica";
    } else {
      musicaFondo.pause();
      btnMusica.textContent = "Activar musica";
    }
  });
}