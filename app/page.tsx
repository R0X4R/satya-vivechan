import React from "react"
import { getAllPosts } from "@/lib/posts"
import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go"
import RecentHeroPost from "@/components/ui/RecentHeroPost"
import DailyVedicQuote from "@/components/blocks/VedicQuotes"
import Link from "next/link"

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

export const metadata: CustomMetadata = {
    title: "Satya Vivechan - सत्य विवेचन | Ancient Hindu Scriptures & Wisdom",
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
        site: "@R0X4R",
        title: "Unveiling the True History of Hindu Scriptures - Satya Vivechan",
        description:
            "Deeply researched articles on Hindu history, ancient scriptures, and divine wisdom from Ramayana, Mahabharata, and Vedas.",
    },
    creator: "Eshan Singh",
    openGraph: {
        title: "Satya Vivechan - सत्य विवेचन | Ancient Hindu Scriptures & Wisdom",
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
    const sortedPosts = posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    const recentPost = sortedPosts[0]

    return (
        <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col bg-lime-50 px-4 py-10 md:px-0 md:py-12">
            <header className="mb-14 flex flex-col items-center justify-center text-center">
                <Image
                    src="/images/logo.png"
                    sizes="100vw"
                    height={0}
                    width={0}
                    className="h-full w-62 rounded-full object-cover"
                    alt="logo images"
                />
                <h1 className="text-6xl font-black tracking-tighter text-lime-950 uppercase md:text-8xl">
                    Satya Vivechan
                </h1>
                <DailyVedicQuote />
            </header>
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
                <aside className="w-full space-y-6 border-lime-950/20 py-5 max-md:border-t md:w-1/3 md:border-l-2 md:py-0 md:pl-6">
                    {[
                        {
                            title: "The Origin of Mother Ganga: Popular Stories & Logical Truth",
                            description:
                                "This article takes you on a journey through the historical and scriptural origins of Mother Ganga, exploring references from the Ramayana.",
                            image: "/images/ganga.jpg",
                            author: "Eshan Singh",
                            date: "11 March, 2025",
                            link: "/blog/the-origin-of-mother-ganga-popular-stories-and-logical-truths",
                        },
                        {
                            title: "Lord Shiva: The Historical & Scriptural Legacy of Mahadev",
                            description:
                                "This article explores Lord Shiva's historical andscriptural significance, referencing texts like the Mahabharata and Shanti Parva.",
                            image: "/images/shiva.jpg",
                            author: "Eshan Singh",
                            date: "26 Feburary, 2025",
                            link: "/blog/lord-shiva-the-historical-and-scriptural-legacy-of-mahadev",
                        },
                        {
                            title: "Lord Krishna: His True Identity, Was Radha Real & Was He a Romantic Figure",
                            description:
                                "Was Lord Krishna a divine figure or a romantic hero? Discover the truth about Radha and Krishna's identity through ancient scriptures and history.",
                            image: "/images/barcelona.jpg",
                            author: "Eshan Singh",
                            date: "Coming Soon",
                            link: "#",
                        },
                    ].map((article, index) => (
                        <div
                            key={index}
                            className="group flex w-full items-center gap-4 overflow-hidden">
                            <Link
                                href={article.link}
                                className="group relative flex h-32 w-2/5 cursor-pointer items-center justify-center overflow-hidden rounded-lg select-none">
                                <span className="absolute top-2 right-2 z-10 hidden size-8 items-center justify-center rounded-md bg-lime-50/60 text-lime-950 backdrop-blur-lg transition-all duration-500 ease-linear group-hover:flex">
                                    <GoArrowUpRight />
                                </span>
                                <Image
                                    src={article.image}
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    alt={article.title}
                                    className="h-full w-full rounded-lg object-cover transition-transform duration-500 ease-linear group-hover:scale-105"
                                />
                            </Link>
                            <Link href={article.link} className="w-3/5">
                                <h3 className="line-clamp-2 font-semibold text-lime-950 selection:bg-lime-950 selection:text-lime-50 md:line-clamp-3">
                                    {article.title}
                                </h3>
                                <p className="election:text-lime-50 line-clamp-2 text-sm text-lime-950/80 selection:bg-lime-950/80">
                                    {article.description}
                                </p>
                                <p className="text-sm text-lime-950/80 selection:bg-lime-950/80 selection:text-lime-50">
                                    {article.author} - {article.date}
                                </p>
                            </Link>
                        </div>
                    ))}
                </aside>
            </div>
        </main>
    )
}
