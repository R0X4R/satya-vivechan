"use client"
import Image from "next/image"
import dynamic from "next/dynamic"
import logo from "@/public/images/logo.webp"

const DailyVedicQuote = dynamic(
    () => import("@/components/blocks/VedicQuotes"),
    {
        ssr: false,
    }
)

export default function LogoDiv() {
    return (
        <header className="mb-14 flex flex-col items-center justify-center text-center">
            <div className="relative size-62 overflow-hidden rounded-full">
                <Image
                    src={logo}
                    sizes="100vw"
                    title="Satya Vivechan Logo"
                    quality={100}
                    priority
                    placeholder="blur"
                    fill
                    className="pointer-events-none h-full w-full rounded-full object-contain select-none"
                    alt="logo"
                />
            </div>
            <h1 className="flex flex-col items-center justify-center text-6xl font-black tracking-tighter text-lime-950 uppercase selection:bg-lime-950 selection:text-lime-50 md:text-8xl dark:text-stone-50 dark:selection:bg-stone-50 dark:selection:text-stone-950">
                Satya Vivechan
                <span className="text-sm font-normal tracking-wide text-lime-950/60 md:text-4xl dark:text-stone-50/60 dark:selection:bg-stone-50 dark:selection:text-stone-950/60">
                    Unveiling Hindu History & Scriptures
                </span>
                <span className="sr-only text-sm font-normal tracking-wide text-lime-950/60 md:text-4xl dark:text-stone-50/60 dark:selection:bg-stone-50 dark:selection:text-stone-950/60">
                    Discover the wisdom of Sanatan Vedic Dharma, uncover ancient
                    history, and learn timeless life lessons through deeply
                    researched storytelling at Satya Vivechan.
                </span>
            </h1>
            <DailyVedicQuote />
        </header>
    )
}
