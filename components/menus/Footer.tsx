import React from "react"

const Footer = () => {
    return (
        <footer className="mx-auto flex h-12 w-full items-center justify-center border-t border-lime-600/30 py-2 dark:border-neutral-600/20">
            <div className="flex items-center justify-center">
                <h2 className="dark:selection:text-background text-sm text-lime-950 selection:bg-lime-950 selection:text-lime-50 dark:text-white dark:selection:bg-neutral-100">
                    &copy;{" "}
                    <span className="font-mono font-medium">
                        {new Date().getFullYear()}
                    </span>{" "}
                    Satya Vivechan. All rights reserved.
                </h2>
            </div>
        </footer>
    )
}

export default Footer
