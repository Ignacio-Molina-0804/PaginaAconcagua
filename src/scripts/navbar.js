// src/scripts/navbar.js

document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownBtn = document.getElementById('dropdown-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const dropdownArrow = document.getElementById('dropdown-arrow');

  // Toggle menú principal
  menuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', !isExpanded);
  });

  // Toggle submenú
  dropdownBtn.addEventListener('click', () => {
    const isExpanded = dropdownMenu.classList.toggle('hidden');
    dropdownArrow.classList.toggle('rotate-180');
    dropdownBtn.setAttribute('aria-expanded', !isExpanded);
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') && 
        !e.target.closest('#mobile-menu') && 
        !e.target.closest('#menu-btn')) {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
});