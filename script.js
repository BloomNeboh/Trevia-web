// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle?.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = '';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
  }
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple review rotator
const reviews = document.querySelectorAll('.review');
let idx = 0;
setInterval(() => {
  if (!reviews.length) return;
  reviews[idx].classList.remove('active');
  idx = (idx + 1) % reviews.length;
  reviews[idx].classList.add('active');
}, 6000);

// Booking form handler: show modal with basic summary
const bookingForm = document.getElementById('bookingForm');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(bookingForm);
  const dest = fd.get('destination');
  const arrival = fd.get('arrival');
  const nights = fd.get('nights');
  const adults = fd.get('adults');
  const children = fd.get('children');

  modalContent.innerHTML = `
    <h3>Request summary</h3>
    <p><strong>Destination:</strong> ${escapeHtml(dest)}</p>
    <p><strong>Arrival:</strong> ${escapeHtml(arrival)} · <strong>Nights:</strong> ${escapeHtml(nights)}</p>
    <p><strong>Travelers:</strong> ${escapeHtml(adults)} adults · ${escapeHtml(children)} children</p>
    <p>We will email you a custom proposal within 48 hours. For production, hook this form to your backend or form service.</p>
    <button id="modalOk" class="btn">Okay</button>
  `;
  openModal();
});

function openModal(){
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  modal.setAttribute('aria-hidden','true');
}
modalClose?.addEventListener('click', closeModal);
modal.addEventListener('click', (ev) => {
  if (ev.target === modal) closeModal();
});
document.addEventListener('click', (ev) => {
  if (ev.target && ev.target.id === 'modalOk') closeModal();
});

// Simple sanitiser for display
function escapeHtml(s){
  return String(s || '').replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

// Contact form basic handler (demo)
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks — message received (demo). For live forms, connect to an email/form service (Formspree, Netlify Forms, or your backend).');
  contactForm.reset();
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky-bg');
  } else {
    header.classList.remove('sticky-bg');
  }
});
