"use client"
import Image from "next/image"
import dynamic from "next/dynamic"

const DailyVedicQuote = dynamic(
    () => import("@/components/blocks/VedicQuotes"),
    {
        ssr: false,
    }
)

export default function LogoDiv() {
    return (
        <header className="mb-14 flex flex-col items-center justify-center text-center">
            <Image
                src="/images/logo.png"
                sizes="100vw"
                height={0}
                width={0}
                title="Satya Vivechan Logo"
                quality={100}
                priority
                // layout="responsive"
                className="pointer-events-none h-full w-62 rounded-full object-cover select-none"
                alt="logo"
            />
            <h1 className="flex flex-col items-center justify-center text-6xl font-black tracking-tighter text-lime-950 uppercase selection:bg-lime-950 selection:text-lime-50 md:text-8xl dark:text-stone-50 dark:selection:bg-stone-50 dark:selection:text-stone-950">
                Satya Vivechan
                <span className="text-sm font-normal tracking-wide text-lime-950/60 md:text-4xl dark:text-stone-50/60 dark:selection:bg-stone-50 dark:selection:text-stone-950/60">
                    Unveiling Hindu History & Scriptures
                </span>
            </h1>
            <DailyVedicQuote />
        </header>
    )
}
