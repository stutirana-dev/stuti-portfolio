'use client';

import { useEffect, useState } from 'react';

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
    codeUrl: 'https://github.com/stutirana-dev/stuti-ml-projects/blob/main/project_EcoDrive_ML_Major.ipynb',
  },
  {
    number: '02',
    name: 'STREAMGUARD',
    category: 'PREDICTIVE ANALYTICS',
    description: 'OTT churn prediction and customer lifetime value.',
    tags: ['CLASSIFICATION', 'CLV', 'DATA'],
    art: 'stream',
    codeUrl: 'https://github.com/stutirana-dev/stuti-ml-projects/blob/main/project_streamGuard.ipynb',
  },
  {
    number: '03',
    name: 'PROJECT CUPID',
    category: 'MACHINE LEARNING',
    description: 'Relationship compatibility and success prediction.',
    tags: ['REGRESSION', 'CLASSIFICATION'],
    art: 'cupid',
    codeUrl: 'https://github.com/stutirana-dev/stuti-ml-projects/blob/main/project_cupid_ML_Capstone.ipynb',
  },
  {
    number: '04',
    name: 'E-COMMERCE ANALYTICS',
    category: 'DATA ANALYTICS',
    description: 'Sales patterns, customer behavior and visual analytics.',
    tags: ['PANDAS', 'NUMPY', 'MATPLOTLIB'],
    art: 'commerce',
    codeUrl: 'https://github.com/stutirana-dev/stuti-ml-projects/blob/main/Ecommerce_Customer_Analytics.ipynb',
  },
  {
    number: '05',
    name: 'ELEVE MEDIA',
    category: 'WEB DEVELOPMENT',
    description: 'Built and deployed a custom business website with Next.js, TypeScript and Sanity CMS. Source repository is private.',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'SANITY CMS'],
    art: 'eleve',
    codeUrl: 'https://www.elevemedia.pro/',
  },
];


