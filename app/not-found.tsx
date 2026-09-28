import Link from "next/link";
export default function NotFound() {
  return <section className="py-24"><h1 className="text-3xl font-semibold">This data point doesn&apos;t exist.</h1><p className="mt-3 text-muted">The page may have moved or never existed.</p><p className="mt-6"><Link className="underline" href="/">Back home</Link> · <Link className="underline" href="/projects">Explore projects</Link></p></section>;
}
