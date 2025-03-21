import fs from "fs";
import path from "path";

const siteUrl = "https://satyavivechan.live";
const lastMod = new Date().toISOString(); // Current timestamp

// Define static pages
const staticPages = ["", "about"].map(
  (page) => ({
    url: `${siteUrl}/${page}`,
    priority: 1.0, // Highest priority for static pages
  })
);

// Fetch dynamic blog slugs from `content` folder (adjust if using a database)
const contentDir = path.join(process.cwd(), "../content");
const blogSlugs = fs.existsSync(contentDir)
  ? fs
      .readdirSync(contentDir)
      .map((file) => file.replace(".md", "").replace(".json", "")) // Adjust for your file type
  : [];

const blogPages = blogSlugs.map((slug) => ({
  url: `${siteUrl}/blog/${slug}`,
  priority: 0.8, // Slightly lower priority for blog posts
}));

// Combine all URLs
const urls = [...staticPages, ...blogPages]
  .map(
    ({ url, priority }) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastMod}</lastmod>
      <priority>${priority}</priority>
    </url>
  `
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

// Write sitemap.xml to public folder
fs.writeFileSync(path.join(process.cwd(), "../public/sitemap.xml"), xml);
