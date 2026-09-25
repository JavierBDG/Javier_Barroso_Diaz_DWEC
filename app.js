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
// Recuperamos el botón del modo noche
const botonModo = document.getElementById("modonoche");

// Cambiamos entre modo oscuro y modo claro
botonModo.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        botonModo.textContent = "Modo oscuro";
    } else {
        botonModo.textContent = "Modo claro";
    }
});