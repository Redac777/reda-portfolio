import type { Project } from "../types/portfolio";
import ProjectGallery from "./ProjectGallery";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 overflow-hidden hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50 transition-all duration-300">
      {/* Gallery avec images */}
      <ProjectGallery images={project.images} altBase={project.name} />

      <div className="p-6">
        <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-semibold">
          {project.context}
        </p>

        <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>

        <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          {project.description.map((d, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.links?.length ? (
          <div className="mt-5 flex gap-3">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4"
              >
                {l.label} →
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
