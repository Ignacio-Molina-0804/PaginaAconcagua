export function setupScrollAnimations() {
  const animadas = document.querySelectorAll('.section-animada');
  
  const mostrarAnimada = () => {
    animadas.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) {
        section.classList.add('opacity-100', 'translate-y-0');
        section.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  };

  if (animadas.length > 0) {
    mostrarAnimada();
    window.addEventListener('scroll', mostrarAnimada);
  }
}

document.addEventListener("DOMContentLoaded", setupScrollAnimations);
