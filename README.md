# Proyecto de Página Web para Empresa de Montañismo

Este repositorio contiene el desarrollo de una página web moderna, adaptable y profesional para una empresa dedicada al montañismo, excursiones y actividades de aventura. El sitio está pensado para mostrar servicios, próximas salidas, galería de imágenes y un canal de contacto para consultas de potenciales clientes.

Puedes ver una previsualización online en:  
👉 **[https://gastonmolinaguide.netlify.app](https://gastonmolinaguide.netlify.app)**

---

## 🚀 Stack Moderno: Astro + Tailwind CSS

El proyecto fue migrado y optimizado utilizando [Astro](https://astro.build/) como framework principal y [Tailwind CSS](https://tailwindcss.com/) para los estilos.  
Esto permite un desarrollo ágil, componentes reutilizables, excelente rendimiento y un diseño adaptable a cualquier dispositivo.

**Ventajas de la migración:**
- Componentización: NavBar, Footer, Hero y otros elementos reutilizables en todas las páginas.
- Mejor organización: Separación clara entre componentes, layouts, páginas y scripts.
- Optimización automática: Mejor rendimiento y carga de recursos.
- Escalabilidad: Fácil de mantener y ampliar.
- Estilos modernos: Tailwind CSS permite un diseño rápido, consistente y responsive.

---

## 🌟 Características principales

- **Diseño responsive:** Visualización óptima en computadoras, tablets y móviles.
- **Navegación y footer fijos:** Menú y pie de página comunes en todas las páginas.
- **Hero dinámico:** Imagen de fondo, mensaje de bienvenida y llamada a la acción en cada sección.
- **Bloques informativos:** Secciones sobre la empresa, valores, servicios y próximos eventos.
- **Secciones independientes:** Cada apartado principal tiene su propio archivo en `/src/pages`.
- **Slider de guías:** En "Quiénes somos" se puede navegar entre los guías con animación y flechas.
- **Animaciones al hacer scroll:** Las secciones aparecen animadas al desplazarse.
- **Galería de imágenes:** Página dedicada para mostrar fotos de expediciones y actividades.
- **Fácil personalización:** Textos, imágenes y secciones adaptables a las necesidades de la empresa.
- **Optimización para SEO y rendimiento:** Astro genera HTML estático rápido y accesible.

---

## 📁 Estructura del proyecto

```
astro-project/
│
├── public/
│   └── data/               # Imágenes y recursos estáticos
│
├── src/
│   ├── components/         # Componentes Astro reutilizables (NavBar, Footer, Hero)
│   ├── layouts/            # Layout base para las páginas
│   ├── pages/              # Páginas principales (index, quienes-somos, salidas, galeria, consultas)
│   ├── scripts/            # JavaScript para animaciones y slider de guías
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
