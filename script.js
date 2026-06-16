// Menú hamburguesa
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Cerrar menú al hacer click en link simple
navLinks.querySelectorAll('.nav-link-simple').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Dropdowns en mobile: toggle al click
document.querySelectorAll('.nav-item.dropdown').forEach(item => {
  const trigger = item.querySelector('.nav-link-drop');
  trigger.addEventListener('click', (e) => {
    const isMobile = window.innerWidth <= 960;
    if (isMobile) {
      e.preventDefault();
      item.classList.toggle('open');
    }
  });

  // En mobile: cerrar otros dropdowns al abrir uno
  trigger.addEventListener('click', () => {
    if (window.innerWidth <= 960) {
      document.querySelectorAll('.nav-item.dropdown').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });
    }
  });

  // Al hacer click en un link del dropdown: cerrar todo el menú
  item.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      item.classList.remove('open');
    });
  });
});

// Cerrar dropdowns al hacer click afuera
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    document.querySelectorAll('.nav-item.dropdown').forEach(item => {
      item.classList.remove('open');
    });
  }
});

// Mostrar plantel al hacer clic en Nivel Secundario
const linkSecundario = document.getElementById('linkSecundario');
const seccionEquipo = document.getElementById('equipo');
if (linkSecundario && seccionEquipo) {
  linkSecundario.addEventListener('click', (e) => {
    e.preventDefault();
    seccionEquipo.classList.remove('equipo-hidden');
    seccionEquipo.classList.add('equipo-visible');
    setTimeout(() => {
      seccionEquipo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  });
}

// Formulario de contacto
function enviarFormulario(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '¡Consulta enviada! Nos comunicaremos pronto.';
  e.target.reset();
}
