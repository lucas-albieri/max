import { Season } from "@/types/episodes";
import { clientTMDB } from "../../api/client-tmdb";

type Props = {
    id: string
    season: string
}

export async function getEpisodesBySeason({ id, season }: Props) {
    const response = await clientTMDB.get(`/tv/${id}/season/${season}`)
    return response.data as Season
}