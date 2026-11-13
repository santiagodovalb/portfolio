export type Lang = 'es' | 'en';
export type L = Record<Lang, string>;

const same = (s: string): L => ({ es: s, en: s });

export const copy = {
  nav: {
    projects: { es: 'Proyectos', en: 'Projects' },
    work: { es: 'Experiencia', en: 'Experience' },
    contact: { es: 'Contacto', en: 'Contact' },
  },
  eyebrow: { es: 'Ciencia política, IA y tecnología · Buenos Aires', en: 'Political science, AI and technology · Buenos Aires' },
  lead: {
    es: 'Ingeniero de software y estudiante de Ciencia Política. Construyo herramientas que convierten datos públicos en evidencia sobre cómo nos gobernamos.',
    en: 'Software engineer and political science student. I build tools that turn public data into evidence about how we are governed.',
  },
  getInTouch: { es: 'Escribime', en: 'Get in touch' },
  stats: [
    { value: same('5+'), label: { es: 'años construyendo software', en: 'years building software' } },
    { value: same('UBA'), label: { es: 'Ciencia Política, desde 2022', en: 'Political Science, since 2022' } },
  ],
  visit: { es: 'Ver el sitio', en: 'Visit the site' },
  code: { es: 'Código', en: 'Code' },
  education: { es: 'Formación', en: 'Education' },
  workLead: {
    es: 'Cinco años llevando software a producción. Lo que me llevo a esta etapa: trabajar con datos reales, liderar equipos y enseñar.',
    en: 'Five years shipping production software. What I bring to this stage: working with real data, leading teams and teaching.',
  },
  tools: { es: 'Herramientas', en: 'Tools' },
  contactTitle: { es: 'Charlemos.', en: "Let's talk." },
  contactLead: {
    es: 'Abierto a colaborar con ONGs, centros de investigación, medios y equipos de gobierno.',
    en: 'Open to working with NGOs, think tanks, newsrooms and public sector teams.',
  },
  themeLabel: { es: 'Cambiar modo claro u oscuro', en: 'Toggle light and dark mode' },
  avatarAlt: { es: 'Retrato ilustrado de Santiago', en: 'Illustrated portrait of Santiago' },
  colophon: {
    es: 'Hecho con React, TypeScript y Vite. Programado en pareja con Claude Code.',
    en: 'Built with React, TypeScript and Vite. Pair-programmed with Claude Code.',
  },
};


export type Project = {
  id: string;
  name: string;
  image: string;
  tagline: L;
  site: string;
  repo: string;
};

export const projects: Project[] = [
  {
    id: 'como-vota',
    name: '¿Cómo vota?',
    image: '/projects/como-vota.svg',
    tagline: {
      es: 'Cómo votan los bloques del Congreso argentino y quién vota en disidencia, votación por votación.',
      en: "How the blocs in Argentina's Congress vote and who dissents, one roll call at a time.",
    },
    site: 'https://congreso-tracker.vercel.app',
    repo: 'https://github.com/santiagodovalb/congreso-tracker',
  },
  {
    id: 'ia-regulacion',
    name: '¿Cómo se regula la IA?',
    image: '/projects/ia-regulacion.svg',
    tagline: {
      es: 'Cómo regulan la inteligencia artificial seis países de América Latina, comparados con la Unión Europea, Estados Unidos y China.',
      en: 'How six Latin American countries regulate artificial intelligence, compared with the European Union, the United States and China.',
    },
    site: 'https://ia-regulacion.vercel.app',
    repo: 'https://github.com/santiagodovalb/ia-regulacion',
  },
  {
    id: 'boletin',
    name: 'Boletín en criollo',
    image: '/projects/boletin.svg',
    tagline: {
      es: 'Cada norma que publica el Estado nacional, resumida en castellano simple y ordenada según cuánto afecta a la gente.',
      en: 'Every rule Argentina’s national government publishes, summarized in plain Spanish and ranked by how much it affects people.',
    },
    site: 'https://boletin-monitor-nine.vercel.app',
    repo: 'https://github.com/santiagodovalb/boletin-monitor',
  },
];

