import SiteNav from "../components/SiteNav";

export default function News() {
  return (
    <>
      <SiteNav />

      <main className="page-shell inner-page">
        <header className="page-intro compact">
          <span className="kicker">NEWS</span>

          <h1>
            What’s
            <br />
            <em>happening.</em>
          </h1>
        </header>

        <div className="archive-list">
          <article>
            <span>2026</span>

            <div>
              <h2>Simurgh paper accepted at ArtsIT 2026</h2>

              <p>
                “Design and Evaluation of an Interactive Virtual Reality
                Experience for Transmitting Intangible Cultural Heritage:
                A Case Study of the Simurgh Myth.”
              </p>

              <a
                href="https://artsit.eai-conferences.org/2026/accepted-papers/"
                target="_blank"
              >
                VIEW CONFERENCE PAGE ↗
              </a>
            </div>
          </article>

          <article>
            <span>ONGOING</span>

            <div>
              <h2>Chess with Ferdowsi</h2>

              <p>
                Continuing the investigation into physical and virtual
                artefacts and embodied interaction.
              </p>
            </div>
          </article>

          <article>
            <span>ONGOING</span>

            <div>
              <h2>LENS</h2>

              <p>
                Developing the next stage of my Research through Design
                direction.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}