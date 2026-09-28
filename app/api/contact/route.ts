import { NextResponse } from "next/server";
const hits = new Map<string, number[]>(); // simple per-server rate limit; use Upstash/Vercel KV for stricter limits
const err = (error: string, status: number) => NextResponse.json({ error }, { status });
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "local"; const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 3) return err("Too many messages. Try again in a few minutes.", 429);
  hits.set(ip, [...recent, now]);
  let b: Record<string, unknown>; try { b = await req.json(); } catch { return err("Invalid request.", 400); }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot: bots fill this
  const [name, email, subject, message] = ["name", "email", "subject", "message"].map((k) => String(b[k] ?? "").trim());
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !subject || subject.length > 150 || message.length < 10 || message.length > 3000) return err("Please check the form fields and try again.", 400);
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return err("The contact form isn't set up yet.", 503);
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "Portfolio <onboarding@resend.dev>", to: [to], reply_to: email, subject: `[Portfolio] ${subject}`, text: `From: ${name} <${email}>\n\n${message}` }) });
  return r.ok ? NextResponse.json({ ok: true }) : err("Could not send your message. Please email me directly.", 502);
}
