import Image from "next/image"
import Link from "next/link"
import { RxChevronLeft } from "react-icons/rx"

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full select-none transition-all duration-300 py-3 px-4 md:px-0">
            <div className="mx-auto flex max-w-5xl items-center justify-between rounded-xl bg-lime-100 px-4 py-1 md:py-4 ring-1 ring-lime-300/50 md:px-6">
            <Link href="/" className="flex md:hidden items-center text-xl tracking-tighter font-black uppercase text-lime-950 gap-2">
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

                <Link
                    href="/"
                    className="hidden items-center gap-2 text-sm font-medium text-lime-900 transition-all duration-300 hover:text-lime-700 md:flex md:text-base">
                    <RxChevronLeft className="size-5 transition-transform duration-300 hover:-translate-x-1" />
                    Back to Homepage
                </Link>

                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm font-medium text-lime-900 transition-all duration-300 hover:text-lime-700 ring-1 ring-lime-900/30 rounded-md md:hidden p-2">
                    <RxChevronLeft className="size-5 transition-transform duration-300 hover:scale-110" />
                </Link>
            </div>
        </header>
    )
}

export default Header