export const education = {
  degree: { es: 'Licenciatura en Ciencia Política', en: 'BA in Political Science' },
  school: { es: 'Universidad de Buenos Aires (UBA)', en: 'University of Buenos Aires (UBA)' },
  period: { es: '2022 — en curso', en: '2022 — in progress' },
};

export const tools = 'TypeScript · React · Node.js · PostgreSQL · Claude API';

export type Item = { title: L; org: string; period: L; summary: L; bullets: L[] };

const fullStack = { es: 'Desarrollador full-stack', en: 'Full-stack developer' };

export const items: Item[] = [
  {
    title: { es: 'Ingeniero full-stack', en: 'Full-stack engineer' },
    org: 'Directo · Arcadia Tech',
    period: { es: '2024 — hoy', en: '2024 — now' },
    summary: {
      es: 'Fintech de préstamos al consumo: compras en cuotas en comercios, préstamos digitales y en efectivo.',
      en: 'Consumer-lending fintech: installment purchases at merchants, digital and cash loans.',
    },
    bullets: [
      {
        es: 'Construí desde cero el backoffice y la app de prospectos comerciales, y los flujos de préstamos y cuotas que usan los clientes.',
        en: 'Built the backoffice and merchant-prospects apps from scratch, plus the loan and installment flows customers use.',
      },
      {
        es: 'Instrumenté las apps con datos de producción en New Relic, la señal sobre la que hoy corre el análisis automatizado del equipo.',
        en: 'Instrumented the apps with production data in New Relic, the signal the team’s automated analysis now runs on.',
      },
      {
        es: 'Escribí los flujos de trabajo con agentes de IA (Claude Code) que el equipo usa a diario.',
        en: 'Wrote the AI agent workflows (Claude Code) the team uses every day.',
      },
    ],
  },
  {
    title: fullStack,
    org: 'Librodepases',
    period: same('2023 — 2024'),
    summary: { es: 'Plataforma de estadísticas de fútbol.', en: 'Football analytics platform.' },
    bullets: [
      {
        es: 'Construí la comparación de jugadores, una de las funciones diferenciales del producto, sobre una API de estadísticas en evolución.',
        en: 'Built player comparison, one of the product’s standout features, on top of an evolving stats API.',
      },
    ],
  },
  {
    title: fullStack,
    org: 'Sportclub',
    period: same('2023'),
    summary: {
      es: 'App de clientes para una de las redes de gimnasios más grandes de Argentina.',
      en: 'Customer app for one of Argentina’s largest gym networks.',
    },
    bullets: [
      {
        es: 'Lideré un equipo de seis personas hasta lanzar la app, hoy usada por miles de socios.',
        en: 'Led a team of six to launch the app, now used by thousands of members.',
      },
    ],
  },
  {
    title: { es: 'Desarrollador React', en: 'React developer' },
    org: 'Altimetrik',
    period: same('2022'),
    summary: {
      es: 'Contratista para Putnam Investments, gestora de inversiones de EE. UU.',
      en: 'Contractor for Putnam Investments, a US asset manager.',
    },
    bullets: [
      {
        es: 'Desarrollé funciones del sitio donde los inversores gestionan sus cuentas, y acompañé a los desarrolladores junior del equipo.',
        en: 'Built features for the site investors use to manage their accounts, and mentored the team’s junior developers.',
      },
    ],
  },
  {
    title: { es: 'Profesor asistente', en: 'Teaching assistant' },
    org: 'Plataforma 5',
    period: same('2021'),
    summary: { es: 'Bootcamp intensivo de programación full-stack.', en: 'Intensive full-stack coding bootcamp.' },
    bullets: [
      {
        es: 'Acompañé a unos 30 alumnos en sus proyectos y corregí exámenes con devoluciones escritas.',
        en: 'Mentored about 30 students through their projects and graded exams with written feedback.',
      },
    ],
  },
];
