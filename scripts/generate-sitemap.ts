import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const siteUrl = "https://satyavivechan.live"

// Define static pages
const staticPages = ["", "about", "contact"].map((page) => `${siteUrl}/${page}`)

// Fetch dynamic blog slugs from `content` folder (adjust if using a database)
const contentDir = path.join(__dirname, "../content")
const blogSlugs = fs.existsSync(contentDir)
    ? fs
          .readdirSync(contentDir)
          .map((file) => file.replace(".md", "").replace(".json", "")) // Adjust for your file type
    : []

const blogPages = blogSlugs.map((slug) => `${siteUrl}/blog/${slug}`)

// Combine all URLs
const urls = [...staticPages, ...blogPages]
    .map((url) => `<url><loc>${url}</loc></url>`)
    .join("\n")

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml)
