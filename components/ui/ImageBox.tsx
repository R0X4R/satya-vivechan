import Image from "next/image"
import React from "react"

interface ImageBoxProps {
    src: string
    label: string
    className?: string
}

const ImageBox: React.FC<ImageBoxProps> = ({ src, label, className = "" }) => {
    return (
        <div
            className={`hover:-translate-y-1 hover:shadow-forest-glow/25 transition-all duration-300 ease-linear select-none relative flex size-52 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl ${className}`}>
            <Image
                className="z-0 h-full w-full object-cover object-center pointer-events-none saturate-150 brightness-90"
                width={1024}
                height={1024}
                alt={label}
                src={src}
                title={label}
                priority
            />
            <Image
                src="/images/noise.svg"
                className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full object-cover object-center mix-blend-overlay"
                width={1024}
                height={1024}
                title="Noise overlay image"
                alt="noise overlay"
            />
            <h2 className="text-center text-xs pointer-events-none absolute bottom-2 left-1/2 z-20 flex w-48 -translate-x-1/2 items-center justify-center rounded bg-lime-50/75 py-3 text-lime-950 mix-blend-hard-light backdrop-blur-md capitalize">
                {label}
            </h2>
        </div>
    )
}

export default ImageBox
