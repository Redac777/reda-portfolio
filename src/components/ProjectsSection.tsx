import { useLanguage } from "../context/useLanguage";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>{t.projects.title}</SectionTitle>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.projects.items.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
