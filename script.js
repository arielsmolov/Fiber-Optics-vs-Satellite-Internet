// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  /* --- Scroll reveal --- */
  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 140; // adjust threshold
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - revealPoint) el.classList.add('active');
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll(); // run once

  /* --- Definitions accordion toggle --- */
  const toggles = document.querySelectorAll('.definition-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      // close other open items if you want only one open at a time:
      // document.querySelectorAll('.definition.open').forEach(d=> d.classList.remove('open'));
      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  /* --- Tooltip touch/click support for mobile --- */
  const tooltips = document.querySelectorAll('.tooltip');

  // Toggle tooltip on tap/click and close when clicking elsewhere
  tooltips.forEach(t => {
    t.addEventListener('click', (e) => {
      e.stopPropagation();
      // hide other tooltips
      document.querySelectorAll('.tooltip.show').forEach(x => { if (x !== t) x.classList.remove('show'); });
      t.classList.toggle('show');
    });

    // keyboard support
    t.setAttribute('tabindex', '0');
    t.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t.classList.toggle('show'); } });
  });

  // Clicking outside hides tooltips
  document.addEventListener('click', () => {
    document.querySelectorAll('.tooltip.show').forEach(t => t.classList.remove('show'));
  });
});
