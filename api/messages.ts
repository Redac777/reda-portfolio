import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    const sessionHeader = req.headers["x-admin-session"];
    const ADMIN_SESSION_KEY = process.env.ADMIN_SESSION_KEY;

    if (!ADMIN_SESSION_KEY || sessionHeader !== ADMIN_SESSION_KEY) {
        return res.status(401).json({ ok: false, error: "Unauthorized" });
    }

    try {
        const CONTACT_API_URL = process.env.CONTACT_API_URL;
        const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

        if (!CONTACT_API_URL) {
            return res.status(500).json({ ok: false, error: "Missing CONTACT_API_URL" });
        }
        if (!ADMIN_TOKEN) {
            return res.status(500).json({ ok: false, error: "Missing ADMIN_TOKEN" });
        }

        const url = new URL(CONTACT_API_URL);
        url.searchParams.set("token", ADMIN_TOKEN);

        const r = await fetch(url.toString());
        const text = await r.text();

        let data: unknown = {};
        try {
            data = JSON.parse(text);
        } catch {
            data = { ok: false, raw: text };
        }

        return res.status(r.ok ? 200 : 502).json(data);
    } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        return res.status(500).json({ ok: false, error: msg });
    }
}
