
# Proyecto de Página Web para Empresa de Montañismo

Este repositorio contiene el desarrollo de una página web para una empresa dedicada al montañismo, excursiones y actividades de aventura. El objetivo principal es crear una presencia digital moderna, atractiva y funcional, que permita mostrar los servicios, próximas salidas, galería de imágenes y ofrecer un canal de contacto para consultas de potenciales clientes.

> **Nota:** El nombre de la empresa aún no está definido, por lo que el proyecto está preparado para ser fácilmente personalizado en el futuro.

---

## ✨ Migración a Astro

El proyecto fue migrado de una estructura tradicional basada en HTML, CSS y JavaScript a [Astro](https://astro.build/), un framework moderno para construir sitios web rápidos y modulares.  
**¿Qué ventajas trajo la migración?**
- Componentización: reutilización de elementos como navegación y footer en todas las páginas.
- Mejor organización: separación clara entre componentes, layouts, páginas y scripts.
- Optimización automática de recursos y mejor rendimiento.
- Facilidad para escalar y mantener el proyecto.

---

## 🌟 Características principales

- **Diseño adaptable:** La página se visualiza correctamente en computadoras, tablets y dispositivos móviles.
- **Navegación fija y compartida:** El menú de navegación y el footer son iguales en todas las páginas.
- **Inicio con imagen destacada:** Imagen de fondo representativa, mensaje de bienvenida y llamada a la acción.
- **Bloques de información:** Secciones con información sobre la empresa, valores, servicios y próximos eventos.
- **Secciones independientes:** Cada apartado principal (Quiénes somos, Salidas, Galería, Consultas) tiene su propio archivo en `/src/pages`.
- **Slider de guías:** En la sección "Quiénes somos" se puede navegar entre los guías con animación y flechas.
- **Footer con redes sociales:** Pie de página con enlaces a Facebook e Instagram.
- **Animaciones al hacer scroll:** Las secciones principales aparecen con animación al desplazarse por la página.
- **Estructura organizada:** Archivos distribuidos en carpetas para facilitar el mantenimiento y la escalabilidad.
- **Fácil personalización:** El contenido, imágenes y secciones pueden adaptarse fácilmente.

---

## 📁 Estructura del proyecto

```
astro-project/
│
├── public/
│   └── data/               # Imágenes del proyecto
│
├── src/
│   ├── pages/              # Páginas principales
│   │   ├── index.astro         # Inicio
│   │   ├── consultas.astro     # Contacto
│   │   ├── galeria.astro       # Galería
│   │   ├── quienes-somos.astro # Nosotros
│   │   └── salidas.astro       # Próximas salidas
│
│   ├── scripts/            # JavaScript
│   └── styles/             # Estilos CSS
│
├── package.json            # Dependencias
└── astro.config.mjs        # Configuración
```

---

## 🛠️ Tecnologías utilizadas

- **Astro** para la estructura y generación del sitio.
- **HTML5** y **Astro Components** para la estructura de las páginas.
- **CSS3** para los estilos y el diseño visual.
- **JavaScript** para funcionalidades interactivas (animaciones y slider de guías).

---

## 🚀 Personalización y desarrollo

Este proyecto está pensado para ser fácilmente modificado y ampliado. Puedes cambiar textos, imágenes, colores y secciones según las necesidades de la empresa.  
La estructura modular permite agregar nuevas páginas o funcionalidades sin complicaciones.

---

## ▶️ Cómo ejecutar el proyecto

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

3. Abre tu navegador en `http://localhost:4321` para ver el sitio.

---

## 📬 Contacto

Para dudas, mejoras o personalización, podés abrir un issue o contactarte con el desarrollador.

---
