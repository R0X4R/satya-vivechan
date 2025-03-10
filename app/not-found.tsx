"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/menus/Header"
import Footer from "@/components/menus/Footer"

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/")
        }, 3000) // Redirect after 3 seconds

        return () => clearTimeout(timer) // Cleanup timer on unmount
    }, [router])

    return (
        <>
            <Header />
            <main className="flex h-screen flex-col items-center justify-center bg-lime-50 text-center">
                <h1 className="text-4xl font-bold text-lime-900">
                    404 - Page Not Found
                </h1>
                <p className="mt-2 text-lg text-lime-700">
                    Redirecting to homepage in 3 seconds...
                </p>
            </main>
        </>
    )
}
