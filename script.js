document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    button.addEventListener('click', function() {
        // Genera un color aleatorio
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Cambia el color de fondo del body
        document.body.style.backgroundColor = randomColor;
    });
});
