import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { bySlug, published } from "@/content/projects";
export const generateStaticParams = () => published().map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = bySlug(params.slug); return p ? { title: p.title, description: p.summary } : {};
}
const H = ({ t }: { t: string }) => <h2 className="mt-10 text-xl font-semibold">{t}</h2>;
const Text = ({ t, body }: { t: string; body?: string }) => body ? <section><H t={t} /><p className="mt-2 max-w-2xl text-muted">{body}</p></section> : null;
const List = ({ t, items, ordered }: { t: string; items?: string[]; ordered?: boolean }) => items?.length ? <section><H t={t} />
  {ordered ? <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted">{items.map((i) => <li key={i}>{i}</li>)}</ol> : <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">{items.map((i) => <li key={i}>{i}</li>)}</ul>}</section> : null;
export default function Project({ params }: { params: { slug: string } }) {
  const p = bySlug(params.slug); if (!p) notFound();
  const links = Object.entries(p.links ?? {}).filter(([, v]) => v);
  return (<article className="py-14">
    <p className="text-muted">{p.category} · {p.year} · {p.status}</p>
    <h1 className="mt-2 max-w-3xl text-3xl font-semibold">{p.title}</h1>
    <p className="mt-4 max-w-2xl text-lg text-muted">{p.summary}</p>
    <p className="mt-4 text-sm">{p.tools.map((t) => <span key={t} className="mr-2 rounded border border-line px-2 py-0.5">{t}</span>)}</p>
    {p.note && <p className="mt-4 rounded border border-line p-3 text-sm">{p.note}</p>}
    {p.kpis && <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">{p.kpis.map((k) => <div key={k.label} className="border-t border-accent pt-2"><dt className="text-sm text-muted">{k.label}</dt><dd className="text-xl font-semibold">{k.value}</dd></div>)}</dl>}
    {p.images?.length ? <section><H t="Dashboard" /><div className="mt-3 grid gap-4">{p.images.map((i) => <a key={i.src} href={i.src} target="_blank" rel="noopener"><img src={i.src} alt={i.alt} loading="lazy" className="w-full rounded border border-line" /></a>)}</div><p className="mt-2 text-sm text-muted">Select an image to open it full size.</p></section> : null}
    <Text t="The problem" body={p.problem} /><Text t="Objective" body={p.objective} />
    <List t="Process" items={p.process} ordered />
    {p.parts && <section><H t="What's in this project" /><ul className="mt-3 grid gap-3 sm:grid-cols-2">{p.parts.map((x) => <li key={x.name} className="rounded border border-line bg-surface p-4"><strong>{x.name}</strong><p className="text-sm text-muted">{x.detail}</p></li>)}</ul></section>}
    <List t="Key insights" items={p.insights} /><List t="Recommendations" items={p.recommendations} /><Text t="Results" body={p.results} />
    <List t="Challenges" items={p.challenges} /><List t="What I learned" items={p.lessons} /><List t="Future improvements" items={p.futureImprovements} />
    {(p.files?.length || links.length > 0) && <section><H t="Files and links" /><ul className="mt-2 space-y-1">
      {p.files?.map((f) => <li key={f.href}><a className="underline" href={f.href} download>{f.label}</a></li>)}
      {links.map(([k, v]) => <li key={k}><a className="underline" href={v}>{k}</a></li>)}</ul></section>}
  </article>);
}
