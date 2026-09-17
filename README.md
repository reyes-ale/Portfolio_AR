# Portafolio de Alejandra Reyes

Sitio portafolio con estética de agenda/scrapbook editorial (argollas, polaroids, clips, cinta y sello de lacre), construido con **React + Vite** y **CSS Modules**.

## Cómo correrlo

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # genera /dist para producción
npm run preview   # sirve /dist localmente
```

Requiere Node.js 18 o superior.

## Estructura

```
portfolio-alejandra/
├── index.html                  # HTML base (solo monta React)
├── vite.config.js              # alias "@" → src/
├── public/
│   ├── favicon.svg
│   └── images/                 # ← aquí van las fotos (ver README interno)
└── src/
    ├── main.jsx                # punto de entrada
    ├── App.jsx                 # arma la página con las secciones
    │
    ├── data/                   # TODO el contenido del CV vive aquí
    │   ├── profile.js          # nombre, rol, intro, contacto, rutas de fotos
    │   ├── projects.js         # proyectos + filtros de las pestañas
    │   ├── background.js       # educación, habilidades, idiomas
    │   └── navigation.js       # enlaces del menú
    │
    ├── styles/                 # estilos globales
    │   ├── fonts.js            # fuentes autoalojadas (Fontsource)
    │   ├── index.css           # importa los tres de abajo en orden
    │   ├── tokens.css          # colores, tipografías, espaciados
    │   ├── textures.css        # grano de papel (.grain)
    │   └── base.css            # reset y estilos base
    │
    ├── hooks/
    │   └── useScrollSpy.js     # resalta la sección activa en el menú
    │
    ├── components/
    │   ├── layout/             # piezas que envuelven la página
    │   │   ├── Navbar/
    │   │   └── Footer/
    │   ├── paper/              # elementos decorativos reutilizables
    │   │   ├── Polaroid/       # foto impresa (con marcador si falta la imagen)
    │   │   ├── PaperClip/
    │   │   ├── Tape/
    │   │   ├── WaxSeal/
    │   │   ├── NameTag/
    │   │   └── index.js        # exporta todos juntos
    │   └── ui/
    │       └── Button/
    │
    └── sections/               # una carpeta por sección de la página
        ├── Hero/               # portada tipo agenda abierta
        │   ├── Hero.jsx
        │   ├── BinderRings.jsx
        │   └── ContactCard.jsx
        ├── About/              # hoja oscura con retrato
        ├── Projects/           # carpeta con pestañas y cinta de proyectos
        │   ├── Projects.jsx
        │   ├── FolderTabs.jsx
        │   ├── ProjectReel.jsx
        │   └── ProjectCard.jsx
        ├── Background/         # educación, toolkit, idiomas
        └── Contact/            # sobre con sello
```

Cada componente tiene su `.jsx` y su `.module.css` en la misma carpeta, así los estilos no chocan entre secciones.

## Tareas comunes

**Agregar las fotos.** Copia tres imágenes verticales a `public/images/` con los nombres `photo-hero-1.jpg`, `photo-hero-2.jpg` y `photo-about.jpg`. Mientras no existan, se muestra un marcador gris con el nombre del archivo esperado.

**Agregar los videos de proyectos.** Copia un clip corto en loop a `public/videos/` con el nombre indicado en `video` dentro de `projects.js` (por ejemplo `colmena.mp4`). Mientras no exista, la tarjeta muestra un marcador con el nombre del archivo esperado, igual que con las fotos. Ver `public/videos/README.md`.

**Editar textos o agregar un proyecto.** Solo toca `src/data/`. Para un proyecto nuevo, agrega un objeto a `projects` en `projects.js` con su `video`; su `category` debe ser `web`, `hackathon` o `volunteer` (o agrega una categoría nueva en `projectFilters`). Marca `featured: true` en el que quieras destacado con el clip de "latest!".

**Cambiar colores o tipografías.** Todo está en `src/styles/tokens.css`. El acento vino (`--seal`) es el único color de énfasis del sitio.

**Agregar una sección.** Crea `src/sections/NuevaSeccion/` con su `.jsx` y `.module.css`, impórtala en `App.jsx` y agrega su `id` en `src/data/navigation.js`.

## Desplegar en Vercel

1. Sube la carpeta a un repositorio de GitHub.
2. En Vercel, importa el repositorio. Detecta Vite automáticamente (build: `npm run build`, output: `dist`).
3. Listo. Cada push a `main` vuelve a desplegar.

## Accesibilidad y responsive

- Tres diseños: agenda abierta (escritorio), agenda sin la foto izquierda (1100px o menos) y una sola hoja (900px o menos).
- Pestañas de proyectos navegables con flechas, Home y End.
- Foco visible en todos los elementos interactivos, enlace para saltar al contenido y animación de entrada desactivada si el sistema pide reducir movimiento.
