# Proyecto de Página Web para Empresa de Montañismo

Este repositorio contiene el desarrollo de una página web moderna y adaptable para una empresa dedicada al montañismo, excursiones y actividades de aventura. El objetivo es ofrecer una presencia digital atractiva, funcional y fácil de mantener, mostrando servicios, próximas salidas, galería de imágenes y un canal de contacto para consultas de potenciales clientes.

> **Nota:** El nombre de la empresa aún no está definido, por lo que el proyecto está preparado para ser fácilmente personalizado en el futuro.

---

## ✨ Migración a Astro y Tailwind CSS

El proyecto fue migrado desde una estructura tradicional basada en HTML, CSS y JavaScript a [Astro](https://astro.build/), un framework moderno para construir sitios web rápidos y modulares.  
Además, se incorporó [Tailwind CSS](https://tailwindcss.com/) para facilitar la creación de interfaces atractivas y responsivas mediante utilidades de clases CSS.

**Ventajas de la migración:**
- **Componentización:** Reutilización de elementos como navegación y footer en todas las páginas.
- **Mejor organización:** Separación clara entre componentes, layouts, páginas y scripts.
- **Optimización automática:** Mejor rendimiento y carga de recursos.
- **Escalabilidad:** Fácil de mantener y ampliar.
- **Estilos modernos:** Tailwind CSS permite un diseño rápido, consistente y adaptable a cualquier dispositivo.

---

## 🌟 Características principales

- **Diseño adaptable:** Visualización óptima en computadoras, tablets y móviles gracias a Tailwind CSS.
- **Navegación fija y compartida:** Menú y footer comunes en todas las páginas.
- **Inicio con imagen destacada:** Hero con imagen de fondo, mensaje de bienvenida y llamada a la acción.
- **Bloques de información:** Secciones sobre la empresa, valores, servicios y próximos eventos.
- **Secciones independientes:** Cada apartado principal tiene su propio archivo en `/src/pages`.
- **Slider de guías:** En "Quiénes somos" se puede navegar entre los guías con animación y flechas.
- **Footer con redes sociales:** Enlaces a Facebook e Instagram.
- **Animaciones al hacer scroll:** Las secciones aparecen animadas al desplazarse.
- **Estructura organizada:** Archivos distribuidos en carpetas para facilitar el mantenimiento.
- **Fácil personalización:** Textos, imágenes y secciones adaptables a las necesidades de la empresa.

---

## 📁 Estructura del proyecto

```
astro-project/
│
├── public/
│   └── data/               # Imágenes del proyecto
│
├── src/
│   ├── components/         # Componentes Astro reutilizables (NavBar, Footer, Hero)
│   ├── layouts/            # Layouts base para las páginas
│   ├── pages/              # Páginas principales (index, quienes-somos, salidas, galeria, consultas)
│   ├── scripts/            # JavaScript para animaciones y slider de guías
│   └── styles/             # Estilos globales (global.css)
│
├── package.json            # Dependencias y scripts
├── astro.config.mjs        # Configuración de Astro y Tailwind CSS
├── tailwind.config.mjs     # Configuración de Tailwind CSS
└── tsconfig.json           # Configuración de TypeScript
```

---

## ⚙️ ¿Cómo funciona el proyecto?

- **Astro** gestiona la estructura, el ruteo y la generación de las páginas.
- **Tailwind CSS** se utiliza para todos los estilos, permitiendo un diseño responsivo y moderno sin escribir CSS tradicional.
- **Componentes Astro** como NavBar, Footer y Hero se reutilizan en todas las páginas para mantener coherencia visual.
- **JavaScript** en `/src/scripts/` agrega interactividad, como animaciones al hacer scroll y el slider de guías.
- **Imágenes** y recursos estáticos se encuentran en `/public/data/`.

---

## 🛠️ Tecnologías utilizadas

- **Astro** para la estructura y generación del sitio.
- **Tailwind CSS** para los estilos y diseño visual.
- **HTML5** y **Astro Components** para la estructura de las páginas.
- **JavaScript** para funcionalidades interactivas (animaciones y slider de guías).

---

## 🚀 Personalización y desarrollo

El proyecto está pensado para ser fácilmente modificado y ampliado. Puedes cambiar textos, imágenes, colores y secciones según las necesidades de la empresa.  
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
