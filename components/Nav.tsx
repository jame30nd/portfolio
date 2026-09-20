"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { useLang } from "./LanguageContext";
import styles from "./Nav.module.css";

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  const LangToggle = () => (
    <div className={styles.langToggle} role="group" aria-label="Language">
      <button
        className={lang === "th" ? styles.langActive : ""}
        onClick={() => setLang("th")}
        aria-pressed={lang === "th"}
      >
        TH
      </button>
      <button
        className={lang === "en" ? styles.langActive : ""}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.dot} />
          {profile.name}
        </a>

        <nav className={styles.links}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <LangToggle />
          <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
            Resume
          </a>
        </div>

        <button
          className={styles.burger}
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} />
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className={styles.mobileBottom}>
            <LangToggle />
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
