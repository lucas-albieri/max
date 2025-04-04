import { Header } from "./_components/header";
import { MainApresentation } from "./_components/main-apresentation";
import bgScreen from "../../../assets/images/fundo.svg"
import { Highlights } from "./_components/highlights";
import { Top10Ranking } from "./_components/top10";
import { fetchSeries } from "@/services/tmdb/series/fetch-series";
import { fetchFilms } from "@/services/tmdb/films/fetch-films";
import { getLogoFilm } from "@/services/tmdb/films/get-logo-film";

type Params = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export default async function Home({ searchParams }: Params) {

    const { page } = await searchParams

    const [
        topRated,
        popular,
        // @typescript-eslint/no-unused-vars
        upComing,
        nowPlaying
    ] = await fetchFilms({
        page: Number(page) || 1
    })


    const [
        // @typescript-eslint/no-unused-vars
        airingToday,
        onTheAir,
        popularSeries,
        topRatedSeries
    ] = await fetchSeries({
        page: 1
    })

    const topFilm = popular[0]
    const logoTopFilm = await getLogoFilm(topFilm.id.toString())

    return (
        <div
            id="scrollable-container"
            className=" flex flex-col h-screen overflow-y-scroll gap-2"
            style={{
                backgroundImage: `url(${bgScreen.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                className=" h-full"
            >
                <Header />
                <MainApresentation
                    film={topFilm}
                    logo={logoTopFilm.logos[0].file_path || ""}
                />
            </div>

            <div
                className="flex flex-col lg:gap-8 gap-6 lg:px-16 px-4"
            >
                {/* Destaques */}
                <Highlights
                    items={topRated}
                    title="Destaques"
                    type="film"
                />

                {/* Recomendados para você */}
                <Highlights
                    items={topRatedSeries}
                    title="Recomendados para você"
                    type="serie"
                />

                <Top10Ranking
                    items={onTheAir}
                />

                <Highlights
                    items={nowPlaying}
                    title="Popular na Tv"
                    type="film"
                />

                <Highlights
                    items={popularSeries}
                    title="Séries para você!"
                    type="film"
                />
            </div>

        </div >
    )
}

