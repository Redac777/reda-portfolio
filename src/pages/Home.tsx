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
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <main id="home" className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Marrakech, Morocco • .NET • Angular • Azure
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
          {t.hero.name}
        </h1>

        <p className="mt-4 text-xl text-zinc-700 dark:text-zinc-300">
          {t.hero.title}
        </p>

        <p className="mt-6 max-w-2xl text-zinc-700 dark:text-zinc-300">
          {t.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 bg-zinc-900 text-white hover:opacity-90 transition dark:bg-white dark:text-black"
          >
            {t.buttons.contactMe}
          </a>

          <a
            href={resumeUrl}
            download
            className="rounded-xl px-5 py-3 border border-zinc-300/40 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10 transition"
          >
            {t.buttons.downloadResume}
          </a>
        </div>
      </main>

      {/* ABOUT */}
      <AboutSection />

      {/* SKILLS */}
      <SkillsSection />

      {/* EXPERIENCE */}
      <ExperienceSection />

      {/* EVENTS */}
      <EventsSection />

      {/* PROJECTS */}
      <ProjectsSection />

      {/* CONTACT */}
      <ContactSection />
    </div>
  );
}
