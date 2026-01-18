import { useLanguage } from "../context/useLanguage";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-lg bg-neutral-100 dark:bg-neutral-900 p-1">
      {["en", "fr"].map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang as "en" | "fr")}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 uppercase ${
            language === lang
              ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-neutral-100"
              : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}