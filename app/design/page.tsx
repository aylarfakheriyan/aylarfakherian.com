"use client";

import { useState } from "react";
import SiteNav from "../components/SiteNav";

type Project = {
  number: string;
  title: string;
  year: string;
  summary: string;
  description: string;
  images: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Chess with Ferdowsi",
    year: "2025–ongoing",
    summary:
      "An ongoing Research through Design investigation into physical and virtual artefacts, embodied interaction, and cultural narratives.",
    description:
      "Chess with Ferdowsi explores how physical and virtual artefacts can shape embodied encounters with cultural narratives. Using the Shahnameh as design material, the project moves between ceramic masks, performance, and an emerging virtual study. Rather than treating the artefact as a representation of the story, the work asks what happens when cultural material becomes something people physically and digitally encounter, handle, perform with, and interpret.",
    images: [
      "/images/projects/chess-with-ferdowsi/chess-with-ferdowsi-header-by-aylar-fakherian.png",
      "/images/projects/chess-with-ferdowsi/01-greed-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/02-love-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/03-deception-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/04-div-sepid-performance-chess-with-ferdowsi-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/05-belligerent-performance-chess-with-aylar-fakherian.jpg",
      "/images/projects/chess-with-ferdowsi/PHOTO-09.jpg",
    ],
    links: [
      {
        label: "GITHUB ↗",
        href: "https://github.com/aylarfakheriyan/Chess-with-Ferdowsi-",
      },
      {
        label: "LIVE ↗",
        href: "https://aylarfakheriyan.github.io/Chess-with-Ferdowsi-/",
      },
    ],
  },

  {
    number: "02",
    title: "Simurgh",
    year: "2022–2026",
    summary:
      "An interactive VR experience that explores the Simurgh myth through immersive environment, storytelling, and interaction.",
    description:
      "Simurgh is an interactive virtual reality experience based on the Persian myth of the Simurgh. Developed through Unity and Blender, the project experiments with environmental storytelling, animation, spatial presence, and interaction as ways of bringing an intangible cultural narrative into an immersive medium. The project also became the basis for a research study on designing and evaluating immersive experiences for cultural heritage.",
    images: [
      "/images/projects/simurgh/simurgh-header.jpg",
    ],
    links: [
      {
        label: "GITHUB ↗",
        href: "https://github.com/aylarfakheriyan/Simurgh-RtD",
      },
      {
        label: "BEHANCE ↗",
        href: "https://www.behance.net/gallery/253057297/Simurgh-Interactive-VR-Experience",
      },
      {
        label: "VIMEO ↗",
        href: "https://vimeo.com/1211521489",
      },
    ],
  },

  {
    number: "03",
    title: "OMNIS",
    year: "2025–ongoing",
    summary:
      "An early Research through Design prototype exploring AI-mediated interaction with cultural heritage.",
    description:
      "OMNIS explores how a locally running language model might act as a mediator between people and cultural material. Built as an early Unity prototype using Ollama and Qwen2.5, the project treats AI not as the subject of the work but as a design material within an interactive experience. It forms part of my broader exploration of how emerging technologies can support interpretation and meaning-making around cultural material.",
    images: [
      "/images/projects/omnis/Docs-omnis-ai-cultural-mediator.png",
      "/images/projects/omnis/Docs-omnis-demo.gif",
    ],
    links: [
      {
        label: "GITHUB ↗",
        href: "https://github.com/aylarfakheriyan/OMNIS",
      },
      {
        label: "LIVE ↗",
        href: "https://aylarfakheriyan.github.io/OMNIS/",
      },
    ],
  },
];

export default function Design() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<Record<number, number>>({});

  const toggleProject = (index: number) => {
    setOpenProject((current) => (current === index ? null : index));
  };

  const getActiveImage = (projectIndex: number) => {
    return activeImage[projectIndex] ?? 0;
  };

  const nextImage = (projectIndex: number, imageCount: number) => {
    setActiveImage((current) => ({
      ...current,
      [projectIndex]:
        ((current[projectIndex] ?? 0) + 1) % imageCount,
    }));
  };

  const previousImage = (projectIndex: number, imageCount: number) => {
    setActiveImage((current) => ({
      ...current,
      [projectIndex]:
        ((current[projectIndex] ?? 0) - 1 + imageCount) %
        imageCount,
    }));
  };

  return (
    <>
      <SiteNav />

      <main className="page-shell inner-page">
        {/* HEADER */}

        <header className="page-intro">
          <span className="kicker">DESIGN</span>

          <h1>
            Making things,
            <br />
            <em>to find out.</em>
          </h1>

          <p>
            I work across visual communication, interactive media, XR,
            and AI-assisted experiences, using making as a way to explore
            how people encounter and make meaning with technology.
          </p>
        </header>

        {/* PROJECTS */}

        <div className="design-list">
          {projects.map((project, index) => {
            const isOpen = openProject === index;
            const currentImage = getActiveImage(index);

            return (
              <article
                className={`design-card ${
                  isOpen ? "is-open" : ""
                }`}
                key={project.title}
              >
                <div className="design-card-number">
                  {project.number}
                </div>

                <div className="design-card-content">
                  {/* PROJECT TITLE */}

                  <button
                    type="button"
                    className="design-project-trigger"
                    onClick={() => toggleProject(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="design-project-title">
                      {project.title}
                    </span>

                    <span className="design-project-meta">
                      {project.year}
                    </span>

                    <span
                      className={`design-project-symbol ${
                        isOpen ? "open" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* ONE-LINE SUMMARY */}

                  <p className="design-project-summary">
                    {project.summary}
                  </p>

                  {/* EXPANDED PROJECT */}

                  <div
                    className={`design-project-details ${
                      isOpen ? "visible" : ""
                    }`}
                  >
                    <div className="design-project-gallery">
                      <div className="design-gallery-frame">
                        <img
                          src={project.images[currentImage]}
                          alt={`${project.title} — image ${
                            currentImage + 1
                          }`}
                        />

                        {project.images.length > 1 && (
                          <>
                            <button
                              type="button"
                              className="gallery-button gallery-prev"
                              onClick={() =>
                                previousImage(
                                  index,
                                  project.images.length
                                )
                              }
                              aria-label="Previous image"
                            >
                              ←
                            </button>

                            <button
                              type="button"
                              className="gallery-button gallery-next"
                              onClick={() =>
                                nextImage(
                                  index,
                                  project.images.length
                                )
                              }
                              aria-label="Next image"
                            >
                              →
                            </button>

                            <div className="gallery-counter">
                              {String(currentImage + 1).padStart(
                                2,
                                "0"
                              )}{" "}
                              /{" "}
                              {String(project.images.length).padStart(
                                2,
                                "0"
                              )}
                            </div>
                          </>
                        )}
                      </div>

                      {/* THUMBNAILS */}

                      {project.images.length > 1 && (
                        <div className="gallery-thumbnails">
                          {project.images.map((image, imageIndex) => (
                            <button
                              type="button"
                              key={image}
                              className={`gallery-thumbnail ${
                                currentImage === imageIndex
                                  ? "active"
                                  : ""
                              }`}
                              onClick={() =>
                                setActiveImage((current) => ({
                                  ...current,
                                  [index]: imageIndex,
                                }))
                              }
                              aria-label={`View image ${
                                imageIndex + 1
                              }`}
                            >
                              <img
                                src={image}
                                alt=""
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* DESCRIPTION */}

                    <div className="design-project-description">
                      <p>{project.description}</p>

                      {project.links && (
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
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}