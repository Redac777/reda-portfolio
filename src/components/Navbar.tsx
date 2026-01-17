import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/useLanguage";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="font-semibold text-zinc-900 dark:text-white">
          Reda Chemseddine<span className="text-zinc-500 dark:text-zinc-400">.</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <a className="hover:text-zinc-900 dark:hover:text-white" href="#home">
            {t.nav.home}
          </a>
          <a
            className="hover:text-zinc-900 dark:hover:text-white"
            href="#events"
          >
            {t.nav.events}
          </a>
          <a
            className="hover:text-zinc-900 dark:hover:text-white"
            href="#projects"
          >
            {t.nav.projects}
          </a>
          <a
            className="hover:text-zinc-900 dark:hover:text-white"
            href="#contact"
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
