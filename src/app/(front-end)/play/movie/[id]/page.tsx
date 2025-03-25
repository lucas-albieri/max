import { HeadphonesIcon, PodcastIcon } from "lucide-react";
import Image from "next/image";
import { Header } from "../../_components/header";
import { getFilmById } from "@/services/tmdb/films/get-film-by-id";
import { baseUrlImage } from "@/services/api/client-tmdb";
import { Footer } from "../../serie/[id]/_components/footer";
import { ActionButtons } from "@/components/action-buttons";
import { getLogoFilm } from "@/services/tmdb/films/get-logo-film";

type Props = {
    params: Promise<{
        id: string
    }>
}

export default async function MovieById({ params }: Props) {

    const _params = await params
    const id = _params.id

    const data = await getFilmById(id)
    const filePathLogo = await getLogoFilm(id)

    console.log(filePathLogo)

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-800 to-black text-white">
            {/* Navigation Bar */}
            <Header />

            {/* Main Content */}
            <main className="relative">
                {/* Hero Banner */}
                <div className="relative w-full h-[92vh]">
                    <Image
                        src={baseUrlImage + data.backdrop_path}
                        unoptimized
                        loading="eager"
                        alt={data.title}
                        fill
                        className="object-cover  w-full h-full"
                        priority
                    />

                    <div className="absolute top-0 h-full left-0 w-4/6  bg-gradient-to-r from-black to-transparent z-[1]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 p-12 w-full z-10">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            {/* Show Title */}
                            {/* <h1 className="text-6xl font-light tracking-wider text-white mb-2">
                                {data.title}
                            </h1> */}

                            <Image
                                src={baseUrlImage + filePathLogo.logos[0].file_path}
                                alt={data.title}
                                width={400}
                                height={100}
                            />

                            {/* Show Info */}
                            <div className="flex items-center gap-3 text-sm text-white/80 mb-4">
                                <span className="flex items-center justify-center px-1 bg-green-600 text-white text-xs">L</span>
                                <span>
                                    {data.release_date.slice(0, 4)}
                                </span>
                                <span>4K UHD</span>
                                <PodcastIcon
                                    size={20}
                                    className="text-white"
                                />
                                <HeadphonesIcon
                                    size={20}
                                    className="text-white"
                                />
                            </div>

                            {/* Action Buttons */}
                            <ActionButtons
                                type="movie"
                            />

                            {/* Description */}
                            <div className="mt-6 max-w-2xl">
                                <p className="text-white/90 text-lg">
                                    {data.overview.slice(0, 200)}...
                                </p>
                                <div className="mt-2 flex flex-col gap-1">
                                    <span className="text-white/70 text-sm">
                                        {data.genres.map(genre => genre.name).join(", ")}
                                    </span>
                                    <span className="text-white/50 text-xs mt-2">
                                        A disponibilidade de 4K UHD, HDR e Dolby Atmos varia de acordo com o dispositivo e o plano.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}