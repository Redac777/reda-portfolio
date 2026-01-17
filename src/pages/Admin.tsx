import { useEffect, useState } from "react";

type ContactRow = {
  createdAt?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  lang?: string;
};

export default function Admin() {
  const [items, setItems] = useState<ContactRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL as string;
      const token = import.meta.env.VITE_ADMIN_TOKEN as string;
      if (!apiUrl) throw new Error("Missing VITE_CONTACT_API_URL");
      if (!token) throw new Error("Missing VITE_ADMIN_TOKEN");

      const url = new URL(apiUrl);
      url.searchParams.set("token", token);

      const res = await fetch(url.toString());
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok)
        throw new Error(data.error || "Failed to load messages");
      setItems(Array.isArray(data.items) ? data.items : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-3xl font-bold">Admin</h1>
          <button
            onClick={load}
            className="rounded-xl px-4 py-2 border border-zinc-300/40 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10 transition"
          >
            Refresh
          </button>
        </div>

        {loading && (
          <p className="mt-6 text-zinc-600 dark:text-zinc-400">Loading...</p>
        )}
        {error && (
          <p className="mt-6 text-red-600 dark:text-red-400">{error}</p>
        )}

        {!loading && !error && (
          <div className="mt-8 space-y-4">
            {items.length === 0 ? (
              <p className="text-zinc-600 dark:text-zinc-400">
                No messages yet.
              </p>
            ) : (
              items.map((m, idx) => (
                <div
                  key={(m.createdAt || "") + idx}
                  className="rounded-2xl border border-zinc-200 dark:border-white/10 p-6 bg-white dark:bg-white/5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <p className="font-semibold">{m.name || "—"}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {m.email || "—"} • {m.lang || "—"}
                      </p>
                      {m.subject ? (
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                          Subject: {m.subject}
                        </p>
                      ) : null}
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {m.createdAt || ""}
                    </p>
                  </div>

                  <p className="mt-4 text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
                    {m.message || ""}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
