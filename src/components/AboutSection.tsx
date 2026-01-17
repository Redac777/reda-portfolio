import SectionTitle from "./SectionTitle";
import { useLanguage } from "../context/useLanguage";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 border-t border-zinc-200 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle>{t.about.title}</SectionTitle>
        <div className="mt-6 space-y-4 text-zinc-700 dark:text-zinc-300">
          {t.about.description.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
