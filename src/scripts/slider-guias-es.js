// slider-guias.js

document.addEventListener('DOMContentLoaded', () => {
  const guias = [
    {
      nombre: "Gastón Molina",
      descripcion: `Gaston Molina es guía profesional de montaña, certificado por la Escuela provincial de guías de alta montaña y tracking , de la Provincia de Mendoza. <br><br>
      El trabaja en el monte Aconcagua desde los 20 años de edad. Ha liderado más de 40 expediciones consiguiendo la cumbre del techo de América, en al menos 27 veces.<br><br>
      19 años de experiencia aseguran una aventura segura y exitosa en todas faces.<br><br>
      Gaston es un apasionado escalador de Roca y hielo, habiendo escalado en Patagonia, Bolivia, Chile y Peru.<br><br>
      Cuando esta fuera de la montaña se desempeña como trabajador vertical, rescatista de altura y pronosticador nivometeorologo.<br><br>
      La gestión de SEGURIDAD en ambientes naturales es el principal motor que lo lleva a desempeñarse como un profesional de la Montaña.`,
      img: "/data/imagenes/imagenes-guias/gastonMolinaFoto.png",
      instagram: "https://instagram.com/gastonmontana",
      facebook: "https://facebook.com/gastonmontana"
    },
    {
      nombre: "Florencia Torres",
      descripcion: `Florencia Torres, nacida en Mendoza, es Guía Profesional de Montaña Certificada por la Asociación Argentina de Guías. <br><br>
      Desde muy joven desarrolló una pasión por la montaña que la llevó a las cumbres más altas de los Andes. Comenzó a trabajar en el Aconcagua en 2010, primero como porteadora y luego como Guía Profesional de Montaña.<br><br>
      Su punto fuerte y donde se siente más cómoda es la gran altitud. Ha escalado extensamente en los Andes, el norte de Chile y Argentina.<br><br>
      La Patagonia es su segundo hogar; cuando no guía en los Andes Centrales y el Aconcagua, guía en la Patagonia y Ushuaia.<br><br>
      Habla español e inglés y actualmente está aprendiendo lengua de señas.`,
      img: "/data/imagenes/imagenes-guias/florenciaTorreFoto.jpeg",
      instagram: "https://instagram.com/florenciatorres",
      facebook: "https://facebook.com/florenciatorres"
    },
    {
      nombre: "José Purto",
      descripcion: `Guía de montaña certificado con más de 12 años de experiencia liderando expediciones en los Andes y otras cordilleras de América del Sur. <br><br>Apasionado por la naturaleza, la seguridad y la formación de nuevos aventureros. <br><br> <em class="italic text-gray-600">"Cada passeio é uma oportunidade para aprender, aproveitar e compartilhar o amor pelas montanhas."</em>`,
      img: "/data/imagenes/imagenes-guias/josePurtoFoto.jpg",
      instagram: "https://instagram.com/martinescalador",
      facebook: "https://facebook.com/martinescalador"
    }
  ];

  // Precargar imágenes
  function precargarImagenes() {
    guias.forEach(guia => {
      const img = new Image();
      img.src = guia.img;
    });
  }

  const guiaContainer = document.querySelector('.guia-container');
  const prevButton = document.getElementById('prev-guia');
  const nextButton = document.getElementById('next-guia');
  const nombreEl = document.getElementById('guia-nombre');
  const descEl = document.getElementById('guia-descripcion');
  const imgEl = document.getElementById('guia-img');
  const redesEl = document.getElementById('redes-guia');
  const imgLoading = document.getElementById('img-loading');

  if (!guiaContainer || !prevButton || !nextButton || !nombreEl || !descEl || !imgEl || !redesEl || !imgLoading) {
    console.error('No se encontraron todos los elementos necesarios para el slider');
    return;
  }

  let guiaActual = 0;

  function mostrarGuia(idx) {
    const guia = guias[idx];
    
    imgLoading.style.display = 'flex';
    imgEl.style.opacity = 0;
    
    nombreEl.textContent = guia.nombre;
    descEl.innerHTML = guia.descripcion;
    
    let redesHTML = '';
    if (guia.instagram) {
      redesHTML += `
        <a href="${guia.instagram}" target="_blank" rel="noopener noreferrer" 
           class="group inline-flex items-center mr-6">
           <div class="bg-gray-300 group-hover:bg-pink-600 p-1 rounded-full transition-colors mr-2">
              <img src="/data/insta-logo.webp" alt="Instagram" class="w-5 h-5 group-hover:invert" loading="lazy">
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
              <img src="/data/facebook-logo.webp" alt="Facebook" class="w-5 h-5 group-hover:invert" loading="lazy">
           </div>
           <span class="text-gray-700 group-hover:text-blue-600 transition-colors">
              ${guia.nombre.split(' ')[0]}
           </span>
        </a>`;
    }

    redesEl.innerHTML = redesHTML
      ? `<div class="mt-4 flex items-center">${redesHTML}</div>`
      : '';

    const imgCache = new Image();
    imgCache.onload = function() {
      imgEl.src = guia.img;
      imgEl.onload = function() {
        imgLoading.style.display = 'none';
        imgEl.style.opacity = 1;
      };
    };
    imgCache.src = guia.img;

    actualizarFlechas();
  }

  function mostrarGuiaAnimado(idx) {
    guiaContainer.classList.add('opacity-0');
    
    setTimeout(() => {
      mostrarGuia(idx);
      guiaContainer.classList.remove('opacity-0');
    }, 300);
  }

  function actualizarFlechas() {
    prevButton.disabled = guiaActual === 0;
    nextButton.disabled = guiaActual === guias.length - 1;
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

  precargarImagenes();
  mostrarGuiaAnimado(guiaActual);
});