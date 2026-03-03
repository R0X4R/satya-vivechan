"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler"


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    return (
        <header className="dark:bg-background/90 sticky top-0 z-[999] h-16 w-full border-b border-lime-700/30 bg-lime-50/90 backdrop-blur-xl dark:border-neutral-600/40">
            <nav className="relative w-full px-4 py-2">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <Link
                        href="/"
                        className="capitalise flex items-center justify-center gap-2 text-lg font-bold tracking-tight text-balance text-lime-950 md:text-xl dark:text-white">
                        <div className="relative flex items-center justify-center">
                            <Image
                                src="/images/logo.webp"
                                priority
                                alt="logo"
                                width={192}
                                height={48}
                                className="h-auto w-10 rounded-full object-cover contrast-125 saturate-150"
                            />
                        </div>
                        Satya Vivechan
                    </Link>
                    <div className="hidden md:flex">
                        <div className="flex flex-col items-start justify-center gap-2 md:flex-row md:items-center md:gap-6">
                            <Link
                                href="/"
                                className="group flex items-center text-2xl tracking-wide text-lime-950 uppercase transition-colors duration-150 ease-in hover:text-lime-700 md:text-sm dark:text-white dark:hover:text-white/80">
                                Homepage
                            </Link>
                            <Link
                                href="/about"
                                className="group flex items-center text-2xl tracking-wide text-lime-950 uppercase transition-colors duration-150 ease-in hover:text-lime-700 md:text-sm dark:text-white dark:hover:text-white/80">
                                About
                            </Link>
                            <AnimatedThemeToggler className="text-lime-950 dark:text-white" />
                        </div>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="relative flex h-8 w-8 flex-col items-center justify-center md:hidden">
                        <span
                            className={`absolute h-0.5 w-6 bg-lime-950 transition-all duration-300 ease-in-out dark:bg-white ${
                                isMenuOpen ? "rotate-45" : "-translate-y-2"
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-6 bg-lime-950 transition-all duration-300 ease-in-out dark:bg-white ${
                                isMenuOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-6 bg-lime-950 transition-all duration-300 ease-in-out dark:bg-white ${
                                isMenuOpen ? "-rotate-45" : "translate-y-2"
                            }`}
                        />
                    </button>
                </div>

                <div
                    className={`shadow-0 dark:bg-background/90 absolute top-full left-0 max-h-120 min-h-90 w-full overflow-y-auto border-b border-lime-600/30 bg-lime-50/80 shadow-none backdrop-blur transition-all duration-300 ease-linear md:hidden dark:border-neutral-600/30 ${
                        isMenuOpen
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                    }`}>
                    <div className="mt-4 flex flex-col gap-4 p-6">
                        <div className="flex flex-col items-start justify-center gap-6 md:flex-row md:items-center">
                            <Link
                                href="/"
                                className="group flex items-center text-2xl text-lime-950 transition-colors duration-150 ease-in hover:text-lime-700 md:text-sm dark:text-white dark:hover:text-white/80">
                                Homepage
                            </Link>
                            <Link
                                href="/about"
                                className="group flex items-center text-2xl text-lime-950 transition-colors duration-150 ease-in hover:text-lime-700 md:text-sm dark:text-white dark:hover:text-white/80">
                                About
                            </Link>
                            <AnimatedThemeToggler className="text-lime-950 dark:text-white" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
