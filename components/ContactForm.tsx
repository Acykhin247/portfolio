"use client";
import { useState } from "react";
type State = "idle" | "loading" | "success" | "error";
const field = "mt-1 w-full rounded border border-line bg-surface px-3 py-2";
export default function ContactForm() {
  const [state, setState] = useState<State>("idle"); const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const f = e.currentTarget; const d = Object.fromEntries(new FormData(f));
    setState("loading");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Something went wrong.");
      setState("success"); f.reset();
    } catch (err) { setMsg(err instanceof Error ? err.message : "Network error. Check your connection and try again."); setState("error"); }
  }
  return (<form onSubmit={submit} className="mt-8 space-y-4">
    <div><label htmlFor="name">Name</label><input id="name" name="name" required maxLength={100} autoComplete="name" className={field} /></div>
    <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
    <div><label htmlFor="subject">Subject</label><input id="subject" name="subject" required maxLength={150} className={field} /></div>
    <div><label htmlFor="message">Message</label><textarea id="message" name="message" required minLength={10} maxLength={3000} rows={6} className={field} /></div>
    <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
    <button disabled={state === "loading"} className="rounded bg-accent px-5 py-2.5 font-medium text-bg disabled:opacity-60">{state === "loading" ? "Sending..." : "Send message"}</button>
    <p role="status" aria-live="polite" className="text-sm">
      {state === "success" && "Message sent. I'll reply to the email you gave."}
      {state === "error" && `${msg} You can also email me directly.`}
    </p>
  </form>);
}
