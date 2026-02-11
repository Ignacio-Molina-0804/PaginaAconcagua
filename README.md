# 🏔️ Gastón Molina - Guía de Montaña

Este repositorio contiene el código fuente del sitio web oficial de **Gastón Molina**, guía profesional de montaña especializado en expediciones al Aconcagua y trekking en los Andes.

El sitio ha sido desarrollado con tecnologías modernas para garantizar un alto rendimiento, accesibilidad y una experiencia de usuario fluida.

👉 **Previsualización online:** [https://gmmountainguide.com](https://gmmountainguide.com)

---

## 🚀 Tecnologías Principales

El proyecto utiliza un stack moderno optimizado para velocidad y SEO:

-   **[Astro](https://astro.build/):** Framework web para sitios orientados a contenido, optimizado para velocidad.
-   **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidades para un diseño rápido y responsivo.
-   **TypeScript:** Para un código más robusto y seguro.
-   **i18n (Internacionalización):** Soporte nativo para múltiples idiomas (Español, Inglés, Portugués).

---

## 🌟 Características

### 🌍 Multi-idioma
El sitio está completamente traducido a tres idiomas, con detección y enrutamiento automático:
-   🇦🇷 **Español** (default)
-   🇺🇸 **Inglés** (`/en`)
-   🇧🇷 **Portugués** (`/pt`)

### 📱 Diseño Responsivo
Interfaz adaptada a cualquier dispositivo: móviles, tablets y escritorio. Incluye un menú de navegación optimizado y un footer consistente.

### 🖼️ Galería Multimedia
Sección dedicada para mostrar imágenes de expediciones anteriores, optimizadas para carga rápida.

### 📍 Páginas Específicas
-   **Inicio:** Presentación y servicios destacados.
-   **Quiénes Somos:** Información sobre el equipo y los guías.
-   **Salidas:** Detalle de expediciones (Aconcagua, Trekking).
-   **Consultas:** Formulario de contacto integrado.

### ⚡ Rendimiento y SEO
-   Generación de sitio estático (SSG) para tiempos de carga mínimos.
-   Optimización de imágenes.
-   Buenas prácticas de SEO implementadas.

---

## 📁 Estructura del Proyecto

```bash
/
├── public/             # Archivos estáticos (imágenes, iconos)
├── src/
│   ├── components/     # Componentes reutilizables (NavBar, Footer, Hero...)
│   ├── data/           # Datos estáticos (provincias, textos)
│   ├── i18n/           # Configuración y traducciones (ui.ts, utils.ts)
│   ├── layouts/        # Plantillas base de página
│   ├── pages/          # Rutas del sitio
│   │   ├── en/         # Versión en Inglés
│   │   ├── pt/         # Versión en Portugués
│   │   └── ...         # Versión en Español (raíz)
│   └── scripts/        # Lógica del lado del cliente (menús, sliders)
└── astro.config.mjs    # Configuración de Astro
```

---

## 🛠️ Instalación y Ejecución

Para correr el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    cd PaginaAconcagua
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:4321`.

4.  **Construir para producción:**
    ```bash
    npm run build
    ```
    Esto generará los archivos estáticos en la carpeta `dist/`.

---

## 📬 Contacto

Si tienes alguna duda sobre el código o el proyecto, no dudes en contactar.

