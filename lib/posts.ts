import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { marked } from "marked";

interface Post {
    slug: string;
    title: string;
    date: string;
    author?: string;
    description: string;
    image?: string;
    content: string;
    article: { heading: string; content: string[]; reference?: string }[];
    contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), "content");

export const getAllPosts = () => {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, "utf-8");

        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title || "Untitled",
            date: data.date || "Unknown",
            author: data.author || "Unknown Author",
            description: data.description || "No description available",
            image: data.image || "/images/logo.png",
        };
    });
};

// Fetch and process Markdown content
export const getMarkdownData = async (slug: string): Promise<Post> => {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(remarkGfm).use(html).process(content);
    const contentHtml = processedContent.toString();

    const articleData: { heading: string; content: string[]; reference?: string }[] = [];
    const lines = content.split("\n");

    let currentArticle = { heading: "", content: [] as string[], reference: "" };

    lines.forEach((line) => {
        if (line.startsWith("## ")) {
            if (currentArticle.heading || currentArticle.content.length > 0 || currentArticle.reference) {
                articleData.push({ ...currentArticle });
            }
            currentArticle = { heading: line.replace("## ", ""), content: [], reference: "" };
        } else if (line.startsWith(">")) {
            currentArticle.reference = line.replace(/^>\s*/, "").trim();
        } else if (line.trim()) {
            currentArticle.content.push(line);
        }
    });

    if (currentArticle.heading || currentArticle.content.length > 0 || currentArticle.reference) {
        articleData.push({ ...currentArticle });
    }

    return {
        slug,
        title: data.title || "Untitled",  // Ensure title exists
        date: data.date || "Unknown",
        image: data.image,
        description: data.description || "No description available",
        content: await marked.parse(content),
        article: articleData,
        contentHtml,
    };
};
