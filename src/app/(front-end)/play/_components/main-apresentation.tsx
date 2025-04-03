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
                className="absolute top-0 h-full left-0 lg:w-4/6 w-full  bg-gradient-to-r from-black to-transparent z-[1]"
            />

            <Image
                src={baseUrlImage + film.backdrop_path}
                width={1920}
                height={1080}
                alt={film.title}
                className="h-full w-screen object-cover lg:object-right-top object-center absolute z-[0]"
            />
            <div
                className="absolute lg:top-[20rem] top-[50vh] lg:left-16 left-0 gap-2  lg:w-2/6 w-full lg:px-0 px-4 flex flex-col z-[3]"
            >
                <Image
                    src={baseUrlImage + logo || ""}
                    alt={film.title}
                    width={400}
                    height={100}
                    className="lg:w-[400px] lg:h-[100px] w-full h-full object-contain"
                />
                <div
                    className="flex gap-2 items-center mt-6 lg:justify-start justify-center"
                >
                    <AgeRatingBox adult={film.adult} />
                    <p>
                        {film.release_date.split('-')[0]} - {film.popularity}
                    </p>
                </div>

                <p
                    className="text-lg lg:text-left text-center"
                >
                    {film.overview.split(' ').slice(0, 20).join(' ')}...
                </p>
                <Link
                    href={`/movie/${film.id}`}
                >
                    <div
                        className="cursor-pointer bg-zinc-700/60 inline-block px-4 lg:py-2 py-4 rounded-md mt-4 pg:w-48 w-full font-bold text-center text-xl"
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