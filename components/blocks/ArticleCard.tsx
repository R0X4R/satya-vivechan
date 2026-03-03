import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface ArticleProps {
    title: string;
    description: string;
    image: string;
    author: string;
    date: string;
    link: string;
}

export default function ArticleCard({
    title,
    description,
    image,
    author,
    date,
    link,
}: ArticleProps) {
    return (
        <div className="group flex w-full items-center gap-4 overflow-hidden">
            <Link
                href={link}
                className="group relative flex h-32 w-2/5 cursor-pointer items-center justify-center overflow-hidden rounded-lg select-none"
            >
                <span className="absolute top-2 right-2 z-10 hidden size-8 items-center justify-center rounded-md bg-lime-50/60 text-lime-950 backdrop-blur-lg transition-all duration-500 ease-linear group-hover:flex">
                    <GoArrowUpRight />
                </span>
                <Image
                    src={image}
                    height={0}
                    width={0}
                    sizes="100vw"
                    // priority
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBgAAAAwAQCdASoEAAQAAvAfJZkAAA=="
                    quality={50}
                    title={title}
                    alt={description}
                    className="h-full w-full rounded-lg object-cover transition-transform duration-500 ease-linear group-hover:scale-105"
                />
            </Link>
            <Link href={link} className="w-3/5">
                <h3 className="line-clamp-2 font-semibold text-lime-950 selection:bg-lime-950 selection:text-lime-50 md:line-clamp-3 dark:text-white">
                    {title}
                </h3>
                <p className="line-clamp-2 text-sm text-lime-950/80 selection:bg-lime-950/80 selection:text-lime-50 dark:text-neutral-200">
                    {description}
                </p>
                <p className="text-sm text-lime-950/80 selection:bg-lime-950/80 selection:text-lime-50 dark:text-neutral-400">
                    {author} - {date}
                </p>
            </Link>
        </div>
    );
}
