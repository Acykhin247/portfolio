import { site } from "@/content/site";
import { published } from "@/content/projects";
export const metadata = { title: "Resume", description: "Education, experience, skills and projects." };
const H = ({ t }: { t: string }) => <h2 className="mt-10 border-b border-line pb-1 text-xl font-semibold">{t}</h2>;
export default function Resume() {
  return (<section className="max-w-3xl py-14">
    <div className="flex flex-wrap items-center justify-between gap-3"><h1 className="text-3xl font-semibold">Resume</h1>
      {site.links.cv && <a href={site.links.cv} download className="rounded bg-accent px-5 py-2.5 font-medium text-bg">Download CV</a>}</div>
    <H t="Education" />{site.education.map((e) => <p key={e.school} className="mt-3"><strong>{e.detail}</strong>, {e.school}<br /><span className="text-muted">{e.period}</span></p>)}
    <H t="Experience and leadership" />{site.experience.map((e) => <p key={e.role} className="mt-3"><strong>{e.role}</strong>, {e.org}<br /><span className="text-muted">{e.summary}</span></p>)}
    <H t="Skills" />{site.skills.map((g) => <p key={g.group} className="mt-3"><strong>{g.group}</strong> <span className="text-sm text-muted">({g.level})</span><br /><span className="text-muted">{g.items.join(", ")}</span></p>)}
    <H t="Projects" /><ul className="mt-3 space-y-2">{published().map((p) => <li key={p.slug}><a className="underline" href={`/projects/${p.slug}`}>{p.title}</a> <span className="text-sm text-muted">({p.year}, {p.status})</span></li>)}</ul>
  </section>);
}
