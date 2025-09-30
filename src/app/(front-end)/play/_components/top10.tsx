'use client'

import { baseUrlImage } from "@/services/api/client-tmdb"
import { Serie } from "@/types/series"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

type Props = {
    items: Serie[]
}

export function Top10Ranking({ items, }: Props) {

    const carrosselRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="flex flex-col justify-between gap-6 lg:py-20 py-10"
        >
            <h1
                className="lg:text-7xl text-2xl font-extrabold uppercase"
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
                    className={`z-[1] absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 h-full w-12 items-center justify-center cursor-pointer lg:flex hidden  `}
                >
                    <ChevronLeftIcon size={26} color="white" />
                </div>
                <div
                    ref={carrosselRef}
                    className={`relative w-full flex overflow-y-hidden overflow-x-auto lg:gap-20 gap-8 snap-mandatory scroll-smooth  `}
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
                                    className="lg:w-[13rem] w-[7rem] flex flex-shrink-0 lg:h-[22rem] h-[14rem] cursor-pointer items-end  select-none hover:text-[#3F50FE] transition-all duration-300"
                                >
                                    <p
                                        className="font-extrabold lg:text-9xl text-5xl"
                                        style={{
                                            WebkitTextStroke: "2px #3F50FE"
                                        }}
                                    >
                                        {index + 1}
                                    </p>
                                    <Image
                                        src={baseUrlImage + item.poster_path}
                                        alt="Avengers"
                                        width={300}
                                        height={400}
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
                    className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 h-full w-12 items-center justify-center cursor-pointer lg:flex hidden`}
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