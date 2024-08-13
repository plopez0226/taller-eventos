
window.onload = function() {
    var miDiv = document.getElementById('contenedor-boton');

    // Modifica el estilo del div
    miDiv.style.padding = '5px';
    miDiv.style.backgroundColor = 'green';

    // Agrega el manejador de eventos para el clic en el div
    miDiv.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
};
