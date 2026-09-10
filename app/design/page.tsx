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
  videos?: {
    label: string;
    src: string;
  }[];
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
    videos: [
      {
        label: "Video",
        src: "https://player.vimeo.com/video/1212795596?h=d2fc98196e",
      },
    ],
    links: [
      {
        label: "VIMEO",
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
        label: "GITHUB",
        href: "https://github.com/aylarfakheriyan/Chess-with-Ferdowsi-",
      },
      {
        label: "LIVE PROJECT",
        href: "https://aylarfakheriyan.github.io/Chess-with-Ferdowsi-/",
      },
      {
        label: "BEHANCE",
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
    videos: [
      {
        label: "Video",
        src: "https://player.vimeo.com/video/1223148169?h=33069206dc",
      },
    ],
    links: [
      {
        label: "VIMEO",
        href: "https://vimeo.com/1223148169",
      },
      {
        label: "BEHANCE",
        href: "https://www.behance.net/gallery/255112317/Hidden-Relationships-A-Shift-From-Making-to-Observing",
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
    videos: [
      {
        label: "The First Encounter",
        src: "https://player.vimeo.com/video/1211843738?h=70095fea1b",
      },
      {
        label: "The Experience",
        src: "https://player.vimeo.com/video/1211521489?h=f31736f5e6",
      },
    ],
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/aylarfakheriyan/Simurgh-RtD",
      },
      {
        label: "LIVE PROJECT",
        href: "https://aylarfakheriyan.github.io/Simurgh-RtD/",
      },
      {
        label: "BEHANCE",
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
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/aylarfakheriyan/OMNIS",
      },
      {
        label: "LIVE PROJECT",
        href: "https://aylarfakheriyan.github.io/OMNIS/",
      },
    ],
  },
];

export default function DesignPage() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenProject((current) => (current === index ? null : index));
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
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

      <main className="design-page">
        <header className="design-intro">
          <div className="design-kicker">Design</div>

          <h1>
            I make things to explore how people, objects and technology can
            meet.
          </h1>
        </header>

        <section className="design-index" aria-label="Design projects">
          {projects.map((project, index) => {
            const isOpen = openProject === index;

            return (
              <article
                className={`design-entry ${isOpen ? "is-open" : ""}`}
                key={project.title}
              >
                <button
                  type="button"
                  className="design-entry-header"
                  aria-expanded={isOpen}
                  onClick={() => toggleProject(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span className="design-entry-number">
                    {project.number}
                  </span>

                  <span
                    className={`design-entry-mark ${
                      isOpen ? "is-active" : ""
                    }`}
                  >
                    {project.mark && (
                      <img
                        src={project.mark}
                        alt=""
                        aria-hidden="true"
                      />
                    )}
                  </span>

                  <span className="design-entry-copy">
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
                  />
                </button>

                {isOpen && (
                  <div className="design-entry-content">
                    <div className="design-entry-description">
                      {project.description}
                    </div>

                    {project.images && project.images.length > 0 && (
                      <div className="design-media-grid">
                        {project.images.map((image, imageIndex) => (
                          <figure
                            className="design-media-item"
                            key={image}
                          >
                            <img
                              src={image}
                              alt={`${project.title} ${imageIndex + 1}`}
                            />
                          </figure>
                        ))}
                      </div>
                    )}

                    {project.videos && project.videos.length > 0 && (
                      <div className="design-videos">
                        {project.videos.map((video) => (
                          <div
                            className="design-video-block"
                            key={video.src}
                          >
                            <div className="design-video-label">
                              {video.label}
                            </div>

                            <div className="design-video">
                              <iframe
                                src={video.src}
                                title={`${project.title} — ${video.label}`}
                                frameBorder="0"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        ))}
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

      <style jsx>{`
        .design-page {
          width: min(100% - 48px, 980px);
          margin: 0 auto;
          padding: 78px 0 120px;
        }

        .design-intro {
          margin-bottom: 92px;
        }

        .design-kicker {
          margin-bottom: 16px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 6.5vw, 60px);
          line-height: 1;
          font-weight: 400;
          font-style: italic;
          letter-spacing: -0.04em;
        }

        .design-intro h1 {
          max-width: 610px;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(28px, 3vw, 40px)
          line-height: 1.05;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .design-index {
          width: 100%;
        }

        .design-entry {
          border-top: 1px solid rgba(0, 0, 0, 0.14);
        }

        .design-entry:last-child {
          border-bottom: 1px solid rgba(0, 0, 0, 0.14);
        }

        .design-entry-header {
          appearance: none;
          width: 100%;
          border: 0;
          background: transparent;
          padding: 27px 0;
          display: grid;
          grid-template-columns: 42px 52px minmax(0, 1fr) 20px;
          column-gap: 14px;
          align-items: center;
          text-align: left;
          cursor: pointer;
          color: inherit;
        }

        .design-entry-header:hover .design-entry-title {
          transform: translateX(3px);
        }

        .design-entry-number {
          align-self: start;
          padding-top: 5px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9px;
          line-height: 1;
          font-weight: 700;
          color: #d52828;
          letter-spacing: 0.05em;
        }

        .design-entry-mark {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 180ms ease;
        }

        .design-entry-mark img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .design-entry-mark.is-active {
          transform: scale(1.08);
        }

        .design-entry-copy {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .design-entry-title {
          display: block;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
          line-height: 1.15;
          font-weight: 500;
          letter-spacing: -0.02em;
          transition: transform 180ms ease;
        }

        .design-entry-summary {
          display: block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 400;
        }

        .design-entry-state {
          position: relative;
          width: 12px;
          height: 12px;
          justify-self: end;
        }

        .design-entry-state::before,
        .design-entry-state::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 1px;
          background: currentColor;
          transform: translate(-50%, -50%);
          transition: transform 180ms ease;
        }

        .design-entry-state::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .design-entry.is-open .design-entry-state::after {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .design-entry-content {
          margin: 0 0 42px 108px;
          padding-left: 22px;
          border-left: 1px solid #d52828;
        }

        .design-entry-description {
          max-width: 600px;
          padding: 4px 0 30px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          line-height: 1.65;
        }

        .design-media-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 8px;
          margin-bottom: 26px;
        }

        .design-media-item {
          min-width: 0;
          margin: 0;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #eee;
        }

        .design-media-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .design-videos {
          width: 100%;
        }

        .design-video-block {
          width: 100%;
          margin-bottom: 30px;
        }

        .design-video-label {
          margin-bottom: 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
          line-height: 1.2;
        }

        .design-video {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #111;
          overflow: hidden;
        }

        .design-video iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .design-entry-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          padding-bottom: 4px;
        }

        .design-entry-links a {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-decoration: none;
          color: inherit;
        }

        .design-entry-links a:hover {
          color: #d52828;
        }

        @media (max-width: 700px) {
          .design-page {
            width: min(100% - 32px, 980px);
            padding-top: 54px;
          }

          .design-intro {
            margin-bottom: 60px;
          }

          .design-kicker {
            font-size: 46px;
          }

          .design-intro h1 {
            font-size: 16px;
          }

          .design-entry-header {
            grid-template-columns: 30px 42px minmax(0, 1fr) 16px;
            column-gap: 10px;
            padding: 22px 0;
          }

          .design-entry-mark {
            width: 36px;
            height: 36px;
          }

          .design-entry-title {
            font-size: 17px;
          }

          .design-entry-summary {
            font-size: 11px;
          }

          .design-entry-content {
            margin-left: 0;
            padding-left: 14px;
          }

          .design-media-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 420px) {
          .design-media-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}