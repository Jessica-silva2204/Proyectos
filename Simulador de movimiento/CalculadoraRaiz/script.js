// Elementos del DOM
const btnMover = document.getElementById('btnMover');
const btnRaiz = document.getElementById('btnRaiz');
const btnContador = document.getElementById('btnContador');
const inputNumero = document.getElementById('inputNumero');
const resultadoRaiz = document.getElementById('resultadoRaiz');
const contadorClicks = document.getElementById('contadorClicks');

// Variables de control
let clicks = 0; // Contador de clics
let topPosition = 0; // Para mover el botón
let leftPosition = 0; // Para mover el botón

// Mover el botón de posición
btnMover.addEventListener('click', () => {
    // Cambia la posición del botón cada vez que se hace clic
    leftPosition += 30;
    topPosition += 30;
    
    if (leftPosition > 200) {
        leftPosition = 0;
    }
    if (topPosition > 200) {
        topPosition = 0;
    }

    btnMover.style.position = 'relative';
    btnMover.style.left = `${leftPosition}px`;
    btnMover.style.top = `${topPosition}px`;
});

// Calcular la raíz cuadrada de un número
btnRaiz.addEventListener('click', () => {
    const numero = parseFloat(inputNumero.value);
    
    if (isNaN(numero) || numero < 0) {
        // Si el valor no es un número o es negativo
        resultadoRaiz.value = "Error, digita un número positivo";
    } else {
        // Si es un número válido, calcular la raíz cuadrada
        const raiz = Math.sqrt(numero);
        // Mostrar el resultado con 2 decimales
        resultadoRaiz.value = raiz.toFixed(2); 
    }
});

// Contador de clics
btnContador.addEventListener('click', () => {
    clicks++;
    // Mostrar el número de clics
    contadorClicks.value = clicks; 
});