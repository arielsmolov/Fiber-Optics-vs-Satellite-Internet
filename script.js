// Accordion toggle for definitions
document.querySelectorAll('.definition-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const definition = button.parentElement;
    definition.classList.toggle('open');
  });
});
