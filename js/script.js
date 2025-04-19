// Toggle menu mobile
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Envio de formulário (simulação)
document.getElementById('form-contato').addEventListener('submit', e => {
  e.preventDefault();
  alert('Sua mensagem foi enviada com sucesso! 🚀');
  e.target.reset();
});
