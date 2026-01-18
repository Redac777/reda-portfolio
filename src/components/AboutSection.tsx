import SectionTitle from "./SectionTitle";
import { useLanguage } from "../context/useLanguage";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>{t.about.title}</SectionTitle>
        <div className="mt-8 space-y-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
          {t.about.description.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
