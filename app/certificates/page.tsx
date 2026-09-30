import { site } from "@/content/site";
export const metadata = { title: "Certificates", description: "Certifications earned alongside formal studies." };
export default function Certificates() {
  return (<section className="py-14">
    <h1 className="text-3xl font-semibold">Certificates</h1>
    <p className="mt-3 max-w-2xl text-muted">Certifications completed alongside my degree at UPSA.</p>
    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {site.certificates.map((c) => (
        <li key={c.credentialId} className="overflow-hidden rounded border border-line bg-surface">
          {c.image && <a href={c.file} target="_blank" rel="noopener"><img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="w-full border-b border-line" /></a>}
          <div className="p-5">
          <h2 className="font-semibold">{c.title}</h2>
          <p className="text-sm text-muted">{c.issuer} · {c.date}</p>
          <p className="mt-1 text-xs text-muted">Credential ID: {c.credentialId}</p>
          <a href={c.file} download className="mt-3 inline-block text-sm underline">Download certificate</a>
          </div>
        </li>
      ))}
    </ul>
  </section>);
}
