import type { Event } from "../types/portfolio";
import ProjectGallery from "./ProjectGallery";

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 overflow-hidden hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50 transition-all duration-300">
      {/* Gallery avec images */}
      <ProjectGallery images={event.images} altBase={event.title} />

      <div className="p-8">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
          {event.location} · {event.date}
        </p>

        <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400">
          {event.description.map((d, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}