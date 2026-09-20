"use client";

import Image from "next/image";
import { profile } from "@/lib/data";
import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function About() {
  const { t } = useLang();
  const about = t.about;
  const education = t.education;

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <Reveal className={styles.portraitWrap}>
            <Image
              src={profile.photos.portrait}
              alt={profile.fullName}
              width={520}
              height={640}
              className={styles.portrait}
            />
            <div className={styles.portraitBadge}>
              <span className={styles.portraitName}>{profile.fullName}</span>
              <span className={styles.portraitRole}>“{profile.nickname}”</span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">{about.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title">{about.title}</h2>
            </Reveal>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className={styles.aboutText}>{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className={styles.eduCard}>
                <span className={styles.eduLabel}>{about.eduLabel}</span>
                <div className={styles.eduSchool}>{education.school}</div>
                <div className={styles.eduDegree}>{education.degree}</div>
                <div className={styles.eduDetail}>{education.detail}</div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className={styles.stats}>
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.1}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
