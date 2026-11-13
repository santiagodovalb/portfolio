export type Lang = 'en' | 'es';
export type L = Record<Lang, string>;

export const stackGroups = {
  'Web & mobile': ['React', 'Next.js', 'React Native', 'TypeScript', 'Redux', 'MUI'],
  'Backend & data': ['Node.js', 'PostgreSQL', 'Firebase'],
  'Quality & AI': ['Claude Code', 'Jest', 'Cypress', 'New Relic', 'Turborepo'],
} as const;

export type Group = keyof typeof stackGroups;
export type Tech = (typeof stackGroups)[Group][number];

export const copy = {
  nav: { ai: { en: 'AI workflow', es: 'Flujo con IA' }, work: { en: 'Experience', es: 'Experiencia' }, contact: { en: 'Contact', es: 'Contacto' } },
  eyebrow: { en: 'Frontend & product engineer · Buenos Aires', es: 'Ingeniero frontend y de producto · Buenos Aires' },
  lead: {
    en: 'I build web and mobile products with React, Next.js and React Native, owning features from idea to production, from consumer lending to sports data. I also build the Claude Code workflows that ship them.',
    es: 'Construyo productos web y mobile con React, Next.js y React Native, y me hago cargo de las features desde la idea hasta producción, de préstamos al consumo a estadísticas deportivas. También armo los flujos con Claude Code que las entregan.',
  },
  seeWork: { en: 'See my work', es: 'Ver mi trabajo' },
  getInTouch: { en: 'Get in touch', es: 'Contactame' },
  stats: [
    { value: { en: '5+ years', es: '5+ años' }, label: { en: 'shipping production software', es: 'llevando software a producción' } },
    { value: { en: '7 apps', es: '7 apps' }, label: { en: 'web and mobile at Directo', es: 'web y mobile en Directo' } },
    { value: { en: 'Daily', es: 'A diario' }, label: { en: 'Claude Code in the loop', es: 'Claude Code en el flujo' } },
  ],
  terminalLabel: { en: 'Example Claude Code session', es: 'Ejemplo de sesión de Claude Code' },
  illustrative: { en: 'Illustrative session', es: 'Sesión ilustrativa' },
  aiTitle: { en: 'How I ship with agents', es: 'Cómo entrego con agentes' },
  aiLead: {
    en: 'The point isn’t writing less code. It’s spending my attention on product decisions and review, and letting the repetitive parts run automated and checked.',
    es: 'La idea no es escribir menos código. Es poner mi atención en decisiones de producto y revisión, y dejar que lo repetitivo corra automatizado y verificado.',
  },
  wroteSkill: { en: 'I wrote this skill', es: 'Escribí esta skill' },
  workLead: {
    en: 'Check the tools you’re hiring for to see where I’ve used them.',
    es: 'Marcá las herramientas que buscás para ver dónde las usé.',
  },
  groups: {
    'Web & mobile': { en: 'Web & mobile', es: 'Web y mobile' },
    'Backend & data': { en: 'Backend & data', es: 'Backend y datos' },
    'Quality & AI': { en: 'Quality & AI', es: 'Calidad e IA' },
  } satisfies Record<Group, L>,
  of: { en: 'of', es: 'de' },
  themeLabel: { en: 'Toggle light and dark mode', es: 'Cambiar modo claro u oscuro' },
  clear: { en: 'Clear', es: 'Limpiar' },
  contactTitle: { en: 'Let’s build', es: 'Construyamos' },
  contactEm: { en: 'something.', es: 'algo.' },
  avatarAlt: { en: 'Illustrated portrait of Santiago', es: 'Retrato ilustrado de Santiago' },
  colophon: {
    en: 'Built with React, TypeScript and Vite. Pair-programmed with Claude Code.',
    es: 'Hecho con React, TypeScript y Vite. Programado en pareja con Claude Code.',
  },
};

