'use client'

import { Search, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { SearchResult } from "@/services/tmdb/search/search-multi"
import { useRouter } from "next/navigation"
import { baseUrlImage } from "@/services/api/client-tmdb"
import Image from "next/image"
import dayjs from "dayjs"

type Props = {
    isOpen: boolean
    onClose: () => void
    onSearch: (query: string) => void
    onClearResults?: () => void
    results?: SearchResult[]
    isLoading?: boolean
}

export function SearchBox({ isOpen, onClose, onSearch, onClearResults, results = [], isLoading = false }: Props) {
    const [query, setQuery] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Filtrar apenas filmes e séries
    const filteredResults = results.filter(result => result.media_type === 'movie' || result.media_type === 'tv')

    // Focar no input quando o modal abrir
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    // Debounce para busca em tempo real
    useEffect(() => {
        // Limpar timeout anterior
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        // Se a query tem pelo menos 2 caracteres, fazer busca com delay
        if (query.trim().length >= 2) {
            timeoutRef.current = setTimeout(() => {
                onSearch(query.trim())
            }, 800) // 800ms de delay - você pode ajustar esse valor
        }

        // Cleanup do timeout
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [query]) // Removido onSearch das dependências

    // Fechar com ESC
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            // Prevenir scroll do body
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            onSearch(query.trim())
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setQuery(value)

        // Se a query ficar muito curta, limpar os resultados imediatamente
        if (value.trim().length < 2) {
            onClearResults?.()
        }
    }

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
                {/* Header com input de busca */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                        <form onSubmit={handleSearch} className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={handleInputChange}
                                    placeholder="Buscar filmes e séries..."
                                    className="w-full bg-[#2a2a2a] text-white placeholder-white/50 rounded-md px-12 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/20"
                                />
                                {query && (
                                    <button
                                        type="button"
                                        onClick={() => setQuery("")}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                            </div>
                        </form>

                        <button
                            onClick={onClose}
                            className="p-2 text-white/50 hover:text-white transition-colors rounded-md hover:bg-white/10"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Resultados da busca */}
                <div className="max-h-96 overflow-y-auto">
                    {isLoading && (
                        <div className="p-8 text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                            <p className="text-white/70 mt-4">Buscando...</p>
                        </div>
                    )}

                    {!isLoading && query && filteredResults.length === 0 && (
                        <div className="p-8 text-center">
                            <p className="text-white/70">Nenhum resultado encontrado para "{query}"</p>
                        </div>
                    )}

                    {!isLoading && filteredResults.length > 0 && (
                        <div className="p-4">
                            <p className="text-white/70 text-sm mb-4 px-2">
                                {filteredResults.length} resultado{filteredResults.length !== 1 ? 's' : ''} encontrado{filteredResults.length !== 1 ? 's' : ''}
                            </p>

                            <div className="space-y-2">
                                {filteredResults.map((result) => {
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

                    {!query && (
                        <div className="p-8 text-center">
                            <Search size={48} className="text-white/30 mx-auto mb-4" />
                            <p className="text-white/70">Digite para buscar filmes e séries</p>
                            <p className="text-white/50 text-sm mt-2">Use pelo menos 2 caracteres</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}