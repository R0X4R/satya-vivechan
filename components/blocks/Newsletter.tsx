"use client";
import { useState } from "react";
import { render } from "@react-email/render";
import { WelcomeEmail } from "@/components/emails/WelcomeEmail";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const emailHtml = render(<WelcomeEmail email={email} />);

            const response = await fetch("/api/send-newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    subject: "Welcome to the Satya Vivechan Family 🙏",
                    content: emailHtml,
                }),
            });

            const result = await response.json();
            setMessage(
                result.success
                    ? "Subscribed successfully!"
                    : "Subscription failed."
            );
        } catch (err) {
            console.error("Email render or send failed:", err);
            setMessage("An error occurred.");
        }
    };

    return (
        <div className="mt-5 flex min-h-500 w-full flex-col items-center justify-center bg-lime-200/60 px-8 sm:px-0 dark:bg-neutral-600/30">
            <h2 className="my-2 text-center text-base font-light text-lime-950/70 uppercase selection:bg-lime-950/70 selection:text-lime-50 sm:text-xl dark:text-white/70">
                Want to be notified as soon as a new article is released
            </h2>
            <h3 className="my-2 max-w-2xl text-center text-4xl font-black text-lime-950 capitalize selection:bg-lime-950 selection:text-lime-50 sm:text-5xl dark:text-white">
                Signup for our newsletter
            </h3>
            <div className="my-12 flex w-full max-w-xl items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col items-center justify-center gap-5"
                >
                    <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            className="w-full border-b border-lime-950/70 py-3 text-lime-950 outline-none selection:bg-lime-950 selection:text-lime-50 sm:w-96 dark:border-white/30"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-lime-900 px-6 py-3 text-lime-100 selection:bg-lime-100 selection:text-lime-900 sm:w-auto dark:bg-white dark:text-neutral-700"
                        >
                            Subscribe
                        </button>
                    </div>
                    <p className="text-center text-base text-lime-950/70 uppercase selection:bg-lime-950/70 selection:text-lime-50 dark:text-white/70">
                        {message}
                    </p>
                </form>
            </div>
        </div>
    );
}
