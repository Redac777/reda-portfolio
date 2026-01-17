import React, { useMemo, useState } from "react";
import { en } from "../data/en";
import { fr } from "../data/fr";
import { LanguageContext, LANGUAGE_STORAGE_KEY, type Language } from "./language.context";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return saved === "fr" || saved === "en" ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  };

  const t = useMemo(() => (language === "fr" ? fr : en), [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
