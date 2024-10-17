// Función para redirigir a "Quienes somos"
function learnMore() {
    document.getElementById('quienes-somos').scrollIntoView({ behavior: 'smooth' });
}

// Validación del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Gracias por contactarnos, nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Simulación de búsqueda en el catálogo
function searchCatalog() {
    const searchQuery = document.getElementById('search-catalog').value;
    const resultsDiv = document.getElementById('catalog-results');
    if (searchQuery.trim() === '') {
        resultsDiv.innerHTML = '<p>Por favor, ingresa un término de búsqueda.</p>';
    } else {
        // Simulación de resultados de búsqueda
        resultsDiv.innerHTML = `
            <h3>Resultados de búsqueda para "${searchQuery}":</h3>
            <ul>
                <li><strong>${searchQuery} en la era moderna</strong> - Autorores: Leonardo Mosquera</li>
                <li><strong>Introducción a ${searchQuery}</strong> - Christian Gaviria</li>
                <li><strong>Avances en ${searchQuery}</strong> - Jessica Silva</li>
            </ul>
        `;
    }
}
