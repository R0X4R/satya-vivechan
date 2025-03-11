import React from "react"
import { getAllPosts } from "@/lib/posts"
import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go"
import RecentHeroPost from "@/components/ui/RecentHeroPost"
import DailyVedicQuote from "@/components/blocks/VedicQuotes"
import Link from "next/link"

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
                            title: "Lord Shiva: The Historical & Scriptural Legacy of Mahadev",
                            description:
                                "This article explores Lord Shiva's historical andscriptural significance, referencing texts like the Mahabharata and Shanti Parva.",
                            image: "/images/shiva.jpg",
                            author: "Eshan Singh",
                            date: "26 Feburary, 2025",
                            link: "/blog/lord-shiva-the-historical-and-scriptural-legacy-of-mahadev"
                        },
                        {
                            title: "Lord Hanuman: The History, His True Form—Monkey or Human",
                            description:
                                "Was Lord Hanuman a monkey or a human? Explore his history, true form, and revelations from Valmiki Ramayana in this in-depth analysis.",
                            image: "/images/hanuman.jpg",
                            author: "Eshan Singh",
                            date: "Coming Soon",
                            link: "#",
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
                            className="flex w-full items-center gap-4 overflow-hidden">
                            <Link href={article.link} className="group relative flex h-32 w-2/5 cursor-pointer items-center justify-center overflow-hidden rounded-lg">
                                    <span className="absolute top-2 right-2 z-10 hidden size-8 items-center justify-center rounded-md bg-lime-50/60 text-lime-950 backdrop-blur-lg transition-all duration-500 ease-linear group-hover:flex">
                                        <GoArrowUpRight />
                                    </span>
                                    <Image
                                        src={article.image}
                                        height={0}
                                        width={0}
                                        sizes="100vw"
                                        alt={article.title}
                                        className="h-full w-full rounded-lg object-cover transition-transform duration-500 ease-linear hover:scale-125"
                                    />
                            </Link>
                            <Link href={article.link} className="w-3/5">
                                    <h3 className="line-clamp-3 font-semibold">
                                        {article.title}
                                    </h3>
                                    <p className="line-clamp-2 text-sm text-lime-950/80">
                                        {article.description}
                                    </p>
                                    <p className="text-sm text-lime-950/80">
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
