'use client';

import { useState } from 'react';

type Mode = 'build' | 'question' | 'explore';

const modes = {
  build: {
    number: '01',
    name: 'THE BUILDER',
    title: 'I LIKE MAKING\nIDEAS REAL.',
    text: 'I work with Python, data analytics and machine learning. I enjoy turning a question into an experiment, and an experiment into something useful.',
    tags: ['PYTHON', 'MACHINE LEARNING', 'DATA'],
    color: '#d9b5ff',
    symbol: '</>',
  },
  question: {
    number: '02',
    name: 'THE THINKER',
    title: 'I ASK A LOT\nOF QUESTIONS.',
    text: 'Political Science, international relations and public policy shape how I understand the world. Research is another way I explore ideas.',
    tags: ['POLITICAL SCIENCE', 'IR', 'POLICY'],
    color: '#ff94cb',
    symbol: '?',
  },
  explore: {
    number: '03',
    name: 'THE EXPLORER',
    title: 'ONE INTEREST?\nNOT ENOUGH.',
    text: 'I am constantly learning across disciplines, from technology to diplomacy. I like finding unexpected connections between different fields.',
    tags: ['LEARNING', 'CURIOSITY', 'GROWTH'],
    color: '#c8ff83',
    symbol: '✳',
  },
};

const projects = [
  {
    number: '01',
    name: 'ECODRIVE',
    category: 'MACHINE LEARNING',
    description: 'EV price regression and demand classification.',
    tags: ['PYTHON', 'REGRESSION', 'ML'],
    art: 'eco',
    codeUrl:
      'https://github.com/stutirana-dev/stuti-ml-projects/blob/main/project_EcoDrive_ML_Major.ipynb',
  },
  {
    number: '02',
    name: 'STREAMGUARD',
    category: 'PREDICTIVE ANALYTICS',
    description: 'OTT churn prediction and customer lifetime value.',
    tags: ['CLASSIFICATION', 'CLV', 'DATA'],
    art: 'stream',
    codeUrl:
      'https://github.com/stutirana-dev/stuti-ml-projects/blob/main/project_streamGuard.ipynb',
  },
  {
    number: '03',
    name: 'PROJECT CUPID',
    category: 'MACHINE LEARNING',
    description: 'Relationship compatibility and success prediction.',
    tags: ['REGRESSION', 'CLASSIFICATION'],
    art: 'cupid',
    codeUrl:
      'https://github.com/stutirana-dev/stuti-ml-projects/blob/main/project_cupid_ML_Capstone.ipynb',
  },
  {
    number: '04',
    name: 'E-COMMERCE ANALYTICS',
    category: 'DATA ANALYTICS',
    description: 'Sales patterns, customer behavior and visual analytics.',
    tags: ['PANDAS', 'NUMPY', 'MATPLOTLIB'],
    art: 'commerce',
    codeUrl:
      'https://github.com/stutirana-dev/stuti-ml-projects/blob/main/Ecommerce_Customer_Analytics.ipynb',
  },
];

function ProjectVisual({ art }: { art: string }) {
  if (art === 'eco') {
    return (
      <div className="visual visual-eco" aria-hidden="true">
        <div className="eco-halo" />
        <div className="eco-car">
          <div className="car-window" />
          <div className="car-lightning">ϟ</div>
          <div className="wheel wheel-left" />
          <div className="wheel wheel-right" />
        </div>
        <div className="visual-floating visual-bolt">ϟ</div>
      </div>
    );
  }

  if (art === 'stream') {
    return (
      <div className="visual visual-stream" aria-hidden="true">
        <div className="stream-ring stream-ring-one" />
        <div className="stream-ring stream-ring-two" />
        <div className="stream-screen">
          <div className="play-triangle" />
        </div>
        <div className="stream-ball" />
      </div>
    );
  }

  if (art === 'cupid') {
    return (
      <div className="visual visual-cupid" aria-hidden="true">
        <div className="heart-orbit" />
        <div className="main-heart">♥</div>
        <span className="heart-small heart-one">♥</span>
        <span className="heart-small heart-two">♥</span>
        <span className="heart-small heart-three">♥</span>
      </div>
    );
  }

  return (
    <div className="visual visual-commerce" aria-hidden="true">
      <div className="commerce-bars">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="commerce-arrow">↗</div>
      <span className="commerce-glow" />
    </div>
  );
}

