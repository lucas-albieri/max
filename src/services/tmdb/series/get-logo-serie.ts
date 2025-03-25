import { clientTMDB } from "@/services/api/client-tmdb"
import { FilmLogo } from "@/types/films"

export async function getLogoSerie(serieId: string) {
    const response = await clientTMDB.get(`tv/${serieId}/images`, {
        params: {
            language: 'pt'
        }
    })
    return response.data as FilmLogo
}