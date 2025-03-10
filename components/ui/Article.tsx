import React from "react"

interface ArticleProps {
    title: string
    date: string
    content: string
}

export default function Article({ title, date, content }: ArticleProps) {
    return (
        <article>
            <h1>{title}</h1>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    )
}