// The archive is intentionally empty until original work is ready to share.
// Add verified papers here later; never represent research ideas as publications.
type ResearchCategory = 'Independent Research' | 'Academic Research / Coursework' | 'Published Research';
type ResearchTopic = 'International Relations & Diplomacy' | 'Public Policy & Development' | 'AI Governance & Digital Rights';
type ResearchFormat = 'Research Paper' | 'Policy Brief' | 'Analytical Essay' | 'Opinion / Commentary';
type ResearchPaper = {
  title: string;
  summary: string;
  category: ResearchCategory;
  topic: ResearchTopic;
  format: ResearchFormat;
  url: string;
};
const researchPapers: ResearchPaper[] = [];
const researchCategories: ResearchCategory[] = [
  'Independent Research',
  'Academic Research / Coursework',
  'Published Research',
];
const researchTopics: ResearchTopic[] = [
  'International Relations & Diplomacy',
  'Public Policy & Development',
  'AI Governance & Digital Rights',
];
const researchFormats: ResearchFormat[] = [
  'Research Paper', 'Policy Brief', 'Analytical Essay', 'Opinion / Commentary',
];
const researchIdeas: {
  number: string;
  topic: ResearchTopic;
  title: string;
  question: string;
  accent: string;
}[] = [
  {
    number: '01',
    topic: 'AI Governance & Digital Rights',
    title: 'WHO SHOULD GOVERN AI?',
    question: 'How can governments encourage AI innovation while protecting people and their rights?',
    accent: '#d9b5ff',
  },
  {
    number: '02',
    topic: 'International Relations & Diplomacy',
    title: 'DIPLOMACY IN THE DIGITAL AGE',
    question: 'How are digital platforms and emerging technologies changing international diplomacy?',
    accent: '#ff94cb',
  },
  {
    number: '03',
    topic: 'Public Policy & Development',
    title: 'WHO GETS LEFT OFFLINE?',
    question: 'What can public policy do to make digital access more inclusive?',
    accent: '#c8ff83',
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

  if (art === 'eleve') {
    return (
      <div
        className="visual visual-eleve"
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 80% 20%, #5b39a3 0%, #201a42 43%, #10121e 100%)',
          padding: '1.75rem',
          overflow: 'hidden',
        }}
      >
        <div style={{
          width: '100%',
          maxWidth: '350px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.3)',
          background: '#161727',
          boxShadow: '0 16px 45px rgba(0,0,0,0.35)',
          transform: 'rotate(-4deg)',
        }}>
          <div style={{ display: 'flex', gap: '5px', padding: '10px 12px', background: '#27243d' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff8eaf' }} />
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f7cf7a' }} />
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#b6f2b1' }} />
          </div>
          <div style={{ padding: '30px 18px 36px', textAlign: 'center' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.35em', color: '#e1b7ff', marginBottom: '12px' }}>DIGITAL EXPERIENCES</div>
            <div style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff' }}>ELEVE MEDIA<span style={{ color: '#cb92ff' }}>.</span></div>
            <div style={{ height: 2, width: 65, background: '#d4a0ff', margin: '17px auto 0' }} />
          </div>
        </div>
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [researchCategory, setResearchCategory] = useState<ResearchCategory>('Independent Research');
  const [researchTopic, setResearchTopic] = useState<ResearchTopic | 'All Research'>('All Research');
  const [researchSearch, setResearchSearch] = useState('');
  const [scheduledStartReached, setScheduledStartReached] = useState(false);
  const active = modes[mode];
  const query = researchSearch.trim().toLowerCase();
  const visiblePapers = researchPapers.filter((paper) =>
    paper.category === researchCategory &&
    (researchTopic === 'All Research' || paper.topic === researchTopic) &&
    (!query || `${paper.title} ${paper.summary} ${paper.topic} ${paper.format}`.toLowerCase().includes(query))
  );
  const visibleIdeas = researchIdeas.filter((idea) =>
    (researchTopic === 'All Research' || idea.topic === researchTopic) &&
    (!query || `${idea.title} ${idea.question} ${idea.topic}`.toLowerCase().includes(query))
  );

  // Compare against the scheduled joining date in Delhi time.
  // This only changes the date label; it never assumes joining was confirmed.
  useEffect(() => {
    const updateScheduledStart = () => {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).formatToParts(new Date());
      const value = (type: string) => parts.find((part) => part.type === type)?.value ?? '';
      const indiaDate = `${value('year')}-${value('month')}-${value('day')}`;
      setScheduledStartReached(indiaDate >= '2026-10-16');
    };

    updateScheduledStart();
    const intervalId = window.setInterval(updateScheduledStart, 60 * 1000);
    window.addEventListener('focus', updateScheduledStart);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', updateScheduledStart);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

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
      <style>{`@keyframes stutiMenuEnter { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } } @media (prefers-reduced-motion: reduce) { #stuti-full-menu { animation: none !important; } }`}</style>
      {/* MINIMAL TOP NAV + FULL-SCREEN MENU */}
      <header className="navbar" style={{ position: 'relative', zIndex: 50 }}>
        <a href="#top" className="logo" onClick={() => setMenuOpen(false)}>
          STUTI.EXE <span>✳</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#projects">WORK</a>
          <a href="#journey">JOURNEY</a>
        </nav>

        <button
          type="button"
          aria-label="Open full navigation menu"
          aria-expanded={menuOpen}
          aria-controls="stuti-full-menu"
          onClick={() => setMenuOpen(true)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.65rem',
            padding: '0.7rem 1rem', border: '1px solid #9b80b9', borderRadius: '999px',
            background: '#24172f', color: '#f8f4ff', fontSize: '0.76rem',
            fontWeight: 800, letterSpacing: '0.11em', cursor: 'pointer',
          }}
        >
          MENU <span aria-hidden="true" style={{ color: '#c8ff83', fontSize: '1.1rem' }}>☰</span>
        </button>
      </header>

      {menuOpen && (
        <div
          id="stuti-full-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio navigation"
          style={{
            position: 'fixed', inset: 0, zIndex: 9999, overflowY: 'auto',
            background: 'radial-gradient(circle at 82% 15%, #3d2155 0%, #17101f 40%, #100d17 100%)',
            color: '#f8f4ff', padding: 'clamp(1.5rem, 4vw, 3.5rem) 6%',
            animation: 'stutiMenuEnter 220ms ease-out both',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.06em' }}>STUTI.EXE <span style={{ color: '#c8ff83' }}>✳</span></span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{ background: '#d9b5ff', color: '#16101c', border: 0, borderRadius: '999px', padding: '0.85rem 1.15rem', fontWeight: 900, cursor: 'pointer' }}
            >
              CLOSE ✕
            </button>
          </div>
          <div style={{ marginTop: 'clamp(3rem, 9vh, 6rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>
            <div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.16em', color: '#c8ff83', fontWeight: 800, marginBottom: '1.3rem' }}>01 / BUILD</div>
              <a href="#projects" onClick={() => setMenuOpen(false)} style={{ display: 'block', fontSize: 'clamp(2.5rem, 5vw, 4.6rem)', fontWeight: 900, letterSpacing: '-0.07em', lineHeight: 1.15 }}>WORK ↗</a>
              <a href="#playground" onClick={() => setMenuOpen(false)} style={{ display: 'block', marginTop: '1.2rem', color: '#d8cadf' }}>Code Playground ↗</a>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.16em', color: '#ff94cb', fontWeight: 800, marginBottom: '1.3rem' }}>02 / RESEARCH</div>
              <a href="#research" onClick={() => setMenuOpen(false)} style={{ display: 'block', fontSize: 'clamp(2.5rem, 5vw, 4.6rem)', fontWeight: 900, letterSpacing: '-0.07em', lineHeight: 1.15 }}>THINK ↗</a>
              <a href="#research-archive" onClick={() => setMenuOpen(false)} style={{ display: 'block', marginTop: '1.2rem', color: '#d8cadf' }}>Research Archive ↗</a>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.16em', color: '#d9b5ff', fontWeight: 800, marginBottom: '1.3rem' }}>03 / GROW</div>
              <a href="#journey" onClick={() => setMenuOpen(false)} style={{ display: 'block', fontSize: 'clamp(2.5rem, 5vw, 4.6rem)', fontWeight: 900, letterSpacing: '-0.07em', lineHeight: 1.15 }}>JOURNEY ↗</a>
              <a href="#about" onClick={() => setMenuOpen(false)} style={{ display: 'block', marginTop: '1.2rem', color: '#d8cadf' }}>About Me ↗</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #685476', marginTop: 'clamp(3rem, 8vh, 5rem)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1.5rem', fontSize: '0.85rem' }}>
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{ fontWeight: 800 }}>CONTACT ↗</a>
            <a href="mailto:stutiranawork@gmail.com" style={{ color: '#c8ff83' }}>stutiranawork@gmail.com ↗</a>
          </div>
        </div>
      )}

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
                  aria-label={project.art === 'eleve' ? 'Visit Eleve Media live website' : `View ${project.name} source code on GitHub`}
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
                  {project.art === 'eleve' ? 'LIVE WEBSITE' : 'VIEW CODE'} <span aria-hidden="true">↗</span>
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

      {/* CODE PLAYGROUND */}
      <section
        id="playground"
        aria-labelledby="playground-title"
        style={{
          padding: 'clamp(3.5rem, 7vw, 6rem) 6%',
          background: '#17131f',
          color: '#f8f4ff',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            fontSize: '0.7rem',
            fontWeight: 800,
            letterSpacing: '0.14em',
            color: '#c7a9ff',
          }}
        >
          <span>MINI PROJECTS / CODE PLAYGROUND</span>
          <span>SMALL BUILDS. BIG LEARNING. ✳</span>
        </div>

        <h2
          id="playground-title"
          style={{
            fontSize: 'clamp(2.6rem, 7vw, 6rem)',
            lineHeight: 0.98,
            letterSpacing: '-0.07em',
            fontWeight: 900,
            margin: '2rem 0 1rem',
          }}
        >
          THE LITTLE <span style={{ color: '#c9ff84' }}>EXPERIMENTS.</span>
        </h2>
        <p style={{ maxWidth: '36rem', lineHeight: 1.65, color: '#c5bdce', marginBottom: '2rem' }}>
          Smaller Python projects where I practice solving everyday problems,
          organizing information, and building useful tools.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '1rem',
          }}
        >
          {[
            {
              number: '01',
              name: 'PYTHON TO-DO LIST',
              description: 'A small task-management coding project.',
              url: 'https://github.com/stutirana-dev/python-todo-list',
              tags: 'PYTHON / PRODUCTIVITY',
            },
            {
              number: '02',
              name: 'STUDENT MANAGEMENT SYSTEM',
              description: 'A project focused on organizing student records.',
              url: 'https://github.com/stutirana-dev/student-management-system',
              tags: 'RECORDS / PYTHON',
            },
            {
              number: '03',
              name: 'EXPENSE TRACKER + CSV',
              description: 'An expense-tracking project with CSV storage.',
              url: 'https://github.com/stutirana-dev/expense-tracker-with-CSV-storage',
              tags: 'PYTHON / CSV',
            },
          ].map((mini) => (
            <article
              key={mini.number}
              style={{
                border: '1px solid #52445f',
                borderRadius: '1rem',
                padding: '1.5rem',
                background: '#211a2b',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '245px',
              }}
            >
              <div style={{ color: '#d0aaff', fontSize: '0.75rem', fontWeight: 800 }}>
                {mini.number} / {mini.tags}
              </div>
              <h3 style={{ fontSize: '1.35rem', margin: '1.4rem 0 0.5rem', letterSpacing: '-0.03em' }}>
                {mini.name}
              </h3>
              <p style={{ color: '#c5bdce', lineHeight: 1.55, margin: '0 0 1.5rem' }}>
                {mini.description}
              </p>
              <a
                href={mini.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#c9ff84',
                  marginTop: 'auto',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.07em',
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                }}
              >
                VIEW ON GITHUB ↗
              </a>
            </article>
          ))}
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

      {/* JOURNEY — EDUCATION, LEARNING & PRACTICAL WORK */}
      <section id="journey" aria-labelledby="journey-title" style={{ padding: 'clamp(3.5rem, 7vw, 6rem) 6%', background: '#e9e1f1', color: '#191320', scrollMarginTop: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', fontSize: '0.73rem', fontWeight: 800, letterSpacing: '0.13em' }}>
          <span>THE GROWING YEARS / JOURNEY</span><span>ALWAYS LEARNING ✳</span>
        </div>
        <h2 id="journey-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.07em', lineHeight: 1, margin: '2rem 0 1rem' }}>STILL <span style={{ color: '#7650a9' }}>BECOMING.</span></h2>
        <p style={{ maxWidth: '45rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          Learning across disciplines — from political science and public policy to programming, data and machine learning. Here&apos;s the journey so far.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '0.8rem', alignItems: 'stretch' }}>
          <article style={{ padding: '1.45rem', border: '1px solid #b5a4c5', borderRadius: '0.85rem', background: '#f7f1fb' }}>
            <div style={{ fontSize: '0.7rem', color: '#7650a9', fontWeight: 800 }}>01 / GROW</div>
            <h3 style={{ margin: '1rem 0 1rem', fontSize: '1.15rem', letterSpacing: '-0.03em' }}>EDUCATION</h3>
            <div style={{ marginBottom: '1.2rem' }}>
              <strong style={{ display: 'block', fontSize: '0.95rem' }}>Undergraduate Studies · Year 2</strong>
              <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', lineHeight: 1.6 }}>School of Open Learning (SOL), University of Delhi</p>
              <span style={{ display: 'inline-block', color: '#7650a9', fontSize: '0.78rem', fontWeight: 700 }}>Current GPA: approximately 8.0</span>
            </div>
            <div style={{ borderTop: '1px solid #d9cce5', paddingTop: '1rem' }}>
              <strong style={{ display: 'block', fontSize: '0.95rem' }}>Class X &amp; XII · CBSE</strong>
              <p style={{ margin: '0.3rem 0 0', fontSize: '0.85rem', lineHeight: 1.6 }}>Completed secondary and senior secondary education through the CBSE board.</p>
            </div>
          </article>
          <article style={{ padding: '1.45rem', border: '1px solid #b5a4c5', borderRadius: '0.85rem', background: '#f7f1fb' }}>
            <div style={{ fontSize: '0.7rem', color: '#7650a9', fontWeight: 800 }}>02 / GROW</div>
            <h3 style={{ margin: '1rem 0 1rem', fontSize: '1.15rem', letterSpacing: '-0.03em' }}>COURSES &amp; LEARNING</h3>
            <div style={{ marginBottom: '1.2rem' }}>
              <strong style={{ display: 'block', fontSize: '0.95rem' }}>Computer Applications &amp; Programming</strong>
              <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', lineHeight: 1.6 }}>1.5-year diploma programme · YWCA, Delhi</p>
            </div>
            <div style={{ borderTop: '1px solid #d9cce5', paddingTop: '1rem' }}>
              <strong style={{ display: 'block', fontSize: '0.95rem' }}>AI / ML &amp; Data Science</strong>
              <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', lineHeight: 1.6 }}>Currently learning through free, self-paced classes and independent practice.</p>
              <span style={{ display: 'inline-block', color: '#7650a9', fontSize: '0.78rem', fontWeight: 700 }}>SELF-DIRECTED LEARNING · ONGOING</span>
            </div>
          </article>
          <article style={{ padding: '1.45rem', border: '1px solid #b5a4c5', borderRadius: '0.85rem', background: '#f7f1fb' }}>
            <div style={{ fontSize: '0.7rem', color: '#7650a9', fontWeight: 800 }}>03 / GROW</div>
            <h3 style={{ margin: '1rem 0 1rem', fontSize: '1.15rem', letterSpacing: '-0.03em' }}>HANDS-ON EXPERIENCE</h3>
            <div style={{ marginBottom: '1.2rem', padding: '1rem', background: '#eee3f7', border: '1px solid #d9c7e8', borderRadius: '0.65rem' }}>
              <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 800, color: '#7650a9', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                {scheduledStartReached ? 'SCHEDULED START DATE REACHED' : 'INCOMING ROLE · OFFER RECEIVED'}
              </span>
              <strong style={{ display: 'block', fontSize: '0.95rem' }}>System Administrator cum Support Executive</strong>
              <p style={{ margin: '0.35rem 0', fontSize: '0.85rem', lineHeight: 1.5 }}>Ilex Softhub Pvt. Ltd.</p>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.78rem', lineHeight: 1.5, color: '#594d63' }}>
                {scheduledStartReached
                  ? 'Scheduled joining date: 16 October 2026. Employment status to be confirmed.'
                  : 'Scheduled joining: 16 October 2026.'}
              </p>
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <strong style={{ display: 'block', fontSize: '0.95rem' }}>Eleve Media · Website Development</strong>
              <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', lineHeight: 1.6 }}>Built a live website using Next.js, TypeScript and Sanity CMS.</p>
              <a href="https://www.elevemedia.pro/" target="_blank" rel="noopener noreferrer" style={{ color: '#7650a9', fontSize: '0.78rem', fontWeight: 800, textDecoration: 'underline' }}>VIEW LIVE WEBSITE ↗</a>
            </div>
            <div style={{ borderTop: '1px solid #d9cce5', paddingTop: '1rem' }}>
              <strong style={{ display: 'block', fontSize: '0.95rem' }}>Independent Data &amp; ML Projects</strong>
              <p style={{ margin: '0.3rem 0 0', fontSize: '0.85rem', lineHeight: 1.6 }}>Hands-on work with Python, analytics and machine learning, featured in the projects section.</p>
            </div>
          </article>
        </div>
      </section>

      {/* RESEARCH ARCHIVE — IDEAS, NOT CLAIMED PUBLICATIONS */}
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
              I&apos;m interested in political science, international relations,
              diplomacy and public policy. This is a space for questions I want
              to explore, and for essays and research I&apos;ll share as I write them.
            </p>
            <div className="research-topics">
              <span>INTERNATIONAL RELATIONS</span>
              <span>PUBLIC POLICY</span>
              <span>POLITICAL ANALYSIS</span>
              <span>TECH & SOCIETY</span>
            </div>
            <div className="archive-coming">
              RESEARCH ARCHIVE
              <span>FIRST PAPER COMING SOON ✳</span>
            </div>
          </div>
        </div>

        {/* ORGANIZED RESEARCH ARCHIVE — FILTERS ARE READY FOR FUTURE PAPERS */}
        <div id="research-archive" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', scrollMarginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.4rem' }}>
            <div>
              <div style={{ fontSize: '0.73rem', fontWeight: 800, letterSpacing: '0.13em', color: '#c8ff83', marginBottom: '0.6rem' }}>EXPLORE / THE ARCHIVE</div>
              <h3 style={{ margin: 0, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, letterSpacing: '-0.055em' }}>RESEARCH <span style={{ color: '#d9b5ff' }}>ARCHIVE.</span></h3>
            </div>
            <span style={{ fontSize: '0.73rem', letterSpacing: '0.1em', fontWeight: 800, color: '#c8ff83' }}>BUILDING THIS LIBRARY ✳</span>
          </div>

          <div style={{ marginBottom: '0.8rem', fontSize: '0.73rem', fontWeight: 800, letterSpacing: '0.12em', opacity: 0.8 }}>01 / RESEARCH CATEGORY</div>
          <div role="group" aria-label="Research category" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 205px), 1fr))', gap: '0.65rem', marginBottom: '1.8rem' }}>
            {researchCategories.map((category, index) => {
              const selected = researchCategory === category;
              return (
                <button
                  type="button" key={category} onClick={() => setResearchCategory(category)} aria-pressed={selected}
                  style={{
                    textAlign: 'left', padding: '1.1rem 1.15rem', minHeight: '94px',
                    border: selected ? '2px solid #c8ff83' : '1px solid #6e5c7d',
                    background: selected ? '#33233f' : '#211a2b',
                    color: '#f8f4ff', borderRadius: '0.85rem', cursor: 'pointer',
                  }}
                >
                  <span style={{ display: 'block', fontSize: '0.7rem', color: selected ? '#c8ff83' : '#b9a2cc', fontWeight: 800, marginBottom: '0.5rem' }}>0{index + 1} {selected ? '✳ SELECTED' : '↗'}</span>
                  <span style={{ fontSize: '0.98rem', fontWeight: 800 }}>{category}</span>
                </button>
              );
            })}
          </div>

          <div style={{ marginBottom: '0.8rem', fontSize: '0.73rem', fontWeight: 800, letterSpacing: '0.12em', opacity: 0.8 }}>02 / FILTER BY TOPIC</div>
          <div role="group" aria-label="Research topic" style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1.4rem' }}>
            {(['All Research', ...researchTopics] as (ResearchTopic | 'All Research')[]).map((topic) => {
              const selected = researchTopic === topic;
              return (
                <button
                  type="button" key={topic} onClick={() => setResearchTopic(topic)} aria-pressed={selected}
                  style={{
                    border: selected ? '1px solid #c8ff83' : '1px solid #6e5c7d',
                    background: selected ? '#c8ff83' : 'transparent', color: selected ? '#17101f' : '#f8f4ff',
                    borderRadius: '999px', padding: '0.7rem 0.9rem', cursor: 'pointer',
                    fontSize: '0.76rem', fontWeight: 800,
                  }}
                >{topic}</button>
              );
            })}
          </div>

          <label htmlFor="research-search" style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.73rem', fontWeight: 800, letterSpacing: '0.12em' }}>03 / SEARCH THE ARCHIVE & IDEAS</label>
          <input
            id="research-search" type="search" value={researchSearch}
            onChange={(event) => setResearchSearch(event.target.value)}
            placeholder="Search topics, questions, paper titles..."
            style={{ display: 'block', width: '100%', padding: '1rem 1.1rem', borderRadius: '0.75rem', border: '1px solid #6e5c7d', background: '#211a2b', color: '#f8f4ff', fontSize: '0.95rem', marginBottom: '1.4rem' }}
          />

          <div aria-live="polite" style={{ background: '#211a2b', border: '1px solid #52445f', borderRadius: '1rem', padding: 'clamp(1.3rem, 3vw, 2rem)', marginBottom: '2.6rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem', fontSize: '0.73rem', fontWeight: 800, letterSpacing: '0.1em' }}>
              <span style={{ color: '#d9b5ff' }}>{researchCategory.toUpperCase()}</span>
              <span style={{ color: '#c8ff83' }}>{visiblePapers.length} PAPERS</span>
            </div>
            {visiblePapers.length ? (
              <div style={{ display: 'grid', gap: '1rem' }}>
                {visiblePapers.map((paper) => (
                  <article key={paper.title} style={{ borderTop: '1px solid #52445f', paddingTop: '1rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#c8ff83', fontWeight: 800 }}>{paper.format} / {paper.topic}</div>
                    <h4 style={{ fontSize: '1.4rem', margin: '0.8rem 0' }}>{paper.title}</h4>
                    <p style={{ lineHeight: 1.6 }}>{paper.summary}</p>
                    <a href={paper.url} target="_blank" rel="noopener noreferrer" style={{ color: '#d9b5ff', textDecoration: 'underline', textUnderlineOffset: '5px', fontWeight: 800 }}>READ PAPER ↗</a>
                  </article>
                ))}
              </div>
            ) : (
              <div>
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>NO PAPERS ADDED YET ✳</div>
                <p style={{ color: '#d0c5dc', lineHeight: 1.65, maxWidth: '48rem', margin: 0 }}>
                  No papers are listed under this category yet. I&apos;ll add original work here with a summary, document type, and a link to read it once it is ready.
                </p>
              </div>
            )}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {researchFormats.map((format) => (
                <span key={format} style={{ border: '1px solid #65546f', borderRadius: '999px', padding: '0.45rem 0.7rem', fontSize: '0.68rem', fontWeight: 800, color: '#d9c9e4' }}>{format}</span>
              ))}
            </div>
            <p style={{ color: '#aa9bb9', fontSize: '0.74rem', margin: '0.7rem 0 0' }}>Planned document formats — not published work.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <h3 style={{ margin: 0, fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', letterSpacing: '-0.04em' }}>QUESTIONS ON MY MIND <span style={{ color: '#c765ff' }}>✳</span></h3>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', fontWeight: 800, opacity: 0.7 }}>IDEAS / NOT PUBLISHED WORK</span>
          </div>
          {visibleIdeas.length ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 245px), 1fr))', gap: '1rem' }}>
              {visibleIdeas.map((idea) => (
                <article key={idea.number} style={{ background: '#211a2b', border: '1px solid #52445f', borderRadius: '1rem', padding: '1.5rem', minHeight: '260px', display: 'flex', flexDirection: 'column', color: '#f8f4ff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.6rem', color: idea.accent, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.07em' }}>
                    <span>{idea.number} / {idea.topic.toUpperCase()}</span><span>✳</span>
                  </div>
                  <h4 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.55rem)', lineHeight: 1.1, letterSpacing: '-0.04em', margin: '1.5rem 0 0.75rem' }}>{idea.title}</h4>
                  <p style={{ color: '#cfc5d9', lineHeight: 1.6, fontSize: '0.95rem', margin: '0 0 1.5rem' }}>{idea.question}</p>
                  <div style={{ marginTop: 'auto', borderTop: '1px solid #52445f', paddingTop: '0.8rem', fontSize: '0.7rem', letterSpacing: '0.12em', fontWeight: 800, color: idea.accent }}>RESEARCH IDEA — TO EXPLORE</div>
                </article>
              ))}
            </div>
          ) : (
            <p style={{ padding: '1.5rem', border: '1px solid #52445f', borderRadius: '0.85rem', color: '#d0c5dc' }}>No research ideas match these filters. Try All Research or clear the search.</p>
          )}
          <p style={{ margin: '1.4rem 0 0', opacity: 0.75, fontSize: '0.85rem', lineHeight: 1.6 }}>This archive will feature original essays and research when they are ready. No papers are published here yet.</p>
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
