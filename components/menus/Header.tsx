import Image from "next/image"
import Link from "next/link"
import { PiCircleDashedDuotone } from "react-icons/pi"
import ThemeToggle from "../blocks/ThemeButton"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../blocks/Sheet"

const NavLinks = () => (
    <div className="flex flex-col items-start justify-center gap-2 md:flex-row md:items-center md:gap-6">
        <Link
            href="/"
            className="group flex items-center gap-1 text-2xl md:text-base md:uppercase font-medium text-lime-900 transition hover:text-lime-700 dark:text-stone-950 dark:hover:text-stone-900">
            Homepage
        </Link>
        <Link
            href="/about"
            className="group flex items-center gap-1 text-2xl md:text-base md:uppercase font-medium text-lime-900 transition hover:text-lime-700 dark:text-stone-950 dark:hover:text-stone-900">
            About
        </Link>
    </div>
)

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full px-4 py-3 transition-all duration-300 select-none md:px-0">
            <div className="mx-auto flex max-w-5xl items-center justify-between rounded-xl bg-lime-100 px-4 py-1 ring-1 ring-lime-300/50 md:px-6 md:py-4 dark:bg-stone-100 dark:ring-stone-300/50">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-base font-black tracking-tighter text-lime-950 uppercase md:hidden">
                        <Image
                            src="/images/logo.webp"
                            alt="logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        Satya Vivechan
                    </Link>
                    <Link href="/" className="hidden md:flex">
                        <Image
                            src="/images/logo.svg"
                            alt="logo"
                            width={192}
                            height={48}
                            className="h-auto w-48"
                        />
                    </Link>
                </div>

                {/* Center: Nav Links (only md and up) */}
                <div className="hidden flex-1 justify-center md:flex">
                    <NavLinks />
                </div>

                {/* Right: Theme Toggle & Mobile Menu */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger className="rounded-md p-2 outline-none text-lime-900 ring-1 ring-lime-900/30 dark:text-stone-950">
                                <PiCircleDashedDuotone className="size-5 rotate360" />
                            </SheetTrigger>
                            <SheetContent
                                side="top"
                                className="flex h-60 flex-col items-start border-none bg-lime-50 dark:bg-stone-50 pt-28">
                                <SheetHeader>
                                    <NavLinks />
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
