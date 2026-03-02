import localFont from "next/font/local"


export const circularSans = localFont({
    src: [
        {
            path: "./circular/circular-regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./circular/circular-medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./circular/circular-bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./circular/circular-black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-circular-sans",
    display: "swap",
})