import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RecentHeroPostProps {
    imageSrc: string;
    title: string;
    description: string;
    author: string;
    date: string;
    link: string;
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
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                    <Image
                        src={imageSrc}
                        sizes="100vw"
                        title={title}
                        alt={title}
                        fill
                        priority
                        className="h-full w-full rounded-lg object-cover object-center transition-transform duration-500 ease-linear select-none group-hover:scale-105"
                    />
                </div>
                <div className="flex flex-col">
                    <h2 className="dark:selection:text-background mt-4 text-2xl font-bold text-lime-950 selection:bg-lime-900 selection:text-lime-50 dark:text-white dark:selection:bg-white">
                        {title}
                    </h2>
                    <p className="dark:selection:text-background mt-2 line-clamp-2 text-lime-950/80 selection:bg-lime-900/80 selection:text-lime-50 dark:text-neutral-200 dark:selection:bg-neutral-100">
                        {description}
                    </p>
                    <p className="dark:selection:text-background mt-2 text-sm text-lime-950/80 selection:bg-lime-900/80 selection:text-lime-50 dark:text-neutral-400 dark:selection:bg-neutral-100">
                        {author} - {date}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default RecentHeroPost;
