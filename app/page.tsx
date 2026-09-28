import Link from "next/link";
import { site } from "@/content/site";
import { published } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectExplorer";
const H = ({ id, children }: { id?: string; children: React.ReactNode }) => <h2 id={id} className="text-2xl font-semibold">{children}</h2>;
export default function Home() {
  const featured = published().filter((p) => p.featured).slice(0, 6);
  const links = Object.entries(site.links).filter(([k, v]) => v && k !== "cv");
  return (<>
    <section className="py-16 sm:py-24">
      <p className="text-muted">{site.location}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{site.headline}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{site.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/projects" className="rounded bg-accent px-5 py-2.5 font-medium text-bg">Explore my work</Link>
        <a href="#contact" className="rounded border border-line px-5 py-2.5 hover:border-accent">Let&apos;s connect</a>
        {site.links.cv && <a href={site.links.cv} download className="px-5 py-2.5 underline">Download CV</a>}
      </div>
    </section>
    <section className="py-10"><H>Featured projects</H><ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{featured.map((p) => <li key={p.slug}><ProjectCard p={p} /></li>)}</ul></section>
    <section id="skills" className="py-10"><H>Skills</H>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">{site.skills.map((g) => <div key={g.group} className="border-t border-line pt-3"><h3 className="font-medium">{g.group} <span className="text-sm font-normal text-muted">({g.level})</span></h3><p className="text-muted">{g.items.join(", ")}</p></div>)}</div>
    </section>
    <section className="py-10"><H>Now, next, later</H>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">{([["Now", site.now], ["Next", site.next], ["Later", site.later]] as const).map(([t, l]) => <div key={t}><h3 className="font-medium">{t}</h3><p className="mt-1 text-muted">{l.join(", ")}</p></div>)}</div>
    </section>
    <section id="experience" className="py-10"><H>Experience and education</H>
      {site.experience.map((e) => <p key={e.role} className="mt-5"><strong>{e.role}</strong>, {e.org}<br /><span className="text-muted">{e.summary}</span></p>)}
      {site.education.map((e) => <p key={e.school} className="mt-4"><strong>{e.detail}</strong>, {e.school}<br /><span className="text-muted">{e.period}</span></p>)}
      <p className="mt-6 text-muted">Outside work: {site.interests.join(", ").toLowerCase()}.</p>
    </section>
    <section id="contact" className="py-10"><H>Let&apos;s build something useful</H>
      <p className="mt-3 text-muted">Open to: {site.openTo.join("; ").toLowerCase()}.</p>
      <p className="mt-3">{links.length ? links.map(([k, v]) => <a key={k} className="mr-4 underline" href={k === "email" ? `mailto:${v}` : v}>{k}</a>) : <span className="text-muted">Add your email and profile links in content/site.ts.</span>}</p>
    </section>
  </>);
}