export const flow: { step: L; cmd: string; text: L; mine?: boolean }[] = [
  {
    step: { en: 'Ticket → branch', es: 'Ticket → branch' },
    cmd: '/start',
    text: {
      en: 'Reads the Jira ticket, assigns it, moves it to In progress and cuts the branch from develop. Without a ticket, it drafts one.',
      es: 'Lee el ticket de Jira, lo asigna, lo pasa a En curso y crea el branch desde develop. Sin ticket, redacta uno.',
    },
    mine: true,
  },
  {
    step: { en: 'Build with guardrails', es: 'Construir con guardrails' },
    cmd: 'CLAUDE.md + subagents',
    text: {
      en: 'The agent works inside the monorepo’s written conventions. Subagents run Jest and ESLint and review the diff against team rules before anything leaves my machine.',
      es: 'El agente trabaja dentro de las convenciones escritas del monorepo. Los subagentes corren Jest y ESLint y revisan el diff contra las reglas del equipo antes de que algo salga de mi máquina.',
    },
  },
  {
    step: { en: 'Branch → PR', es: 'Branch → PR' },
    cmd: '/ship',
    text: {
      en: 'Tests, lint and the conventions review, a Conventional Commit with the ticket key, the PR to develop and a comment back on the ticket.',
      es: 'Tests, lint y revisión de convenciones, un Conventional Commit con la clave del ticket, el PR a develop y un comentario en el ticket.',
    },
    mine: true,
  },
  {
    step: { en: 'Production → backlog', es: 'Producción → backlog' },
    cmd: 'nr-triage',
    text: {
      en: 'Agents read New Relic, compare against last week, rank regressions and conversion drops, and file tickets that come back into the loop.',
      es: 'Los agentes leen New Relic, comparan con la semana anterior, priorizan regresiones y caídas de conversión, y crean tickets que vuelven al ciclo.',
    },
  },
];

export type Item = {
  title: L;
  org: string;
  period: L;
  summary: L;
  bullets?: L[];
  stack: Tech[];
};

const fullStack = { en: 'Full-stack developer', es: 'Desarrollador full-stack' };
const same = (s: string): L => ({ en: s, es: s });

