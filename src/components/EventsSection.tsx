import { useLanguage } from "../context/useLanguage";
import EventCard from "./EventCard";
import SectionTitle from "./SectionTitle";

export default function EventsSection() {
  const { t } = useLanguage();

  return (
    <section id="events" className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>{t.events.title}</SectionTitle>

        <div className="mt-12 grid gap-6">
          {t.events.items.map((event) => (
            <EventCard key={event.title + event.date} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
