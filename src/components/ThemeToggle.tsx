import { useTheme } from "../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <span className="text-base">{theme === "dark" ? "🌙" : "☀️"}</span>
    </button>
  );
}
