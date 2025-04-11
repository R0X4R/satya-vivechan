"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import CategoryFilter from "../blocks/CategoryFilter"

const POSTS_PER_PAGE = 6

type Post = {
    title: string
    description: string
    image: string
    author: string
    slug: string
    date: string
    category: string
}

type Props = {
    posts: Post[]
    categories: string[]
}

const FilteredBlogList = ({ posts, categories }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [currentPage, setCurrentPage] = useState(1)

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
        setCurrentPage(1) // reset pagination
    }

    const filteredPosts = useMemo(() => {
        const sorted = [...posts].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        return selectedCategory === "All"
            ? sorted
            : sorted.filter((post) => post.category === selectedCategory)
    }, [posts, selectedCategory])

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    )

    return (
        <>
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategoryChange}
            />
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {paginatedPosts.map((post, index) => (
                    <Link
                        key={index}
                        href={`/blog/${post.slug}`}
                        className="group block cursor-pointer transition-all">
                        <div className="select-none overflow-hidden relative w-full p-0">
                            <Image
                                src={post.image}
                                alt={post.description}
                                title={post.title}
                                className="group-hover:scale-105 transition-transform duration-500 ease-linear aspect-[16/9] h-60 w-full object-cover"
                                width={0}
                                height={0}
                            />
                            <span className="pointer-events-none absolute top-3 left-3 bg-lime-50 px-3 py-2 text-xs font-medium tracking-wide text-lime-950 uppercase mix-blend-screen backdrop-blur-md selection:bg-lime-950 selection:text-lime-50 md:line-clamp-3 dark:bg-stone-700 dark:text-stone-50">
                                {post.category}
                            </span>
                        </div>
                        <h3 className="mt-4 line-clamp-2 text-base font-bold text-lime-950 selection:bg-lime-950 selection:text-lime-50 dark:text-stone-50">
                            {post.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm font-normal text-lime-950/80 selection:bg-lime-950/80 selection:text-lime-50 dark:text-stone-400">
                            {post.description}
                        </p>
                        <div className="mt-2 text-xs text-lime-950/80 selection:bg-lime-950/80 selection:text-lime-50 dark:text-stone-400">
                            {post.author} -{" "}
                            {new Date(post.date).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-10 flex w-full items-center justify-between gap-4">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="rounded-xs min-w-36 cursor-pointer bg-lime-900 px-5 py-3 text-sm text-white disabled:opacity-50 dark:bg-stone-200 dark:text-stone-900">
                    Previous
                </button>
                <button
                    onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="rounded-xs min-w-36 cursor-pointer bg-lime-900 px-5 py-3 text-sm text-white disabled:opacity-50 dark:bg-stone-200 dark:text-stone-900">
                    Next
                </button>
            </div>
        </>
    )
}

export default FilteredBlogList
