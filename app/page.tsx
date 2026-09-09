"use client";

import { useState } from "react";

const projects = [
  {
    id: "chess",
    title: "Chess with Ferdowsi",
    year: "2025–Present",
    keywords: "Embodied Interaction · XR · Cultural Heritage",
    description:
      "An ongoing design investigation into how physical and virtual artefacts can shape embodied encounters with cultural narratives.",
    cover: "/images/projects/chess-with-ferdowsi/cover.jpg",
    images: [
      "/images/projects/chess-with-ferdowsi/01.jpg",
      "/images/projects/chess-with-ferdowsi/02.jpg",
      "/images/projects/chess-with-ferdowsi/03.jpg",
      "/images/projects/chess-with-ferdowsi/04.jpg",
    ],
    video: "",
  },
  {
    id: "simurgh",
    title: "Simurgh",
    year: "2025",
    keywords: "VR · Interactive Narrative · Cultural Heritage",
    description:
      "An interactive VR experience exploring how immersive environments can create new ways of encountering intangible cultural heritage.",
    cover: "/images/projects/simurgh/cover.jpg",
    images: [
      "/images/projects/simurgh/01.jpg",
      "/images/projects/simurgh/02.jpg",
      "/images/projects/simurgh/03.jpg",
      "/images/projects/simurgh/04.jpg",
    ],
    video: "",
  },
  {
    id: "omnis",
    title: "OMNIS",
    year: "2025–Present",
    keywords: "AI · Interaction · Cultural Heritage",
    description:
      "An exploratory prototype investigating AI as a mediator between people and cultural heritage material.",
    cover: "/images/projects/omnis/cover.jpg",
    images: [
      "/images/projects/omnis/01.jpg",
      "/images/projects/omnis/02.jpg",
      "/images/projects/omnis/03.jpg",
      "/images/projects/omnis/04.jpg",
    ],
    video: "",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`design-project ${open ? "is-open" : ""}`}>
      <button
        className="project-image-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={`Explore ${project.title}`}
      >
        <img
          src={project.cover}
          alt={project.title}
          className="project-cover"
        />

        <span className="project-image-label">
          {open ? "CLOSE ↑" : "EXPLORE ↓"}
        </span>
      </button>

      <div className="project-info">
        <div>
          <h3>{project.title}</h3>

          <p className="project-description">
            {project.description}
          </p>
        </div>

        <div className="project-meta">
          <span>{project.year}</span>
          <span>{project.keywords}</span>
        </div>
      </div>

      <div className={`project-expand ${open ? "expanded" : ""}`}>
        <div className="project-gallery">
          {project.images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${project.title} — image ${index + 1}`}
            />
          ))}
        </div>

        {project.video && (
          <div className="project-video">
            <iframe
              src={project.video}
              title={`${project.title} video`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      {/* =========================
          NAVIGATION
          ========================= */}

      <nav className="site-nav">
        <a href="#home" className="nav-name">
          AYLAR FAKHERIAN
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#design">Design</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-toggle"
          aria-label="Toggle light and dark mode"
        >
          ◐
        </button>
      </nav>

      {/* =========================
          HOME
          ========================= */}

      <section id="home" className="home-section">
        <div className="home-intro">
          <div className="home-heading">
            <span className="eyebrow">AYLAR FAKHERIAN</span>

            <h1>
              A World
              <br />
              <em>Builder.</em>
            </h1>

            <p className="identity">
              Human-Centred Designer
              <br />
              Research through Design · XR · AI
            </p>
          </div>

          <div className="profile-image">
            <img
              src="/images/profile/aylar-profile.jpg"
              alt="Aylar Fakherian"
            />
          </div>
        </div>

        <div className="home-bio">
          <div className="section-label">
            <span>01</span>
            <span>ABOUT</span>
          </div>

          <div className="bio-content">
            <h2>Hi, I’m Aylar.</h2>

            <div className="bio-text">
              <p>
                I am a Human-Centred Designer working across visual
                communication, interaction design, immersive media, and
                emerging technologies.
              </p>

              <p>
                My practice moves between making and questioning — using
                design to explore how people create, interpret, and
                experience meaning through technology.
              </p>

              <p>
                I am particularly interested in XR, AI, interactive
                experiences, and cultural material, with Research through
                Design forming an important part of how I think and work.
              </p>
            </div>

            <div className="education">
              <span className="mini-label">EDUCATION</span>

              <p>
                MA in Computer Arts — Intelligent Simulation Design
              </p>
            </div>
          </div>
        </div>

        {/* SELECTED WORK */}

        <div className="home-work">
          <div className="section-label">
            <span>02</span>
            <span>SELECTED WORK</span>
          </div>

          <div className="home-work-grid">
            {projects.map((project) => (
              <a
                href="#design"
                className="home-work-item"
                key={project.id}
              >
                <div className="home-work-image">
                  <img src={project.cover} alt={project.title} />
                </div>

                <div className="home-work-title">
                  <span>{project.year}</span>
                  <h3>{project.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* LATEST */}

        <div className="latest-section">
          <div className="section-label">
            <span>03</span>
            <span>LATEST / CURRENT</span>
          </div>

          <div className="latest-list">
            <div className="latest-item">
              <span>2026</span>

              <div>
                <h3>Chess with Ferdowsi</h3>
                <p>
                  Virtual artefact study and XR comparative investigation
                  in development.
                </p>
              </div>
            </div>

            <div className="latest-item">
              <span>2026</span>

              <div>
                <h3>LENS</h3>
                <p>
                  Designing encounters with cultural moments through
                  Research through Design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT PREVIEW */}

        <div className="home-contact">
          <div className="section-label">
            <span>04</span>
            <span>CONTACT</span>
          </div>

          <div className="home-contact-content">
            <h2>
              Have a
              <br />
              <em>question?</em>
            </h2>

            <a
              href="mailto:aylarfakheriyan@gmail.com"
              className="email-link"
            >
              <img
                src="/images/icons/email.png"
                alt=""
              />
              aylarfakheriyan@gmail.com ↗
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          DESIGN
          ========================= */}

      <section id="design" className="design-section-page">
        <div className="section-header">
          <div className="section-label">
            <span>05</span>
            <span>DESIGN</span>
          </div>

          <div className="section-header-main">
            <h2>
              I build worlds between
              <br />
              what we see, what we touch,
              <br />
              and what we <em>imagine.</em>
            </h2>

            <p>
              My design practice moves across visual communication,
              interaction, experience design, and immersive media.
            </p>
          </div>
        </div>

        <div className="design-projects">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>

      {/* =========================
          RESEARCH
          ========================= */}

      <section id="research" className="research-section-page">
        <div className="section-header">
          <div className="section-label">
            <span>06</span>
            <span>RESEARCH</span>
          </div>

          <div className="section-header-main">
            <h2>
              Research through Design
              <br />
              <em>through making.</em>
            </h2>

            <p>
              I use making, prototyping, and reflection to investigate how
              interactive and immersive technologies can create meaningful
              encounters with cultural material.
            </p>
          </div>
        </div>

        <div className="lens-block">
          <div className="lens-mark">
            <span>LENS</span>
            <small>01</small>
          </div>

          <div className="lens-content">
            <span className="mini-label">CURRENT RESEARCH DIRECTION</span>

            <h3>
              Designing Encounters
              <br />
              with Cultural Moments
            </h3>

            <p>
              A Research through Design investigation into how immersive
              experiences can be intentionally configured to support
              meaningful encounters with cultural moments.
            </p>

            <a href="#contact" className="text-arrow">
              EXPLORE RESEARCH ↗
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT
          ========================= */}

      <section id="contact" className="contact-section-page">
        <div className="section-label">
          <span>07</span>
          <span>CONTACT</span>
        </div>

        <div className="contact-main">
          <h2>
            Have a question?
            <br />
            <em>Follow it.</em>
          </h2>

          <div className="contact-links">
            <a href="mailto:aylarfakheriyan@gmail.com">
              <img src="/images/icons/email.png" alt="" />
              Email
            </a>

            <a
              href="https://github.com/aylarfakheriyan"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/github.png" alt="" />
              GitHub
            </a>

            <a
              href="https://www.behance.net/aylarfakherian"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/behance.png" alt="" />
              Behance
            </a>

            <a
              href="https://www.linkedin.com/in/aylarfakherian/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/linkedin.png" alt="" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
          ========================= */}

      <footer>
        <span>© 2026 AYLAR FAKHERIAN</span>
        <span>A WORLD BUILDER</span>
      </footer>
    </main>
  );
}