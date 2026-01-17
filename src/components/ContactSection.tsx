import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

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
      className="mx-auto max-w-5xl px-4 py-20 border-t border-zinc-200 dark:border-white/10"
    >
      <h2 className="text-2xl font-semibold">{t.contact.title}</h2>
      <p className="mt-2 text-zinc-700 dark:text-zinc-300">
        {t.contact.subtitle}
      </p>

      <form onSubmit={submit} className="mt-8 grid gap-4 max-w-2xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            className="rounded-xl border border-zinc-300/40 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none"
            placeholder={language === "fr" ? "Nom" : "Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="rounded-xl border border-zinc-300/40 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <input
          className="rounded-xl border border-zinc-300/40 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none"
          placeholder={language === "fr" ? "Sujet (optionnel)" : "Subject (optional)"}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          className="rounded-xl border border-zinc-300/40 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none min-h-[140px]"
          placeholder={language === "fr" ? "Votre message..." : "Your message..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl px-5 py-3 bg-zinc-900 text-white hover:opacity-90 transition disabled:opacity-60 dark:bg-white dark:text-black"
          >
            {status === "sending"
              ? (language === "fr" ? "Envoi..." : "Sending...")
              : (language === "fr" ? "Envoyer" : "Send")}
          </button>

          {status === "sent" && (
            <span className="text-sm text-green-600 dark:text-green-400">
              {language === "fr" ? "Message envoyé ✅" : "Message sent ✅"}
            </span>
          )}

          {status === "error" && (
            <span className="text-sm text-red-600 dark:text-red-400">
              {error || (language === "fr" ? "Erreur" : "Error")}
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
