import Link from "next/link";
import SiteNav from "./components/SiteNav";

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="page-shell">
        {/* HERO */}

        <section className="home-hero">
          <div className="hero-copy">
            <span className="kicker">AYLAR FAKHERIAN</span>

            <h1>
              A World <em>Builder.</em>
            </h1>

            <p className="hero-role">
              Human-Centred Designer
              <br />
              Research through Design · XR · AI
            </p>
          </div>

          <div className="hero-photo">
            <img
              src="/images/profile/aylar-profile.jpg"
              alt="Aylar Fakherian"
            />
          </div>
        </section>

        {/* INTRO */}

        <section className="intro-section">
          <div className="section-number">01</div>

          <div className="intro-content">
            <h2>Hi, I’m Aylar.</h2>

            <p className="intro-lead">
              I like making things — and then wondering what else they
              could become.
            </p>

            <p>
              I started in Visual Communication Design, where I learned
              to think through images, objects, stories, and the worlds
              they can create.
            </p>

            <p>
              During my MA in Computer Arts — Intelligent Simulation
              Design, I began bringing those ideas into interactive and
              immersive spaces. I learned how visual design, 3D, animation,
              interaction, and technology could become ways of bringing
              people into worlds rather than simply showing them one.
            </p>

            <p>
              Now I’m interested in what happens next: can I design
              experiences where people do not just look at a world, but
              actually feel like they are <em>there</em>?
            </p>
          </div>
        </section>

        {/* EDUCATION */}

        <section className="education-section">
          <div className="section-number">02</div>

          <div className="education-content">
            <span className="kicker">EDUCATION</span>

            <div className="education-item">
              <div className="education-year">2017</div>

              <div>
                <h3>BA in Visual Communication Design</h3>
                <p>University of Nabi Akram</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-year">2022</div>

              <div>
                <h3>
                  MA in Computer Arts — Intelligent Simulation Design
                </h3>
                <p>Art University of Tabriz</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEWS */}

        <section className="home-list-section">
          <div className="section-heading-row">
            <span className="kicker">NEWS</span>

            <Link href="/news" className="section-link">
              VIEW ALL ↗
            </Link>
          </div>

          <Link href="/news" className="news-item">
            <span>2026</span>

            <div>
              <h3>
                My paper on an interactive VR experience for transmitting
                intangible cultural heritage has been accepted at ArtsIT
                2026.
              </h3>

              <p>
                A case study of the Simurgh myth exploring VR,
                storytelling, and cultural heritage.
              </p>
            </div>

            <span className="arrow">↗</span>
          </Link>

          <Link href="/news" className="news-item">
            <span>ONGOING</span>

            <div>
              <h3>Chess with Ferdowsi</h3>

              <p>
                Continuing the physical and virtual artefact investigation.
              </p>
            </div>

            <span className="arrow">↗</span>
          </Link>

          <Link href="/news" className="news-item">
            <span>ONGOING</span>

            <div>
              <h3>LENS</h3>

              <p>
                Developing a Research through Design investigation into
                meaningful encounters with cultural moments.
              </p>
            </div>

            <span className="arrow">↗</span>
          </Link>
        </section>

        {/* LATEST POSTS */}

        <section className="home-list-section">
          <div className="section-heading-row">
            <span className="kicker">LATEST POSTS</span>

            <Link href="/posts" className="section-link">
              VIEW ALL ↗
            </Link>
          </div>

          <Link href="/posts" className="post-item">
            <span>2026</span>

            <div>
              <h3>Notes from the making of Chess with Ferdowsi</h3>
              <p>
                A short reflection on artefacts, embodiment, and making.
              </p>
            </div>

            <span className="arrow">↗</span>
          </Link>

          <Link href="/posts" className="post-item">
            <span>2025</span>

            <div>
              <h3>Building Simurgh in VR</h3>
              <p>
                From cultural narrative to an interactive immersive
                experience.
              </p>
            </div>

            <span className="arrow">↗</span>
          </Link>
        </section>

        {/* SELECTED PUBLICATIONS */}

        <section className="home-list-section publication-preview">
          <div className="section-heading-row">
            <span className="kicker">SELECTED PUBLICATIONS</span>

            <Link href="/publications" className="section-link">
              VIEW ALL ↗
            </Link>
          </div>

          <Link
            href="https://artsit.eai-conferences.org/2026/accepted-papers/"
            target="_blank"
            className="publication-item"
          >
            <span>2026</span>

            <div>
              <h3>
                Design and Evaluation of an Interactive Virtual Reality
                Experience for Transmitting Intangible Cultural Heritage:
                A Case Study of the Simurgh Myth
              </h3>

              <p>
                ArtsIT 2026 · Aylar Fakherian
              </p>
            </div>

            <span className="arrow">↗</span>
          </Link>

          <Link href="/publications" className="publication-item">
            <span>2018</span>

            <div>
              <h3>Converting Human Movements into a Conceptual Painting</h3>

              <p>
                Journal publication · Motion Capture · Interactive Media
              </p>
            </div>

            <span className="arrow">↗</span>
          </Link>
        </section>

        {/* FOOTER CTA */}

        <section className="home-end">
          <span className="kicker">THE NEXT</span>

          <h2>
            There is always
            <br />
            another world <em>to build.</em>
          </h2>

          <Link href="/contact" className="large-link">
            LET’S TALK ↗
          </Link>
        </section>
      </main>
    </>
  );
}