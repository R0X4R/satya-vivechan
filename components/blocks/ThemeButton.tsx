"use client"

import { useTheme } from "next-themes"
import { SiDarkreader } from "react-icons/si"
import { HiOutlineLightBulb } from "react-icons/hi2"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            type="button"
            className="outline-none cursor-pointer rounded-md border border-lime-800/30 bg-lime-100 dark:bg-stone-200 dark:border-stone-800/30 p-2 text-lime-950 [transition:background_20ms_ease-in,_color_0.15s]"
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <SiDarkreader className="size-5 dark:hidden" />
            <HiOutlineLightBulb className="hidden size-5 dark:block" />
        </button>
    )
}
