import { clientTMDB } from "@/services/api/client-tmdb"

export type SearchResult = {
    id: number
    title?: string
    name?: string
    media_type: 'movie' | 'tv' | 'person'
    poster_path?: string
    profile_path?: string
    overview?: string
    release_date?: string
    first_air_date?: string
    popularity: number
}

export type SearchResponse = {
    page: number
    results: SearchResult[]
    total_pages: number
    total_results: number
}

type Props = {
    query: string
    page?: number
}

export async function searchMulti({ query, page = 1 }: Props) {
    const response = await clientTMDB.get('/search/multi', {
        params: {
            query,
            page,
            language: 'pt-BR',
            include_adult: false
        }
    })

    return response.data as SearchResponse
}