const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
