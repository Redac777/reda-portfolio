import { useLanguage } from "../context/useLanguage";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 py-20 border-t border-zinc-200 dark:border-white/10"
    >
      <h2 className="text-2xl font-semibold">
        {t.projects.title}
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {t.projects.items.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
