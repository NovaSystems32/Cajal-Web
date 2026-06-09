const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

function enviarFormulario(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '¡Mensaje enviado! Nos comunicaremos pronto.';
  e.target.reset();
}
