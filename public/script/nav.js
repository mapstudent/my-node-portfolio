const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    hamburger.textContent = hamburger.textContent === '☰' ? '🗙' : '☰';
  });
}
