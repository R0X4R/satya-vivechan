"use client"
import { useState, useEffect } from "react"
import { vedicQuotes } from "@/data" // Ensure this is correctly imported

// ✅ Correctly define the interface
interface VedicQuote {
    id: number
    mantra: string
    reference: string
    meaning: string
}

const getDailyQuote = (): VedicQuote => {
    const today = new Date().toISOString().split("T")[0] // Get current date (YYYY-MM-DD)
    const storedData = localStorage.getItem("dailyVedicQuote")

    if (storedData) {
        const parsedData = JSON.parse(storedData)
        if (parsedData.date === today) {
            return parsedData.quote // ✅ Return stored quote if it's for today
        }
    }

    // ✅ Ensure `vedicQuotes` refers to the imported array
    const randomQuote =
        vedicQuotes[Math.floor(Math.random() * vedicQuotes.length)]

    localStorage.setItem(
        "dailyVedicQuote",
        JSON.stringify({ date: today, quote: randomQuote })
    )

    return randomQuote
}

const DailyVedicQuote = () => {
    const [quote, setQuote] = useState<VedicQuote | null>(null) // ✅ Explicitly define type

    useEffect(() => {
        setQuote(getDailyQuote()) // ✅ Ensure `quote` is correctly set
    }, [])

    if (!quote) return null

    return (
        <div className="mt-6 flex w-full max-w-3xl flex-col items-center justify-center rounded-md bg-lime-200/60 p-4 text-base text-lime-900 selection:bg-lime-900 selection:text-lime-50 dark:bg-stone-600/30 dark:text-stone-200 dark:selection:bg-stone-100 dark:selection:text-stone-950">
            <h2 className="my-3 flex items-center justify-center gap-3 text-xl font-bold dark:text-stone-50 dark:selection:bg-stone-100 dark:selection:text-stone-950">
                <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-900 opacity-75 dark:bg-stone-300"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-lime-900 dark:bg-stone-300"></span>
                </span>
                Today&apos;s Wisdom
                <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-900 opacity-75 dark:bg-stone-300"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-lime-900 dark:bg-stone-300"></span>
                </span>
            </h2>
            <span className="font-hindi font-medium my-2 w-full text-center">
                {quote.mantra}
            </span>
            <p>{quote.meaning}</p>
            <span className="font-hindi my-2 w-full text-center text-sm">
                - {quote.reference}
            </span>
        </div>
    )
}

export default DailyVedicQuote
