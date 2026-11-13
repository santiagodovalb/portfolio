export type Lang = 'es' | 'en';
export type L = Record<Lang, string>;

const same = (s: string): L => ({ es: s, en: s });

export const copy = {
  nav: {
    projects: { es: 'Proyectos', en: 'Projects' },
    work: { es: 'Experiencia', en: 'Experience' },
    contact: { es: 'Contacto', en: 'Contact' },
  },
  eyebrow: { es: 'Tecnología y política pública · Buenos Aires', en: 'Technology and public policy · Buenos Aires' },
  lead: {
    es: 'Ingeniero de software y estudiante de Ciencia Política. Construyo herramientas que convierten datos públicos en evidencia sobre cómo nos gobernamos.',
    en: 'Software engineer and political science student. I build tools that turn public data into evidence about how we are governed.',
  },
  seeProjects: { es: 'Ver proyectos', en: 'See projects' },
  getInTouch: { es: 'Escribime', en: 'Get in touch' },
  stats: [
    { value: same('5+'), label: { es: 'años construyendo software', en: 'years building software' } },
    { value: same('UBA'), label: { es: 'Ciencia Política, desde 2022', en: 'Political Science, since 2022' } },
    { value: same('720'), label: { es: 'votaciones del Congreso analizadas', en: 'roll-call votes analyzed' } },
  ],
  areasTitle: { es: 'Áreas de interés', en: 'Areas of interest' },
  seeProject: { es: 'Ver proyecto', en: 'See project' },
  studying: { es: 'Área de estudio', en: 'Area of study' },
  projectsLead: {
    es: 'Herramientas cívicas con datos abiertos, con el método y sus límites a la vista.',
    en: 'Civic tools built on open data, with the method and its limits in plain sight.',
  },
  visit: { es: 'Ver el sitio', en: 'Visit the site' },
  code: { es: 'Código', en: 'Code' },
  education: { es: 'Formación', en: 'Education' },
  workLead: {
    es: 'Cinco años llevando software a producción. Lo que me llevo a esta etapa: trabajar con datos reales, liderar equipos y enseñar.',
    en: 'Five years shipping production software. What I bring to this stage: working with real data, leading teams and teaching.',
  },
  tools: { es: 'Herramientas', en: 'Tools' },
  contactTitle: { es: 'Hablemos de', en: "Let's talk" },
  contactEm: { es: 'datos públicos.', en: 'public data.' },
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

/** The three areas the portfolio is organized around. `project` links to the evidence, when there is some. */
export const areas: { title: L; text: L; project?: string }[] = [
  {
    title: { es: 'Investigación de políticas basada en datos', en: 'Data-driven policy research' },
    text: {
      es: 'Preguntas sobre las instituciones respondidas con datos abiertos: cómo votan los bloques, qué decide el Estado y a quién afecta.',
      en: 'Questions about institutions answered with open data: how blocs vote, what the state decides and who it affects.',
    },
    project: 'como-vota',
  },
  {
    title: { es: 'Visualización de datos sociales', en: 'Social data visualization' },
    text: {
      es: 'Gráficos que hacen legible la información pública para cualquiera, no solo para especialistas.',
      en: 'Charts that make public information legible to anyone, not just specialists.',
    },
    project: 'como-vota',
  },
  {
    title: { es: 'Gobernanza de la IA', en: 'AI governance' },
    text: {
      es: 'Cómo los distintos Estados regulan la inteligencia artificial, comparando sus enfoques. Lo miro desde la práctica: construyo con agentes de IA todos los días.',
      en: 'How different states regulate artificial intelligence, comparing their approaches. I look at it from practice: I build with AI agents every day.',
    },
  },
];

export type Project = {
  id: string;
  name: string;
  image: string;
  tagline: L;
  bullets: L[];
  tags: L[];
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
    bullets: [
      {
        es: 'Composición actual de Diputados (257 bancas) y del Senado (72) en un hemiciclo interactivo.',
        en: 'Current composition of the Chamber of Deputies (257 seats) and the Senate (72) in an interactive seat chart.',
      },
      {
        es: '720 votaciones nominales desde 2024, cada una con su desglose por bloque.',
        en: '720 roll-call votes since 2024, each broken down by bloc.',
      },
      {
        es: 'Tasa de disidencia por legislador, con el método y sus límites explicados: la fuente no registra todos los cambios de bloque, y el cálculo lo tiene en cuenta en lugar de inventar disidencias.',
        en: "A dissent rate for every legislator, with the method and its limits explained: the source doesn't record every bloc switch, and the calculation accounts for that instead of inventing dissent.",
      },
    ],
    tags: [
      { es: 'Datos abiertos', en: 'Open data' },
      { es: 'Visualización', en: 'Visualization' },
      { es: 'Congreso', en: 'Congress' },
    ],
    site: 'https://congreso-tracker.vercel.app',
    repo: 'https://github.com/santiagodovalb/congreso-tracker',
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
