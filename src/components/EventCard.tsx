import type { Event } from "../types/portfolio";
import ProjectGallery from "./ProjectGallery";

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden">
      <ProjectGallery images={event.images} altBase={event.title} />

      <div className="p-6">
        <h3 className="text-lg font-semibold">
          {event.title}
        </h3>

        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {event.location} • {event.date}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          {event.description.map((d, i) => (
            <li key={i}>• {d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
