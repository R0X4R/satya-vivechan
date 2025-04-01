import React from "react"
import { getAllPosts } from "@/lib/posts"
import RecentHeroPost from "@/components/ui/RecentHeroPost"
import LogoDiv from "@/components/blocks/LogoDiv"
import ArticleCard from "@/components/blocks/ArticleCard"
import type { Metadata } from "next"

interface CustomMetadata {
    title: string
    description: string
    alternates?: {
        canonical?: string
        languages?: {
            "en-US": string
        }
    }
    twitter?: {
        card: string
        site: string
        title: string
        description: string
    }
    creator?: string
    openGraph?: {
        title: string
        description: string
        url: string
        siteName: string
        images: {
            url: string
            width: number
            height: number
            alt: string
        }[]
        locale: string
        type: string
    }
}

export const metadata: Metadata = {
    title: "Satya Vivechan - सत्य विवेचन | Sanatan Vedic Wisdom & History",
    description:
        "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "https://satyavivechan.live/",
        },
    },
    twitter: {
        card: "summary_large_image",
        site: "https://satyavivechan.live",
        title: "Unveiling the True History of Hindu Scriptures - Satya Vivechan",
        description:
            "Deeply researched articles on Hindu history, ancient scriptures, and divine wisdom from Ramayana, Mahabharata, and Vedas.",
    },
    creator: "Eshan Singh",
    openGraph: {
        title: "Satya Vivechan - सत्य विवेचन | Sanatan Vedic Wisdom & History",
        description:
            "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
        url: "https://satyavivechan.live",
        siteName: "Satya Vivechan",
        images: [
            {
                url: "https://satyavivechan.live/images/satya-vivechan-og-image.png",
                width: 1200,
                height: 630,
                alt: "Satya Vivechan - Unveiling Hindu History & Scriptures",
            },
        ],
        locale: "en_US",
        type: "website",
    },
}

export default async function HomePage() {
    const posts = await getAllPosts()
    const sortedPosts = posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    const recentPost = sortedPosts[0]
    const recentArticles = sortedPosts.slice(1, 5)

    return (
        <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col bg-lime-50 px-4 py-10 md:px-0 md:py-12 dark:bg-stone-950">
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
                <aside className="w-full space-y-6 border-lime-950/20 py-5 max-md:border-t md:w-1/3 md:border-l-2 md:py-0 md:pl-6 dark:border-lime-100/20">
                    <div className="items-start">
                        <h2 className="text-3xl font-medium text-lime-950 selection:bg-lime-950 selection:text-lime-50 dark:text-stone-50">
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
        </main>
    )
}
