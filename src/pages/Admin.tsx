import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ContactRow = {
  createdAt?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  lang?: string;
};

type MessagesResponse =
  | { ok: true; items: ContactRow[] }
  | { ok: false; error?: string };

const STORAGE_KEY = "admin_session_key";

export default function Admin() {
  const nav = useNavigate();

  const [items, setItems] = useState<ContactRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    nav("/admin-login");
  };

  const load = async () => {
    setLoading(true);
    setError(null);

    try {
      const sessionKey = localStorage.getItem(STORAGE_KEY) || "";
      if (!sessionKey) {
        nav("/admin-login");
        return;
      }

      const res = await fetch("/api/messages", {
        headers: {
          "x-admin-session": sessionKey,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem(STORAGE_KEY);
        nav("/admin-login");
        return;
      }

      const data = (await res.json().catch(() => ({ ok: false }))) as MessagesResponse;

      if (!res.ok || !data.ok) {
        throw new Error(("error" in data && data.error) ? data.error : "Failed to load messages");
      }

      setItems(Array.isArray(data.items) ? data.items : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold">Admin</h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Messages received from the contact form.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={load}
              className="rounded-xl px-4 py-2 border border-zinc-300/40 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10 transition"
            >
              Refresh
            </button>

            <button
              onClick={logout}
              className="rounded-xl px-4 py-2 border border-zinc-300/40 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10 transition"
            >
              Logout
            </button>
          </div>
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
              <p className="text-zinc-600 dark:text-zinc-400">No messages yet.</p>
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
