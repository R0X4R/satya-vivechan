"use client"
import { useState } from "react"
import useSound from "use-sound"
import { PiPlayDuotone, PiPauseDuotone } from "react-icons/pi"

export default function ArticleAudio({ audio }: { audio: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [play, { sound }] = useSound(audio, {
        onend: () => setIsPlaying(false),
    })

    if (!audio) return null

    const handleToggle = () => {
        if (!sound) {
            play()
            setIsPlaying(true)
        } else {
            if (isPlaying) {
                sound.pause()
                setIsPlaying(false)
            } else {
                sound.play()
                setIsPlaying(true)
            }
        }
    }

    return (
        <button
            onClick={handleToggle}
            className="flex cursor-pointer items-center justify-center gap-2 text-base font-medium text-lime-900 capitalize transition selection:bg-lime-900 outline-none selection:text-lime-50 dark:text-stone-200/80">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-900 p-2 text-lg text-lime-50 dark:text-stone-950 dark:bg-stone-200/80">
                {isPlaying ? <PiPauseDuotone /> : <PiPlayDuotone />}
            </span>
            <span className="min-w-[160px] text-left">
                {isPlaying ? "Pause the Audio" : "Listen to this Article"}
            </span>
        </button>
    )
}