export default function Home() {
  const [mode, setMode] = useState<Mode>('build');
  const [move, setMove] = useState({ x: 0, y: 0 });
  const active = modes[mode];

  function movePortrait(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setMove({
      x: x * 24,
      y: y * 18,
    });
  }

  return (
    <main id="top">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#top" className="logo">
          STUTI.EXE <span>✳</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#projects">PROJECTS</a>
          <a href="#about">ABOUT</a>
          <a href="#research">RESEARCH</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a href="mailto:stutiranawork@gmail.com" className="nav-contact">
          LET&apos;S TALK <span>↗</span>
        </a>
      </header>

      {/* CINEMATIC HERO */}
      <section
        className="hero"
        onMouseMove={movePortrait}
        onMouseLeave={() => setMove({ x: 0, y: 0 })}
      >
        <div className="hero-aura" />

        <div className="hero-scene">
          <div
            className="portrait-wrapper"
            style={{
              transform: `translate(${move.x}px, ${move.y}px)`,
            }}
          >
            <div className="portrait-light" />
            <img
              src="https://raw.githubusercontent.com/stutirana-dev/stuti-assets/main/Neon-Haired%20Glamour%20Portrait.png"
              alt="Cartoon-style portrait of Stuti"
              className="hero-avatar"
            />
          </div>

          <svg
            className="hero-orbit"
            viewBox="0 0 900 460"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse
              cx="450"
              cy="230"
              rx="405"
              ry="102"
              fill="none"
              stroke="#c765ff"
              strokeWidth="1.7"
              transform="rotate(-16 450 230)"
            />
          </svg>

          <div className="float-shape pink-asterisk" aria-hidden="true">
            ✱
          </div>
          <div className="float-shape neon-donut" aria-hidden="true" />
          <div className="float-shape lime-triangle" aria-hidden="true" />
          <div className="float-shape sparkle-one" aria-hidden="true">
            ✧
          </div>
          <div className="float-shape sparkle-two" aria-hidden="true">
            ✳
          </div>
          <div className="float-shape sparkle-three" aria-hidden="true">
            ✦
          </div>

          <div className="scribble scribble-left">
            CODE
            <br />
            RESEARCH
            <br />
            CURIOSITY
            <span>⤷</span>
          </div>

          <div className="scribble scribble-right">
            JUST A<br />
            CURIOUS
            <br />
            MIND :)
          </div>

          <div className="hero-headline">
            <div className="hero-intro">HI, I&apos;M</div>
            <h1>
              STUTI<span>.</span>
            </h1>
          </div>

          <div className="hero-aside hero-aside-left">
            EXPLORING
            <br />
            IDEAS
            <br />
            BUILDING
            <br />
            POSSIBILITIES
            <div className="aside-line" />
          </div>

          <div className="hero-aside hero-aside-right">
            A PORTFOLIO
            <br />
            OF MANY
            <br />
            INTERESTS
            <div className="aside-line" />
          </div>

          <a href="#projects" className="scroll-pill">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="section-rule">
          <span>01 / SELECTED PROJECTS</span>
          <span className="rule-line" />
          <span>THINGS I&apos;VE BUILT ↗</span>
        </div>

        <div className="projects-intro">
          <h2>
            MY LITTLE
            <br />
            <span>BIG IDEAS.</span>
          </h2>
          <p>
            A little code, a little creativity, and a whole lot of questions.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.art}`}
              key={project.number}
            >
              <div className="project-card-top">
                <span>{project.number}</span>
                <span>↗</span>
              </div>

              <ProjectVisual art={project.art} />

              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code on GitHub`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginTop: '1.25rem',
                    paddingBottom: '0.3rem',
                    borderBottom: '1px solid currentColor',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                  }}
                >
                  VIEW CODE <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <span>THESE ARE MY EXPERIMENTS, NOT MY LIMITS.</span>
          <a
            href="https://github.com/stutirana-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            EXPLORE MY GITHUB ↗
          </a>
        </div>
      </section>

      {/* ABOUT + CURIOSITY SWITCH */}
      <section className="about-section" id="about">
        <div className="section-rule section-rule-light">
          <span>02 / A LITTLE ABOUT ME</span>
          <span className="rule-line" />
          <span>MORE THAN ONE THING ✳</span>
        </div>

        <div className="about-heading">
          <span className="about-mini-star">✳</span>
          <h2>
            TOO CURIOUS
            <br />
            <em>TO FIT IN A BOX.</em>
          </h2>
          <p>
            I study Political Science, explore technology, experiment with data,
            and keep asking what connects it all. I don&apos;t see these
            interests as separate worlds.
          </p>
        </div>

        <div className="switch-label">
          <span>THE CURIOSITY SWITCH</span>
          <span>CHOOSE A SIDE OF ME ↓</span>
        </div>

        <div className="mode-buttons">
          {(['build', 'question', 'explore'] as Mode[]).map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              className={`mode-button ${mode === item ? 'mode-active' : ''}`}
              aria-pressed={mode === item}
            >
              <span>0{index + 1}</span>
              {item.toUpperCase()}
              <span>↗</span>
            </button>
          ))}
        </div>

        <div
          className="mode-display"
          key={mode}
          style={{ backgroundColor: active.color }}
        >
          <div className="mode-top">
            <span>
              {active.number} / {active.name}
            </span>
            <span>STUTI.EXE ✳</span>
          </div>

          <div className="mode-content">
            <div>
              <h3>{active.title}</h3>
              <p>{active.text}</p>
            </div>
            <div className="mode-symbol" aria-hidden="true">
              {active.symbol}
            </div>
          </div>

          <div className="mode-tags">
            {active.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="research-section" id="research">
        <div className="section-rule">
          <span>03 / THE THINKING ROOM</span>
          <span className="rule-line" />
          <span>RESEARCH & IDEAS ↗</span>
        </div>

        <div className="research-layout">
          <div className="research-title">
            <span className="research-star">✳</span>
            <h2>
              THINK.
              <br />
              QUESTION.
              <br />
              <em>REPEAT.</em>
            </h2>
          </div>

          <div className="research-content">
            <div className="research-note">
              NOT EVERYTHING I CREATE IS CODE.
            </div>

            <p>
              My academic interests include political science, international
              relations, diplomacy and public policy. This space will grow into
              an archive of my research, essays and academic work.
            </p>

            <div className="research-topics">
              <span>INTERNATIONAL RELATIONS</span>
              <span>PUBLIC POLICY</span>
              <span>POLITICAL ANALYSIS</span>
              <span>ACADEMIC RESEARCH</span>
            </div>

            <div className="archive-coming">
              RESEARCH ARCHIVE
              <span>IN PROGRESS ↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-top">
          <span>04 / SAY HELLO</span>
          <span>GOT AN IDEA? ✳</span>
        </div>

        <div className="contact-main">
          <h2>
            LET&apos;S MAKE
            <br />
            <span>SOMETHING</span>
            <br />
            INTERESTING.
          </h2>

          <a
            href="mailto:stutiranawork@gmail.com"
            className="contact-circle"
            aria-label="Email Stuti"
          >
            ↗
          </a>
        </div>

        <div className="contact-links">
          <a href="mailto:stutiranawork@gmail.com">EMAIL ME ↗</a>
          <a
            href="https://github.com/stutirana-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#top" className="footer-logo">
          STUTI.EXE <span>✳</span>
        </a>
        <span>CODE × RESEARCH × CURIOSITY</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
