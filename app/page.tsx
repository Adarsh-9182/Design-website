const projects = [
  {
    number: "01",
    title: "Morrow",
    type: "Brand voice + digital store",
    className: "morrow",
    detail: "A daily ritual, bottled.",
  },
  {
    number: "02",
    title: "Common Ground",
    type: "Identity + community platform",
    className: "common-ground",
    detail: "A new map for city neighbours.",
  },
  {
    number: "03",
    title: "Bend",
    type: "Strategy + campaign",
    className: "bend",
    detail: "Moving ideas into the open.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={diagonal ? "arrow arrow--diagonal" : "arrow"}>↗</span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a className="logo" href="#top" aria-label="Field Notes home">
            <span>field</span>
            <span>notes</span>
          </a>
          <div className="nav__links">
            <a href="#work">Selected work</a>
            <a href="#about">The studio</a>
          </div>
          <a className="nav__contact" href="mailto:hello@fieldnotes.studio">
            Let&apos;s talk <Arrow />
          </a>
        </nav>

        <div className="hero__masthead">
          <p className="eyebrow">Independent design studio · 2026</p>
          <h1>
            <span>Bright ideas</span>
            <span className="hero__line-two">need a <em>shape.</em></span>
          </h1>
          <div className="hero__subhead">
            <p>
              We give ambitious people and purposeful brands a visual language
              that feels alive.
            </p>
            <a className="circle-link" href="#work" aria-label="Explore selected work">
              <span>Explore<br />the work</span>
              <Arrow diagonal />
            </a>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="sun"></div>
          <div className="ribbon ribbon--one"></div>
          <div className="ribbon ribbon--two"></div>
          <div className="ribbon ribbon--three"></div>
          <p className="hero__art-label">Ideas in<br />full colour</p>
          <span className="hero__art-number">01—26</span>
        </div>

        <a className="scroll-hint" href="#work">
          <span>Scroll to wander</span>
          <i></i>
        </a>
      </section>

      <section className="intro section-pad" id="about">
        <p className="section-kicker">( About us )</p>
        <div className="intro__copy">
          <h2>
            Serious about the work.<br />
            <em>Never too serious</em> in the room.
          </h2>
          <div className="intro__details">
            <p>
              Field Notes is a small, senior-led creative studio for people
              making a dent in the universe. We look for the sharpest truth,
              then make it impossible to miss.
            </p>
            <a className="text-link" href="mailto:hello@fieldnotes.studio">
              More about the studio <Arrow />
            </a>
          </div>
        </div>
        <div className="intro__stamp" aria-hidden="true">
          <span>made with</span>
          <strong>guts</strong>
          <span>and good coffee</span>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="work__header">
          <p className="section-kicker">( Selected work )</p>
          <p className="work__counter">Three recent chapters — <em>all different on purpose.</em></p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project ${project.className}`} key={project.title}>
              <div className="project__art" aria-hidden="true">
                {project.className === "morrow" && (
                  <>
                    <div className="morrow__halo"></div>
                    <div className="morrow__bottle"><span>M<br />O<br />R<br />R<br />O<br />W</span></div>
                    <div className="morrow__lemon"></div>
                  </>
                )}
                {project.className === "common-ground" && (
                  <>
                    <div className="ground__shape ground__shape--one"></div>
                    <div className="ground__shape ground__shape--two"></div>
                    <p className="ground__type">come<br />as<br />you are</p>
                    <div className="ground__dots">•••</div>
                  </>
                )}
                {project.className === "bend" && (
                  <>
                    <div className="bend__orb bend__orb--one"></div>
                    <div className="bend__orb bend__orb--two"></div>
                    <div className="bend__word">BEND</div>
                    <div className="bend__slash"></div>
                  </>
                )}
              </div>
              <a className="project__link" href="mailto:hello@fieldnotes.studio?subject=Tell%20me%20about%20a%20project" aria-label={`Learn about ${project.title}`}>
                <div className="project__meta">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project__title-row">
                  <h3>{project.title}</h3>
                  <span className="project__arrow"><Arrow /></span>
                </div>
                <p>{project.detail}</p>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-pad">
        <div className="services__lead">
          <p className="section-kicker">( What we do )</p>
          <h2>From first<br />thought to<br /><em>full feeling.</em></h2>
        </div>
        <ul className="services__list">
          <li><span>01</span> Brand strategy <Arrow /></li>
          <li><span>02</span> Visual identities <Arrow /></li>
          <li><span>03</span> Digital experiences <Arrow /></li>
          <li><span>04</span> Campaigns &amp; content <Arrow /></li>
        </ul>
      </section>

      <section className="contact section-pad">
        <div className="contact__burst" aria-hidden="true">
          <span>✳</span>
        </div>
        <p className="section-kicker">( Start a conversation )</p>
        <h2>Got a good<br />feeling about this?</h2>
        <a className="contact__email" href="mailto:hello@fieldnotes.studio">
          hello@fieldnotes.studio <Arrow />
        </a>
        <footer>
          <span>© Field Notes Studio 2026</span>
          <span>Chennai · Everywhere</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
