import Image from "next/image"
import Link from "next/link"
import { RxChevronLeft } from "react-icons/rx"
import ThemeToggle from "../blocks/ThemeButton"

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full px-4 py-3 transition-all duration-300 select-none md:px-0">
            <div className="mx-auto flex max-w-5xl items-center justify-between rounded-xl dark:bg-stone-100 bg-lime-100 px-4 py-1 ring-1 ring-lime-300/50 dark:ring-stone-300/50 md:px-6 md:py-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-black tracking-tighter text-lime-950 uppercase md:hidden">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-12 rounded-full transition-transform duration-300 hover:scale-105"
                    />
                    Satya Vivechan
                </Link>
                <Link href="/" className="hidden md:flex">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-48 transition-transform duration-300 hover:scale-105"
                    />
                </Link>
                <div className="flex gap-3 items-center justify-center">
                    <ThemeToggle />
                    <Link
                        href="/"
                        className="hidden group items-center gap-0.5 text-sm font-medium text-lime-900 transition-all duration-300 hover:text-lime-700 md:flex md:text-base dark:text-stone-950">
                        <RxChevronLeft className="size-5 transition-transform dark:text-stone-950 duration-300 group-hover:-translate-x-0.5" />
                        Back to Homepage
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-md p-2 text-sm font-medium text-lime-900 ring-1 ring-lime-900/30 transition-all duration-300 hover:text-lime-700 md:hidden">
                        <RxChevronLeft className="size-5 transition-transform duration-300 hover:scale-110" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
