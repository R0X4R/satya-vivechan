import React from "react"
import Image from "next/image"
import Link from "next/link"

interface RecentHeroPostProps {
    imageSrc: string
    title: string
    description: string
    author: string
    date: string
    link: string
}

const RecentHeroPost: React.FC<RecentHeroPostProps> = ({
    imageSrc,
    title,
    description,
    author,
    date,
    link,
}) => {
    return (
        <Link className="w-full md:col-span-2" href={link}>
            <div className="group w-full">
                <div className="w-full overflow-hidden rounded-2xl">
                    <Image
                        src={imageSrc}
                        sizes="100vw"
                        height={0}
                        width={0}
                        title={title}
                        alt={title}
                        className="h-500 w-full rounded-lg object-cover object-center transition-transform duration-500 ease-linear select-none group-hover:scale-105"
                    />
                </div>
                <div className="flex flex-col">
                    <h2 className="mt-4 text-2xl font-bold text-lime-950 selection:bg-lime-900 selection:text-lime-50 dark:text-stone-50 dark:selection:text-stone-950 dark:selection:bg-stone-50">
                        {title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-lime-950/80 dark:selection:text-stone-950 dark:selection:bg-stone-100 selection:bg-lime-900/80 selection:text-lime-50 dark:text-stone-200">
                        {description}
                    </p>
                    <p className="mt-2 text-sm text-lime-950/80 dark:selection:text-stone-950 dark:selection:bg-stone-100 selection:bg-lime-900/80 selection:text-lime-50 dark:text-stone-400">
                        {author} - {date}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default RecentHeroPost
