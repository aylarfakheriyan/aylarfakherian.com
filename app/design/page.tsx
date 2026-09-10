"use client";

import { KeyboardEvent, useState } from "react";
import SiteNav from "../components/SiteNav";

type Project = {
  number: string;
  title: string;
  summary: string;
  description: string;
  mark: string;
  images: string[];
  video?: string;
  links: {
    label: string;
    href: string;
  }[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Worlds before worlds",
    summary: "A World Made by Hand",
    description:
      "Images could describe a world. They couldn't convince my mind that it existed.\n\nThrough illustration, photography, and graphic design, I learned to communicate ideas visually. But the worlds I imagined always remained on the other side of the surface. This project begins from that distance.",
    mark: "",
    images: [],
    video:
      "https://player.vimeo.com/video/1212795596?h=d2fc98196e",
    links: [
      {
        label: "VIMEO ↗",
        href: "https://vimeo.com/1212795596",
      },
    ],
  },

  {
    number: "02",
    title: "Chess with Ferdowsi",
    summary: "Embodied Encounters through Artefacts",
    description:
      "An ongoing Research through Design investigation into how physical and virtual artefacts can shape embodied encounters with cultural narratives.",
    mark:
      "/images/projects/chess-with-ferdowsi/chess-with-ferdowsi-mark.png",
    images: [
      "/images/projects/chess-with-ferdowsi/01-greed-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/02-love-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/03-deception-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/04-div-sepid-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/05-belligerent-performance-chess-with-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/PHOTO-09.jpg",
    ],
    links: [
      {
        label: "LIVE ↗",
        href: "https://aylarfakheriyan.github.io/Chess-with-Ferdowsi-/",
      },
      {
        label: "GITHUB ↗",
        href: "https://github.com/aylarfakheriyan/Chess-with-Ferdowsi-",
      },
      {
        label: "BEHANCE ↗",
        href: "https://www.behance.net/gallery/253451165/Chess-with-Ferdowsi",
      },
    ],
  },

  {
    number: "03",
    title: "Hidden Relationships",
    summary: "A Shift From Making to Observing",
    description:
      "An emerging design investigation that shifts attention from making things to observing the relationships that form around them.",
    mark: "",
    images: [],
    video:
      "https://player.vimeo.com/video/1223148169?h=33069206dc",
    links: [
      {
        label: "VIMEO ↗",
        href: "https://vimeo.com/1223148169",
      },
    ],
  },

  {
    number: "04",
    title: "Simurgh",
    summary: "An Encounter Beyond the Page",
    description:
      "An interactive virtual reality experience based on the Persian Simurgh myth, exploring environment, storytelling, animation and interaction within an immersive medium.",
    mark: "/images/projects/simurgh/simurgh-mark.png",
    images: [
      "/images/projects/simurgh/simurgh-header.jpg",
    ],
    video:
      "https://player.vimeo.com/video/1211843738?h=70095fea1b",
    links: [
      {
        label: "LIVE ↗",
        href: "https://aylarfakheriyan.github.io/Simurgh-RtD/",
      },
      {
        label: "GITHUB ↗",
        href: "https://github.com/aylarfakheriyan/Simurgh-RtD",
      },
      {
        label: "BEHANCE ↗",
        href: "https://www.behance.net/gallery/253057297/04_Simurgh-Interactive-VR-Experience",
      },
      {
        label: "VIMEO ↗",
        href: "https://vimeo.com/1211843738",
      },
    ],
  },

  {
    number: "05",
    title: "OMNIS",
    summary: "A Unity prototype exploring local AI",
    description:
      "An early Research through Design prototype exploring how a locally running language model might mediate interaction with cultural material.",
    mark: "/images/projects/omnis/omnis-mark.png",
    images: [
      "/images/projects/omnis/Docs-omnis-ai-cultural-mediator.png",
      "/images/projects/omnis/Docs-omnis-demo.gif",
    ],
    video:
      "https://player.vimeo.com/video/1211521489?h=f31736f5e6",
    links: [
      {
        label: "LIVE ↗",
        href: "https://aylarfakheriyan.github.io/OMNIS/",
      },
      {
        label: "GITHUB ↗",
        href: "https://github.com/aylarfakheriyan/OMNIS",
      },
      {
        label: "VIMEO ↗",
        href: "https://vimeo.com/1211521489",
      },
    ],
  },
];

export default function Design() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenProject((current) =>
      current === index ? null : index
    );
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
          <span className="design-kicker">DESIGN</span>

          <p className="design-lead">
            I make things to explore how people, objects and
            technology can meet.
          </p>
        </header>

        <section
          className="design-index"
          aria-label="Design projects"
        >
          {projects.map((project, index) => {
            const isOpen = openProject === index;

            return (
              <article
                key={project.title}
                className={`design-entry ${
                  isOpen ? "is-open" : ""
                }`}
              >
                <div
                  className="design-entry-header"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggleProject(index)}
                  onKeyDown={(event) =>
                    handleKeyDown(event, index)
                  }
                >
                  <span className="design-entry-number">
                    {project.number}
                  </span>

                  <span className="design-entry-mark">
                    {project.mark ? (
                      <img
                        src={project.mark}
                        alt=""
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        className="design-entry-mark-placeholder"
                        aria-hidden="true"
                      />
                    )}
                  </span>

                  <span className="design-entry-info">
                    <span className="design-entry-title">
                      {project.title}
                    </span>

                    <span className="design-entry-summary">
                      {project.summary}
                    </span>
                  </span>

                  <span
                    className="design-entry-state"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : ""}
                  </span>
                </div>

                {isOpen && (
                  <div className="design-entry-detail">
                    <div className="design-entry-detail-inner">
                      <div className="design-entry-description">
                        {project.description
                          .split("\n\n")
                          .map((paragraph) => (
                            <p key={paragraph}>
                              {paragraph}
                            </p>
                          ))}
                      </div>

                      {(project.images.length > 0 ||
                        project.video) && (
                        <div className="design-entry-media">
                          {project.images.map(
                            (image, imageIndex) => (
                              <figure
                                className="design-entry-image"
                                key={image}
                              >
                                <img
                                  src={image}
                                  alt={`${project.title} ${
                                    imageIndex + 1
                                  }`}
                                />
                              </figure>
                            )
                          )}

                          {project.video && (
                            <div className="design-entry-video">
                              <iframe
                                src={project.video}
                                title={`${project.title} — Vimeo`}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                allowFullScreen
                              />
                            </div>
                          )}
                        </div>
                      )}

                      <div className="design-entry-footer">
                        <span className="design-entry-footer-label">
                          Explore the project
                        </span>

                        <div className="design-entry-links">
                          {project.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
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