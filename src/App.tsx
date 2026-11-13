import { useEffect, useState } from 'react';
import { copy, education, items, projects, tools, type Item, type L, type Lang, type Project } from './data';

const EMAIL = 'santiagodovalb@gmail.com';
const GITHUB = 'https://github.com/santiagodovalb';
const LINKEDIN = 'https://www.linkedin.com/in/santiagodovalb/';

// Spanish by default: the audience is Argentine NGOs, think tanks and media. A saved choice wins.
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'es') return saved;
  } catch {}
  return 'es';
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  );
  const t = (l: L) => l[lang];

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  return (
    <>
      <nav className="nav">
        <a href="#top" className="nav-name">
          Santiago Doval
        </a>
        <div className="nav-links">
          <a href="#projects">{t(copy.nav.projects)}</a>
          <a href="#work">{t(copy.nav.work)}</a>
          <a href="#contact">{t(copy.nav.contact)}</a>
          <div className="lang" role="group" aria-label="Idioma / Language">
            {(['es', 'en'] as const).map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" className="theme" onClick={toggleTheme} aria-label={t(copy.themeLabel)}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </nav>

      <header className="hero wrap" id="top">
        <div className="hero-text">
          <p className="eyebrow">{t(copy.eyebrow)}</p>
          <h1>
            Santiago <em>Doval</em>
          </h1>
          <p className="lead">{t(copy.lead)}</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${EMAIL}`}>
              {t(copy.getInTouch)}
            </a>
          </div>
          <dl className="stats">
            {copy.stats.map((s) => (
              <div key={s.label.en}>
                <dt>{t(s.value)}</dt>
                <dd>{t(s.label)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section className="hero-projects" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title" className="kicker">
            {t(copy.nav.projects)}
          </h2>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} t={t} />
          ))}
        </section>
      </header>

      <section className="wrap section" id="work">
        <h2>{t(copy.nav.work)}</h2>
        <p className="section-lead">{t(copy.workLead)}</p>

        <div className="work">
          <aside className="side">
            <h3>{t(copy.education)}</h3>
            <p className="edu-degree">{t(education.degree)}</p>
            <p>{t(education.school)}</p>
            <p className="period">{t(education.period)}</p>
            <h3>{t(copy.tools)}</h3>
            <p className="tools">{tools}</p>
          </aside>

          <div className="results">
            {items.map((i) => (
              <Card key={i.org} item={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      <footer className="wrap contact" id="contact">
        <img src="/avatar.png" alt={t(copy.avatarAlt)} width={160} height={160} />
        <h2>
          <em>{t(copy.contactTitle)}</em>
        </h2>
        <p className="contact-lead">{t(copy.contactLead)}</p>
        <a className="email" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <div className="actions">
          <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="colophon">{t(copy.colophon)}</p>
      </footer>
    </>
  );
}

function ProjectCard({ project: p, t }: { project: Project; t: (l: L) => string }) {
  return (
    <article className="project" id={p.id}>
      <header className="project-head">
        <img className="project-icon" src={p.image} alt="" />
        <h3>{p.name}</h3>
      </header>
      <p className="project-tagline">{t(p.tagline)}</p>
      <nav className="project-links">
        <a href={p.site} target="_blank" rel="noreferrer">
          {t(copy.visit)} ↗
        </a>
        <a href={p.repo} target="_blank" rel="noreferrer">
          {t(copy.code)} ↗
        </a>
      </nav>
    </article>
  );
}

function Card({ item, t }: { item: Item; t: (l: L) => string }) {
  return (
    <article className="card">
      <header>
        <h4>{item.org}</h4>
        <span className="period">{t(item.period)}</span>
      </header>
      <p className="role">{t(item.title)}</p>
      <p>{t(item.summary)}</p>
      <ul>
        {item.bullets.map((b) => (
          <li key={b.en}>{t(b)}</li>
        ))}
      </ul>
    </article>
  );
}
