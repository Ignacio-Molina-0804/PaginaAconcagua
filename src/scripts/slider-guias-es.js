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
      img: "/data/imagenes/imagenes-guias/gastonMolinaFoto.webp",
      instagram: "https://instagram.com/gastonmolinamguide"
    },
    {
      nombre: "Florencia Torres",
      descripcion: `Florencia Torres, nacida en Mendoza, es Guía Profesional de Montaña Certificada por la Asociación Argentina de Guías. <br><br>
      Desde muy joven desarrolló una pasión por la montaña que la llevó a las cumbres más altas de los Andes. Comenzó a trabajar en el Aconcagua en 2010, primero como porteadora y luego como Guía Profesional de Montaña.<br><br>
      Su punto fuerte y donde se siente más cómoda es la gran altitud. Ha escalado extensamente en los Andes, el norte de Chile y Argentina.<br><br>
      La Patagonia es su segundo hogar; cuando no guía en los Andes Centrales y el Aconcagua, guía en la Patagonia y Ushuaia.<br><br>
      Habla español e inglés y actualmente está aprendiendo lengua de señas.`,
      img: "/data/imagenes/imagenes-guias/florenciaTorreFoto.webp",
      instagram: "https://instagram.com/flor_en_andes"
    },
    {
      nombre: "José Purto",
      descripcion: `José Purto es un guía de montaña chileno especializado en los Andes Centrales y en montañas de gran altitud. <br><br>
      Comenzó a trabajar como guía a los 17 años y actualmente cuenta con la certificación AAGM/UIMLA, WFR vigente y más de 15 ascensiones al Cerro Aconcagua, además de numerosas expediciones en otras montañas de la región. <br><br>
      Es también un hábil esquiador, con experiencia en esquí de volcanes del sur de Chile. <br><br>
      Idiomas: español, inglés y portugués.`,
      img: "/data/imagenes/imagenes-guias/josePurtoFoto.webp",
      instagram: "https://instagram.com/josepurto"
    },
    {
      nombre: "Javier Vega",
      descripcion: `Javier Vega es guía profesional de montaña desde 2012 y cuenta con una destacada trayectoria de 20 temporadas consecutivas en el Cerro Aconcagua, desempeñando diferentes roles y aportando su experiencia en cada expedición. Su profundo conocimiento del Aconcagua y su pasión por la montaña lo convierten en un referente para quienes buscan vivir una experiencia auténtica y segura en la cumbre más alta de América. <br><br>  

      Además de su labor en el Aconcagua, Javier lidera guiadas en el Cordón del Plata Vallecitos, una de las zonas más emblemáticas para el montañismo en Mendoza. Su entusiasmo por la escalada y el esquí complementa su perfil, permitiéndole transmitir a cada participante el espíritu de aventura y superación que caracteriza a Aconcagua Experiences. <br><br>

      El compromiso de Javier con la seguridad, la formación continua y la excelencia en el servicio garantiza que cada expedición sea una experiencia inolvidable, donde la pasión por la montaña y el profesionalismo se unen para ofrecer aventuras únicas en los Andes.`,
      img: "/data/imagenes/imagenes-guias/javierVegaFoto.webp"
    },
    {
      nombre: "Ana Saravia",
      descripcion: `Apoyo logístico y asistencia médica en altura <br><br>
      Especialista en clínica médica y medicina de montaña.<br><br>
      Trabajos desarrollados en altura y consultas pre ascenso desde 2014.<br><br>
      Logística en ambientes de montaña, responsable y comprometida.<br><br>
      Amante del ambiente de montaña y su estrecha relación e interacción con el cuerpo humano.`,
      img: "/data/imagenes/imagenes-guias/anaSaraviaFoto.webp",
    },
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