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
                className="select-none pointer-events-none h-full w-62 rounded-full object-cover"
                alt="logo"
            />
            <h1 className="flex flex-col items-center justify-center text-6xl font-black tracking-tighter text-lime-950 uppercase selection:bg-lime-950 selection:text-lime-50 md:text-8xl">
                Satya Vivechan
                <span className="text-sm md:text-4xl font-normal tracking-wide text-lime-950/60">
                    Unveiling Hindu History & Scriptures
                </span>
            </h1>
            <DailyVedicQuote />
        </header>
    )
}
