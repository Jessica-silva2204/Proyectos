document.addEventListener('DOMContentLoaded', function () {
    const btnCalcular = document.getElementById('btnCalcular');
    const inputNumero = document.getElementById('inputNumero');
    const resultado = document.getElementById('resultado');
    const errorMensaje = document.getElementById('errorMensaje');
    const contadorElement = document.getElementById('contador');
    const btnMover = document.getElementById('btnMover');

    let contador = 0; // Inicializar contador

    btnCalcular.addEventListener('click', function () {
        const numero = parseFloat(inputNumero.value);
        
        // Validar si el número es positivo
        if (isNaN(numero) || numero < 0) {
            errorMensaje.textContent = "Por favor, ingrese un número válido y positivo.";
            resultado.textContent = "";
        } else {
            // Calcular raíz cuadrada
            const raizCuadrada = Math.sqrt(numero);
            resultado.textContent = `La raíz cuadrada de ${numero} es ${raizCuadrada.toFixed(2)}.`;
            errorMensaje.textContent = "";

            // Incrementar contador y actualizar la visualización
            contador++;
            contadorElement.textContent = `Número de cálculos realizados: ${contador}`;
        }
    });

    // Función para mover el botón "¡Hazme clic!"
    btnMover.addEventListener('click', function () {
        // Obtener nuevas posiciones aleatorias dentro de la ventana
        const x = Math.random() * (window.innerWidth - btnMover.offsetWidth - 20); // Resta espacio para evitar salirse
        const y = Math.random() * (window.innerHeight - btnMover.offsetHeight - 20); // Resta espacio para evitar salirse
        
        // Cambiar la posición del botón usando CSS
        btnMover.style.position = 'absolute'; // Cambiar la posición a absoluta
        btnMover.style.left = `${x}px`;
        btnMover.style.top = `${y}px`;
        btnMover.style.transition = 'left 0.5s ease, top 0.5s ease'; // Transición suave
    });
});