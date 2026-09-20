"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dict, type Lang } from "@/lib/data";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof dict)[Lang];
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th");

  // โหลดภาษาที่เคยเลือกไว้จาก localStorage (ฝั่ง client เท่านั้น)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "th" || saved === "en") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  // อัปเดต <html lang="..."> ให้ตรงภาษา
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const toggle = () => setLang(lang === "th" ? "en" : "th");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: dict[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
