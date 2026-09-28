import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { published } from "@/content/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/projects", "/resume", "/contact", ...published().map((p) => `/projects/${p.slug}`)].map((u) => ({ url: site.url + u }));
}
