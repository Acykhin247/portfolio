"use client";
import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => { const d = !dark; setDark(d); document.documentElement.classList.toggle("dark", d); try { localStorage.setItem("theme", d ? "dark" : "light"); } catch {} };
  return <button onClick={toggle} aria-pressed={dark} aria-label="Toggle dark mode" className="rounded border border-line px-3 py-1 text-sm hover:border-accent">{dark ? "Light" : "Dark"}</button>;
}
