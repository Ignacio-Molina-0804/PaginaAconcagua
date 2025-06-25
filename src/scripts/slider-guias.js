const guias = [
    {
        nombre: "Gastón Molina",
        descripcion: `Guía de montaña certificado con más de 12 años de experiencia liderando expediciones en los Andes y otras cordilleras de Sudamérica.<br>
        Apasionado por la naturaleza, la seguridad y la formación de nuevos aventureros.<br>
        “Cada salida es una oportunidad para aprender, disfrutar y compartir el amor por la montaña.”`,
        img: "../data/guia-principal.jpg"
    },
    {
        nombre: "Lucía Fernández",
        descripcion: `Especialista en trekking y logística de expediciones. Ha guiado grupos en Patagonia, Cuyo y el norte argentino.<br>
        Su energía y dedicación hacen que cada aventura sea segura y divertida.<br>
        “La montaña nos enseña humildad y trabajo en equipo.”`,
        img: "../data/guia-lucia.jpeg"
    },
    {
        nombre: "Martín Pérez",
        descripcion: `Instructor de escalada y rescate en montaña. Más de 10 años formando a nuevos montañistas.<br>
        Siempre atento a los detalles y a la seguridad de todos.<br>
        “El mejor paisaje es el que compartimos con otros.”`,
        img: "../data/guia-martin.webp"
    }
];

let guiaActual = 0;

const guiaBloque = document.querySelector('.guia-bloque');

function mostrarGuia(idx) {
    document.getElementById('guia-nombre').innerHTML = guias[idx].nombre;
    document.getElementById('guia-descripcion').innerHTML = guias[idx].descripcion;
    document.getElementById('guia-img').src = guias[idx].img;
}

function actualizarFlechas() {
    document.getElementById('prev-guia').disabled = guiaActual === 0;
    document.getElementById('next-guia').disabled = guiaActual === guias.length - 1;
}

function mostrarGuiaAnimado(idx) {
    guiaBloque.classList.add('fade');
    setTimeout(() => {
        document.getElementById('guia-nombre').innerHTML = guias[idx].nombre;
        document.getElementById('guia-descripcion').innerHTML = guias[idx].descripcion;
        document.getElementById('guia-img').src = guias[idx].img;
        guiaBloque.classList.remove('fade');
        actualizarFlechas();
    }, 400);
}

document.getElementById('prev-guia').addEventListener('click', () => {
    guiaActual = (guiaActual - 1 + guias.length) % guias.length;
    mostrarGuiaAnimado(guiaActual);
});

document.getElementById('next-guia').addEventListener('click', () => {
    guiaActual = (guiaActual + 1) % guias.length;
    mostrarGuiaAnimado(guiaActual);
});

mostrarGuiaAnimado(guiaActual);