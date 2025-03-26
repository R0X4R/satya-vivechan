/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect } from "react"
declare global {
    interface Window {
        adsbygoogle?: { push: (params: object) => void }[]
    }
}

const AdComponent = () => {
    useEffect(() => {
        const script = document.createElement("script")
        script.async = true
        script.src =
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5611152880244692"
        script.crossOrigin = "anonymous"
        document.head.appendChild(script)

        script.onload = () => {
            try {
                window.adsbygoogle = window.adsbygoogle || []
                if (Array.isArray(window.adsbygoogle)) {
                    window.adsbygoogle.push({})
                }
            } catch (e) {
                console.error("AdSense error:", e)
            }
        }
    }, [])

    return (
        <div className="my-4 flex w-full justify-center">
            ad
            <ins
                className="adsbygoogle mx-auto block w-full max-w-3xl"
                style={{ height: "90px" }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-5611152880244692"
                data-ad-slot="2671356797"></ins>
        </div>
    )
}

export default AdComponent
