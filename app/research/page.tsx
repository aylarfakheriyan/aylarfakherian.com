import Link from "next/link";
import SiteNav from "../components/SiteNav";

export default function Research() {
  return (
    <>
      <SiteNav />

      <main className="page-shell inner-page">
        <header className="page-intro">
          <span className="kicker">RESEARCH</span>

          <h1>
            Research through
            <br />
            <em>Design.</em>
          </h1>

          <p>
            I use making, prototyping, and reflection to explore how
            interactive and immersive technologies can shape meaningful
            experiences.
          </p>
        </header>

        <section className="research-feature">
          <div className="research-index">01</div>

          <div>
            <span className="kicker">CURRENT RESEARCH</span>

            <h2>
              LENS: Designing Encounters
              <br />
              with Cultural Moments
            </h2>

            <p>
              How can immersive experiences be intentionally configured
              to support meaningful encounters with cultural moments?
            </p>

            <p>
              LENS investigates this question through Research through
              Design, exploring how narrative, embodiment, environment,
              interaction, and technological mediation can shape
              experiential conditions.
            </p>

            <Link href="/contact" className="text-link">
              DISCUSS THE RESEARCH ↗
            </Link>
          </div>
        </section>

        <section className="research-secondary">
          <div>
            <span className="kicker">RELATED WORK</span>
          </div>

          <div className="research-links">
            <Link href="/design">
              Chess with Ferdowsi <span>↗</span>
            </Link>

            <Link href="/design">
              Simurgh <span>↗</span>
            </Link>

            <Link href="/design">
              OMNIS <span>↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}