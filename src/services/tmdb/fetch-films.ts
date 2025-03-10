import { Film } from "@/types/Films"
import { clientTMDB } from "../api/client-tmdb"

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

    // return response.data as {
    //     page: number,
    //     results: Film[],
    //     total_pages: number,
    //     total_results: number
    // }
}
