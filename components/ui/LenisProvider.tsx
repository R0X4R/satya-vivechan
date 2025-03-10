/* eslint-disable */
"use client"
import { ReactLenis, useLenis } from "lenis/react"
import { ReactNode } from "react"

interface LenisProviderProps {
    children: ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
    useLenis(({ scroll }) => {
        // called every scroll
    })

    return (
        <ReactLenis options={{ lerp: 0.5, duration: 1.5, autoRaf: true }} root>
            {children}
        </ReactLenis>
    )
}
