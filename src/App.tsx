import { useEffect, useState } from 'react';
import { copy, flow, items, stackGroups, type Group, type Item, type L, type Lang, type Tech } from './data';

const EMAIL = 'santiagodovalb@gmail.com';
const GITHUB = 'https://github.com/santiagodovalb';
const LINKEDIN = 'https://www.linkedin.com/in/santiagodovalb/';

// Illustrative session shown in the hero terminal. Terminal output stays in English in both languages.
const session = [
  ['cmd', '/start FRON-482'],
  ['out', 'Read ticket “Show pending transfers on home”'],
  ['out', 'Assigned · moved to In progress · branch FRON-482'],
  ['cmd', 'build it, match the mobile screen'],
  ['out', 'web-app-parity: 3 differences found'],
  ['out', 'Edited 4 files'],
  ['cmd', '/ship'],
  ['out', 'Jest passed · ESLint clean · conventions review ok'],
  ['ok', 'PR opened → develop · Jira updated'],
] as const;

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'es') return saved;
  } catch {}
  return navigator.language.startsWith('es') ? 'es' : 'en';
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [selected, setSelected] = useState<Set<Tech>>(new Set());
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

  const toggle = (tech: Tech) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(tech) ? next.delete(tech) : next.add(tech);
      return next;
    });

  // Match any checked tech; nothing checked shows everything.
  const visible = items.filter((i) => selected.size === 0 || i.stack.some((s) => selected.has(s)));
  const count = (tech: Tech) => items.filter((i) => i.stack.includes(tech)).length;

  return (
    <>
      <nav className="nav">
        <a href="#top" className="nav-name">
          Santiago Doval
        </a>
        <div className="nav-links">
          <a href="#ai">{t(copy.nav.ai)}</a>
          <a href="#work">{t(copy.nav.work)}</a>
          <a href="#contact">{t(copy.nav.contact)}</a>
          <div className="lang" role="group" aria-label="Language / Idioma">
            {(['en', 'es'] as const).map((l) => (
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
            <a className="btn primary" href="#work">
              {t(copy.seeWork)}
            </a>
            <a className="btn" href={`mailto:${EMAIL}`}>
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

        <figure className="terminal" aria-label={t(copy.terminalLabel)}>
          <div className="terminal-bar">
            <span />
            <span />
            <span />
            <small>claude · ui-directo</small>
          </div>
          <ol>
            {session.map(([kind, text], i) => (
              <li key={i} className={kind} style={{ '--i': i } as React.CSSProperties}>
                {text}
              </li>
            ))}
            <li className="cursor" style={{ '--i': session.length } as React.CSSProperties} aria-hidden />
          </ol>
          <figcaption>{t(copy.illustrative)}</figcaption>
        </figure>
      </header>

      <section className="wrap section" id="ai">
        <h2>{t(copy.aiTitle)}</h2>
        <p className="section-lead">{t(copy.aiLead)}</p>
        <ol className="flow">
          {flow.map((f, i) => (
            <li key={f.cmd} className="reveal">
              <span className="flow-n">0{i + 1}</span>
              <h3>{t(f.step)}</h3>
              <code>{f.cmd}</code>
              <p>{t(f.text)}</p>
              {f.mine && <span className="badge">{t(copy.wroteSkill)}</span>}
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section" id="work">
        <h2>{t(copy.nav.work)}</h2>
        <p className="section-lead">{t(copy.workLead)}</p>

        <div className="work">
          <aside className="filter">
            {Object.entries(stackGroups).map(([group, techs]) => (
              <fieldset key={group}>
                <legend>{t(copy.groups[group as Group])}</legend>
                {techs.map((tech) => (
                  <label key={tech} className="check">
                    <input type="checkbox" checked={selected.has(tech)} onChange={() => toggle(tech)} />
                    <span>{tech}</span>
                    <small>{count(tech)}</small>
                  </label>
                ))}
              </fieldset>
            ))}
            <div className="filter-foot">
              <span aria-live="polite">
                {visible.length} {t(copy.of)} {items.length}
              </span>
              {selected.size > 0 && (
                <button type="button" onClick={() => setSelected(new Set())}>
                  {t(copy.clear)}
                </button>
              )}
            </div>
          </aside>

          <div className="results">
            {visible.map((i) => (
              <Card key={i.org} item={i} t={t} selected={selected} toggle={toggle} />
            ))}
          </div>
        </div>
      </section>

      <footer className="wrap contact" id="contact">
        <img src="/avatar.png" alt={t(copy.avatarAlt)} width={160} height={160} />
        <h2>
          {t(copy.contactTitle)} <em>{t(copy.contactEm)}</em>
        </h2>
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

type CardProps = { item: Item; t: (l: L) => string; selected: Set<Tech>; toggle: (tech: Tech) => void };

function Card({ item, t, selected, toggle }: CardProps) {
  return (
    <article className="card reveal">
      <header>
        <h4>{item.org}</h4>
        <span className="period">{t(item.period)}</span>
      </header>
      <p className="role">{t(item.title)}</p>
      <p>{t(item.summary)}</p>
      {item.bullets && (
        <ul>
          {item.bullets.map((b) => (
            <li key={b.en}>{t(b)}</li>
          ))}
        </ul>
      )}
      <div className="tags">
        {item.stack.map((tech) => (
          <button key={tech} type="button" aria-pressed={selected.has(tech)} onClick={() => toggle(tech)}>
            {tech}
          </button>
        ))}
      </div>
    </article>
  );
}
