import { Header } from "./_components/header";
import { MainApresentation } from "./_components/main-apresentation";
import bgScreen from "../../../assets/images/fundo.svg"
import { Highlights } from "./_components/highlights";
import { Top10Ranking } from "./_components/top10";
import { fetchFilms } from "@/services/tmdb/fetch-films";

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
        upComing,
        nowPlaying
    ] = await fetchFilms({
        page: Number(page) || 1
    })

    console.log(topRated)

    const topFilm = topRated[1]

    return (
        <div
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
                />
            </div>

            <div
                className="flex flex-col gap-8 px-16"
            >
                {/* Destaques */}
                <Highlights
                    items={popular}
                    title="Destaques"
                />

                {/* Recomendados para você */}
                <Highlights
                    items={upComing}
                    title="Recomendados para você"
                />

                <Top10Ranking
                    items={topRated}
                />

                <Highlights
                    items={nowPlaying}
                    title="Popular na Tv"
                />

                <Highlights
                    items={popular}
                    title="Séries para você!"
                />
            </div>

        </div >
    )
}

