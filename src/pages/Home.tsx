import Navbar from "../components/Navbar";
import { useLanguage } from "../context/useLanguage";

import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EventsSection from "../components/EventsSection";
import ContactSection from "../components/ContactSection";
export default function Home() {
  const { t, language } = useLanguage();
  const resumeUrl =
    language === "fr" ? "/resume/resume-fr.pdf" : "/resume/resume-en.pdf";
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />

      {/* HERO */}
      <main id="home" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* LEFT: TEXT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              {language === "fr"
                ? "Disponible pour de nouvelles opportunités"
                : "Available for opportunities"}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              {t.hero.name}
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light">
              {t.hero.title}
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors duration-200 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                {t.buttons.contactMe}
              </a>

              <a
                href={resumeUrl}
                download
                className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200"
              >
                {t.buttons.downloadResume}
              </a>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800">
                <img
                  src="/profile/rsz_1propic.jpg"
                  alt="Reda Chemseddine - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-neutral-200/50 to-transparent dark:from-neutral-800/30 rounded-3xl -z-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </main>

      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EventsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
