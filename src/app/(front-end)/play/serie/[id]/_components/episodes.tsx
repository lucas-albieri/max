'use client'

import { baseUrlImage } from "@/services/api/client-tmdb"
import { Episode } from "@/types/episodes"
import { ChevronDownIcon, MoreVertical, MoreVerticalIcon, PlayIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useQueryState } from "nuqs"
import { Serie } from "@/types/series"
import Link from "next/link"

type Props = {
    episodes: Episode[]
    recommendedSeries: Serie[]
}

export function Episodes({ episodes, recommendedSeries }: Props) {

    const [season, setSeason] = useQueryState("season", { defaultValue: "1", shallow: false })

    const [showSeasonDropdown, setShowSeasonDropdown] = useState(false)

    return (
        <div className="min-h-screen bg-black text-white px-12 pb-4 ">
            {/* Episodes Header */}
            <div className="py-4 border-b border-white/10">
                <h2 className="text-xl font-medium">Episódios</h2>
            </div>

            {/* Season Selector */}
            <div className=" py-4">
                <div className="relative inline-block">
                    <button
                        className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] px-4 py-2 rounded-md transition"
                        onClick={() => setShowSeasonDropdown(!showSeasonDropdown)}
                    >
                        <span>
                            Temporada {season}
                        </span>
                        <ChevronDownIcon size={16} />
                    </button>

                    {showSeasonDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-[#1a1a1a] rounded-md shadow-lg z-10 w-full">
                            {Array.from({ length: 15 }, (_, i) => (
                                <button
                                    key={i}
                                    className="block w-full text-left px-4 py-2 hover:bg-[#2a2a2a] transition"
                                    onClick={() => {
                                        setSeason(String(i + 1))
                                        setShowSeasonDropdown(false)
                                    }}
                                >
                                    Temporada {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Episodes Grid */}
            <div className=" py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {episodes.map((episode) => (
                        <div key={episode.id} className="relative group">
                            <div className="relative aspect-video overflow-hidden rounded-md bg-[#1a1a1a]">
                                <Image
                                    src={baseUrlImage + episode.still_path}
                                    alt={`${episode.name} thumbnail`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                        <PlayIcon size={24} className="text-white" fill="white" />
                                    </button>
                                </div>
                                <button className="absolute top-2 right-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <MoreVertical size={20} className="text-white" />
                                </button>
                            </div>

                            <div className="mt-2">
                                <h3 className="font-medium text-sm">
                                    Ep. {episode.episode_number} - {episode.name}
                                </h3>
                                <div className="flex items-center gap-2 text-xs text-white/70 mt-1">
                                    <span className="inline-flex items-center justify-center px-1 bg-yellow-600 text-white text-[10px]">
                                        HD
                                    </span>
                                    <span>{episode.air_date}</span>
                                </div>
                                <p className="text-xs text-white/70 mt-1 line-clamp-3">{episode.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommendations */}
            <div className=" py-6">
                <h2 className="text-xl font-medium mb-4">Você também pode gostar</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
                    {recommendedSeries.map((show) => (
                        <Link
                            href={`/play/serie/${show.id}`}
                            key={show.id}
                        >
                            <div key={show.id} className="relative group">
                                <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-[#1a1a1a]">
                                    <Image
                                        src={baseUrlImage + show.poster_path}
                                        alt={`${show.name} poster`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <PlayIcon size={20} className="text-white" fill="white" />
                                        </button>
                                    </div>
                                    <button className="absolute top-2 right-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreVerticalIcon size={16} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}