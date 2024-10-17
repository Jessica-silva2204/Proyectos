const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".botones button");

// Función para agregar números y operadores a la pantalla
function agregar(valor) {
    pantalla.value += valor;
}

// Función para calcular el resultado
function calcular() {
    try {
        const resultado = eval(pantalla.value);
        pantalla.value = resultado; // Mostrar el resultado en la pantalla
    } catch (error) {
        pantalla.value = "Error"; // Manejo de errores
    }
}

// Función para limpiar la pantalla
function limpiar() {
    pantalla.value = "";
}

// Agregar lógica para calcular distancia y raíz
document.getElementById("btnDistancia").addEventListener("click", calcularDistancia);
document.getElementById("btnRaizPolinomio").addEventListener("click", calcularRaiz);

// Función para calcular la distancia entre dos puntos
function calcularDistancia() {
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);

    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        pantalla.value = `Distancia: ${distancia.toFixed(2)}`;
    } else {
        pantalla.value = "Error en entradas";
    }
}

// Función para calcular raíces de un polinomio
function calcularRaiz() {
    const coef1 = parseFloat(document.getElementById("coef1").value);
    const coef2 = parseFloat(document.getElementById("coef2").value);
    const coef3 = parseFloat(document.getElementById("coef3").value);
    const coef4 = parseFloat(document.getElementById("coef4").value);
    const coef5 = parseFloat(document.getElementById("coef5").value);

    if (!isNaN(coef1) && !isNaN(coef2) && !isNaN(coef3) && !isNaN(coef4) && !isNaN(coef5)) {
        const roots = [];
        const step = 0.01; // Usamos un paso más pequeño para mayor precisión
        for (let x = -10; x <= 10; x += step) {
            const fx = coef1 * Math.pow(x, 4) + coef2 * Math.pow(x, 3) + coef3 * Math.pow(x, 2) + coef4 * x + coef5;
            if (Math.abs(fx) < 0.01) {
                roots.push(x.toFixed(2)); // Añadir raíz con dos decimales
            }
        }
        pantalla.value = `Raíces: ${roots.length > 0 ? roots.join(", ") : "No hay raíces"}`;
    } else {
        pantalla.value = "Error en entradas";
    }
}

