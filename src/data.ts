export type Lang = 'en' | 'es';
export type L = Record<Lang, string>;

export const stackGroups = {
  'Web & mobile': ['React', 'Next.js', 'React Native', 'TypeScript', 'Redux', 'MUI'],
  'Backend & data': ['Node.js', 'PostgreSQL'],
  'Quality & AI': ['Claude Code', 'Jest', 'Cypress', 'Turborepo'],
} as const;

export type Group = keyof typeof stackGroups;
export type Tech = (typeof stackGroups)[Group][number];

export const copy = {
  nav: { ai: { en: 'AI workflow', es: 'Flujo con IA' }, work: { en: 'Experience', es: 'Experiencia' }, contact: { en: 'Contact', es: 'Contacto' } },
  eyebrow: { en: 'Full-stack engineer · Buenos Aires', es: 'Ingeniero full-stack · Buenos Aires' },
  lead: {
    en: 'I build fintech products across web and mobile with React, Next.js, React Native and Node, and the Claude Code workflows that take them from ticket to production.',
    es: 'Construyo productos fintech en web y mobile con React, Next.js, React Native y Node, y los flujos con Claude Code que los llevan del ticket a producción.',
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
      en: 'Frontend platform for a payments fintech serving merchants and their customers.',
      es: 'Plataforma frontend de una fintech de pagos para comercios y sus clientes.',
    },
    bullets: [
      {
        en: 'Build and maintain six Next.js apps (merchants, customers, onboarding, backoffice, prospects and a Tienda Nube integration) plus the React Native customer app, in one Turborepo monorepo with shared UI and typed API packages.',
        es: 'Desarrollo y mantengo seis apps en Next.js (comercios, clientes, onboarding, backoffice, prospectos y una integración con Tienda Nube) y la app de clientes en React Native, en un monorepo Turborepo con paquetes compartidos de UI y APIs tipadas.',
      },
      {
        en: 'Wrote the team’s Claude Code skills that take a Jira ticket to a pull request: /start reads, assigns and branches; /ship runs tests, lint and a conventions review, commits, opens the PR and reports back to Jira.',
        es: 'Escribí las skills de Claude Code del equipo que llevan un ticket de Jira a un pull request: /start lee, asigna y crea el branch; /ship corre tests, lint y revisión de convenciones, commitea, abre el PR y actualiza Jira.',
      },
      {
        en: 'Work daily with a shared agent toolkit: subagents for test runs, convention reviews, UI copy audits and New Relic production triage that feeds the backlog.',
        es: 'Trabajo a diario con un kit de agentes compartido: subagentes para correr tests, revisar convenciones, auditar textos de UI y hacer triage de producción en New Relic que alimenta el backlog.',
      },
      {
        en: '400+ commits across web and mobile, with Jest unit tests and Cypress E2E on critical flows.',
        es: 'Más de 400 commits entre web y mobile, con tests unitarios en Jest y E2E en Cypress sobre los flujos críticos.',
      },
    ],
    stack: ['Next.js', 'React', 'React Native', 'TypeScript', 'Redux', 'MUI', 'Jest', 'Cypress', 'Turborepo', 'Claude Code'],
  },
  {
    title: fullStack,
    org: 'Librodepases',
    period: same('2023 — 2024'),
    summary: { en: 'Football statistics web app.', es: 'Aplicación web de estadísticas de fútbol.' },
    bullets: [
      { en: 'Owned the player comparison feature end to end.', es: 'Owner de punta a punta de la comparación de jugadores.' },
      { en: 'Continuous integration with the stats REST API.', es: 'Integración continua con la API REST de estadísticas.' },
    ],
    stack: ['React', 'TypeScript'],
  },
  {
    title: fullStack,
    org: 'Sportclub',
    period: same('2023'),
    summary: { en: 'Customer app for a gym network.', es: 'App de clientes para una red de gimnasios.' },
    bullets: [
      { en: 'Led the frontend and backend teams.', es: 'Lideré los equipos de frontend y backend.' },
      { en: 'Built the customer mobile app.', es: 'Desarrollé la app mobile de clientes.' },
      { en: 'Set up the microservices structure.', es: 'Armé la estructura de microservicios.' },
    ],
    stack: ['React Native', 'Node.js', 'TypeScript'],
  },
  {
    title: { en: 'React developer', es: 'Desarrollador React' },
    org: 'Altimetrik',
    period: same('2022'),
    summary: {
      en: 'Investor-facing site for Putnam Investments, a US fintech.',
      es: 'Sitio para inversores de Putnam Investments, una fintech de EE. UU.',
    },
    bullets: [
      {
        en: 'Server-side rendered React frontend, unit tests on every component.',
        es: 'Frontend en React con server-side rendering y tests unitarios en cada componente.',
      },
      {
        en: 'Picked up Node backend tickets and demoed features to the client.',
        es: 'Tomé tickets de backend en Node y presenté features al cliente.',
      },
      { en: 'Supported junior developers.', es: 'Acompañé a desarrolladores junior.' },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Jest'],
  },
  {
    title: { en: 'Teaching assistant, full-stack bootcamp', es: 'Profesor asistente, bootcamp full-stack' },
    org: 'Plataforma 5',
    period: same('2021'),
    summary: {
      en: 'Mentored students through their professional projects.',
      es: 'Mentoría técnica a alumnos en sus proyectos profesionales.',
    },
    bullets: [
      { en: 'Reviewed and graded exams and projects.', es: 'Corrección y devolución de evaluaciones y proyectos.' },
      {
        en: 'Built an internal web app for students and assistants.',
        es: 'Desarrollé una aplicación web interna para alumnos y asistentes.',
      },
    ],
    stack: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
  },
];
