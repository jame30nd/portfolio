"use client";

import { useRef } from "react";
import { projectMeta } from "@/lib/data";
import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-slide]");
    const gap = 22;
    const amount = card ? card.offsetWidth + gap : track.clientWidth * 0.8;
    track.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <div className={styles.workHead}>
          <div className={styles.head}>
            <Reveal>
              <span className="eyebrow">{p.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title">{p.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-sub">{p.sub}</p>
            </Reveal>
          </div>

          <div className={styles.carouselNav}>
            <button aria-label="Previous" onClick={() => scrollByCard(-1)}>
              <Arrow dir="left" />
            </button>
            <button aria-label="Next" onClick={() => scrollByCard(1)}>
              <Arrow dir="right" />
            </button>
          </div>
        </div>

        <div className={styles.carousel}>
          <div className={styles.track} ref={trackRef}>
            {p.items.map((item, i) => {
              const meta = projectMeta[i] ?? { accent: "#37b6ff", link: "#" };
              return (
                <a
                  key={item.title}
                  data-slide
                  href={meta.link}
                  target={meta.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`${styles.projectCard} ${styles.slide}`}
                >
                  <div
                    className={styles.thumb}
                    style={{
                      background: `linear-gradient(135deg, ${meta.accent}, ${meta.accent}22)`,
                    }}
                  >
                    <span className={styles.thumbInitial}>{item.title.charAt(0)}</span>
                  </div>
                  <div className={styles.projectBody}>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                    <p className={styles.projectDesc}>{item.description}</p>
                    <div className={styles.tags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.tagSm}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={styles.projectLink}>{p.viewDetail}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
