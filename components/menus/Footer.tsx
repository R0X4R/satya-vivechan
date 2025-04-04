import React from "react"
// import NewsletterForm from "../blocks/Newsletter"
import ThemeToggle from "../blocks/ThemeButton"

const Footer = () => {
    return (
        <footer className="mx-auto max-w-7xl border-lime-950/10 py-6 md:py-8 dark:border-lime-100/20">
            <div className="fixed bottom-10 right-10">
                <ThemeToggle />
            </div>
            {/* <NewsletterForm /> */}
            <div className="mt-8 flex items-center justify-center">
                <h2 className="text-base text-lime-950/85 selection:bg-lime-950 selection:text-lime-50 dark:text-stone-200 dark:selection:bg-stone-100 dark:selection:text-stone-950">
                    &copy; 2025 Satya Vivechan. All rights reserved.
                </h2>
            </div>
        </footer>
    )
}

export default Footer
