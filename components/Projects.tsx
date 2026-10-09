const projects = [
  {
    name: 'WayaTix',
    url: 'https://wayatix.com',
    kicker: 'Events & ticketing',
    description: 'A modern ticketing experience built to make discovering events and getting in feel effortless.',
    tags: ['Product design', 'Web platform', 'Payments'],
    theme: 'wayatix',
  },
  {
    name: 'Sawa Wallet',
    url: 'https://sawawallet.org',
    kicker: 'Fintech & digital assets',
    description: 'A phone-first, non-custodial wallet that makes sending crypto feel as familiar as sending a text.',
    tags: ['Mobile product', 'Fintech', 'Infrastructure'],
    theme: 'sawa',
  },
];

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ProjectVisual({ theme }: { theme: string }) {
  if (theme === 'sawa') {
    return (
      <div className="project-visual project-visual-sawa" aria-hidden="true">
        <div className="phone-shell">
          <div className="phone-top"><span>9:41</span><span>● ●</span></div>
          <div className="sawa-mark">S</div>
          <p className="phone-kicker">AVAILABLE BALANCE</p>
          <strong>$2,480.60</strong>
          <div className="phone-actions"><span>↑</span><span>↓</span><span>↔</span></div>
          <div className="transfer-card"><span>Sent to Ada</span><b>− $50.00</b></div>
        </div>
        <span className="visual-label">Send money like a text.</span>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-wayatix" aria-hidden="true">
      <div className="ticket-glow" />
      <div className="event-card event-card-back"><span>LIVE</span></div>
      <div className="event-card event-card-front">
        <div className="event-date"><b>24</b><span>OCT</span></div>
        <div><small>ABUJA · 8PM</small><strong>Night Shift</strong><p>Music. Culture. People.</p></div>
        <div className="ticket-code">|||| ||| ||||</div>
      </div>
      <span className="visual-label">Your next experience starts here.</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="sec-xl dash-bottom projects-section">
      <div className="container-wide">
        <div className="projects-heading reveal">
          <div>
            <span className="eyebrow"><span className="dot" /> Selected work</span>
            <h2>Products built for real life.</h2>
          </div>
          <p>We pair thoughtful product strategy with precise engineering to launch digital experiences people can understand, trust, and enjoy.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal-blur" key={project.name} style={{ transitionDelay: `${index * 0.08}s` }}>
                <ProjectVisual theme={project.theme} />
              <div className="project-copy">
                <div className="project-number">0{index + 1}</div>
                <div className="project-main">
                  <p className="project-kicker">{project.kicker}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Visit ${project.name}`}>
                  <span>Visit live site</span><Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
