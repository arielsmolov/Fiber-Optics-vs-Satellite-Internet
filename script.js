// =====================
// Definitions Accordion
// =====================
document.querySelectorAll('.definition-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    parent.classList.toggle('open');
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
  });
});

// =====================
// Reveal on Scroll
// =====================
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
