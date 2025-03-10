import React from "react"

interface HeadingProps {
    text: string
    description: string
}
const BlogHeading: React.FC<HeadingProps> = ({ text, description }) => {
    const mainTitle = text.length > 40 ? text.substring(0, 40) : text
    const remainingText = text.length > 40 ? text.substring(40) : ""
    return (
        <>
            <h1 className="mx-auto flex w-full max-w-7xl flex-col items-start justify-center text-left text-4xl font-black tracking-tighter text-lime-950 selection:bg-lime-950 selection:text-lime-50 md:items-center md:text-center md:text-6xl">
                {mainTitle}
                {remainingText && (
                    <span className="text-4xl leading-snug font-black text-lime-950/85 selection:bg-lime-950/85 selection:text-lime-50 md:text-6xl">
                        {remainingText}
                    </span>
                )}
            </h1>

            <p className="my-4 max-w-4xl text-left text-xs leading-snug text-lime-900 selection:bg-lime-900 selection:text-lime-50 md:text-center md:text-base">
                {description}
            </p>
        </>
    )
}

export default BlogHeading
