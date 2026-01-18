import SectionTitle from "./SectionTitle";
import { useLanguage } from "../context/useLanguage";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>{t.experience.title}</SectionTitle>

        <div className="mt-12 space-y-8">
          {t.experience.items.map((exp) => (
            <div
              key={exp.title + exp.date}
              className="p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 font-medium">{exp.date}</p>
              </div>

              <ul className="mt-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                {exp.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-neutral-400 dark:text-neutral-600">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {exp.stack?.length && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
