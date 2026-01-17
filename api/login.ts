import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const ADMIN_USER = process.env.ADMIN_USER;
    const ADMIN_PASS = process.env.ADMIN_PASS;
    const ADMIN_SESSION_KEY = process.env.ADMIN_SESSION_KEY;

    if (!ADMIN_USER || !ADMIN_PASS || !ADMIN_SESSION_KEY) {
      return res.status(500).json({ ok: false, error: "Missing admin env vars" });
    }

    const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as {
      username?: string;
      password?: string;
    };

    const username = (body.username || "").trim();
    const password = (body.password || "").trim();

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      // return a session key (simple)
      return res.status(200).json({ ok: true, sessionKey: ADMIN_SESSION_KEY });
    }

    return res.status(401).json({ ok: false, error: "Invalid credentials" });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ ok: false, error: msg });
  }
}
