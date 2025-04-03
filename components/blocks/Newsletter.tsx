"use client"

import { useState } from "react"

export default function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const response = await fetch("/api/send-newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                subject: "Welcome to Our Newsletter",
                content: "Thank you for subscribing!",
            }),
        })

        const result = await response.json()
        if (result.success) {
            setMessage("Subscribed successfully!")
        } else {
            setMessage("Subscription failed.")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Subscribe</button>
            <p>{message}</p>
        </form>
    )
}
