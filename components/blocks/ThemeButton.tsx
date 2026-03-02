"use client"

import { useTheme } from "next-themes"
import { SiDarkreader } from "react-icons/si"
import { HiOutlineLightBulb } from "react-icons/hi2"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            type="button"
            className="cursor-pointer rounded-md border border-lime-800/30 bg-lime-100 p-2 text-lime-950 outline-none [transition:background_20ms_ease-in,_color_0.15s] dark:border-neutral-800/30 dark:bg-neutral-200"
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <SiDarkreader className="size-5 dark:hidden" />
            <HiOutlineLightBulb className="hidden size-5 dark:block" />
        </button>
    )
}
