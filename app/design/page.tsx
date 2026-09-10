"use client";

import { useState, KeyboardEvent } from "react";
import SiteNav from "../components/SiteNav";

type Project = {
  number: string;
  title: string;
  summary: string;
  description: string;
  mark?: string;
  images?: string[];
  vimeo?: string;
  links?: {
    label: string;
    href: string;
  }[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Worlds before worlds",
    summary: "A World Entirely Made by Hand",
    description:
      "An exploration of world-building through handmade materials, objects, and environments.",
    mark: "/images/projects/worlds-before-worlds/worlds-before-worlds-mark.png",
    images: [
      "/images/projects/worlds-before-worlds/01-worlds-before-worlds.png",
      "/images/projects/worlds-before-worlds/02-worlds-before-worlds.png",
      "/images/projects/worlds-before-worlds/03-worlds-before-worlds.png",
      "/images/projects/worlds-before-worlds/04-worlds-before-worlds.png",
      "/images/projects/worlds-before-worlds/05-worlds-before-worlds.png",
    ],
    vimeo: "https://player.vimeo.com/video/1212795596?h=d2fc98196e",
    links: [
      {
        label: "View on Vimeo",
        href: "https://vimeo.com/1212795596",
      },
    ],
  },

  {
    number: "02",
    title: "Chess with Ferdowsi",
    summary: "Embodied Interaction through Artefacts",
    description:
      "An ongoing Research through Design investigation into how physical and virtual artefacts can shape embodied interaction with cultural narratives.",
    mark: "/images/projects/chess-with-ferdowsi/chess-with-ferdowsi-mark.png",
    images: [
      "/images/projects/chess-with-ferdowsi/01-greed-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/02-love-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/03-deception-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/04-div-sepid-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/05-belligerent-performance-chess-with-aylar-fakherian.jpg",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/aylarfakheriyan/Chess-with-Ferdowsi-",
      },
      {
        label: "Live project",
        href: "https://aylarfakheriyan.github.io/Chess-with-Ferdowsi-/",
      },
      {
        label: "Behance",
        href: "https://www.behance.net/gallery/253451165/Chess-with-Ferdowsi",
      },
    ],
  },

  {
    number: "03",
    title: "Hidden Relationships",
    summary: "A Shift from Making to Observing",
    description:
      "An exploration of relationships, observation, and the shift between actively making and quietly noticing.",
    mark: "/images/projects/hidden-relationships/hidden-relationships-mark.png",
    images: [
      "/images/projects/hidden-relationships/01-hidden-relationships.png",
      "/images/projects/hidden-relationships/02-hidden-relationships.png",
      "/images/projects/hidden-relationships/03-hidden-relationships.png",
      "/images/projects/hidden-relationships/04-hidden-relationships.png",
      "/images/projects/hidden-relationships/05-hidden-relationships.png",
    ],
    vimeo: "https://player.vimeo.com/video/1223148169?h=33069206dc",
    links: [
      {
        label: "View on Vimeo",
        href: "https://vimeo.com/1223148169",
      },
    ],
  },

  {
    number: "04",
    title: "Simurgh",
    summary: "Interactive VR Experience",
    description:
      "An interactive virtual reality experience exploring the Simurgh myth through immersive storytelling and environmental interaction.",
    mark: "/images/projects/simurgh/simurgh-mark.png",
    images: [
      "/images/projects/simurgh/simurgh-header.jpg",
    ],
    vimeo: "https://player.vimeo.com/video/1211843738?h=70095fea1b",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/aylarfakheriyan/Simurgh-RtD",
      },
      {
        label: "Live project",
        href: "https://aylarfakheriyan.github.io/Simurgh-RtD/",
      },
      {
        label: "Behance",
        href: "https://www.behance.net/gallery/253057297/04_Simurgh-Interactive-VR-Experience",
      },
    ],
  },

  {
    number: "05",
    title: "OMNIS",
    summary: "AI as a Cultural Mediator",
    description:
      "An early Research through Design prototype exploring AI-mediated interaction for cultural heritage interpretation.",
    mark: "/images/projects/omnis/omnis-mark.png",
    images: [
      "/images/projects/omnis/Docs-omnis-ai-cultural-mediator.png",
      "/images/projects/omnis/Docs-omnis-demo.gif",
    ],
    vimeo: "https://player.vimeo.com/video/1211521489?h=f31736f5e6",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/aylarfakheriyan/OMNIS",
      },
      {
        label: "Live project",
        href: "https://aylarfakheriyan.github.io/OMNIS/",
      },
    ],
  },
];

export default function DesignPage() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenProject(openProject === index ? null : index);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleProject(index);
    }
  };

  return (
    <>
      <SiteNav />

      <main className="page-shell design-page">
        <header className="design-intro">
          <div className="design-kicker">DESIGN</div>

          <h1>
            I make things to explore how people, objects and technology can
            meet.
          </h1>
        </header>

        <section className="design-index">
          {projects.map((project, index) => {
            const isOpen = openProject === index;

            return (
              <article
                className={`design-entry ${isOpen ? "is-open" : ""}`}
                key={project.title}
              >
                <div
                  className="design-entry-header"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggleProject(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <div className="design-entry-number">
                    {project.number}
                  </div>

                  <div className="design-entry-mark">
                    {project.mark ? (
                      <img
                        src={project.mark}
                        alt=""
                        aria-hidden="true"
                      />
                    ) : (
                      <span />
                    )}
                  </div>

                  <div className="design-entry-copy">
                    <h2>{project.title}</h2>
                    <p>{project.summary}</p>
                  </div>

                  <div className="design-entry-indicator">
                    {isOpen ? "−" : "+"}
                  </div>
                </div>

                {isOpen && (
                  <div className="design-entry-content">
                    <div className="design-entry-description">
                      {project.description}
                    </div>

                    {project.images && project.images.length > 0 && (
                      <div className="design-media-grid">
                        {project.images.map((image, imageIndex) => (
                          <div
                            className="design-media-item"
                            key={image}
                          >
                            <img
                              src={image}
                              alt={`${project.title} ${imageIndex + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {project.vimeo && (
                      <div className="design-video">
                        <iframe
                          src={project.vimeo}
                          title={`${project.title} video`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          allowFullScreen
                        />
                      </div>
                    )}

                    {project.links && project.links.length > 0 && (
                      <div className="design-entry-links">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}