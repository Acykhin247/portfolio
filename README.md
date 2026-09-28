# Portfolio (Next.js 14, TypeScript, Tailwind)
Run: `npm install && npm run dev` then open http://localhost:3000. Deploy: push to GitHub, import in Vercel.
- **Your info, skills, links, Now/Next/Later:** `content/site.ts` (empty links are hidden).
- **Add a project:** copy an object in `content/projects.ts`, give it a unique `slug`. New `category` values create filter buttons automatically. Set `published: false` to hide. Files for download go in `public/files/` and are listed in a project's `files`.
- **CV:** put `cv.pdf` in `public/` and set `links.cv` to `"/cv.pdf"`.
- **Domain:** set `site.url` (used by sitemap, robots, Open Graph).
- **Private on purpose:** the Q&A guide and presentation script are not published.
- **Not built yet:** contact form API, admin/CMS, insights/blog, image galleries, global search, analytics.

- **Contact form:** copy `.env.example` to `.env.local`, add your Resend key and email, restart `npm run dev`. Without it the form shows a friendly error.
- **Screenshots:** add images to `public/img/` and list them in a project's `images` with alt text.
