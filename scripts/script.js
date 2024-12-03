// Función para lanzar confeti durante 5 segundos después de un delay de 1 segundo
function lanzarConfetiPorTiempo() {
  setTimeout(() => { // Delay de 1 segundo
    const duration = 3000; // Duración de 5 segundos
    const end = Date.now() + duration;

    (function frame() {
      // Lanzar partículas de confeti
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // Continuar mientras no se alcance el tiempo límite
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, 1000); // 1 segundo de delay
}

// Iniciar confeti al cargar la página
window.onload = lanzarConfetiPorTiempo;