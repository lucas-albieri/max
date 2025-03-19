'use cache'

import { SerieFull } from "@/types/series"
import { clientTMDB } from "../api/client-tmdb"

export async function getSerieById(id: string) {
    const response = await clientTMDB.get(`tv/${id}`)
    return response.data as SerieFull
}