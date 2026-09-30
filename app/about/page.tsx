import { site } from "@/content/site";
export const metadata = { title: "About", description: site.intro };
export default function About() {
  return (<section className="py-14">
    <div className="grid gap-8 sm:grid-cols-[auto,1fr] sm:items-start">
      <img src={site.photo} alt={site.name} className="h-64 w-48 rounded-lg border border-line object-cover object-top" />
      <div>
        <h1 className="text-3xl font-semibold">About</h1>
        <div className="mt-4 max-w-2xl space-y-4 text-lg text-muted">{site.about.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
      </div>
    </div>
    <h2 className="mt-12 text-xl font-semibold">What drives me</h2>
    <dl className="mt-4 grid gap-4 sm:grid-cols-2">{site.about.drivers.map((d) => <div key={d.title} className="rounded-lg border border-line bg-surface p-5 shadow-sm"><div className="h-1 w-8 rounded-full bg-accent" aria-hidden /><dt className="mt-3 font-medium">{d.title}</dt><dd className="mt-1 text-sm text-muted">{d.text}</dd></div>)}</dl>
    <h2 className="mt-12 text-xl font-semibold">Now, next, later</h2>
    <p className="mt-3 max-w-2xl text-muted">Now: {site.now.join(", ")}. Next: {site.next.join(", ")}. Later: {site.later.join(", ")}.</p>
    <h2 className="mt-12 text-xl font-semibold">Outside work</h2>
    <p className="mt-3 text-muted">{site.interests.join(", ")}.</p>
  </section>);
}
