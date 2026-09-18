// Educación, habilidades e idiomas (hoja "Background").
// Los campos bilingües usan { en, es }; los nombres propios y tecnologías
// se dejan igual en ambos idiomas.

export const education = [
  {
    degree: {
      en: 'B.Sc. in Computer Systems Engineering',
      es: 'Ingeniería en Sistemas Computacionales',
    },
    school: 'Universidad Tecnológica Centroamericana (UNITEC)',
    place: 'Tegucigalpa, Honduras',
    period: { en: '2023 to present', es: '2023 al presente' },
  },
  {
    degree: {
      en: 'High School Diploma in Sciences and Humanities',
      es: 'Bachillerato en Ciencias y Humanidades',
    },
    school: 'La Estancia School',
    place: 'Tegucigalpa, Honduras',
    period: { en: '2012 to 2023', es: '2012 a 2023' },
  },
];

export const skillGroups = [
  {
    id: 'web',
    title: { en: 'Web', es: 'Web' },
    items: {
      en: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'React Native', 'Node.js', 'Responsive design'],
      es: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'React Native', 'Node.js', 'Diseño responsivo'],
    },
  },
  {
    id: 'testing-design',
    title: { en: 'Testing and design', es: 'Pruebas y diseño' },
    items: {
      en: ['Functional testing', 'Debugging', 'UI/UX', 'Visual design'],
      es: ['Pruebas funcionales', 'Depuración', 'UI/UX', 'Diseño visual'],
    },
  },
  {
    id: 'tools',
    title: { en: 'Tools and more', es: 'Herramientas y más' },
    items: {
      en: ['Git', 'GitHub', 'Supabase', 'Figma', 'SQL', 'MongoDB', 'Java', 'Python', 'C++', 'Solana/Web3'],
      es: ['Git', 'GitHub', 'Supabase', 'Figma', 'SQL', 'MongoDB', 'Java', 'Python', 'C++', 'Solana/Web3'],
    },
  },
];

export const languages = [
  { id: 'spanish', name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
  { id: 'english', name: { en: 'English', es: 'Inglés' }, level: { en: 'Advanced', es: 'Avanzado' } },
];
