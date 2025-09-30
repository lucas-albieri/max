'use client'

import { baseUrlImage } from "@/services/api/client-tmdb"
import { Serie } from "@/types/series"
import { Film } from "@/types/films"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import Image from "next/image"

type Props = {
    items: Film[] | Serie[]
    title: string
    type: 'serie' | 'film'
}

export function Highlights({ items, title, type }: Props) {

    const carrosselRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="flex flex-col gap-4 z-[2] w-full"
        >
            <h1 className="lg:text-xl text-lg font-bold text-zinc-100 select-none">
                {title}
            </h1>
            <div
                className="relative w-full lg:h-80 h-48"
            >
                <div
                    onClick={() => {
                        if (carrosselRef.current) {
                            carrosselRef.current.scrollLeft -= 300
                        }
                    }}
                    className={`z-[1] absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 h-full lg:w-12 w-8 items-center justify-center cursor-pointer lg:flex hidden `}
                >
                    <ChevronLeftIcon size={26} color="white" />
                </div>
                <div
                    ref={carrosselRef}
                    className={`relative w-full flex overflow-x-auto lg:gap-4 gap-2 snap-mandatory scroll-smooth  `}
                    style={{
                        scrollbarColor: "transparent transparent",
                    }}
                >
                    {
                        items.map((item) => {
                            return (
                                <Link
                                    href={
                                        type === 'film' ? `play/movie/${item.id}`
                                            : `play/serie/${item.id}`
                                    }
                                    key={item.id}
                                >
                                    <div
                                        key={Math.random()}
                                        className="lg:w-[13rem] w-[8rem] flex flex-shrink-0 lg:h-80 h-48 cursor-pointer hover:border hover:border-white select-none"
                                    >
                                        <Image
                                            src={baseUrlImage + item.poster_path}
                                            alt="Avengers"
                                            width={200}
                                            height={300}
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
                    className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 h-full w-12 items-center justify-center cursor-pointer lg:flex hidden`}
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