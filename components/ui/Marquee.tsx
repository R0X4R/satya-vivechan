import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    className?: string
    reverse?: boolean
    pauseOnHover?: boolean
    children: React.ReactNode
    vertical?: boolean
    repeat?: number
    duration?: string
    gap?: string
}

export function Marquee({
    className,
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 2,
    duration = "20s",
    gap = "1rem",
    ...props
}: MarqueeProps) {
    const animationClass = vertical
        ? "marquee-animate-vertical"
        : "marquee-animate"

    return (
        <div
            {...props}
            className={cn(
                "group overflow-hidden",
                vertical ? "flex-col" : "flex-row",
                "flex",
                className
            )}
            style={
                {
                    "--gap": gap,
                    "--duration": duration,
                    "--play": pauseOnHover ? "running" : undefined,
                } as React.CSSProperties
            }>
            {Array.from({ length: repeat }).map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "flex shrink-0 justify-around",
                        vertical ? "flex-col" : "flex-row",
                        animationClass
                    )}
                    style={{
                        gap,
                        animationDirection: reverse ? "reverse" : "normal",
                    }}>
                    {children}
                </div>
            ))}
        </div>
    )
}
