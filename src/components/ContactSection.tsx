import { useState } from "react";
import { useLanguage } from "../context/useLanguage";
import SectionTitle from "./SectionTitle";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const { t, language } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, lang: language }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
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

        <div className="mt-12 max-w-2xl">
          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent outline-none transition-all duration-200"
                placeholder={language === "fr" ? "Nom" : "Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <input
              className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent outline-none transition-all duration-200"
              placeholder={
                language === "fr" ? "Sujet (optionnel)" : "Subject (optional)"
              }
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent outline-none transition-all duration-200 min-h-[160px] resize-none"
              placeholder={
                language === "fr" ? "Votre message..." : "Your message..."
              }
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div className="flex items-center gap-4">
              <button
                onClick={submit}
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

              {status === "error" && (
                <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                  {error || (language === "fr" ? "Erreur" : "Error")}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}