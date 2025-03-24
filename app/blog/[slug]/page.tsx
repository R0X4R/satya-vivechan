import { Metadata } from "next"
// import Head from "next/head"
import fs from "fs"
import path from "path"
import React from "react"
import { getMarkdownData } from "@/lib/posts"
import BlogHeading from "@/components/blocks/BlogHeading"
import Image from "next/image"
import WhatsAppShareButton from "@/components/ui/WhatsappShareButton"
import InstagramShareButton from "@/components/ui/InstagramShareButton"
import ShareLinkButton from "@/components/ui/ShareLinkButton"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import Header from "@/components/menus/Header"

// Generate Metadata for SEO
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const blogItem = await getMarkdownData(slug)

    if (!blogItem) {
        return {
            title: "Blog Not Found - Satya Vivechan",
            description: "The requested blog post was not found.",
        }
    }

    const truncatedDescription =
        blogItem.description.length > 160
            ? blogItem.description.slice(0, 157) + "..."
            : blogItem.description

    return {
        title: `${blogItem.title} - Satya Vivechan`,
        description: truncatedDescription,
        openGraph: {
            title: `${blogItem.title} - Satya Vivechan`,
            description: truncatedDescription,
            url: `https://satyavivechan.live/blog/${slug}`,
            images: [
                {
                    url: blogItem.image ?? "/images/logo.png",
                    width: 1200,
                    height: 630,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            site: `https://satyavivechan.live/blog/${slug}`,
            title: `${blogItem.title} - Satya Vivechan`,
            description: truncatedDescription,
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: `/blog/${slug}`,
            languages: {
                "en-US": `/blog/${slug}`,
            },
        },
    }
}

// Generate Static Params for Next.js
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), "content")
    const filenames = fs.readdirSync(postsDirectory)

    return filenames.map((filename) => ({
        slug: filename.replace(".md", ""),
    }))
}

// Blog Page Component
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const blogItem = await getMarkdownData(slug)

    if (!blogItem) {
        return <h1>Blog not found</h1>
    }

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blogItem.title,
        description: blogItem.description,
        datePublished: blogItem.date,
        dateModified: blogItem.date,
        author: {
            "@type": "Person",
            name: "Eshan Singh",
        },
        publisher: {
            "@type": "Organization",
            name: "Satya Vivechan",
            logo: {
                "@type": "ImageObject",
                url: "https://satyavivechan.live/images/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://satyavivechan.live/blog/${slug}`,
        },
        image: blogItem.image ?? "https://satyavivechan.live/images/logo.png",
        url: `https://satyavivechan.live/blog/${slug}`,
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
            />
            <Header />
            <main className="flex h-full w-full flex-col items-center justify-center bg-lime-50 backdrop-blur-sm">
                <section className="flex w-full flex-col items-center justify-center space-y-5 py-24 md:py-36">
                    <div
                        id="information"
                        className="my-6 flex w-full flex-col items-center justify-center px-4 break-words md:max-w-7xl md:px-0">
                        <BlogHeading
                            text={blogItem.title}
                            description={blogItem.description}
                        />
                    </div>
                    <div className="group w-full cursor-pointer overflow-hidden">
                        <Image
                            src={
                                blogItem.image ??
                                "/images/satya-vivechan-og-image.png"
                            }
                            alt={blogItem.title}
                            sizes="100vw"
                            height={0}
                            width={0}
                            className="h-96 w-full object-cover object-center saturate-0 transition-transform duration-700 ease-linear select-none group-hover:scale-105 group-hover:saturate-100 md:h-500"
                        />
                    </div>
                    <div className="mx-auto my-8 flex w-full max-w-5xl flex-col items-center justify-center px-4 md:max-w-7xl md:px-0">
                        <div className="mb-5 flex w-full max-w-4xl items-center justify-between px-2">
                            <p className="text-base font-medium text-lime-900 capitalize selection:bg-lime-900 selection:text-lime-50">
                                Author: Eshan Singh
                            </p>
                            <p className="text-base font-medium text-lime-900 capitalize selection:bg-lime-900 selection:text-lime-50">
                                Published: {blogItem.date}
                            </p>
                        </div>
                        <div className="flex w-full max-w-4xl flex-col items-start justify-start px-2">
                            {blogItem.article.map((article, index) => (
                                <div
                                    key={index}
                                    className="my-4 w-full text-left text-base leading-6 text-lime-900 selection:bg-lime-900/70 selection:text-lime-50">
                                    <h2 className="my-2 text-xl font-semibold text-lime-950/80 selection:bg-lime-900/90 selection:text-lime-50">
                                        {article.heading}
                                    </h2>
                                    <div className="prose prose-lg my-2">
                                        <ReactMarkdown
                                            remarkPlugins={[
                                                remarkGfm,
                                                remarkBreaks,
                                            ]}
                                            // rehypePlugins={[rehypeRaw]}
                                            components={{
                                                h1: ({ ...props }) => (
                                                    <h1
                                                        className="text-3xl font-bold text-lime-950"
                                                        {...props}
                                                    />
                                                ),
                                                h2: ({ ...props }) => (
                                                    <h2
                                                        className="my-2 text-xl font-semibold text-lime-950/80 selection:bg-lime-900/90 selection:text-lime-50"
                                                        {...props}
                                                    />
                                                ),
                                                h3: ({ ...props }) => (
                                                    <h3
                                                        className="my-2 text-lg font-medium text-lime-950/80 selection:bg-lime-900/80 selection:text-lime-50"
                                                        {...props}
                                                    />
                                                ),
                                                p: ({ ...props }) => (
                                                    <p
                                                        className="my-2 text-base leading-relaxed text-lime-900"
                                                        {...props}
                                                    />
                                                ),
                                                ul: ({ ...props }) => (
                                                    <ul
                                                        className="my-2 list-inside list-disc text-lime-900"
                                                        {...props}
                                                    />
                                                ),
                                                ol: ({ ...props }) => (
                                                    <ol
                                                        className="my-2 list-inside list-decimal text-lime-900"
                                                        {...props}
                                                    />
                                                ),
                                                li: ({ ...props }) => (
                                                    <li
                                                        className="ml-5"
                                                        {...props}
                                                    />
                                                ),
                                                code: ({
                                                    className,
                                                    children,
                                                    ...props
                                                }) => (
                                                    <code
                                                        className={`font-hindi my-4 w-full items-center overflow-x-scroll p-4 text-center ${className || ""}`}
                                                        {...props}>
                                                        {children}
                                                    </code>
                                                ),
                                                pre: ({ ...props }) => (
                                                    <pre
                                                        className="font-hindi my-4 w-full items-center overflow-x-scroll bg-lime-100/60 p-4 text-center"
                                                        {...props}
                                                    />
                                                ),
                                            }}>
                                            {Array.isArray(article.content)
                                                ? article.content.join("\n")
                                                : article.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            <div className="mx-auto my-5 grid w-full grid-cols-2 items-start justify-start gap-2 md:grid-cols-4">
                                <WhatsAppShareButton title={blogItem.title} />
                                <InstagramShareButton />
                                <div className="col-span-2">
                                    <ShareLinkButton title={blogItem.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
