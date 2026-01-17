import { useLanguage } from "../context/useLanguage";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-xl border border-zinc-300/30 dark:border-white/10 p-1">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-sm rounded-lg transition cursor-pointer ${
          language === "en"
            ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
            : "text-zinc-700 dark:text-zinc-300"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 text-sm rounded-lg transition cursor-pointer ${
          language === "fr"
            ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
            : "text-zinc-700 dark:text-zinc-300"
        }`}
      >
        FR
      </button>
    </div>
  );
}
