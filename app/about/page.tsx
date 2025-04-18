import Header from "@/components/menus/Header"
import ImageBox from "@/components/ui/ImageBox"
import { Marquee } from "@/components/ui/Marquee"
import { ImageNFT } from "@/data"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "About | Satya Vivechan - सत्य विवेचन",
    description:
        "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
    alternates: {
        canonical: "/about",
        languages: {
            "en-US": "https://satyavivechan.live/about",
        },
    },
    twitter: {
        card: "summary_large_image",
        site: "https://satyavivechan.live/about",
        title: "Unveiling the True History of Hindu Scriptures - Satya Vivechan",
        description:
            "Deeply researched articles on Hindu history, ancient scriptures, and divine wisdom from Ramayana, Mahabharata, and Vedas.",
    },
    creator: "Eshan Singh",
    openGraph: {
        title: "About | Satya Vivechan - सत्य विवेचन",
        description:
            "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
        url: "https://satyavivechan.live/about",
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
}

const About = () => {
    return (
        <>
            <Header />
            <main className="mx-auto flex w-full flex-col items-center justify-center overflow-x-hidden bg-lime-50 dark:bg-stone-950">
                <section className="flex w-full flex-col items-center justify-center mt-36">
                    <div className="flex w-full max-w-5xl flex-col items-center justify-center">
                        <h1 className="text-5xl font-black tracking-tight text-lime-950 uppercase selection:bg-lime-950 selection:text-lime-50 text-center md:text-7xl dark:text-stone-50 dark:selection:bg-stone-100 dark:selection:text-stone-950">
                            <span className="block text-lg font-medium tracking-normal dark:text-stone-50/80 text-lime-950/80 uppercase md:text-2xl">
                                About
                            </span>
                            Satya Vivechan
                        </h1>

                        <p className="px-4 mt-6 text-base leading-relaxed text-lime-900 selection:bg-lime-900 selection:text-lime-50 text-center md:text-xl dark:text-stone-200/80 dark:selection:bg-stone-100 dark:selection:text-stone-950">
                            <span className="block">
                                Satya Vivechan is a platform dedicated to
                                presenting the truth as revealed in our ancient
                                scriptures, especially the Vedas, Ramayana, and
                                Mahabharata—without distortion, fantasy, or
                                blind faith. I write these blogs to clear the
                                fog of modern misinterpretations, break the
                                myths spread by TV serials and pop culture, and
                                bring forward the real character, values, and
                                context behind our revered figures like Shri
                                Ram, Arjun, Hanuman, and others.
                            </span>
                            <br />
                            <span className="block">
                                Each blog is a journey of{" "}
                                <strong>vivechan</strong>—deep reflection guided
                                by authentic shlokas and logical reasoning. This
                                is my humble attempt to revive{" "}
                                <strong>Satya</strong> (truth) and{" "}
                                <strong>Dharma</strong> in the minds of young
                                seekers who wish to connect with our spiritual
                                heritage in a rational, honest, and fearless
                                way.
                            </span>
                        </p>
                    </div>

                    <div className="group relative mt-2 flex w-full flex-col items-center justify-center">
                        <h2 className="pointer-events-none absolute z-10 flex size-36 flex-col items-center justify-center rounded-full bg-lime-50/90 text-center uppercase md:opacity-0 mix-blend-overlay backdrop-blur transition-all duration-300 ease-linear md:group-hover:opacity-100">
                            ai generated images
                        </h2>
                        <Marquee
                            repeat={20}
                            duration="30s"
                            className="flex items-center justify-center gap-4 py-20">
                            {ImageNFT.map((nft) => (
                                <ImageBox
                                    key={nft.id}
                                    src={nft.image}
                                    label={nft.title}
                                />
                            ))}
                        </Marquee>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About
