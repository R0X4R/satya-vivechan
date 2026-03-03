"use client";

import { useCallback, useRef } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
    duration?: number;
}

export function AnimatedThemeToggler({
    className,
    duration = 500,
    ...props
}: AnimatedThemeTogglerProps) {
    const { resolvedTheme, setTheme } = useTheme();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const isDark = resolvedTheme === "dark";

    const toggleTheme = useCallback(async () => {
        if (!buttonRef.current) return;

        const newTheme = isDark ? "light" : "dark";

        if (!document.startViewTransition) {
            setTheme(newTheme);
            return;
        }

        const transition = document.startViewTransition(() => {
            setTheme(newTheme);
        });

        await transition.ready;

        const { top, left, width, height } =
            buttonRef.current.getBoundingClientRect();

        const x = left + width / 2;
        const y = top + height / 2;

        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
        );

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }, [isDark, setTheme, duration]);

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className={cn(className)}
            {...props}
        >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
