// =====================
// SCROLL PROGRESS BAR
// =====================
const prog = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  prog.style.width = pct + '%';
});

// =====================
// ACTIVE NAV HIGHLIGHT
// =====================
const secs = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.4 });

secs.forEach(s => navObserver.observe(s));

// =====================
// SCROLL REVEAL
// =====================
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .proj-item').forEach(el => revealObserver.observe(el));

// =====================
// MOBILE MENU TOGGLE
// =====================
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const ham  = document.getElementById('ham');
  menu.classList.toggle('open');

  const spans = ham.querySelectorAll('span');
  if (menu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '1';
    spans[2].style.transform = '';
  }
}
