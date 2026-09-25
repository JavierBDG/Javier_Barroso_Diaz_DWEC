console.log("¡Hola DWEC! Mi taller ya funciona.");

// Recuperamos el botón y el aviso de la página
const boton = document.getElementById("boton");
const aviso = document.getElementById("aviso");

// Creamos el contador y empezamos en 0
let contador = 0;

// Escuchamos cada clic del botón
boton.addEventListener("click", function () {
    contador++;
    aviso.textContent = "Has pulsado el botón " + contador + " veces.";
});