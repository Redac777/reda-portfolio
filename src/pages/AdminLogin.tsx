import { useState } from "react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "admin_session_key";

export default function AdminLogin() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok || !data.sessionKey) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem(STORAGE_KEY, data.sessionKey);
      nav("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="mx-auto max-w-md px-4 py-20">
        <h1 className="text-3xl font-bold">Admin Login</h1>

        <form onSubmit={submit} className="mt-8 grid gap-4">
          <input
            className="rounded-xl border border-zinc-300/40 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="rounded-xl border border-zinc-300/40 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 outline-none"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl px-5 py-3 bg-zinc-900 text-white hover:opacity-90 transition disabled:opacity-60 dark:bg-white dark:text-black"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        </form>
      </div>
    </div>
  );
}
