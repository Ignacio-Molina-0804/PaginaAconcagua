# Proyecto de Página Web para Empresa de Montañismo

Este repositorio contiene el desarrollo de una página web para una empresa dedicada al montañismo, excursiones y actividades de aventura. El objetivo principal es crear una presencia digital moderna, atractiva y funcional, que permita mostrar los servicios, próximas salidas, galería de imágenes y ofrecer un canal de contacto para consultas de potenciales clientes.

> **Nota:** El nombre de la empresa aún no está definido, por lo que el proyecto está preparado para ser fácilmente personalizado en el futuro.

---

## ✨ Características principales

- **Diseño adaptable:** La página se visualiza correctamente en computadoras, tablets y dispositivos móviles.
- **Navegación fija y compartida:** El menú de navegación y el footer son iguales en todas las páginas.
- **Inicio con imagen destacada:** Imagen de fondo representativa, mensaje de bienvenida y llamada a la acción.
- **Bloques de información:** Secciones con información sobre la empresa, valores, servicios y próximos eventos.
- **Secciones independientes:** Cada apartado principal (Quiénes somos, Salidas, Galería, Consultas) tiene su propio archivo HTML en `/src/pages`.
- **Slider de guías:** En la sección "Quiénes somos" se puede navegar entre los guías con animación y flechas.
- **Footer con redes sociales:** Pie de página con enlaces a Facebook e Instagram.
- **Animaciones al hacer scroll:** Las secciones principales aparecen con animación al desplazarse por la página.
- **Estructura organizada:** Archivos distribuidos en carpetas para facilitar el mantenimiento y la escalabilidad.
- **Fácil personalización:** El contenido, imágenes y secciones pueden adaptarse fácilmente.

---

## 📁 Estructura del proyecto

```
src/
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   ├── animaciones.js
│   └── slider-guias.js
├── data/
│   ├── (imágenes y archivos de datos)
│   └── logo.png
└── pages/
    ├── quienes-somos.html
    ├── salidas.html
    ├── galeria.html
    └── consultas.html
```

---

## 🛠️ Tecnologías utilizadas

- **HTML5** para la estructura de la página.
- **CSS3** para los estilos y el diseño visual.
- **JavaScript** para funcionalidades interactivas (animaciones y slider de guías).

---

## 🚀 Personalización y desarrollo

Este proyecto está pensado para ser fácilmente modificado y ampliado. Puedes cambiar textos, imágenes, colores y secciones según las necesidades de la empresa.  
La estructura modular permite agregar nuevas páginas o funcionalidades sin complicaciones.

---

## ▶️ Cómo ejecutar el proyecto

1. Instala las dependencias (opcional, solo si usas live-server):

   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

   Esto abrirá la carpeta `src` en tu navegador con recarga automática.

---

**¡Gracias por visitar este proyecto!**
