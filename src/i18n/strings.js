// Textos fijos de la interfaz (no vienen de los datos). Un idioma por objeto.

export const strings = {
  en: {
    skipToContent: 'Skip to content',
    nav: { main: 'Main', menu: 'Menu', close: 'Close' },
    languageToggle: { label: 'Switch to Spanish', short: 'ES' },
    hero: {
      stampMain: 'Systems Engineering',
      studentAt: (school) => `student at ${school}`,
    },
    contactCard: { heading: 'Contact' },
    about: {
      hello: 'hi, I’m',
      meta: (studentLine, school, location) =>
        `${studentLine} at ${school}, based in ${location}.`,
      seeProjects: 'See my projects',
      sendEmail: 'Send me an email',
    },
    projects: {
      heading: 'Projects and experience',
      lede: 'A bit about my projects and experience: from web platforms to my first steps in Java.',
      filterLabel: 'Filter projects',
      latest: 'latest!',
      skillsUsed: 'Skills used: ',
      opensNewTab: ' (opens in a new tab)',
      downloadsFile: ' (downloads a file)',
    },
    background: {
      tab: 'Background',
      education: 'Education',
      languages: 'Languages',
      toolkit: 'Toolkit',
      handnote: (focus) => `most at home in ${focus} and UI`,
    },
    contact: {
      title: 'Let’s build something',
      lede: 'If you’re working on a website, a product interface or anything that needs careful frontend work, I’d like to hear about it.',
      email: 'Email',
      linkedin: 'LinkedIn',
      phone: 'Phone',
      basedIn: 'Based in',
      sendEmail: 'Send me an email',
    },
    footer: {
      designedIn: (location) => `Designed and built in ${location}`,
      backToCover: 'Back to the cover',
    },
  },
  es: {
    skipToContent: 'Saltar al contenido',
    nav: { main: 'Principal', menu: 'Menú', close: 'Cerrar' },
    languageToggle: { label: 'Cambiar a inglés', short: 'EN' },
    hero: {
      stampMain: 'Ingeniería en Sistemas',
      studentAt: (school) => `estudiante en ${school}`,
    },
    contactCard: { heading: 'Contacto' },
    about: {
      hello: 'hola, soy',
      meta: (studentLine, school, location) =>
        `${studentLine} en ${school}, con base en ${location}.`,
      seeProjects: 'Ver mis proyectos',
      sendEmail: 'Enviarme un correo',
    },
    projects: {
      heading: 'Proyectos y experiencia',
      lede: 'Un poco sobre mis proyectos y mi experiencia: de plataformas web a mis primeros pasos en Java.',
      filterLabel: 'Filtrar proyectos',
      latest: '¡el más reciente!',
      skillsUsed: 'Habilidades usadas: ',
      opensNewTab: ' (abre en una pestaña nueva)',
      downloadsFile: ' (descarga un archivo)',
    },
    background: {
      tab: 'Trayectoria',
      education: 'Educación',
      languages: 'Idiomas',
      toolkit: 'Herramientas',
      handnote: (focus) => `más cómoda en ${focus} y UI`,
    },
    contact: {
      title: 'Construyamos algo',
      lede: 'Si estás trabajando en un sitio web, la interfaz de un producto o algo que necesite un trabajo de frontend cuidadoso, me encantaría saberlo.',
      email: 'Correo',
      linkedin: 'LinkedIn',
      phone: 'Teléfono',
      basedIn: 'Ubicación',
      sendEmail: 'Enviarme un correo',
    },
    footer: {
      designedIn: (location) => `Diseñado y construido en ${location}`,
      backToCover: 'Volver a la portada',
    },
  },
};
