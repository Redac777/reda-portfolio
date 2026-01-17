import { createContext } from "react";
import type { PortfolioData } from "../types/portfolio";

export type Language = "en" | "fr";

export type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: PortfolioData;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LANGUAGE_STORAGE_KEY = "portfolio_language";
