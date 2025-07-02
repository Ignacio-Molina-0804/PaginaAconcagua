// slider-guias.js - Versión robusta con validaciones

document.addEventListener('DOMContentLoaded', () => {
  const guias = [
    {
      nombre: "Gastón Molina",
      descripcion: `Guía de montaña certificado con más de 12 años de experiencia liderando expediciones en los Andes y otras cordilleras de Sudamérica.<br><br>
        Apasionado por la naturaleza, la seguridad y la formación de nuevos aventureros.<br><br>
        <em class="italic text-gray-600">"Cada salida es una oportunidad para aprender, disfrutar y compartir el amor por la montaña."</em>`,
      img: "/data/guia-principal.webp",
      instagram: "https://instagram.com/gastonmontana",
      facebook: "https://facebook.com/gastonmontana"
    },
    {
      nombre: "Lucía Fernández",
      descripcion: `Especialista en trekking y logística de expediciones. Ha guiado grupos en Patagonia, Cuyo y el norte argentino.<br><br>
        Su energía y dedicación hacen que cada aventura sea segura y divertida.<br><br>
        <em class="italic text-gray-600">"La montaña nos enseña humildad y trabajo en equipo."</em>`,
      img: "/data/guia-lucia.webp",
      instagram: "https://instagram.com/luciaandina",
      facebook: "https://facebook.com/luciaandina"
    },
    {
      nombre: "Martín Pérez",
      descripcion: `Instructor de escalada y rescate en montaña. Más de 10 años formando a nuevos montañistas.<br><br>
        Siempre atento a los detalles y a la seguridad de todos.<br><br>
        <em class="italic text-gray-600">"El mejor paisaje es el que compartimos con otros."</em>`,
      img: "/data/guia-martin.webp",
      instagram: "https://instagram.com/martinescalador",
      facebook: "https://facebook.com/martinescalador"
    }
  ];

  const guiaContainer = document.querySelector('.guia-container');
  const prevButton = document.getElementById('prev-guia');
  const nextButton = document.getElementById('next-guia');
  const nombreEl = document.getElementById('guia-nombre');
  const descEl = document.getElementById('guia-descripcion');
  const imgEl = document.getElementById('guia-img');
  const redesEl = document.getElementById('redes-guia');

  if (!guiaContainer || !prevButton || !nextButton || !nombreEl || !descEl || !imgEl || !redesEl) return;

  let guiaActual = 0;

  function mostrarGuia(idx) {
    const guia = guias[idx];

    nombreEl.textContent = guia.nombre;
    descEl.innerHTML = guia.descripcion;
    imgEl.src = guia.img;

    let redesHTML = '';

    if (guia.instagram) {
      redesHTML += `
        <a href="${guia.instagram}" target="_blank" rel="noopener noreferrer" 
           class="group inline-flex items-center mr-6">
           <div class="bg-gray-300 group-hover:bg-pink-600 p-1 rounded-full transition-colors mr-2">
              <img src="/data/insta-logo.webp" alt="Instagram" class="w-5 h-5 group-hover:invert">
           </div>
           <span class="text-gray-700 group-hover:text-pink-600 transition-colors">
              @${guia.instagram.split('/').pop()}
           </span>
        </a>`;
    }

    if (guia.facebook) {
      redesHTML += `
        <a href="${guia.facebook}" target="_blank" rel="noopener noreferrer" 
           class="group inline-flex items-center">
           <div class="bg-gray-300 group-hover:bg-blue-600 p-1 rounded-full transition-colors mr-2">
              <img src="/data/facebook-logo.webp" alt="Facebook" class="w-5 h-5 group-hover:invert">
           </div>
           <span class="text-gray-700 group-hover:text-blue-600 transition-colors">
              ${guia.nombre.split(' ')[0]}
           </span>
        </a>`;
    }

    redesEl.innerHTML = redesHTML
      ? `<div class="mt-4 flex items-center">${redesHTML}</div>`
      : '';

    actualizarFlechas();
  }

  function mostrarGuiaAnimado(idx) {
    guiaContainer.classList.add('opacity-0', 'transition-opacity', 'duration-300');

    setTimeout(() => {
      mostrarGuia(idx);
      guiaContainer.classList.remove('opacity-0');
    }, 300);
  }

  function actualizarFlechas() {
    prevButton.disabled = guiaActual === 0;
    nextButton.disabled = guiaActual === guias.length - 1;

    prevButton.classList.toggle('bg-gray-400', prevButton.disabled);
    prevButton.classList.toggle('cursor-not-allowed', prevButton.disabled);
    prevButton.classList.toggle('bg-yellow-600', !prevButton.disabled);
    prevButton.classList.toggle('hover:bg-yellow-700', !prevButton.disabled);

    nextButton.classList.toggle('bg-gray-400', nextButton.disabled);
    nextButton.classList.toggle('cursor-not-allowed', nextButton.disabled);
    nextButton.classList.toggle('bg-yellow-600', !nextButton.disabled);
    nextButton.classList.toggle('hover:bg-yellow-700', !nextButton.disabled);
  }

  prevButton.addEventListener('click', () => {
    if (guiaActual > 0) {
      guiaActual--;
      mostrarGuiaAnimado(guiaActual);
    }
  });

  nextButton.addEventListener('click', () => {
    if (guiaActual < guias.length - 1) {
      guiaActual++;
      mostrarGuiaAnimado(guiaActual);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && !prevButton.disabled) {
      prevButton.click();
    } else if (e.key === 'ArrowRight' && !nextButton.disabled) {
      nextButton.click();
    }
  });

  mostrarGuiaAnimado(guiaActual);
});
