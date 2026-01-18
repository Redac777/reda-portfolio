import { useState } from "react";
import { useLanguage } from "../context/useLanguage";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>{t.contact.title}</SectionTitle>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
          {t.contact.subtitle}
        </p>

        <div className="mt-12 grid gap-6 max-w-2xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent outline-none transition-all duration-200"
              placeholder={language === "fr" ? "Nom" : "Name"}
              value={formData.name}
              onChange={handleChange("name")}
            />
            <input
              className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent outline-none transition-all duration-200"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
            />
          </div>

          <input
            className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent outline-none transition-all duration-200"
            placeholder={
              language === "fr" ? "Sujet (optionnel)" : "Subject (optional)"
            }
            value={formData.subject}
            onChange={handleChange("subject")}
          />

          <textarea
            className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent outline-none transition-all duration-200 min-h-[160px] resize-none"
            placeholder={
              language === "fr" ? "Votre message..." : "Your message..."
            }
            value={formData.message}
            onChange={handleChange("message")}
          />

          <div className="flex items-center gap-4">
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="px-6 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 disabled:opacity-60 transition-all duration-200 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {status === "sending"
                ? language === "fr"
                  ? "Envoi..."
                  : "Sending..."
                : language === "fr"
                  ? "Envoyer"
                  : "Send"}
            </button>

            {status === "sent" && (
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                {language === "fr" ? "Message envoyé ✓" : "Message sent ✓"}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
