// src/scripts/navbar.js

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownBtn = document.getElementById('dropdown-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const dropdownArrow = document.getElementById('dropdown-arrow');

  // Función para abrir el menú
  const openMenu = () => {
    menuBtn.classList.add('open');
    mobileMenu.classList.remove('hidden');
    
    // Forzar recálculo del layout para activar la animación
    void mobileMenu.offsetHeight;
    
    // Aplicar estilos para animación de apertura
    mobileMenu.style.maxHeight = '500px';
    mobileMenu.style.opacity = '1';
    mobileMenu.style.transform = 'translateY(0)';
    
    menuBtn.setAttribute('aria-expanded', 'true');
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    // Aplicar estilos para animación de cierre
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-10px)';
    
    // Esperar a que termine la animación para ocultar
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }, 300);
  };

  // Evento del botón hamburguesa
  menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Submenú desplegable en móvil
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
    dropdownArrow.classList.toggle('rotate-180');
    dropdownBtn.setAttribute('aria-expanded', !dropdownMenu.classList.contains('hidden'));
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') && 
        !e.target.closest('#mobile-menu') && 
        !e.target.closest('#menu-btn')) {
      closeMenu();
    }
  });
});