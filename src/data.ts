export const stackGroups = {
  'Web & mobile': ['React', 'Next.js', 'React Native', 'TypeScript', 'Redux', 'MUI', 'Tailwind'],
  'Backend & data': ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Firebase'],
  'Quality & AI': ['Claude Code', 'Jest', 'Cypress', 'Turborepo'],
} as const;

export type Tech = (typeof stackGroups)[keyof typeof stackGroups][number];

export type Item = {
  kind: 'job' | 'project';
  title: string;
  org?: string;
  period: string;
  summary: string;
  bullets?: string[];
  stack: Tech[];
  url?: string;
};

export const items: Item[] = [
  {
    kind: 'job',
    title: 'Full-stack engineer',
    org: 'Directo · Arcadia Tech',
    period: '2024 — now',
    summary: 'Frontend platform for a payments fintech serving merchants and their customers.',
    bullets: [
      'Build and maintain six Next.js apps (merchants, customers, onboarding, backoffice, prospects and a Tienda Nube integration) plus the React Native customer app, in one Turborepo monorepo with shared UI and typed API packages.',
      'Wrote the team’s Claude Code skills that take a Jira ticket to a pull request: /start reads, assigns and branches; /ship runs tests, lint and a conventions review, commits, opens the PR and reports back to Jira.',
      'Work daily with a shared agent toolkit: subagents for test runs, convention reviews, UI copy audits and New Relic production triage that feeds the backlog.',
      '400+ commits across web and mobile, with Jest unit tests and Cypress E2E on critical flows.',
    ],
    stack: ['Next.js', 'React', 'React Native', 'TypeScript', 'Redux', 'MUI', 'Jest', 'Cypress', 'Turborepo', 'Claude Code'],
  },
  {
    kind: 'job',
    title: 'Full-stack developer',
    org: 'Librodepases',
    period: '2023 — 2024',
    summary: 'Football statistics web app.',
    bullets: ['Owned the player comparison feature end to end.', 'Continuous integration with the stats REST API.'],
    stack: ['React', 'TypeScript'],
  },
  {
    kind: 'job',
    title: 'Full-stack developer',
    org: 'Sportclub',
    period: '2023',
    summary: 'Customer app for a gym network.',
    bullets: [
      'Led the frontend and backend teams.',
      'Built the customer mobile app.',
      'Set up the microservices structure.',
    ],
    stack: ['React Native', 'Node.js', 'TypeScript'],
  },
  {
    kind: 'job',
    title: 'React developer',
    org: 'Altimetrik',
    period: '2022',
    summary: 'Investor-facing site for Putnam Investments, a US fintech.',
    bullets: [
      'Server-side rendered React frontend, unit tests on every component.',
      'Picked up Node backend tickets and demoed features to the client.',
      'Supported junior developers.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Jest'],
  },
  {
    kind: 'job',
    title: 'Teaching assistant, full-stack bootcamp',
    org: 'Plataforma 5',
    period: '2021',
    summary: 'Mentored students through their professional projects.',
    bullets: ['Reviewed and graded exams and projects.', 'Built an internal web app for students and assistants.'],
    stack: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
  },
  {
    kind: 'project',
    title: 'Production monitor',
    period: '2026',
    summary: 'Dashboard to track parts production on a factory floor.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://monitor-piezas-vaistij.vercel.app',
  },
  {
    kind: 'project',
    title: 'InfoPills',
    period: '2024',
    summary: 'React frontend over a FastAPI + SQLAlchemy backend with scheduled jobs.',
    stack: ['React', 'TypeScript', 'Python', 'FastAPI'],
    url: 'https://info-pills-frontend.vercel.app',
  },
  {
    kind: 'project',
    title: 'PastelApp bot',
    period: '2024',
    summary: 'Telegram bot served from a FastAPI app.',
    stack: ['Python', 'FastAPI'],
    url: 'https://github.com/santiagodovalb/pastelApp-bot',
  },
  {
    kind: 'project',
    title: 'PlayGreen Sports',
    period: '2023',
    summary: 'Sports app with Firebase auth and data.',
    stack: ['React', 'TypeScript', 'Firebase'],
    url: 'https://play-green-sports.vercel.app',
  },
  {
    kind: 'project',
    title: 'La Academia de Papel',
    period: '2021',
    summary: 'Website for an anthropology outreach channel.',
    stack: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Firebase'],
    url: 'https://laacademiadepapel.com.ar/',
  },
  {
    kind: 'project',
    title: 'TECHO Formación',
    period: '2021',
    summary: 'E-learning platform to train volunteers of the NGO TECHO.',
    stack: ['React', 'Redux', 'Node.js'],
    url: 'http://formacion.techo.org.ar/',
  },
  {
    kind: 'project',
    title: 'OMDB',
    period: '2021',
    summary: 'Movie database with search, sign-up and favourites.',
    stack: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    url: 'https://omdb-webapp.netlify.app',
  },
  {
    kind: 'project',
    title: 'Sophia',
    period: '2021',
    summary: 'Website for the band Sophia.',
    stack: ['React'],
    url: 'https://sophiamusica.netlify.app/',
  },
];
