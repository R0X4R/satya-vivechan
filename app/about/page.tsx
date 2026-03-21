import React from "react";
import { Metadata } from "next";
import Header from "@/components/menus/Header";
import ImageBox from "@/components/ui/ImageBox";
import { Marquee } from "@/components/ui/Marquee";
import { ImageNFT } from "@/data";

export const metadata: Metadata = {
    title: "About | Satya Vivechan - सत्य विवेचन",
    description:
        "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
    alternates: {
        canonical: "/about",
        languages: {
            "en-US": "https://satyavivechan.qzz.io/about",
        },
    },
    twitter: {
        card: "summary_large_image",
        site: "https://satyavivechan.qzz.io/about",
        title: "Unveiling the True History of Hindu Scriptures - Satya Vivechan",
        description:
            "Deeply researched articles on Hindu history, ancient scriptures, and divine wisdom from Ramayana, Mahabharata, and Vedas.",
    },
    creator: "Eshan Singh",
    openGraph: {
        title: "About | Satya Vivechan - सत्य विवेचन",
        description:
            "Discover the wisdom of Sanatan Vedic Dharma, uncover ancient history, and learn timeless life lessons through deeply researched storytelling at Satya Vivechan.",
        url: "https://satyavivechan.qzz.io/about",
        siteName: "Satya Vivechan",
        images: [
            {
                url: "https://satyavivechan.qzz.io/images/satya-vivechan-og-image.png",
                width: 1200,
                height: 630,
                alt: "Satya Vivechan - Unveiling Hindu History & Scriptures",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

const About = () => {
    return (
        <main className="dark:bg-background mx-auto flex w-full flex-col items-center justify-center overflow-x-hidden bg-lime-50">
            <section className="mt-36 flex w-full flex-col items-center justify-center">
                <div className="flex w-full max-w-5xl flex-col items-center justify-center">
                    <h1 className="dark:selection:text-background text-center text-5xl font-black tracking-tight text-lime-950 uppercase selection:bg-lime-950 selection:text-lime-50 md:text-7xl dark:text-white dark:selection:bg-white">
                        Satya Vivechan
                    </h1>

                    <p className="dark:selection:text-background mt-6 px-4 text-center text-base leading-relaxed text-lime-900 selection:bg-lime-900 selection:text-lime-50 md:text-lg dark:text-white/80 dark:selection:bg-neutral-100">
                        <span className="block">
                            Satya Vivechan is a small effort to present the
                            truth found in our ancient scriptures, especially
                            the Vedas, Ramayana, and Mahabharata. The aim is to
                            share their real teachings without adding fantasy,
                            exaggeration, or blind belief.
                        </span>
                        <br />
                        <span className="block">
                            Through these blogs, I try to clear the confusion
                            created by modern misinterpretations, TV serials,
                            and pop culture. Many times, the true character,
                            values, and context of great personalities like Shri
                            Ram, Arjun, and Hanuman are changed or
                            oversimplified. Here, I attempt to understand them
                            as they are described in the original scriptures.
                        </span>
                        <br />
                        <span className="block">
                            Each blog is a journey of reflection. It is based on
                            authentic shlokas, thoughtful reasoning, and honest
                            discussion. This is my humble effort to bring back
                            Satya and Dharma into the minds of young seekers who
                            want to connect with their spiritual roots in a
                            rational and sincere way.
                        </span>
                        <br />
                        <span className="block">
                            Satya Vivechan is written by Eshan Singh. He is
                            deeply interested in understanding Hindu scriptures
                            in their original form and presenting them in a
                            logical and honest manner. To improve clarity and
                            refine the English language of his writings, he also
                            uses AI as a supportive tool, while keeping the
                            research, intent, and interpretation his own.
                        </span>
                    </p>
                </div>

                <div className="group relative mt-2 flex w-full flex-col items-center justify-center">
                    <h2 className="pointer-events-none absolute z-10 flex size-36 flex-col items-center justify-center rounded-full bg-lime-50/90 text-center uppercase mix-blend-overlay backdrop-blur transition-all duration-300 ease-linear md:opacity-0 md:group-hover:opacity-100">
                        ai generated images
                    </h2>
                    <Marquee
                        repeat={20}
                        duration="30s"
                        className="flex items-center justify-center gap-4 py-20"
                    >
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
    );
};

export default About;
