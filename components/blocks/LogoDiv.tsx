import Image from "next/image"
import DailyVedicQuote from "@/components/blocks/VedicQuotes"

export default function LogoDiv() {
    return (
        <header className="mb-14 flex flex-col items-center justify-center text-center">
            <Image
                src="/images/logo.png"
                sizes="100vw"
                height={0}
                width={0}
                title="Satya Vivechan Logo"
                className="pointer-events-none h-full w-62 rounded-full object-cover select-none"
                alt="logo"
            />
            <h1 className="flex flex-col items-center justify-center text-6xl font-black tracking-tighter text-lime-950 uppercase selection:bg-lime-950 dark:selection:text-stone-950 dark:selection:bg-stone-50 selection:text-lime-50 md:text-8xl dark:text-stone-50">
                Satya Vivechan
                <span className="text-sm font-normal tracking-wide dark:selection:text-stone-950/60 dark:selection:bg-stone-50 text-lime-950/60 md:text-4xl dark:text-stone-50/60">
                    Unveiling Hindu History & Scriptures
                </span>
            </h1>
            <DailyVedicQuote />
        </header>
    )
}
