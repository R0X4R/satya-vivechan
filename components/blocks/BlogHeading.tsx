import React from "react"

interface HeadingProps {
    text: string
    description: string
}
const BlogHeading: React.FC<HeadingProps> = ({ text, description }) => {
    const words = text.split(" ")
    const mainTitle = words.length > 5 ? words.slice(0, 5).join(" ") : text
    const remainingText = words.length > 5 ? words.slice(5).join(" ") : ""
    return (
        <>
            <h1 className="dark:selection:text-background mx-auto flex w-full max-w-5xl flex-col items-start justify-center text-left text-4xl font-black tracking-tighter text-lime-950 selection:bg-lime-950 selection:text-lime-50 md:items-center md:text-center md:text-6xl dark:text-neutral-50 dark:selection:bg-neutral-50">
                {mainTitle}
                {remainingText && (
                    <span className="text-4xl leading-snug font-black text-lime-950/85 selection:bg-lime-950/85 selection:text-lime-50 md:text-6xl dark:text-neutral-50/90 dark:selection:bg-neutral-100/85 dark:selection:text-neutral-950/85">
                        {remainingText}
                    </span>
                )}
            </h1>

            <p className="my-4 max-w-4xl text-left text-xs leading-snug text-lime-900 selection:bg-lime-900 selection:text-lime-50 md:text-center md:text-base dark:text-neutral-200 dark:selection:bg-neutral-200 dark:selection:text-neutral-950">
                {description}
            </p>
        </>
    )
}

export default BlogHeading
