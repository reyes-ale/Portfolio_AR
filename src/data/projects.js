// Proyectos y experiencia. El orden del arreglo es el orden en pantalla
// (más reciente primero). `category` debe coincidir con un `id` de `projectFilters`.

export const projectFilters = [
  { id: 'all', label: 'All work' },
  { id: 'web', label: 'Web builds' },
  { id: 'hackathon', label: 'Hackathons' },
  { id: 'volunteer', label: 'Volunteering' },
  { id: 'software', label: 'Software' },
];

export const projects = [
  {
    id: 'colmena',
    title: 'Colmena',
    subtitle: 'Web platform prototype',
    context: 'Web development and entrepreneurship project',
    date: 'Sep 2026',
    category: 'web',
    featured: true,
    video: '/videos/colmena.mp4',
    summary:
      'A responsive platform that connects businesses and individuals with students, graduates and freelancers who offer creative services.',
    points: [
      'Built the interfaces for creating projects, sending proposals, browsing portfolios and choosing services.',
      'Kept one clear, consistent visual language across every flow.',
    ],
    tags: ['React', 'Responsive design', 'UI/UX'],
    link: 'https://colmena-lilac.vercel.app/',
    linkLabel: 'Visit Colmena',
  },
  {
    id: 'besteamhn-landing',
    title: 'BeSteamHN landing page',
    subtitle: 'Web development project',
    context: 'Nonprofit STEAM education initiative',
    date: 'Aug 2026',
    category: 'web',
    video: '/videos/besteamhn-landing.mp4',
    summary:
      'A visually driven, responsive landing page that turns BeSteamHN’s identity and content into a structured web experience.',
    points: [
      'Adapted the layout to hold up across screen sizes and devices.',
      'Owned the frontend build and the visual design decisions.',
    ],
    tags: ['Frontend', 'Visual design'],
    link: 'https://besteamhn-landingpage.vercel.app/',
    linkLabel: 'Visit the landing page',
  },
  {
    id: 'ai-tutor',
    title: 'BeSteamHN AI Tutor',
    subtitle: 'Global Web3Pack Hackathon (Dev3pack)',
    context: 'Hybrid global hackathon with team BeSteamHN',
    date: 'May 2026',
    category: 'hackathon',
    video: '/videos/ai-tutor.mp4',
    summary:
      'An AI-powered learning platform with interactive courses and module-by-module progress, built by a small team on a tight deadline.',
    points: [
      'Integrated and tested NFT certificates on the Solana blockchain.',
      'Checked the key tutor and blockchain flows before the final demo.',
    ],
    tags: ['AI', 'Solana', 'Web3', 'Testing'],
  },
  {
    id: 'workshops',
    title: 'Introduction to the Digital Era',
    subtitle: 'Workshop facilitator for BeSteamHN',
    context: 'Volunteer at Aldeas SOS Honduras',
    date: 'Apr 2026',
    category: 'volunteer',
    video: '/videos/workshops.mp4',
    summary:
      'Taught children computational thinking, algorithms and their first lines of code in Python and Scratch.',
    points: [
      'Broke complex ideas down into short, clear steps.',
      'Helped widen access to technology education in underserved communities.',
    ],
    tags: ['Python', 'Scratch', 'Teaching'],
  },
  {
    id: 'la-oficina',
    title: 'La Oficina restaurant',
    subtitle: 'Website with a custom CMS',
    context: 'Class project in Tegucigalpa',
    date: 'Nov 2025 to Mar 2026',
    category: 'web',
    video: '/videos/la-oficina.mp4',
    summary:
      'A complete restaurant website with an admin panel that lets staff manage the menu and have it update on the live site.',
    points: [
      'Built, tested and deployed it with React, Node.js and Supabase.',
      'Tested load times and layouts across devices and browsers, catching rendering issues before release.',
    ],
    tags: ['React', 'Node.js', 'Supabase', 'Testing'],
    link: 'https://www.laoficinabar.com',
    linkLabel: 'Visit La Oficina',
  },
  {
    id: 'swimming-olympics',
    title: 'Swimming Olympics Simulator',
    subtitle: 'Java Swing desktop app',
    context: 'Class project for Programación II',
    date: 'Dec 2023',
    category: 'software',
    video: '/videos/GUI-Olympics.mp4',
    summary:
      'A simple desktop simulation of a mini swimming Olympics, built as my first hands-on project working with GUIs in Java.',
    points: [
      'Built the whole interface and simulation logic with Java Swing.',
      'First project practicing event handling and GUI layout in Programación II.',
    ],
    tags: ['Java', 'Swing', 'GUI'],
    link: '/videos/Olympics_GUI.zip',
    linkLabel: 'Download the app (.zip)',
    download: true,
  },
];
