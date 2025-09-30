'use client'

import { Search, X } from "lucide-react"
import { use, useEffect, useState, } from "react"
import { searchMulti, SearchResult } from "@/services/tmdb/search/search-multi"
import { useRouter } from "next/navigation"
import { baseUrlImage } from "@/services/api/client-tmdb"
import Image from "next/image"
import dayjs from "dayjs"

type Props = {
    isOpen: boolean
    onClose: () => void
}

export function FavoriteItems({ isOpen, onClose }: Props) {

    const router = useRouter()
    const [favoriteItems, setFavoriteItems] = useState<SearchResult[] | null>(null)
    const [isLoading, setIsLoading] = useState(false);

    // Parse favorite IDs from localStorage
    const favoriteIdItems: string[] = typeof window !== "undefined" && localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites') as string)
        : [];


    // Filtrar apenas filmes e séries
    const fetchFavorites = async () => {
        setIsLoading(true)
        if (favoriteIdItems && favoriteIdItems.length > 0) {
            // Fetch details for each favorite item in parallel
            const responses = await Promise.all(
                favoriteIdItems.map((item) => searchMulti({ query: item }))
            );
            // Flatten and combine all results
            const allResults = responses.flatMap(res => res.results || []);
            setFavoriteItems(allResults);
            setIsLoading(false)
        } else {
            setFavoriteItems([]);
            setIsLoading(false)
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            if (typeof window !== "undefined") {
                await fetchFavorites()
            }
        }
        fetchData()
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
            {/* Overlay com transparência */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />


            {/* Modal de busca */}
            <div className="relative w-full max-w-2xl mx-4 bg-[#1a1a1a] rounded-lg shadow-2xl border border-white/10">

                {/* Resultados da busca */}
                <div className="max-h-96 overflow-y-auto">
                    <div
                        className="flex justify-end items-end p-2"
                    >
                        <button
                            onClick={onClose}
                            className="p-2 text-white/50 hover:text-white transition-colors rounded-md hover:bg-white/10"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    {isLoading && (
                        <div className="p-8 text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                            <p className="text-white/70 mt-4">Buscando...</p>
                        </div>
                    )}

                    {!isLoading && favoriteItems?.length === 0 && (
                        <div className="p-4 pb-8 text-center">
                            <p className="text-white/70">Nenhum filme ou série adicionados aos favoritos</p>
                        </div>
                    )}

                    {!isLoading && (favoriteItems?.length ?? 0) > 0 && (
                        <div className="p-4">
                            <p className="text-white/70 text-sm mb-4 px-2">
                                {(favoriteItems?.length ?? 0)} resultado{(favoriteItems?.length ?? 0) !== 1 ? 's' : ''} encontrado{(favoriteItems?.length ?? 0) !== 1 ? 's' : ''}
                            </p>

                            <div className="space-y-2">
                                {favoriteItems?.map((result) => {
                                    const handleResultClick = () => {
                                        const path = result.media_type === 'movie'
                                            ? `/play/movie/${result.id}`
                                            : `/play/serie/${result.id}`;
                                        router.push(path);
                                        onClose();
                                    };

                                    return (
                                        <button
                                            key={result.id}
                                            className="w-full p-3 text-left hover:bg-white/5 rounded-md transition-colors group"
                                            onClick={handleResultClick}
                                        >
                                            <div className="flex items-start gap-3">
                                                {/* Poster da série/filme */}
                                                <div className="w-12 h-16 bg-white/10 rounded flex-shrink-0 overflow-hidden">
                                                    {result.poster_path ? (
                                                        <Image
                                                            src={baseUrlImage + result.poster_path}
                                                            alt={result.title || result.name || 'Poster'}
                                                            width={64}
                                                            height={64}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <Search size={16} className="text-white/50" />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                                        {result.title || result.name}
                                                    </h3>
                                                    <p className="text-white/50 text-sm mt-1">
                                                        {result.media_type === 'movie' ? 'Filme' : 'Série'}
                                                        {(result.release_date || result.first_air_date) &&
                                                            ` • ${dayjs(result.release_date || result.first_air_date!).format('YYYY')}`
                                                        }
                                                    </p>
                                                    {result.overview && (
                                                        <p className="text-white/40 text-sm mt-1 line-clamp-2">
                                                            {result.overview}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}