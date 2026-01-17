import type { Project } from "../types/portfolio";
import ProjectGallery from "./ProjectGallery";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden">
      {/* Carousel / Placeholder */}
      <ProjectGallery images={project.images} altBase={project.name} />

      {/* Content */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {project.context}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">
          {project.name}
        </h3>

        <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          {project.description.map((d, i) => (
            <li key={i}>• {d}</li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs rounded-full border border-zinc-200 dark:border-white/10 px-2 py-1 text-zinc-700 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.links?.length ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
