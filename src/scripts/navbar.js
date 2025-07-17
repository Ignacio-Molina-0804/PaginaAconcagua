// src/scripts/navbar.js

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownBtn = document.getElementById('dropdown-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const dropdownArrow = document.getElementById('dropdown-arrow');

  // Selector de idioma custom
  const langToggle = document.getElementById('lang-toggle');
  const langDropdown = document.getElementById('lang-dropdown');
  const langArrow = document.getElementById('lang-arrow');

  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();           // no cierres si clickeás dentro
      const isOpen = !langDropdown.classList.contains('hidden');
      langDropdown.classList.toggle('hidden');
      langArrow.classList.toggle('rotate-180', !isOpen);
    });

    // cerrar al tocar fuera
    document.addEventListener('click', (e) => {
      if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add('hidden');
        langArrow.classList.remove('rotate-180');
      }
    });
  }

  if (!menuBtn || !mobileMenu || !dropdownBtn || !dropdownMenu || !dropdownArrow) return;

  const openMenu = () => {
    menuBtn.classList.add('open');
    mobileMenu.classList.remove('hidden');
    void mobileMenu.offsetHeight;
    mobileMenu.style.maxHeight = '500px';
    mobileMenu.style.opacity = '1';
    mobileMenu.style.transform = 'translateY(0)';
    menuBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }, 300);
  };

  menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
    dropdownArrow.classList.toggle('rotate-180');
    dropdownBtn.setAttribute('aria-expanded', !dropdownMenu.classList.contains('hidden'));
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') &&
        !e.target.closest('#mobile-menu') &&
        !e.target.closest('#menu-btn')) {
      closeMenu();
    }
  });
});
