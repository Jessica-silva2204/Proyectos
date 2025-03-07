document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const mensaje = document.getElementById("mensaje");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue

        // Generar un número de ticket aleatorio
        const ticketID = Math.floor(1000 + Math.random() * 9000);

        // Mostrar el mensaje de confirmación
        mensaje.innerHTML = `
            <div class="mensaje-box">
                <h3>✅ Servicio confirmado</h3>
                <p>Gracias por contactarnos. Tu número de ticket es: <strong>#${ticketID}</strong></p>
                <p>Nos pondremos en contacto contigo pronto.</p>
            </div>
        `;

        // Agregar animación
        mensaje.classList.add("mostrar");

        // Limpiar el formulario después de 5 segundos
        setTimeout(() => {
            formulario.reset();
            mensaje.classList.remove("mostrar");
            mensaje.innerHTML = ""; // Ocultar mensaje
        }, 5000);
    });
});
