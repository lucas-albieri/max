import { clientTMDB } from "../api/client-tmdb"
import { Serie } from "@/types/series"

type Params = {
    page: number
}

export const fetchSeries = async ({ page }: Params) => {

    const response = await Promise.all([
        clientTMDB.get('tv/airing_today', {
            params: {
                page
            }
        }),
        clientTMDB.get('tv/on_the_air', {
            params: {
                page
            }
        }),
        clientTMDB.get('tv/popular', {
            params: {
                page
            }
        }),
        clientTMDB.get('tv/top_rated', {
            params: {
                page
            }
        })
    ])
    return response.map(({ data }) => data.results) as Serie[][]
}
