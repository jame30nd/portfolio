"use client";

import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function Experience() {
  const { t } = useLang();
  const exp = t.experience;

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <span className="eyebrow">{exp.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">{exp.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">{exp.sub}</p>
          </Reveal>
        </div>

        <div className={styles.timeline}>
          {exp.jobs.map((job, i) => (
            <Reveal key={job.company} delay={0.08 * i}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineCard}>
                  <div className={styles.timelineTop}>
                    <h3 className={styles.jobRole}>{job.role}</h3>
                    <span className={styles.jobPeriod}>{job.period}</span>
                  </div>
                  <div className={styles.jobCompany}>{job.company}</div>
                  <ul className={styles.jobPoints}>
                    {job.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
