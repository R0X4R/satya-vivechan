"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { RiWhatsappFill } from "react-icons/ri"

const WhatsAppShareButton = ({ title }: { title: string }) => {
    const [shareUrl, setShareUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setShareUrl(
                `https://api.whatsapp.com/send?text=${encodeURIComponent(
                    title + " - " + window.location.href
                )}`
            )
        }
    }, [title])

    return (
        <Link
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex items-center justify-center gap-2 rounded-xs bg-orange-500 p-3 text-sm font-medium text-lime-50 uppercase md:col-span-1 selection:bg-lime-50 selection:text-orange-500">
            <RiWhatsappFill className="size-4" /> Share on WhatsApp
        </Link>
    )
}

export default WhatsAppShareButton
