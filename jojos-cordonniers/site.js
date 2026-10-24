/* Animations au défilement : aucun framework, aucune dépendance. */
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.product-copy, .services h2, .service-columns, .faq h2').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
  });
})();
