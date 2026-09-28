import { site } from "@/content/site";
export const metadata = { title: "About", description: site.intro };
export default function About() {
  return (<section className="py-14">
    <h1 className="text-3xl font-semibold">About</h1>
    <div className="mt-6 max-w-2xl space-y-4 text-lg text-muted">{site.about.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
    <h2 className="mt-12 text-xl font-semibold">What drives me</h2>
    <dl className="mt-4 grid gap-6 sm:grid-cols-2">{site.about.drivers.map((d) => <div key={d.title} className="border-t border-accent pt-3"><dt className="font-medium">{d.title}</dt><dd className="text-muted">{d.text}</dd></div>)}</dl>
    <h2 className="mt-12 text-xl font-semibold">Now, next, later</h2>
    <p className="mt-3 max-w-2xl text-muted">Now: {site.now.join(", ")}. Next: {site.next.join(", ")}. Later: {site.later.join(", ")}.</p>
    <h2 className="mt-12 text-xl font-semibold">Outside work</h2>
    <p className="mt-3 text-muted">{site.interests.join(", ")}.</p>
  </section>);
}
