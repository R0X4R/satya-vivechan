"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { RiTwitterXFill, RiLinkM } from "react-icons/ri"

const ShareLinkButton = ({ title }: { title: string }) => {
    const [currentUrl, setCurrentUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href)
        }
    }, [])

    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title + " - " + currentUrl
    )}`

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentUrl)
        alert("Link copied to clipboard!")
    }

    return (
        <div className="grid w-full grid-cols-2 items-center justify-between gap-2">
            <Link
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xs bg-lime-900 p-3 text-sm font-medium text-lime-50 uppercase selection:bg-lime-50 selection:text-lime-900 dark:bg-stone-50 dark:text-lime-950">
                <RiTwitterXFill className="size-4" /> Share on X
            </Link>
            <button
                onClick={copyToClipboard}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xs bg-lime-900 p-3 text-sm font-medium text-lime-50 uppercase selection:bg-lime-50 selection:text-lime-900 dark:bg-stone-50 dark:text-lime-950">
                <RiLinkM className="size-4" /> Copy Link
            </button>
        </div>
    )
}

export default ShareLinkButton
