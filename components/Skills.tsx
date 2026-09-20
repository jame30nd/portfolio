"use client";

import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function Skills() {
  const { t } = useLang();
  const s = t.skills;

  return (
    <section id="skills" className={`${styles.section} ${styles.subtle}`}>
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <span className="eyebrow">{s.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">{s.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">{s.sub}</p>
          </Reveal>
        </div>

        <div className={styles.skillGrid}>
          {s.groups.map((group, i) => (
            <Reveal key={group.group} delay={0.1 + i * 0.1}>
              <div className={styles.skillCard}>
                <h3 className={styles.skillGroup}>{group.group}</h3>
                <div className={styles.tags}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
