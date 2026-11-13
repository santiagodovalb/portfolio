import { useState } from 'react';
import { items, stackGroups, type Item, type Tech } from './data';

const EMAIL = 'santiagodovalb@gmail.com';
const GITHUB = 'https://github.com/santiagodovalb';
const LINKEDIN = 'https://www.linkedin.com/in/santiagodovalb/';

// Illustrative session shown in the hero terminal.
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

const flow = [
  {
    step: 'Ticket → branch',
    cmd: '/start',
    text: 'Reads the Jira ticket, assigns it, moves it to In progress and cuts the branch from develop. Without a ticket, it drafts one.',
    mine: true,
  },
  {
    step: 'Build with guardrails',
    cmd: 'CLAUDE.md + subagents',
    text: 'The agent works inside the monorepo’s written conventions. Subagents run Jest and ESLint and review the diff against team rules before anything leaves my machine.',
  },
  {
    step: 'Branch → PR',
    cmd: '/ship',
    text: 'Tests, lint and the conventions review, a Conventional Commit with the ticket key, the PR to develop and a comment back on the ticket.',
    mine: true,
  },
  {
    step: 'Production → backlog',
    cmd: 'nr-triage',
    text: 'Agents read New Relic, compare against last week, rank regressions and conversion drops, and file tickets that come back into the loop.',
  },
];

export default function App() {
  const [selected, setSelected] = useState<Set<Tech>>(new Set());

  const toggle = (t: Tech) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });

  // Match any checked tech; nothing checked shows everything.
  const visible = items.filter((i) => selected.size === 0 || i.stack.some((t) => selected.has(t)));
  const jobs = visible.filter((i) => i.kind === 'job');
  const projects = visible.filter((i) => i.kind === 'project');
  const count = (t: Tech) => items.filter((i) => i.stack.includes(t)).length;

  return (
    <>
      <nav className="nav">
        <a href="#top" className="nav-name">
          Santiago Doval
        </a>
        <div className="nav-links">
          <a href="#ai">AI workflow</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero wrap" id="top">
        <div className="hero-text">
          <p className="eyebrow">Full-stack engineer · Buenos Aires</p>
          <h1>
            Santiago <em>Doval</em>
          </h1>
          <p className="lead">
            I build fintech products across web and mobile with React, Next.js, React Native and Node, and the Claude Code
            workflows that take them from ticket to production.
          </p>
          <div className="actions">
            <a className="btn primary" href="#work">
              See my work
            </a>
            <a className="btn" href={`mailto:${EMAIL}`}>
              Get in touch
            </a>
          </div>
          <dl className="stats">
            <div>
              <dt>5+ years</dt>
              <dd>shipping production software</dd>
            </div>
            <div>
              <dt>7 apps</dt>
              <dd>web and mobile at Directo</dd>
            </div>
            <div>
              <dt>Daily</dt>
              <dd>Claude Code in the loop</dd>
            </div>
          </dl>
        </div>

        <figure className="terminal" aria-label="Example Claude Code session">
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
          <figcaption>Illustrative session</figcaption>
        </figure>
      </header>

      <section className="wrap section" id="ai">
        <h2>How I ship with agents</h2>
        <p className="section-lead">
          The point isn’t writing less code. It’s spending my attention on product decisions and review, and letting the
          repetitive parts run automated and checked.
        </p>
        <ol className="flow">
          {flow.map((f, i) => (
            <li key={f.step} className="reveal">
              <span className="flow-n">0{i + 1}</span>
              <h3>{f.step}</h3>
              <code>{f.cmd}</code>
              <p>{f.text}</p>
              {f.mine && <span className="badge">I wrote this skill</span>}
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section" id="work">
        <h2>Work</h2>
        <p className="section-lead">Check the tools you’re hiring for. Experience and projects filter live.</p>

        <div className="work">
          <aside className="filter">
            {Object.entries(stackGroups).map(([group, techs]) => (
              <fieldset key={group}>
                <legend>{group}</legend>
                {techs.map((t) => (
                  <label key={t} className="check">
                    <input type="checkbox" checked={selected.has(t)} onChange={() => toggle(t)} />
                    <span>{t}</span>
                    <small>{count(t)}</small>
                  </label>
                ))}
              </fieldset>
            ))}
            <div className="filter-foot">
              <span aria-live="polite">
                {visible.length} of {items.length}
              </span>
              {selected.size > 0 && (
                <button type="button" onClick={() => setSelected(new Set())}>
                  Clear
                </button>
              )}
            </div>
          </aside>

          <div className="results">
            {jobs.length > 0 && <h3 className="results-h">Experience</h3>}
            {jobs.map((i) => (
              <Card key={i.org} item={i} selected={selected} toggle={toggle} />
            ))}
            {projects.length > 0 && <h3 className="results-h">Projects</h3>}
            <div className="grid">
              {projects.map((i) => (
                <Card key={i.title} item={i} selected={selected} toggle={toggle} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="wrap contact" id="contact">
        <img src="/avatar.png" alt="Illustrated portrait of Santiago" width={160} height={160} />
        <h2>
          Let’s build <em>something.</em>
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
        <p className="colophon">Built with React, TypeScript and Vite. Pair-programmed with Claude Code.</p>
      </footer>
    </>
  );
}

function Card({ item, selected, toggle }: { item: Item; selected: Set<Tech>; toggle: (t: Tech) => void }) {
  const Title = item.url ? 'a' : 'span';
  return (
    <article className={`card reveal ${item.kind}`}>
      <header>
        <h4>
          <Title {...(item.url && { href: item.url, target: '_blank', rel: 'noreferrer' })}>
            {item.kind === 'job' ? item.org : item.title}
            {item.url && ' ↗'}
          </Title>
        </h4>
        <span className="period">{item.period}</span>
      </header>
      {item.kind === 'job' && <p className="role">{item.title}</p>}
      <p>{item.summary}</p>
      {item.bullets && (
        <ul>
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      <div className="tags">
        {item.stack.map((t) => (
          <button key={t} type="button" aria-pressed={selected.has(t)} onClick={() => toggle(t)}>
            {t}
          </button>
        ))}
      </div>
    </article>
  );
}
