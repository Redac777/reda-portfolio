import SectionTitle from "./SectionTitle";
import { useLanguage } from "../context/useLanguage";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 border-t border-zinc-200 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle>{t.skills.title}</SectionTitle>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.skills.categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-zinc-200 dark:border-white/10 p-5 bg-white dark:bg-white/5"
            >
              <p className="font-semibold">{cat.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="text-sm rounded-full border border-zinc-200 dark:border-white/10 px-3 py-1 text-zinc-700 dark:text-zinc-200"
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
