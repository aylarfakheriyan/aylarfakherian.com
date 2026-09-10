"use client";

import { useState } from "react";
import SiteNav from "../components/SiteNav";

type Project = {
  number: string;
  title: string;
  year: string;
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
    year: "2026–ongoing",
    summary: "A world entirely made by hand.",
    description:
      "An ongoing design exploration built around the act of constructing a world by hand, before introducing digital mediation.",
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
    year: "2025–ongoing",
    summary:
      "An embodied exploration of cultural narratives through physical and virtual artefacts.",
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
    // Video will be added here later.
    video: undefined,
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
    year: "2026–ongoing",
    summary: "A shift from making to observing.",
    description:
      "An emerging design investigation that shifts attention from making objects to observing the relationships that form around them.",
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
    year: "2022–2026",
    summary:
      "An immersive VR experience exploring the Simurgh myth through environment, storytelling and interaction.",
    description:
      "An interactive virtual reality experience based on the Persian Simurgh myth, exploring environmental storytelling, animation and interaction as ways of bringing cultural narrative into an immersive medium.",
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
    year: "2025–ongoing",
    summary:
      "An early exploration of AI-mediated interaction with cultural material.",
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

  return (
    <>
      <SiteNav />

      <main className="page-shell inner-page">
        <header className="design-page-header">
          <span className="kicker">DESIGN</span>

          <p>
            I make things to explore how people, objects and
            technology can meet.
          </p>
        </header>

        <div className="design-project-list">
          {projects.map((project, index) => {
            const isOpen = openProject === index;

            return (
              <article
                key={project.title}
                className={`design-project ${
                  isOpen ? "is-open" : ""
                }`}
              >
                <button
                  type="button"
                  className="design-project-row"
                  onClick={() => toggleProject(index)}
                  aria-expanded={isOpen}
                >
                  <span className="design-project-number">
                    {project.number}
                  </span>

                  <span className="design-project-main">
                    <span className="design-project-title">
                      {project.title}
                    </span>

                    <span className="design-project-summary">
                      {project.summary}
                    </span>
                  </span>

                  <span
                    className={`design-project-mark ${
                      project.mark ? "" : "placeholder"
                    }`}
                  >
                    {project.mark && (
                      <img
                        src={project.mark}
                        alt=""
                      />
                    )}
                  </span>

                  <span
                    className={`design-project-plus ${
                      isOpen ? "open" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="design-project-expanded">
                    <div className="design-project-description">
                      <p>{project.description}</p>
                    </div>

                    {(project.images.length > 0 || project.video) && (
                      <div className="design-project-media">
                        {project.images.map((image, imageIndex) => (
                          <div
                            className="design-project-image"
                            key={image}
                          >
                            <img
                              src={image}
                              alt={`${project.title} ${imageIndex + 1}`}
                            />
                          </div>
                        ))}

                        {project.video && (
                          <div className="design-project-video">
                            <iframe
                              title={`${project.title} — Vimeo`}
                              src={project.video}
                              width="640"
                              height="360"
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                              allowFullScreen
                            />
                          </div>
                        )}
                      </div>
                    )}

                    <div className="design-project-footer">
                      <span>
                        For the broader trajectory of the project:
                      </span>

                      <div className="design-project-links">
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
                )}
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}