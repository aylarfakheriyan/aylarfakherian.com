import SiteNav from "../components/SiteNav";

export default function Contact() {
  return (
    <>
      <SiteNav />

      <main className="page-shell inner-page contact-page">
        <span className="kicker">CONTACT</span>

        <h1>
          Have a question?
          <br />
          <em>Follow it.</em>
        </h1>

        <div className="contact-grid">
          <p>
            Interested in a project, research collaboration, PhD
            supervision, or simply want to say hello?
          </p>

          <div className="contact-links">
            <a href="mailto:aylarfakheriyan@gmail.com">
              Email ↗
            </a>

            <a
              href="https://github.com/aylarfakheriyan"
              target="_blank"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.behance.net/aylarfakherian"
              target="_blank"
            >
              Behance ↗
            </a>

            <a
              href="https://www.linkedin.com/in/aylarfakherian/"
              target="_blank"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </main>
    </>
  );
}