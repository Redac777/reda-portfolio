import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/useLanguage";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/50 bg-white/80 backdrop-blur-xl dark:border-neutral-800/50 dark:bg-neutral-950/80">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight text-neutral-900 dark:text-neutral-100">
          Reda Chemseddine<span className="text-neutral-400">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { href: "#home", label: t.nav.home },
            { href: "#events", label: t.nav.events },
            { href: "#projects", label: t.nav.projects },
            { href: "#contact", label: t.nav.contact }
          ].map((item) => (
            <a
              key={item.href}
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors duration-200"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

