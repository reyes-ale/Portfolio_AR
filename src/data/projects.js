// Proyectos y experiencia. El orden del arreglo es el orden en pantalla
// (más reciente primero). `category` debe coincidir con un `id` de `projectFilters`.
// Los campos bilingües usan { en, es }; los nombres de proyecto y las tecnologías
// (`tags`) se dejan igual en ambos idiomas.

export const projectFilters = [
  { id: 'all', label: { en: 'All work', es: 'Todo' } },
  { id: 'web', label: { en: 'Web builds', es: 'Sitios web' } },
  { id: 'hackathon', label: { en: 'Hackathons', es: 'Hackathons' } },
  { id: 'volunteer', label: { en: 'Volunteering', es: 'Voluntariado' } },
  { id: 'software', label: { en: 'Software', es: 'Software' } },
];

export const projects = [
  {
    id: 'colmena',
    title: 'Colmena',
    subtitle: { en: 'Web platform prototype', es: 'Prototipo de plataforma web' },
    context: {
      en: 'Web development and entrepreneurship project',
      es: 'Proyecto de desarrollo web y emprendimiento',
    },
    date: 'Sep 2026',
    category: 'web',
    featured: true,
    video: 'https://res.cloudinary.com/dyav94mbo/video/upload/v1789761803/colmena.mp4',
    summary: {
      en: 'A responsive platform connecting businesses and people with students, graduates and freelancers offering creative services.',
      es: 'Plataforma responsiva que conecta a empresas y personas con estudiantes, graduados y freelancers que ofrecen servicios creativos.',
    },
    points: {
      en: [
        'Built the interfaces for creating projects, sending proposals, browsing portfolios and choosing services.',
        'Kept one clear, consistent visual language across every flow.',
      ],
      es: [
        'Construí las interfaces para crear proyectos, enviar propuestas, explorar portafolios y elegir servicios.',
        'Mantuve un lenguaje visual claro y consistente en todos los flujos.',
      ],
    },
    tags: ['React', 'Responsive design', 'UI/UX'],
    link: 'https://colmena-lilac.vercel.app/',
    linkLabel: { en: 'Visit Colmena', es: 'Visitar Colmena' },
  },
  {
    id: 'besteamhn-landing',
    title: 'BeSteamHN landing page',
    subtitle: { en: 'Web development project', es: 'Proyecto de desarrollo web' },
    context: {
      en: 'Nonprofit STEAM education initiative',
      es: 'Iniciativa sin fines de lucro de educación STEAM',
    },
    date: 'Aug 2026',
    category: 'web',
    video: 'https://res.cloudinary.com/dyav94mbo/video/upload/v1789761778/besteam-landing.mp4',
    summary: {
      en: 'A visual, responsive landing page that turns BeSteamHN’s STEAM education identity and content into a clear web experience.',
      es: 'Landing page visual y responsiva que convierte la identidad y el contenido educativo de BeSteamHN en una experiencia web clara.',
    },
    points: {
      en: [
        'Adapted the layout to hold up across screen sizes and devices.',
        'Owned the frontend build and the visual design decisions.',
      ],
      es: [
        'Adapté el layout para que se viera bien en distintos tamaños de pantalla y dispositivos.',
        'Estuve a cargo del desarrollo frontend y de las decisiones de diseño visual.',
      ],
    },
    tags: ['Frontend', 'Visual design'],
    link: 'https://besteamhn-landingpage.vercel.app/',
    linkLabel: { en: 'Visit the landing page', es: 'Visitar la landing page' },
  },
  {
    id: 'ai-tutor',
    title: 'BeSteamHN AI Tutor',
    subtitle: {
      en: 'Global Web3Pack Hackathon (Dev3pack)',
      es: 'Global Web3Pack Hackathon (Dev3pack)',
    },
    context: {
      en: 'Hybrid global hackathon with team BeSteamHN',
      es: 'Hackathon global híbrido con el equipo BeSteamHN',
    },
    date: 'May 2026',
    category: 'hackathon',
    video: 'https://res.cloudinary.com/dyav94mbo/video/upload/v1789761747/besteam-ai-tutor.mp4',
    summary: {
      en: 'An AI-powered learning platform with interactive courses, module-by-module progress and NFT certificates on the Solana blockchain.',
      es: 'Plataforma de aprendizaje con IA: cursos interactivos, progreso por módulos y certificados NFT en la blockchain de Solana.',
    },
    points: {
      en: [
        'Integrated and tested NFT certificates on the Solana blockchain.',
        'Checked the key tutor and blockchain flows before the final demo.',
      ],
      es: [
        'Integré y probé certificados NFT sobre la blockchain de Solana.',
        'Verifiqué los flujos clave del tutor y de la blockchain antes de la demo final.',
      ],
    },
    tags: ['AI', 'Solana', 'Web3', 'Testing'],
  },
  {
    id: 'workshops',
    title: { en: 'Introduction to the Digital Era', es: 'Introducción a la Era Digital' },
    subtitle: {
      en: 'Workshop facilitator for BeSteamHN',
      es: 'Facilitadora de talleres para BeSteamHN',
    },
    context: {
      en: 'Volunteer at Aldeas SOS Honduras',
      es: 'Voluntariado en Aldeas SOS Honduras',
    },
    date: 'Apr 2026',
    category: 'volunteer',
    video: '/videos/workshops.mp4',
    photo: '/images/workshop-kids.jpg',
    summary: {
      en: 'Taught children computational thinking, algorithms and their first lines of code in Python and Scratch.',
      es: 'Enseñé a niños pensamiento computacional, algoritmos y sus primeras líneas de código en Python y Scratch.',
    },
    points: {
      en: [
        'Broke complex ideas down into short, clear steps.',
        'Helped widen access to technology education in underserved communities.',
      ],
      es: [
        'Dividí ideas complejas en pasos cortos y claros.',
        'Ayudé a ampliar el acceso a la educación tecnológica en comunidades vulnerables.',
      ],
    },
    tags: ['Python', 'Scratch', 'Teaching'],
  },
  {
    id: 'la-oficina',
    title: 'La Oficina restaurant',
    subtitle: { en: 'Website with a custom CMS', es: 'Sitio web con CMS a la medida' },
    context: { en: 'Class project in Tegucigalpa', es: 'Proyecto de clase en Tegucigalpa' },
    date: 'Nov 2025 to Mar 2026',
    category: 'web',
    video: 'https://res.cloudinary.com/dyav94mbo/video/upload/v1789762603/la-oficina.mp4',
    summary: {
      en: 'A full restaurant website with a custom CMS and admin panel for staff to manage and update the live menu.',
      es: 'Sitio web completo para un restaurante, con CMS a la medida y panel de administración para manejar el menú en vivo.',
    },
    points: {
      en: [
        'Built, tested and deployed it with React, Node.js and Supabase.',
        'Tested load times and layouts across devices and browsers, catching rendering issues before release.',
      ],
      es: [
        'Lo construí, probé y desplegué con React, Node.js y Supabase.',
        'Probé tiempos de carga y layouts en distintos dispositivos y navegadores, detectando problemas de renderizado antes de publicarlo.',
      ],
    },
    tags: ['React', 'Node.js', 'Supabase', 'Testing'],
    link: 'https://www.laoficinabar.com',
    linkLabel: { en: 'Visit La Oficina', es: 'Visitar La Oficina' },
  },
  {
    id: 'hbo-max-mockup',
    title: 'HBO Max mockup',
    subtitle: { en: 'Streaming platform UI clone', es: 'Clon de UI de plataforma de streaming' },
    context: { en: 'Personal practice project', es: 'Proyecto personal de práctica' },
    date: 'Jun 2025',
    category: 'web',
    video: 'https://res.cloudinary.com/dyav94mbo/video/upload/v1789761843/hbo-max-mockup.mp4',
    summary: {
      en: 'A front-end mockup recreating the HBO Max experience with Next.js, including browsing rows and a movie catalog.',
      es: 'Mockup de frontend hecho con Next.js que recrea HBO Max, con filas de exploración y catálogo de películas.',
    },
    points: {
      en: [
        'Rebuilt the layout, navigation and browsing rows using Next.js.',
        'Focused on matching the look and feel of a real streaming platform.',
      ],
      es: [
        'Recreé el layout, la navegación y las filas de exploración usando Next.js.',
        'Me enfoqué en igualar la apariencia y sensación de una plataforma de streaming real.',
      ],
    },
    tags: ['Next.js', 'React', 'UI/UX'],
  },
  {
    id: 'mini-access',
    title: 'Mini Access',
    subtitle: { en: 'Java Swing desktop app', es: 'App de escritorio en Java Swing' },
    context: {
      en: 'Class project for Programación II',
      es: 'Proyecto de clase para Programación II',
    },
    date: 'Jan 2024',
    category: 'software',
    video: 'https://res.cloudinary.com/dyav94mbo/video/upload/v1789761736/mini-access.mp4',
    summary: {
      en: 'A simple Java Swing desktop app to create and manage databases with basic SQL commands and login.',
      es: 'App de escritorio en Java Swing para crear y manejar bases de datos con comandos SQL básicos y login.',
    },
    points: {
      en: [
        'Built a login screen with user accounts and password protection.',
        'Let users create databases and run basic SQL commands from the interface.',
      ],
      es: [
        'Construí una pantalla de inicio de sesión con cuentas de usuario y contraseña.',
        'Permite crear bases de datos y ejecutar comandos SQL básicos desde la interfaz.',
      ],
    },
    tags: ['Java', 'Swing', 'SQL'],
    link: 'https://github.com/reyes-ale/Portfolio_AR/releases/download/assets-v1/MiniAccess.zip',
    linkLabel: { en: 'Download the app (.zip)', es: 'Descargar la app (.zip)' },
    download: true,
  },
  {
    id: 'swimming-olympics',
    title: 'Swimming Olympics Simulator',
    subtitle: { en: 'Java Swing desktop app', es: 'App de escritorio en Java Swing' },
    context: {
      en: 'Class project for Programación II',
      es: 'Proyecto de clase para Programación II',
    },
    date: 'Dec 2023',
    category: 'software',
    video: 'https://res.cloudinary.com/dyav94mbo/video/upload/v1789761715/gui-olympics.mp4',
    summary: {
      en: 'A simple Java Swing simulation of mini swimming Olympics, my first hands-on project working with GUIs.',
      es: 'Simulación en Java Swing de unas mini olimpiadas de natación, mi primer proyecto práctico con GUIs.',
    },
    points: {
      en: [
        'Built the whole interface and simulation logic with Java Swing.',
        'First project practicing event handling and GUI layout in Programación II.',
      ],
      es: [
        'Construí toda la interfaz y la lógica de la simulación con Java Swing.',
        'Primer proyecto practicando manejo de eventos y layout de GUI en Programación II.',
      ],
    },
    tags: ['Java', 'Swing', 'GUI'],
    link: 'https://github.com/reyes-ale/Portfolio_AR/releases/download/assets-v1/Olympics_GUI.zip',
    linkLabel: { en: 'Download the app (.zip)', es: 'Descargar la app (.zip)' },
    download: true,
  },
];
