import { clientTMDB } from "@/services/api/client-tmdb"
import { FilmLogo } from "@/types/films"

export async function getLogoFilm(movieId: string) {
    const response = await clientTMDB.get(`movie/${movieId}/images`, {
        params: {
            language: 'pt'
        }
    })
    return response.data as FilmLogo
}