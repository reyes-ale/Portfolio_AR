// Información personal y de contacto.
// Todo el texto del sitio que describe a Alejandra sale de aquí.

export const profile = {
  firstName: 'Alejandra',
  fullName: 'Alejandra Nicolle Reyes Rodríguez',
  shortName: 'Alejandra Reyes',
  initials: 'AR',
  year: '26',
  role: { en: 'Frontend', es: 'Frontend' },
  roleSuffix: { en: 'Developer', es: 'Developer' },
  studentLine: { en: 'Systems Engineering student', es: 'Estudiante de Ingeniería en Sistemas' },
  school: 'UNITEC',
  disciplines: {
    en: ['Web developer', 'UI/UX enthusiast', 'Software tester'],
    es: ['Desarrolladora web', 'Entusiasta de UI/UX', 'Tester de software'],
  },
  focusLine: {
    en: ['Frontend', 'UI/UX', 'Software testing'],
    es: ['Frontend', 'UI/UX', 'Pruebas de software'],
  },
  location: { en: 'Tegucigalpa, Honduras', es: 'Tegucigalpa, Honduras' },
  locationShort: 'TGU, HN.',

  intro: {
    en: [
      'I’m a Systems Engineering student who builds, tests and ships web applications and responsive websites, mostly with React, HTML, CSS and JavaScript.',
      'I care about how a product looks and feels as much as whether it works. That’s why I spend time on cross-browser checks, performance and the small interaction details before anything goes live.',
      'Right now I’m most interested in frontend development, web design and UI/UX, and those are the areas where I want to keep growing.',
    ],
    es: [
      'Soy estudiante de Ingeniería en Sistemas y construyo, pruebo y publico aplicaciones web y sitios responsivos, principalmente con React, HTML, CSS y JavaScript.',
      'Me importa tanto cómo se ve y se siente un producto como si funciona bien. Por eso dedico tiempo a revisar la compatibilidad entre navegadores, el rendimiento y los pequeños detalles de interacción antes de publicar algo.',
      'Ahora mismo lo que más me interesa es el desarrollo frontend, el diseño web y UI/UX, y son las áreas en las que quiero seguir creciendo.',
    ],
  },

  contact: {
    email: 'alejandranireyes06@gmail.com',
    phone: '+504 9409-9072',
    phoneHref: 'tel:+50494099072',
    linkedin: 'linkedin.com/in/alejandra-reyes-arys',
    linkedinHref: 'https://www.linkedin.com/in/alejandra-reyes-arys',
  },

  // Rutas relativas a /public. Si la imagen no existe se muestra un marcador.
  photos: {
    heroLeft: '/images/photo-hero-1.jpg',
    heroRight: '/images/photo-hero-2.jpg',
    about: '/images/photo-about.jpg',
  },
};
