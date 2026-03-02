import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import Footer from "@/components/menus/Footer"
import { circularSans } from "@/fonts"

const bricolageSans = Bricolage_Grotesque({
    variable: "--font-bricolage-sans",
    subsets: ["latin"],
    display: "swap",
})

const hindiFont = localFont({
    src: "./fonts/siddhanta.ttf",
    variable: "--font-hindi",
    display: "swap",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://satyavivechan.live"),
    title: "Satya Vivechan - सत्य विवेचन | Sanatan Vedic Wisdom & History",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Eshan Singh" }],
    description:
        "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
    twitter: {
        card: "summary_large_image",
        site: "@R0X4R",
        title: "Unveiling the True History of Hindu Scriptures - Satya Vivechan",
        description:
            "Deeply researched articles on Hindu history, ancient scriptures, and divine wisdom from Ramayana, Mahabharata, and Vedas.",
    },
    creator: "Eshan Singh",
    openGraph: {
        title: "Satya Vivechan - सत्य विवेचन | Sanatan Vedic Wisdom & History",
        description:
            "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
        url: "https://satyavivechan.live",
        siteName: "Satya Vivechan",
        images: [
            {
                url: "https://satyavivechan.live/images/satya-vivechan-og-image.png",
                width: 1200,
                height: 630,
                alt: "Satya Vivechan - Unveiling Hindu History & Scriptures",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        // nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "https://satyavivechan.live/",
        },
    },
    icons: {
        icon: "/images/favicon-32x32.png",
        shortcut: "/images/favicon-16x16.png",
        apple: "/images/apple-touch-icon.png",
    },
    verification: {
        other: [
            {
                "blogarama-site-verification":
                    "blogarama-d32834b2-0936-42a8-991b-ff2a4d8901d2",
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${bricolageSans.variable} ${circularSans.variable} ${hindiFont.variable} scroll-smooth bg-lime-50 antialiased dark:bg-neutral-950`}>
                <ThemeProvider
                    enableSystem
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange>
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
