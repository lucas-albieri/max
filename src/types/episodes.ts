export type Episode = {
    id: number;
    name: string;
    overview: string;
    episode_number: number;
    season_number: number;
    air_date: string;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
};

export type Season = {
    id: number;
    name: string;
    overview: string;
    season_number: number;
    air_date: string;
    episodes: Episode[];
    poster_path: string | null;
};