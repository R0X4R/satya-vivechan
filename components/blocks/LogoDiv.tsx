"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import logo from "@/public/images/logo.webp";

const DailyVedicQuote = dynamic(
    () => import("@/components/blocks/VedicQuotes"),
    {
        ssr: false,
    }
);

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
            <h1 className="dark:selection:text-background flex flex-col items-center justify-center text-6xl font-black tracking-tighter text-lime-950 uppercase selection:bg-lime-950 selection:text-lime-50 md:text-8xl dark:text-white dark:selection:bg-white">
                Satya Vivechan
                <span className="dark:selection:text-background/60 text-sm font-normal tracking-wide text-lime-950/60 md:text-4xl dark:text-white/60 dark:selection:bg-white">
                    Unveiling Hindu History & Scriptures
                </span>
            </h1>
            <h2 className="dark:selection:text-background/60 sr-only text-sm font-normal tracking-wide text-lime-950/60 md:text-4xl dark:text-white/60 dark:selection:bg-white">
                Discover the wisdom of Sanatan Vedic Dharma, uncover ancient
                history, and learn timeless life lessons through deeply
                researched storytelling at Satya Vivechan.
            </h2>
            <DailyVedicQuote />
        </header>
    );
}
