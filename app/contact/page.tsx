import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";
export const metadata = { title: "Contact", description: "Get in touch about roles, projects and collaboration." };
export default function Contact() {
  const links = Object.entries(site.links).filter(([k, v]) => v && k !== "cv");
  return (<section className="max-w-2xl py-14">
    <h1 className="text-3xl font-semibold">Let&apos;s build something useful</h1>
    <p className="mt-3 text-muted">Recruiters, clients, collaborators and fellow students are welcome to get in touch. Open to: {site.openTo.join("; ").toLowerCase()}.</p>
    <ContactForm />
    <p className="mt-10 text-sm">{links.map(([k, v]) => <a key={k} className="mr-4 underline" href={k === "email" ? `mailto:${v}` : v}>{k}</a>)}</p>
  </section>);
}