export const items: Item[] = [
  {
    title: { en: 'Full-stack engineer', es: 'Ingeniero full-stack' },
    org: 'Directo · Arcadia Tech',
    period: { en: '2024 — now', es: '2024 — hoy' },
    summary: {
      en: 'Consumer-lending fintech: installment purchases at merchants, digital and cash loans. Core engineer on a three-person frontend team, with 400+ commits across six Next.js apps and a React Native app.',
      es: 'Fintech de préstamos al consumo: compras en cuotas en comercios, préstamos digitales y en efectivo. Ingeniero central en un equipo frontend de tres personas, con más de 400 commits en seis apps Next.js y una app React Native.',
    },
    bullets: [
      {
        en: 'Created the backoffice and merchant-prospects apps from scratch: OTP login, document upload and review, prospect editing and filters, and streamed downloads that work around file-size limits.',
        es: 'Creé desde cero las apps de backoffice y de prospectos comerciales: login con OTP, carga y revisión de documentos, edición y filtros de prospectos, y descargas por stream que esquivan los límites de tamaño.',
      },
      {
        en: 'Shipped merchant onboarding, loan and installment flows, customer operations with PDF/CSV exports, and the Tienda Nube e-commerce integration.',
        es: 'Entregué el onboarding de comercios, los flujos de préstamos y cuotas, las operaciones de clientes con exportación a PDF/CSV y la integración con Tienda Nube.',
      },
      {
        en: 'Made the React Native app faster at startup and between tabs by deferring screen mounts, and added Android deep linking and Firebase push notifications.',
        es: 'Hice más rápida la app React Native al iniciar y al cambiar de tab difiriendo el montaje de pantallas, y sumé deep linking en Android y push notifications con Firebase.',
      },
      {
        en: 'Instrumented the apps with New Relic error events, the production signal the team’s automated triage now runs on.',
        es: 'Instrumenté las apps con eventos de error en New Relic, la señal de producción sobre la que hoy corre el triage automatizado del equipo.',
      },
      {
        en: 'Wrote the team’s Claude Code skills that take a Jira ticket to a reviewed pull request (/start, /ship), and work daily with shared subagents for testing, convention review and production triage.',
        es: 'Escribí las skills de Claude Code del equipo que llevan un ticket de Jira a un pull request revisado (/start, /ship), y trabajo a diario con subagentes compartidos para tests, revisión de convenciones y triage de producción.',
      },
    ],
    stack: ['Next.js', 'React', 'React Native', 'TypeScript', 'Redux', 'MUI', 'Firebase', 'Jest', 'Cypress', 'New Relic', 'Turborepo', 'Claude Code'],
  },
  {
    title: fullStack,
    org: 'Librodepases',
    period: same('2023 — 2024'),
    summary: { en: 'Football analytics platform.', es: 'Plataforma de estadísticas de fútbol.' },
    bullets: [
      {
        en: 'Built player comparison from scratch, a new feature that became a selling point of the product, covering players and teams from every league in the world.',
        es: 'Construí desde cero la comparación de jugadores, una feature nueva que se volvió un diferencial del producto, con jugadores y equipos de todas las ligas del mundo.',
      },
      {
        en: 'Kept the web app in step with an evolving stats REST API, shipping new views as data was added.',
        es: 'Mantuve la web al día con una API REST de estadísticas en evolución, sumando vistas a medida que llegaban nuevos datos.',
      },
    ],
    stack: ['React', 'TypeScript'],
  },
  {
    title: fullStack,
    org: 'Sportclub',
    period: same('2023'),
    summary: {
      en: 'Customer app for one of Argentina’s largest gym networks.',
      es: 'App de clientes para una de las redes de gimnasios más grandes de Argentina.',
    },
    bullets: [
      {
        en: 'Led a team of six (three frontend, three backend) to ship the customer app, now in production and used by thousands of members.',
        es: 'Lideré un equipo de seis personas (tres frontend, tres backend) hasta lanzar la app de clientes, hoy en producción y usada por miles de socios.',
      },
      { en: 'Built the React Native app members use day to day.', es: 'Desarrollé la app React Native que usan los socios a diario.' },
      {
        en: 'Designed the microservices layout behind it.',
        es: 'Diseñé la estructura de microservicios que la sostiene.',
      },
    ],
    stack: ['React Native', 'Node.js', 'TypeScript'],
  },
  {
    title: { en: 'React developer', es: 'Desarrollador React' },
    org: 'Altimetrik',
    period: same('2022'),
    summary: {
      en: 'Contractor for Putnam Investments, a US asset manager.',
      es: 'Contratista para Putnam Investments, gestora de inversiones de EE. UU.',
    },
    bullets: [
      {
        en: 'Built features for the server-rendered React site investors use to manage their accounts, with unit tests on every component.',
        es: 'Desarrollé features del sitio React con server-side rendering donde los inversores gestionan sus cuentas, con tests unitarios en cada componente.',
      },
      {
        en: 'Took Node backend tickets and presented finished features in client demos.',
        es: 'Tomé tickets de backend en Node y presenté las features terminadas en demos con el cliente.',
      },
      { en: 'Mentored junior developers on the team.', es: 'Acompañé a los desarrolladores junior del equipo.' },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Jest'],
  },
  {
    title: { en: 'Teaching assistant, full-stack bootcamp', es: 'Profesor asistente, bootcamp full-stack' },
    org: 'Plataforma 5',
    period: same('2021'),
    summary: {
      en: 'Intensive full-stack JavaScript bootcamp.',
      es: 'Bootcamp intensivo de JavaScript full-stack.',
    },
    bullets: [
      {
        en: 'Mentored about 30 students through their full-stack projects with React, Node and SQL.',
        es: 'Acompañé a unos 30 alumnos en sus proyectos full-stack con React, Node y SQL.',
      },
      {
        en: 'Reviewed and graded exams and projects with written feedback.',
        es: 'Corregí exámenes y proyectos con devoluciones escritas.',
      },
      {
        en: 'Built the internal office-hours app students and assistants used to request and run help sessions.',
        es: 'Desarrollé la app interna de consultas que usaban alumnos y asistentes para pedir y dar ayuda.',
      },
    ],
    stack: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
  },
];
