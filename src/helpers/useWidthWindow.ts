import { useState, useEffect, useRef } from "react";

export function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const resizeTimeout = useRef<number>();

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            cancelAnimationFrame(resizeTimeout.current!);
            resizeTimeout.current = requestAnimationFrame(() => {
                setSize({ width: window.innerWidth, height: window.innerHeight });
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Define o tamanho inicial

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(resizeTimeout.current!);
        };
    }, []);

    return size;
}
