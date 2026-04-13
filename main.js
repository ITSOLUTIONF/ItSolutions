// 1. Importar el CSS de Bootstrap (Vite lo inyectará automáticamente)
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Importar el JS de Bootstrap (para el funcionamiento del Carousel y Navbar móvil)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 3. Importar tus estilos personalizados (si aún no tienes este archivo, créalo en esa ruta)
import '/css/style.css';

/**
 * Función para cargar componentes HTML de forma modular
 * Esto inyectará el Navbar y Footer en los placeholders del index.html
 */
async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(id).innerHTML = html;
        }
    } catch (error) {
        console.error("Error cargando el componente:", error);
    }
}

// 4. Ejecutar la carga de componentes al iniciar
document.addEventListener('DOMContentLoaded', () => {
    // Estas rutas deben coincidir con tus archivos dentro de assets
    loadComponent('navbar-placeholder', 'assets/components/navbar.html');
    loadComponent('footer-placeholder', 'assets/components/footer.html');
    
    console.log("¡Entorno ItSolutions listo!");
});