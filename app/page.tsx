const projects = [
  {
    number: "01",
    title: "LENS",
    description:
      "A Research through Design investigation of how immersive experiences can support meaningful encounters with cultural moments.",
    tags: "RtD · XR · AI · Cultural Heritage",
  },
  {
    number: "02",
    title: "OMNIS",
    description:
      "An AI-mediated cultural heritage prototype exploring how local language models can shape interaction with cultural material.",
    tags: "AI · Unity · Interaction Design",
  },
  {
    number: "03",
    title: "SIMURGH",
    description:
      "An interactive VR experience exploring the transmission of intangible cultural heritage through immersive narrative and embodied interaction.",
    tags: "VR · RtD · Cultural Narrative",
  },
  {
    number: "04",
    title: "SHAHNAMEH MASKS",
    description:
      "A Research through Design project investigating how physical and virtual artefacts shape embodied interaction with cultural narratives.",
    tags: "Embodied Interaction · XR · Craft",
  },
];

export default function Home() {
  return (
    <main>
      <nav>
        <div className="nav-name">AYLAR FAKHERIAN</div>

        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">HUMAN-CENTRED DESIGN · RESEARCH THROUGH DESIGN</p>

        <h1>
          Designing meaningful
          <br />
          encounters with
          <br />
          <em>emerging technologies.</em>
        </h1>

        <div className="hero-bottom">
          <p className="intro">
            I investigate how people create, interpret, and experience meaning
            through interactions with emerging technologies.
          </p>

          <p className="location">XR · AI · DIGITAL CULTURAL HERITAGE</p>
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="section-label">01 — RESEARCH</div>

        <div className="research-content">
          <h2>
            Research through Design as a way of asking questions through
            making.
          </h2>

          <p>
            My work explores how interactive and immersive technologies can
            create new ways of encountering cultural material. I use design
            practice, prototyping, and critical reflection to investigate
            these encounters.
          </p>

          <p>
            My current research direction focuses on AI-mediated immersive
            experiences, embodiment, spatial configuration, narrative, and
            digital cultural heritage.
          </p>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-label">02 — SELECTED WORK</div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.tags}</span>
              </div>

              <div className="project-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-label">03 — ABOUT</div>

        <div className="about-content">
          <h2>
            Designer working between interaction, culture, and emerging
            technology.
          </h2>

          <p>
            I hold an MA in Computer Arts — Intelligent Simulation Design. My
            practice combines visual communication, interaction design, XR,
            computational media, and Research through Design.
          </p>

          <a className="text-link" href="https://github.com/aylarfakheriyan">
            GitHub ↗
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">LET&apos;S TALK</p>

        <h2>
          Interested in the research,
          <br />
          the work, or the questions?
        </h2>

        <a href="mailto:aylarfakheriyan@gmail.com">
          aylarfakheriyan@gmail.com ↗
        </a>
      </section>

      <footer>
        <span>© 2026 Aylar Fakherian</span>
        <span>Research through Design · XR · AI</span>
      </footer>
    </main>
  );
}