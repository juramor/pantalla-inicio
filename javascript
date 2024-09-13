// Función para redirigir según el rol seleccionado
function iniciarSesion(role) {
    if (role === 'cliente') {
        window.location.href = 'cliente.html'; // Redirige a la página del cliente
    } else if (role === 'admin') {
        window.location.href = 'admin.html'; // Redirige a la página del administrador
    } else if (role === 'soporte') {
        window.location.href = 'soporte.html'; // Redirige a la página de soporte
    } else {
        console.log('Opción no válida');
    }
}

// Agregar eventos de clic a los enlaces del menú desplegable
document.querySelector('a[href="#"]').addEventListener('click', function() {
    iniciarSesion('cliente');
});

document.querySelector('a[href="#"]').addEventListener('click', function() {
    iniciar