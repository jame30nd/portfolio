"use client";

import { projectMeta } from "@/lib/data";
import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section id="work" className={styles.section}>
      <div className="container">
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

        <div className={styles.projectGrid}>
          {p.items.map((item, i) => {
            const meta = projectMeta[i] ?? { accent: "#37b6ff", link: "#" };
            return (
              <Reveal key={item.title} delay={0.08 * i}>
                <a
                  href={meta.link}
                  target={meta.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={styles.projectCard}
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
