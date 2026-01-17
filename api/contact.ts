import type { VercelRequest, VercelResponse } from "@vercel/node";

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  lang?: "en" | "fr";
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const CONTACT_API_URL = process.env.CONTACT_API_URL;
    if (!CONTACT_API_URL) {
      return res.status(500).json({ ok: false, error: "Missing CONTACT_API_URL" });
    }

    const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: (body.name || "").trim(),
      email: (body.email || "").trim(),
      subject: (body.subject || "").trim(),
      message: (body.message || "").trim(),
      lang: body.lang === "fr" ? "fr" : "en",
    };

    if (!payload.name || !payload.email || !payload.message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const r = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await r.text();
    let data: unknown = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = { ok: r.ok, raw: text };
    }

    return res.status(r.ok ? 200 : 502).json(data);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ ok: false, error: msg });
  }
}
