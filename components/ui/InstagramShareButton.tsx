"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { RiInstagramFill } from "react-icons/ri"

const InstagramShareButton = () => {
    const [shareUrl, setShareUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setShareUrl(
                `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`
            )
        }
    }, [])

    return (
        <Link
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex items-center justify-center gap-2 rounded-xs bg-lime-900 p-3 text-sm font-medium text-lime-50 uppercase md:col-span-1 selection:bg-lime-50 selection:text-lime-900">
            <RiInstagramFill className="size-4" /> Share on Instagram
        </Link>
    )
}

export default InstagramShareButton
