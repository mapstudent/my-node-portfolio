const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    // Clean text comparison to avoid spacing issues
    const currentIcon = hamburger.textContent.trim();
    hamburger.textContent = currentIcon === '☰' ? '🗙' : '☰';
  });
}
