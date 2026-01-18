import SectionTitle from "./SectionTitle";
import { useLanguage } from "../context/useLanguage";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>{t.skills.title}</SectionTitle>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.skills.categories.map((cat) => (
            <div
              key={cat.title}
              className="group p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50 transition-all duration-300"
            >
              <p className="text-lg font-semibold mb-4">{cat.title}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
