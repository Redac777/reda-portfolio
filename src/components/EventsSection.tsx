import { useLanguage } from "../context/useLanguage";
import EventCard from "./EventCard";

export default function EventsSection() {
  const { t } = useLanguage();

  return (
    <section id="events" className="mx-auto max-w-5xl px-4 py-20 border-t border-zinc-200 dark:border-white/10">
      <h2 className="text-2xl font-semibold">
        {t.events.title}
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-1">
        {t.events.items.map((event) => (
          <EventCard
            key={event.title + event.date}
            event={event}
          />
        ))}
      </div>
    </section>
  );
}
