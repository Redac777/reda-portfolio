import SectionTitle from "./SectionTitle";
import { useLanguage } from "../context/useLanguage";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 border-t border-zinc-200 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle>{t.experience.title}</SectionTitle>

        <div className="mt-8 space-y-4">
          {t.experience.items.map((exp) => (
            <div
              key={exp.title + exp.date}
              className="rounded-2xl border border-zinc-200 dark:border-white/10 p-6 bg-white dark:bg-white/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <p className="font-semibold">{exp.title}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.date}</p>
              </div>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                {exp.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              {exp.stack?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs rounded-full border border-zinc-200 dark:border-white/10 px-2 py-1 text-zinc-700 dark:text-zinc-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
