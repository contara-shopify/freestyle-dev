document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButtons = document.querySelectorAll('[data-mobile-menu-toggle]');
  const mobileMenu = document.getElementById('mobileMenu');

  function toggleMobileMenu() {
    if (mobileMenu.classList.contains('-translate-x-full')) {
      mobileMenu.classList.remove('-translate-x-full');
    } else {
      mobileMenu.classList.add('-translate-x-full');
    }
    document.body.classList.toggle('overflow-hidden');
  }

  mobileMenuButtons.forEach(button => {
    button.addEventListener('click', toggleMobileMenu);
  });
});
