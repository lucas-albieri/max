import axios from 'axios';

export const clientTMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        language: "pt-BR",
        sort_by: 'popularity.desc',
    },
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_APP_TMDB_API_KEY}`
    },
})

export const baseUrlImage = "https://image.tmdb.org/t/p/original"
