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
    es: 'Ingeniero de software y estudiante de Ciencia Política. Quiero combinar mi conocimiento técnico y mi formación teórica para participar en proyectos con impacto real.',
    en: 'Software engineer and political science student. I want to combine my technical skills and my academic training to take part in projects with real impact.',
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
    es: 'Cinco años llevando software a producción. Lo que me llevo a esta etapa: trabajar colaborativamente para construir herramientas con impacto real, a partir del trabajo con datos y tecnología de vanguardia.',
    en: 'Five years shipping production software. What I bring to this stage: working with others to build tools with real impact, grounded in data and cutting-edge technology.',
  },
  tools: { es: 'Herramientas', en: 'Tools' },
  languages: { es: 'Idiomas', en: 'Languages' },
  languageList: { es: 'Español nativo · Inglés bilingüe', en: 'Spanish (native) · English (bilingual)' },
  contactTitle: { es: 'Charlemos.', en: "Let's talk." },
  contactLead: {
    es: 'Abierto a colaborar con medios y agencias de comunicación, centros de investigación y equipos de gobierno.',
    en: 'Open to working with newsrooms and communications agencies, think tanks and public sector teams.',
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
    site: 'https://comovota.santiagodoval.com.ar',
    repo: 'https://github.com/santiagodovalb/congreso-tracker',
  },
  {
    id: 'ia-regulacion',
    name: 'IA y el Estado',
    image: '/projects/ia-regulacion.svg',
    tagline: {
      es: 'Cómo regulan la inteligencia artificial los principales países de América Latina, comparados con la Unión Europea, Estados Unidos y China.',
      en: 'How the main Latin American countries regulate artificial intelligence, compared with the European Union, the United States and China.',
    },
    site: 'https://ia.santiagodoval.com.ar',
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
    site: 'https://boletin.santiagodoval.com.ar',
    repo: 'https://github.com/santiagodovalb/boletin-monitor',
  },
];

export const education = [
  {
    degree: { es: 'Licenciatura en Ciencia Política', en: 'BA in Political Science' },
    school: { es: 'Universidad de Buenos Aires (UBA)', en: 'University of Buenos Aires (UBA)' },
    period: { es: '2022 — en curso', en: '2022 — in progress' },
  },
  {
    degree: { es: 'Ciencia de datos', en: 'Data science' },
    school: same('Digital House'),
    period: same('2022'),
  },
];

export const tools = 'React · React Native · Next.js · Node.js · PostgreSQL · GraphQL · MySQL · TypeScript · Claude API';

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
        es: 'Construí desde cero el backoffice y la app de prospectos comerciales, así como los flujos de préstamos y cuotas que usan los clientes.',
        en: 'Built the backoffice and merchant-prospects apps from scratch, as well as the loan and installment flows customers use.',
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
    summary: {
      es: 'Plataforma de estadísticas de fútbol para equipos, agentes y jugadores.',
      en: 'Football analytics platform for clubs, agents and players.',
    },
    bullets: [
      {
        es: 'Construí la comparación de jugadores, una de las funciones diferenciales del producto, sobre una API con ligas de todo el mundo.',
        en: 'Built player comparison, one of the product’s standout features, on top of an API covering leagues worldwide.',
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
        es: 'Lideré los equipos de frontend y backend, construyendo sitios web dinámicos para campañas de marketing y una app usada por miles de socios.',
        en: 'Led the frontend and backend teams, building dynamic websites for marketing campaigns and an app used by thousands of members.',
      },
    ],
  },
  {
    title: { es: 'Desarrollador React', en: 'React developer' },
    org: 'Altimetrik',
    period: same('2022'),
    summary: {
      es: 'Desarrollo full-stack en Putnam Investments, gestora de inversiones de EE. UU.',
      en: 'Full-stack development at Putnam Investments, a US asset manager.',
    },
    bullets: [
      {
        es: 'Desarrollé funciones del sitio donde los inversores gestionan sus cuentas, presentando features al cliente y acompañando a los desarrolladores junior del equipo.',
        en: 'Built features for the site investors use to manage their accounts, presenting features to the client and mentoring the team’s junior developers.',
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
        es: 'Acompañé a unos 30 alumnos en sus clases, tareas y proyectos finales, y corregí exámenes con devoluciones escritas.',
        en: 'Supported about 30 students through their classes, assignments and final projects, and graded exams with written feedback.',
      },
    ],
  },
];
