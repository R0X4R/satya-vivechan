declare module "gray-matter" {
    interface GrayMatterFile<T> {
        data: T
        content: string
    }
}

interface PostMetadata {
    title: string;
    date: string;
    description?: string;
    [key: string]: unknown; // Allows additional metadata fields with type safety
}

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
