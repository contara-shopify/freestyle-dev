export default class LogoReviews {
    constructor() {
      this.reviewText = document.getElementById('reviewText');
      this.logos = document.querySelectorAll('.logo-item');
      this.init();
    }
  
    init() {
      this.bindEvents();
      this.showInitialReview();
    }
  
    bindEvents() {
      this.logos.forEach(logo => {
        logo.addEventListener('click', () => {
          // Remover la clase activa de todos los logos
          this.logos.forEach(l => l.classList.remove('active'));
          // Agregar la clase activa al logo seleccionado
          logo.classList.add('active');
          this.showReview(logo);
        });
      });
    }
  
    showReview(logo) {
      const review = logo.getAttribute('data-review');
      if (review?.trim()) {
        this.reviewText.textContent = `"${review}"`;
      }
    }
  
    showInitialReview() {
      const firstLogo = this.logos[0];
      if (firstLogo) {
        firstLogo.classList.add('active');
        this.showReview(firstLogo);
      }
    }
  }
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new LogoReviews();
    });
  } else {
    new LogoReviews();
  }