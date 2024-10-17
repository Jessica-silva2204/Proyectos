const btnRaiz = document.getElementById("calcularRaiz")
const btnExtremo = document.getElementById("calcularExtremo")

// Función que evalúa el polinomio de grado 3
function evaluarPolinomio(a, b, c, d, x) {
    return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
}

// Función que calcula raíces por el método de la bisección
function biseccion(a, b, c, d, xmin, xmax, tolerancia) {
    let xmedio;
    while ((xmax - xmin) / 2 > tolerancia) {
        xmedio = (xmin + xmax) / 2;
        let fmin = evaluarPolinomio(a, b, c, d, xmin);
        let fmedio = evaluarPolinomio(a, b, c, d, xmedio);

        if (fmin * fmedio < 0) {
            xmax = xmedio;
        } else {
            xmin = xmedio;
        }
    }
    return xmedio;
}

// Función para calcular los máximos y mínimos usando derivada
function encontrarExtremos(a, b, c) {
    let discriminante = Math.pow(b, 2) - 4 * (3 * a) * c;  // Para polinomio de grado 3

    if (discriminante < 0) return [];  // No hay máximos ni mínimos reales
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * 3 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * 3 * a);

    return [x1, x2];
}

// Función que captura valores del formulario y calcula la raíz por bisección
function calcularRaiz() {
    let coefA = parseFloat(document.getElementById('coefA').value);
    let coefB = parseFloat(document.getElementById('coefB').value);
    let coefC = parseFloat(document.getElementById('coefC').value);
    let coefD = parseFloat(document.getElementById('coefD').value);
    let xmin = parseFloat(document.getElementById('xmin').value);
    let xmax = parseFloat(document.getElementById('xmax').value);
    let tolerancia = 0.001;

    let raiz = biseccion(coefA, coefB, coefC, coefD, xmin, xmax, tolerancia);

    // Mostrar el resultado en la página web
    document.getElementById('resultado').innerHTML = "Raíz aproximada por bisección: " + raiz.toFixed(4);
}

// Función que captura valores del formulario y calcula los máximos y mínimos
function calcularExtremos() {
    let coefA = parseFloat(document.getElementById('coefA').value);
    let coefB = parseFloat(document.getElementById('coefB').value);
    let coefC = parseFloat(document.getElementById('coefC').value);

    let extremos = encontrarExtremos(coefA, coefB, coefC);

    if (extremos.length === 0) {
        document.getElementById('resultado').innerHTML = "No hay máximos o mínimos.";
    } else {
        document.getElementById('resultado').innerHTML = "Puntos críticos: x1 = " + extremos[0].toFixed(4) + ", x2 = " + extremos[1].toFixed(4);
    }
}