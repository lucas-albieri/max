'use cache'

import { SerieFull } from "@/types/series"
import { clientTMDB } from "../../api/client-tmdb"
import { notFound } from "next/navigation"

export async function getSerieById(id: string) {
    const response = await clientTMDB.get(`tv/${id}`).catch(() => {
        return notFound()
    })
    return response.data as SerieFull
}