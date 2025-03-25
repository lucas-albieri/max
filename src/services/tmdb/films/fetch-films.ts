'use cache'

import { clientTMDB } from "@/services/api/client-tmdb"
import { Film } from "@/types/films"

type Params = {
    page: number
}

export const fetchFilms = async ({ page }: Params) => {

    const response = await Promise.all([
        clientTMDB.get('movie/top_rated', {
            params: {
                page
            }
        }),
        clientTMDB.get('movie/popular', {
            params: {
                page
            }
        }),
        clientTMDB.get('movie/upcoming', {
            params: {
                page
            }
        }),
        clientTMDB.get('movie/now_playing', {
            params: {
                page
            }
        })
    ])
    return response.map(({ data }) => data.results) as Film[][]

}
