// slider-guias.js

document.addEventListener('DOMContentLoaded', () => {
  const guias = [
    {
      nombre: "Gastón Molina",
      descripcion: `Gaston Molina é um guia de montanha profissional, certificado pela Escola Provincial de Guias de Alta Montanha e Trekking da Província de Mendoza. <br><br>
      Ele trabalha no Monte Aconcágua desde os 20 anos de idade. Já liderou mais de 40 expedições, alcançando o cume do pico mais alto das Américas pelo menos 27 vezes.<br><br>
      Seus 19 anos de experiência garantem uma aventura segura e bem-sucedida em todas as suas fases.<br><br>
      Gaston é um escalador apaixonado por rocha e gelo, tendo escalado na Patagônia, Bolívia, Chile e Peru. <br><br>
      Quando não está na montanha, trabalha como alpinista vertical, socorrista em alta altitude e meteorologista.<br><br>
      A gestão da segurança em ambientes naturais é a principal motivação por trás de seu trabalho como profissional de montanha.`,
      img: "/data/imagenes/imagenes-guias/gastonMolinaFoto.webp",
      instagram: "https://instagram.com/gastonmolinamguide",
    },
    {
      nombre: "Lucía Fernández",
      descripcion:`Florencia Torres, nascida em Mendoza, é uma Guia de Montanha Profissional certificada pela Associação Argentina de Guias. <br><br>
      Desde jovem, desenvolveu uma paixão pelas montanhas que a levou aos picos mais altos dos Andes. Começou a trabalhar no Aconcágua em 2010, primeiro como carregadora e depois como Guia de Montanha Profissional.<br><br>
      Sua força e onde se sente mais confortável é em grandes altitudes. Ela escalou extensivamente nos Andes, no norte do Chile e na Argentina.<br><br>
      A Patagônia é seu segundo lar; quando não está guiando nos Andes Centrais e no Aconcágua, está guiando na Patagônia e em Ushuaia.<br><br>
      Ela fala espanhol e inglês e está aprendendo a língua de sinais.`,
      img: "/data/imagenes/imagenes-guias/florenciaTorreFoto.webp",
      instagram: "https://instagram.com/flor_en_andes",
    },
    {
      nombre: "José Purto",
      descripcion: `José Purto é um guia de montanha chileno especializado em Andes Centrais e em montanhas de grande altitude. <br><br>
      Começou a trabalhar como guia aos 17 anos e atualmente possui a certificação AAGM/UIMLA, WFR vigente e mais de 15 ascensiones ao Cerro Aconcagua, além de numerosas expedições em outras montanhas da região. <br><br>
      É também um habilidoso esquiador, com experiência em esqui de vulcões do sul do Chile. <br><br>
      Idiomas: espanhol, inglês e português.`,
      img: "/data/imagenes/imagenes-guias/josePurtoFoto.webp",
      instagram: "https://instagram.com/josepurto",
    },
    {
      nombre: "Javier Vega",
      descripcion: `Javier Vega é guia de montanha profissional desde 2012 e possui uma trajetória de sucesso de 20 temporadas consecutivas no Aconcágua, desempenhando diversas funções e contribuindo com sua expertise em cada expedição. Seu profundo conhecimento do Aconcágua e sua paixão pelas montanhas o tornam uma figura de referência para aqueles que buscam uma experiência autêntica e segura no pico mais alto das Américas. <br><br>

      Além de seu trabalho no Aconcágua, Javier lidera expedições guiadas no Cordón del Plata Vallecitos, uma das áreas de montanhismo mais emblemáticas de Mendoza. Seu entusiasmo por escalada e esqui complementa seu perfil, permitindo-lhe transmitir a cada participante o espírito de aventura e crescimento pessoal que caracteriza a Aconcagua Experiences. <br><br>

      O compromisso de Javier com a segurança, o treinamento contínuo e a excelência no atendimento garantem que cada expedição seja uma experiência inesquecível, onde a paixão pelas montanhas e o profissionalismo se unem para oferecer aventuras únicas nos Andes.`,
      img: "/data/imagenes/imagenes-guias/javierVegaFoto.webp"
    },
    {
      nombre: "Ana Saravia",
      descripcion: `Apoio logístico e assistência médica em altitude <br><br>
      Especialista em clínica médica e medicina de montanha.<br><br>
      Trabalho desenvolvido em altitude e consultas pré-ascensão desde 2014.<br><br>
      Logística em ambientes de montanha, responsável e comprometida.<br><br>
      Amante do ambiente de montanha e sua estreita relação e interação com o corpo humano.`,
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