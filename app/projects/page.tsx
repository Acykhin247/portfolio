import ProjectExplorer from "@/components/ProjectExplorer";
import { published } from "@/content/projects";
export const metadata = { title: "Projects", description: "Case studies in analytics, databases and automation." };
export default function Projects() {
  return <section className="py-14"><h1 className="mb-6 text-3xl font-semibold">Projects</h1><ProjectExplorer projects={published()} /></section>;
}
