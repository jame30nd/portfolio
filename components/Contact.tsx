"use client";

import { profile, resumes } from "@/lib/data";
import { useLang } from "./LanguageContext";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

function DownloadIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className={styles.ctaSection}>
      <div className="container">
        <Reveal>
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow} aria-hidden />

            <span className="eyebrow">{c.eyebrow}</span>
            <h2 className={styles.ctaTitle}>{c.title}</h2>
            <p className={styles.ctaSub}>{c.sub}</p>

            <div className={styles.ctaActions}>
              <a href={resumes.th} download className="btn btn-primary">
                <DownloadIcon /> {c.resumeTh}
              </a>
              <a href={resumes.en} download className="btn btn-outline">
                <DownloadIcon /> {c.resumeEn}
              </a>
              <a href="#work" className="btn btn-ghost">
                {c.viewPortfolio}
              </a>
            </div>

            <a
              href={resumes.profile}
              target="_blank"
              rel="noreferrer"
              className={styles.profileLink}
            >
              {c.fullProfile}
            </a>

            <div className={styles.ctaContact}>
              <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
              <a href={`tel:${profile.phoneRaw}`}>📞 {profile.phone}</a>
              {profile.socials.github && (
                <a href={profile.socials.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {profile.socials.linkedin && (
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {profile.socials.facebook && (
                <a href={profile.socials.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              )}
            </div>
          </div>
        </Reveal>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} By tanakorn
        </footer>
      </div>
    </section>
  );
}
