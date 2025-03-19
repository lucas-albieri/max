import { HeadphonesIcon, PodcastIcon, } from "lucide-react";
import Image from "next/image";
import { Header } from "../../_components/header";
import { getSerieById } from "@/services/tmdb/series/get-serie-by-id";
import { baseUrlImage } from "@/services/api/client-tmdb";
import { ActionButtons } from "./_components/action-buttons";
import { Episodes } from "./_components/episodes";
import { getEpisodesBySeason } from "@/services/tmdb/series/get-episodes";
import { Footer } from "./_components/footer";
import { getRecommendedSeriesBySerie } from "@/services/tmdb/series/get-recommended-series-by-serie";

type Props = {
    params: Promise<{
        id: string
    }>
    searchParams: Promise<{
        season: string
    }>
}

export default async function SerieById({ params, searchParams }: Props) {

    const _params = await params
    const _searchParams = await searchParams

    const id = _params.id
    const season = _searchParams.season

    const data = await getSerieById(id)
    const episodesBySeason = await getEpisodesBySeason({ id, season })
    const recommendedSeries = await getRecommendedSeriesBySerie(id)

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
                        alt={data.name}
                        fill
                        className="object-cover  w-full h-full"
                        priority
                    />

                    <div className="absolute top-0 h-full left-0 w-4/6  bg-gradient-to-r from-black to-transparent z-[1]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 p-12 w-full z-10">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            {/* 30 Years Badge */}

                            {/* Show Title */}
                            <h1 className="text-6xl font-light tracking-wider text-white mb-2">
                                {data.name}
                            </h1>

                            {/* Show Info */}
                            <div className="flex items-center gap-3 text-sm text-white/80 mb-4">
                                <span className="flex items-center justify-center px-1 bg-green-600 text-white text-xs">L</span>
                                <span>
                                    {data.seasons.length} temporadas · {data.number_of_episodes} episódios
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
                            <ActionButtons />

                            {/* Description */}
                            <div className="mt-6 max-w-2xl">
                                <p className="text-white/90 text-lg">
                                    {data.overview.slice(0, 200)}...
                                </p>
                                <div className="mt-2 flex flex-col gap-1">
                                    <span className="text-white/70 text-sm">Comédia</span>
                                    <span className="text-white/50 text-xs mt-2">
                                        A disponibilidade de 4K UHD, HDR e Dolby Atmos varia de acordo com o dispositivo e o plano.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Episodes
                episodes={episodesBySeason.episodes}
                recommendedSeries={recommendedSeries.slice(0, 8)}
            />

            <Footer />
        </div>
    )
}