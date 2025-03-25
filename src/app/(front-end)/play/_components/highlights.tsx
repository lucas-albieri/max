'use client'

import { baseUrlImage } from "@/services/api/client-tmdb"
import { Film } from "@/types/films"
import { Serie } from "@/types/series"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

type Props = {
    items: Film[] | Serie[]
    title: string
    type: 'serie' | 'film'
}

export function Highlights({ items, title, type }: Props) {

    const carrosselRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="flex flex-col  gap-4 z-[2] w-full"
        >
            <h1 className="text-xl font-bold text-zinc-100 select-none">
                {title}
            </h1>
            <div
                className="relative w-full h-80"
            >
                <div
                    onClick={() => {
                        if (carrosselRef.current) {
                            carrosselRef.current.scrollLeft -= 300
                        }
                    }}
                    className={`z-[1] absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 h-full w-12 flex items-center justify-center cursor-pointer  `}
                >
                    <ChevronLeftIcon size={26} color="white" />
                </div>
                <div
                    ref={carrosselRef}
                    className={`relative w-full flex overflow-x-auto gap-4 snap-mandatory scroll-smooth  `}
                    style={{
                        scrollbarColor: "transparent transparent",
                    }}
                >
                    {
                        items.map((item, index) => {
                            return (
                                <Link
                                    href={
                                        type === 'film' ? `movie/${item.id}`
                                            : `serie/${item.id}`
                                    }
                                >
                                    <div
                                        key={Math.random()}
                                        className="w-[13rem] flex flex-shrink-0 h-80 cursor-pointer hover:border hover:border-white select-none"
                                    >
                                        <img
                                            src={baseUrlImage + item.poster_path}
                                            alt="Avengers"
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                </Link>

                            )
                        })
                    }
                </div>

                <div
                    onClick={() => {
                        if (carrosselRef.current) {
                            carrosselRef.current.scrollLeft += 300
                        }
                    }}
                    className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 h-full w-12 flex items-center justify-center cursor-pointer `}
                >
                    <ChevronRightIcon
                        size={26}
                        color="white"
                    />
                </div>
            </div>
        </div >
    )
}