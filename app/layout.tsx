import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import LenisProvider from "@/components/ui/LenisProvider"
import { ThemeProvider } from "next-themes"
import Footer from "@/components/menus/Footer"

const bricolageSans = Bricolage_Grotesque({
    variable: "--font-bricolage-sans",
    subsets: ["latin"],
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
        nocache: true,
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
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${bricolageSans.variable} ${hindiFont.variable} scroll-smooth bg-lime-50 antialiased`}>
                <ThemeProvider
                    enableSystem={false}
                    attribute="class"
                    defaultTheme="light">
                    <LenisProvider>
                        {children}
                        <Footer />
                    </LenisProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
