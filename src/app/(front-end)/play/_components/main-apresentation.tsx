'use client'

import { baseUrlImage } from "@/services/api/client-tmdb"
import { Film } from "@/types/films"
import Image from "next/image"
import Link from "next/link"

type MainApresentationProps = {
    film: Film
    logo: string
}

export function MainApresentation({ film, logo }: MainApresentationProps) {

    return (
        <div
            className=" relative w-full z-[2] text-white"
            style={{
                height: 'calc(100vh - 50px)',
            }}
        >
            <div
                className="absolute top-0 h-full left-0 w-4/6  bg-gradient-to-r from-black to-transparent z-[1]"
            />
            <Image
                src={baseUrlImage + film.backdrop_path}
                width={1920}
                height={1080}
                alt={film.title}
                className="h-full  w-screen object-cover object-right-top absolute z-[0]"
            />
            <div
                className="absolute top-[20rem] left-16 gap-2 w-2/6 flex flex-col z-[3]"
            >
                <Image
                    src={baseUrlImage + logo || ""}
                    alt={film.title}
                    width={400}
                    height={100}
                />
                <div
                    className="flex gap-2 items-center"
                >
                    <AgeRatingBox adult={film.adult} />
                    <p>
                        {film.release_date.split('-')[0]} - {film.popularity}
                    </p>
                </div>

                <p
                    className="text-lg"
                >
                    {film.overview.split(' ').slice(0, 20).join(' ')}...
                </p>
                <Link
                    href={`/movie/${film.id}`}
                >
                    <div
                        className="cursor-pointer bg-gray-500/40 inline-block px-4 py-2 rounded-md mt-4 w-48 font-bold text-center text-xl"
                    >
                        Ir para o Filme
                    </div>
                </Link>
            </div>
            <div
                className="absolute bottom-0 h-1/5  w-full  bg-gradient-to-t from-black to-transparent z-[1]"
            />
        </div>
    )
}

type AgeRatingBoxProps = {
    adult: boolean
}

function AgeRatingBox({ adult }: AgeRatingBoxProps) {
    return (
        <div
            className={`font-bold border-white border inline-block px-2 rounded-md text-white ${adult ? 'bg-black' : 'bg-green-500'}`}
        >
            {adult ? '18' : 'L'}
        </div>
    )
}