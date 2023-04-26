window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu');
  const navMenu = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-list__link');
  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
    menuButton.classList.toggle('menu_active');
    navMenu.classList.toggle('nav_active');
    if (isOpen) {
      document.addEventListener('click', outsideClose);
    } else {
      document.removeEventListener('click', outsideClose);
    }
  };

  const outsideClose = event => {
    if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
      toggleMenu();
    }
  };

  menuButton.addEventListener('click', toggleMenu);
  navLinks.forEach(link => link.addEventListener('click', toggleMenu));
});
