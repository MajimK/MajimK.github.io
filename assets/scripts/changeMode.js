// themeToggle.js: Código para alternar entre modos claro y oscuro

const darkModeToggle = document.getElementById('darkModeToggle');
const themeIcon = document.getElementById('themeIcon');
const lightStylesheet = document.getElementById('lightStylesheet');
const darkStylesheet = document.getElementById('darkStylesheet');

// Comprobar el estado de modo oscuro guardado en localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    darkStylesheet.removeAttribute('disabled');  // Activar modo oscuro
    lightStylesheet.setAttribute('disabled', 'true');  // Desactivar modo claro
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

// Alternar entre los temas (claro/oscuro)
darkModeToggle.addEventListener('click', () => {
    if (darkStylesheet.disabled) {
        darkStylesheet.removeAttribute('disabled');  // Activar el modo oscuro
        lightStylesheet.setAttribute('disabled', 'true');  // Desactivar el modo claro
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkStylesheet.setAttribute('disabled', 'true');  // Desactivar el modo oscuro
        lightStylesheet.removeAttribute('disabled');  // Activar el modo claro
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'disabled');
    }
});
