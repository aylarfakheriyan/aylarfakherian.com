import Link from "next/link";
import SiteNav from "../components/SiteNav";

const projects = [
  {
    title: "Chess with Ferdowsi",
    year: "2025–Present",
    image: "/images/projects/chess-with-ferdowsi/cover.jpg",
    description:
      "Embodied interaction through physical and virtual artefacts, using Shahnameh narratives as design material.",
  },
  {
    title: "Simurgh",
    year: "2025",
    image: "/images/projects/simurgh/cover.jpg",
    description:
      "An interactive VR experience exploring immersive storytelling and intangible cultural heritage.",
  },
  {
    title: "OMNIS",
    year: "2025–Present",
    image: "/images/projects/omnis/cover.jpg",
    description:
      "An experimental prototype exploring AI as a mediator between people and cultural heritage material.",
  },
];

export default function Design() {
  return (
    <>
      <SiteNav />

      <main className="page-shell inner-page">
        <header className="page-intro">
          <span className="kicker">DESIGN</span>

          <h1>
            Making worlds,
            <br />
            <em>one layer at a time.</em>
          </h1>

          <p>
            I work across visual communication, interaction, immersive
            media, and experimental technologies — moving from an idea
            to something people can actually see, touch, and experience.
          </p>
        </header>

        <div className="design-list">
          {projects.map((project, index) => (
            <article className="design-card" key={project.title}>
              <div className="design-card-number">
                0{index + 1}
              </div>

              <div className="design-card-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="design-card-info">
                <div>
                  <span className="kicker">{project.year}</span>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>
                </div>

                <Link href={`/design/${project.title.toLowerCase().replaceAll(" ", "-")}`}>
                  VIEW PROJECT ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}