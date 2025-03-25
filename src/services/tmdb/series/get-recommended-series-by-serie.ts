import { clientTMDB } from "@/services/api/client-tmdb";
import { Serie } from "@/types/series";

export async function getRecommendedSeriesBySerie(id: string) {
    const response = await clientTMDB.get(`tv/${id}/recommendations`)
    return response.data.results as Serie[]
}