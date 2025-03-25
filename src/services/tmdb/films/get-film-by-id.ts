'use cache'

import { notFound } from "next/navigation"
import { clientTMDB } from "../../api/client-tmdb"
import { FilmFull } from "@/types/films"

export async function getFilmById(id: string) {
    const response = await clientTMDB.get(`movie/${id}`).catch(() => {
        return notFound()
    })
    return response.data as FilmFull
}