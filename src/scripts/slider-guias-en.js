// slider-guias.js

document.addEventListener("DOMContentLoaded", () => {
  const guias = [
    {
      nombre: "Gastón Molina",
      descripcion: `Gaston Molina is a professional mountain guide, certified by the Provincial School of High Mountain and Trekking Guides of Mendoza Province. <br><br>
      He has been working on Mount Aconcagua since he was 20 years old. He has led more than 40 expeditions, reaching the summit of the highest peak in the Americas at least 27 times. <br><br>
      19 years of experience ensure a safe and successful adventure in all its phases. <br><br>
      Gaston is a passionate rock and ice climber, having climbed in Patagonia, Bolivia, Chile, and Peru. <br><br>
      When he is off the mountain, he works as a vertical worker, high-altitude rescuer, and snow and weather forecaster. <br><br>
      Safety management in natural environments is the main driving force behind his work as a mountain professional.`,
      img: "/data/imagenes/imagenes-guias/gastonMolinaFoto.webp",
      instagram: "https://instagram.com/gastonmolinamguide",
    },
    {
      nombre: "Florencia Torres",
      descripcion: `Florencia Torres, born in Mendoza, is a Professional Mountain Guide certified by the Argentine Association of Guides. <br><br>
      From a young age, she developed a passion for the mountains that led her to the highest peaks of the Andes. She began working on Aconcagua in 2010, first as a porter and then as a Professional Mountain Guide.<br><br>
      Her strength and where she feels most comfortable is at high altitude. She has climbed extensively in the Andes, northern Chile, and Argentina.<br><br>
      Patagonia is her second home; when she's not guiding in the Central Andes and on Aconcagua, she's guiding in Patagonia and Ushuaia.<br><br>
      She speaks Spanish and English and is currently learning sign language.`,
      img: "/data/imagenes/imagenes-guias/florenciaTorreFoto.webp",
      instagram: "https://instagram.com/flor_en_andes",
    },
    {
      nombre: "José Purto",
      descripcion: `José Purto is a Chilean mountain guide specializing in the Central Andes and high-altitude mountains. <br><br>
      He began working as a guide at age 17 and currently holds AAGM/UIMLA certification, a valid WFR, and has over 15 ascents of Aconcagua, in addition to numerous expeditions on other mountains in the region. <br><br>
      He is also a skilled skier, with experience skiing down volcanoes in southern Chile. <br><br>
      Languages: Spanish, English, and Portuguese.`,
      img: "/data/imagenes/imagenes-guias/josePurtoFoto.webp",
      instagram: "https://instagram.com/josepurto",
    },
    {
      nombre: "Javier Vega",
      descripcion: `Javier Vega is a professional mountain guide since 2012 and has a distinguished career of 20 consecutive seasons on Aconcagua, performing different roles and contributing his experience in each expedition. His deep knowledge of Aconcagua and his passion for mountaineering make him a reference for those who seek to live an authentic and safe experience at the highest peak in America. <br><br>  

      In addition to his work on Aconcagua, Javier leads guided tours in the Cordón del Plata Vallecitos, one of the most emblematic areas for mountaineering in Mendoza. His enthusiasm for climbing and skiing complement his profile, allowing him to transmit to each participant the spirit of adventure and achievement that characterizes Aconcagua Experiences. <br><br>

      Javier's commitment to safety, continuous training, and excellence in service ensures that every expedition is an unforgettable experience, where passion for mountaineering and professionalism come together to offer unique adventures in the Andes.`,
      img: "/data/imagenes/imagenes-guias/javierVegaFoto.webp",
    },
  ];

  // Precargar imágenes
  function precargarImagenes() {
    guias.forEach((guia) => {
      const img = new Image();
      img.src = guia.img;
    });
  }

  const guiaContainer = document.querySelector(".guia-container");
  const prevButton = document.getElementById("prev-guia");
  const nextButton = document.getElementById("next-guia");
  const nombreEl = document.getElementById("guia-nombre");
  const descEl = document.getElementById("guia-descripcion");
  const imgEl = document.getElementById("guia-img");
  const redesEl = document.getElementById("redes-guia");
  const imgLoading = document.getElementById("img-loading");

  if (
    !guiaContainer ||
    !prevButton ||
    !nextButton ||
    !nombreEl ||
    !descEl ||
    !imgEl ||
    !redesEl ||
    !imgLoading
  ) {
    console.error(
      "No se encontraron todos los elementos necesarios para el slider",
    );
    return;
  }

  let guiaActual = 0;

  function mostrarGuia(idx) {
    const guia = guias[idx];

    imgLoading.style.display = "flex";
    imgEl.style.opacity = 0;

    nombreEl.textContent = guia.nombre;
    descEl.innerHTML = guia.descripcion;

    let redesHTML = "";
    if (guia.instagram) {
      redesHTML += `
        <a href="${guia.instagram}" target="_blank" rel="noopener noreferrer" 
           class="group inline-flex items-center mr-6">
           <div class="bg-gray-300 group-hover:bg-pink-600 p-1 rounded-full transition-colors mr-2">
              <img src="/data/insta-logo.webp" alt="Instagram" class="w-5 h-5 group-hover:invert" loading="lazy">
           </div>
           <span class="text-gray-700 group-hover:text-pink-600 transition-colors">
              @${guia.instagram.split("/").pop()}
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
              ${guia.nombre.split(" ")[0]}
           </span>
        </a>`;
    }

    redesEl.innerHTML = redesHTML
      ? `<div class="mt-4 flex items-center">${redesHTML}</div>`
      : "";

    const imgCache = new Image();
    imgCache.onload = function () {
      imgEl.src = guia.img;
      imgEl.onload = function () {
        imgLoading.style.display = "none";
        imgEl.style.opacity = 1;
      };
    };
    imgCache.src = guia.img;

    actualizarFlechas();
  }

  function mostrarGuiaAnimado(idx) {
    guiaContainer.classList.add("opacity-0");

    setTimeout(() => {
      mostrarGuia(idx);
      guiaContainer.classList.remove("opacity-0");
    }, 300);
  }

  function actualizarFlechas() {
    prevButton.disabled = guiaActual === 0;
    nextButton.disabled = guiaActual === guias.length - 1;
  }

  prevButton.addEventListener("click", () => {
    if (guiaActual > 0) {
      guiaActual--;
      mostrarGuiaAnimado(guiaActual);
    }
  });

  nextButton.addEventListener("click", () => {
    if (guiaActual < guias.length - 1) {
      guiaActual++;
      mostrarGuiaAnimado(guiaActual);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && !prevButton.disabled) {
      prevButton.click();
    } else if (e.key === "ArrowRight" && !nextButton.disabled) {
      nextButton.click();
    }
  });

  precargarImagenes();
  mostrarGuiaAnimado(guiaActual);
});
