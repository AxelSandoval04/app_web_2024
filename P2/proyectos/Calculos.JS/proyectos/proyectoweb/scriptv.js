// Obtener el botón y el cuerpo
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Comprobar si hay una preferencia guardada en LocalStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    toggleButton.textContent = 'Modo Claro';
} else {
    body.classList.add('light-mode');
    toggleButton.textContent = 'Modo Oscuro';
}

// Escuchar el clic en el botón
toggleButton.addEventListener('click', () => {
    // Alternar entre las clases 'dark-mode' y 'light-mode'
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Cambiar el texto del botón dependiendo del modo
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
        // Guardar la preferencia en LocalStorage
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Modo Oscuro';
        // Guardar la preferencia en LocalStorage
        localStorage.setItem('theme', 'light');
    }
});
