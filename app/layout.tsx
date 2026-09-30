import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Sans } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/content/site";
import "./globals.css";
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex" });
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: `${site.name} — Data & Technology`, template: `%s | ${site.name}` }, description: site.intro, openGraph: { title: site.name, description: site.intro, type: "website" } };
const nav = [["About", "/about"], ["Projects", "/projects"], ["Certificates", "/certificates"], ["Resume", "/resume"], ["Contact", "/contact"]];
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" suppressHydrationWarning><body className={`${plex.variable} font-sans antialiased`}>
    <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}` }} />
    <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
    <header className="border-b border-line"><nav aria-label="Main" className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
      <Link href="/" className="font-semibold">{site.name}</Link>
      <div className="flex flex-wrap items-center gap-4 text-sm">{nav.map(([l, h]) => <Link key={h} href={h} className="hover:text-accent">{l}</Link>)}<ThemeToggle /></div>
    </nav></header>
    <main id="main" className="mx-auto max-w-5xl px-5">{children}</main>
    <footer className="mt-24 border-t border-line py-8 text-sm text-muted"><div className="mx-auto max-w-5xl px-5">© {new Date().getFullYear()} {site.name}. Built with curiosity, precision and continuous growth.</div></footer>
  </body></html>);
}
