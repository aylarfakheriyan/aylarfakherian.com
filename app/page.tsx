const projects = [
  {
    number: "01",
    category: "DESIGN · XR",
    title: "Chess with Ferdowsi",
    description:
      "An embodied interaction project exploring how physical artefacts and immersive media can create new encounters with cultural narratives.",
  },
  {
    number: "02",
    category: "XR · RESEARCH",
    title: "Simurgh",
    description:
      "An interactive VR experience exploring the transmission of intangible cultural heritage through immersive narrative and embodied interaction.",
  },
  {
    number: "03",
    category: "AI · INTERACTION",
    title: "OMNIS",
    description:
      "An early prototype exploring AI as a mediator between people and cultural heritage material.",
  },
  {
    number: "04",
    category: "RESEARCH · RtD",
    title: "LENS",
    description:
      "A Research through Design investigation into how immersive experiences can support meaningful encounters with cultural moments.",
  },
];

export default function Home() {
  return (
    <main>
      <nav>
        <a href="#" className="nav-name">
          AYLAR FAKHERIAN
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#design">Design</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="theme-toggle" aria-label="Toggle theme">
          ◐
        </button>
      </nav>

      <section className="hero">
        <div className="hero-top">
          <span>HUMAN-CENTRED DESIGN</span>
          <span>XR · AI · INTERACTION</span>
        </div>

        <div className="hero-main">
          <h1>
            Designing
            <br />
            encounters with
            <br />
            <em>emerging technology.</em>
          </h1>

          <p>
            I design interactive experiences across culture, technology, and
            emerging media — using research through design to explore questions
            that begin with making.
          </p>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-label">
          <span>01</span>
          <span>SELECTED WORK</span>
        </div>

        <div className="section-main">
          <div className="section-intro">
            <h2>Things I have been making.</h2>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <span className="project-number">{project.number}</span>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <span className="project-link">VIEW PROJECT ↗</span>
                </div>

                <span className="project-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="design" className="section design-section">
        <div className="section-label">
          <span>02</span>
          <span>DESIGN</span>
        </div>

        <div className="section-main">
          <h2>
            Designing across
            <br />
            <em>visual, interactive,</em>
            <br />
            and immersive media.
          </h2>

          <p className="large-copy">
            My practice moves between visual communication, interaction
            design, experience design, and immersive media. I am interested in
            how form, interaction, space, and technology shape what people
            notice, feel, and understand.
          </p>
        </div>
      </section>

      <section id="research" className="section research-section">
        <div className="section-label">
          <span>03</span>
          <span>RESEARCH</span>
        </div>

        <div className="section-main">
          <h2>
            Research through Design
            <br />
            as a way of thinking
            <br />
            <em>through making.</em>
          </h2>

          <p className="large-copy">
            My research explores how interactive and immersive technologies
            can create new ways of encountering cultural material. Through
            making, prototyping, and reflection, I investigate questions around
            embodiment, narrative, spatial configuration, AI, and cultural
            heritage.
          </p>

          <div className="research-project">
            <span>LENS</span>
            <p>
              Designing Encounters with Cultural Moments — a Research through
              Design investigation of design configurations.
            </p>
            <a href="#work">EXPLORE ↗</a>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-label">
          <span>04</span>
          <span>ABOUT</span>
        </div>

        <div className="section-main about-main">
          <div className="about-photo">
            <span>PHOTO</span>
          </div>

          <div className="about-text">
            <h2>
              Designer, maker,
              <br />
              and curious
              <br />
              <em>question-follower.</em>
            </h2>

            <p className="large-copy">
              I hold an MA in Computer Arts — Intelligent Simulation Design.
              My work brings together design practice, interactive media, XR,
              computational technologies, and cultural material.
            </p>

            <div className="about-links">
              <a href="#">CV ↗</a>
              <a href="https://github.com/aylarfakheriyan">GitHub ↗</a>
              <a href="https://www.behance.net/aylarfakherian">
                Behance ↗
              </a>
              <a href="https://www.linkedin.com/in/aylarfakherian/">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <span className="section-label">05 — CONTACT</span>

        <h2>
          Have a question?
          <br />
          <em>Follow it.</em>
        </h2>

        <a
          className="contact-email"
          href="mailto:aylarfakheriyan@gmail.com"
        >
          aylarfakheriyan@gmail.com ↗
        </a>
      </section>

      <footer>
        <span>© 2026 AYLAR FAKHERIAN</span>
        <span>DESIGN · RESEARCH · XR · AI</span>
      </footer>
    </main>
  );
}