"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/content/projects";
export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [q, setQ] = useState(""); const [cat, setCat] = useState("All");
  const cats = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], [projects]);
  const shown = projects.filter((p) => (cat === "All" || p.category === cat) &&
    [p.title, p.summary, p.category, ...p.tools, ...(p.tags ?? [])].join(" ").toLowerCase().includes(q.toLowerCase()));
  return (<div>
    <label className="sr-only" htmlFor="s">Search projects</label>
    <input id="s" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects, tools, tags" className="w-full rounded border border-line bg-surface px-3 py-2" />
    <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {cats.map((c) => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded border px-3 py-1 text-sm ${cat === c ? "border-accent bg-accent text-bg" : "border-line"}`}>{c}</button>)}
    </div>
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {shown.map((p) => <li key={p.slug}><ProjectCard p={p} /></li>)}
    </ul>
    {!shown.length && <p className="mt-8 text-muted">No projects match. Clear the search or pick another category.</p>}
  </div>);
}
export function ProjectCard({ p }: { p: Project }) {
  return (<Link href={`/projects/${p.slug}`} className="block h-full rounded border border-line bg-surface p-5 hover:border-accent">
    <div className="text-sm text-muted">{p.category} · {p.year} · {p.status}</div>
    <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
    {p.parts && <p className="mt-1 text-xs text-accent">{p.parts.length} connected parts</p>}
    <p className="mt-2 text-sm text-muted">{p.summary}</p>
    <p className="mt-3 text-sm">{p.tools.join(", ")}</p>
  </Link>);
}
