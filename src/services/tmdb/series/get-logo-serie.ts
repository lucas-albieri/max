import { clientTMDB } from "@/services/api/client-tmdb"
import { FilmLogo } from "@/types/films"

export async function getLogoSerie(serieId: string) {
    const response = await clientTMDB.get(`tv/${serieId}/images`, {
        params: {
            language: 'pt'
        }
    })
    if (response.data.logos.length === 0) {
        const response = await clientTMDB.get(`tv/${serieId}/images`, {
            params: {
                language: 'en'
            }
        })
        return response.data as FilmLogo
    }
    return response.data as FilmLogo
}