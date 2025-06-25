document.addEventListener("DOMContentLoaded", function() {
    const animadas = document.querySelectorAll('.section-animada');
    const mostrarAnimada = () => {
        animadas.forEach(section => {
            const rect = section.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', mostrarAnimada);
    mostrarAnimada();
});