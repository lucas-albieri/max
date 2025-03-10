'use client'

import { baseUrlImage } from "@/services/api/client-tmdb"
import { Film } from "@/types/Films"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useRef } from "react"

type Props = {
    items: Film[]
}

export function Top10Ranking({ items, }: Props) {

    const carrosselRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="flex flex-col justify-between gap-6 py-20"
        >
            <h1
                className="text-7xl font-extrabold uppercase"
                style={{
                    WebkitTextStroke: "2px #3F50FE"
                }}
            >
                TOP 10 series de hoje
            </h1>
            <div
                className="relative w-full h-full overflow-y-hidden "
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
                    className={`relative w-full flex overflow-y-hidden overflow-x-auto gap-20 snap-mandatory scroll-smooth  `}
                    style={{
                        // scrollbarColor: "transparent transparent",
                        scrollbarWidth: "none",
                    }}
                >
                    {
                        items.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-[13rem] flex flex-shrink-0 h-[22rem] cursor-pointer items-end  select-none hover:text-[#3F50FE] transition-all duration-300"
                                >
                                    <p
                                        className="font-extrabold text-9xl  "
                                        style={{
                                            WebkitTextStroke: "2px #3F50FE"
                                        }}
                                    >
                                        {index + 1}
                                    </p>
                                    <img
                                        src={baseUrlImage + item.poster_path}
                                        alt="Avengers"
                                        className="w-full h-full object-cover rounded-md hover:border hover:border-white"
                                    />
                                </div>
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
        </div>
    )
}