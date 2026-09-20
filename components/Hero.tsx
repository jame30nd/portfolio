"use client";

import { profile } from "@/lib/data";
import { useLang } from "./LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <span className={`${styles.badge} ${styles.drop}`} style={{ animationDelay: "0.05s" }}>
          <span className={styles.pulse} /> {t.hero.badge}
        </span>

        <h1 className={`${styles.title} ${styles.drop}`} style={{ animationDelay: "0.15s" }}>
          {t.hero.greeting}{" "}
          <span className={styles.highlight}>{profile.name}</span>
          <span className={styles.nick}>“{profile.nickname}”</span>
          <br />
          <span className={styles.role}>{t.hero.role}</span>
        </h1>

        <p className={`${styles.tagline} ${styles.drop}`} style={{ animationDelay: "0.28s" }}>
          {t.hero.tagline}
        </p>

        <div className={`${styles.actions} ${styles.drop}`} style={{ animationDelay: "0.4s" }}>
          <a href="#work" className="btn btn-primary">
            {t.hero.ctaWork}
          </a>
          <a href="#contact" className="btn btn-outline">
            {t.hero.ctaResume}
          </a>
        </div>

        <div className={`${styles.meta} ${styles.drop}`} style={{ animationDelay: "0.52s" }}>
          <span>📍 {t.hero.location}</span>
          <span className={styles.sep} />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>

      <a href="#about" className={styles.scroll} aria-label={t.hero.scroll}>
        <span className={styles.mouse}>
          <span className={styles.wheel} />
        </span>
        {t.hero.scroll}
      </a>
    </section>
  );
}
