import React, { Suspense } from "react";
import type { Metadata } from "next";
import ArticleCard from "@/components/blocks/ArticleCard";
import LogoDiv from "@/components/blocks/LogoDiv";
import BlogListSkeleton from "@/components/ui/BlogListSkeleton";
import FilteredBlogList from "@/components/ui/FilteredBlogList";
import RecentHeroPost from "@/components/ui/RecentHeroPost";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
    title: "Satya Vivechan - सत्य विवेचन | Sanatan Vedic Wisdom & History",
    description:
        "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "https://satyavivechan.qzz.io/",
        },
    },
    twitter: {
        card: "summary_large_image",
        site: "https://satyavivechan.qzz.io",
        title: "Unveiling the True History of Hindu Scriptures - Satya Vivechan",
        description:
            "Deeply researched articles on Hindu history, ancient scriptures, and divine wisdom from Ramayana, Mahabharata, and Vedas.",
    },
    creator: "Eshan Singh",
    openGraph: {
        title: "Satya Vivechan - सत्य विवेचन | Sanatan Vedic Wisdom & History",
        description:
            "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
        url: "https://satyavivechan.qzz.io",
        siteName: "Satya Vivechan",
        images: [
            {
                url: "https://satyavivechan.qzz.io/images/satya-vivechan-og-image.png",
                width: 1200,
                height: 630,
                alt: "Satya Vivechan - Unveiling Hindu History & Scriptures",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default async function HomePage() {
    const posts = await getAllPosts();

    const sortedPosts = posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const recentPost = sortedPosts[0];
    const recentArticles = sortedPosts.slice(1, 5);

    const allCategories = Array.from(
        new Set(posts.map((post) => post.category))
    );

    return (
        <main className="dark:bg-background mx-auto flex min-h-screen w-full max-w-7xl flex-col bg-lime-50 px-4 py-10 md:px-0 md:py-12">
            <LogoDiv />
            <div className="flex w-full flex-col gap-6 md:flex-row">
                <div className="w-full md:w-2/3">
                    {recentPost && (
                        <RecentHeroPost
                            imageSrc={recentPost.image}
                            author={recentPost.author}
                            title={recentPost.title}
                            description={recentPost.description}
                            date={recentPost.date}
                            link={`/blog/${recentPost.slug}`}
                        />
                    )}
                </div>
                <aside className="content-visibility-auto w-full space-y-6 border-lime-950/20 py-5 max-md:border-t md:w-1/3 md:border-l-2 md:py-0 md:pl-6 dark:border-neutral-600/30">
                    <div className="items-start">
                        <h2 className="text-3xl font-medium text-lime-950 selection:bg-lime-950 selection:text-lime-50 dark:text-white">
                            Recent Posts
                        </h2>
                    </div>
                    {recentArticles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            title={article.title}
                            description={article.description}
                            image={article.image}
                            author={article.author}
                            date={article.date}
                            link={`/blog/${article.slug}`}
                        />
                    ))}
                </aside>
            </div>
            <div className="my-10 flex flex-col py-8">
                <h2 className="text-3xl font-medium text-lime-950 selection:bg-lime-950 selection:text-lime-50 dark:text-white">
                    Articles
                </h2>
                <Suspense fallback={<BlogListSkeleton />}>
                    <FilteredBlogList
                        posts={sortedPosts}
                        categories={allCategories}
                    />
                </Suspense>
            </div>
        </main>
    );
}
