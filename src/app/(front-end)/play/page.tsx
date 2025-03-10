import { Header } from "./_components/header";
import { MainApresentation } from "./_components/main-apresentation";
import bgScreen from "../../../assets/images/fundo.svg"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Highlights } from "./_components/highlights";
import { Top10Ranking } from "./_components/top10";

export default function Home() {

    const bg = "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
    const films = [
        {
            id: "1",
            image: "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
        },
        {
            id: "2",
            image: "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
        },
        {
            id: "3",
            image: "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
        },
        {
            id: "4",
            image: "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
        },
        {
            id: "5",
            image: "https://m.media-amazon.com/images/I/81xXOoQLglL.jpg"
        },
        {
            id: "6",
            image: "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
        },
        {
            id: "7",
            image: "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
        },
        {
            id: "8",
            image: "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
        },
        {
            id: "9",
            image: "https://uauposters.com.br/media/catalog/product/2/1/214920140608-uau-posters-filmes-infantis-animacao-carros-cars--3.jpg"
        },
        {
            id: "10",
            image: "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
        }
    ]
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
                    background={bg}
                    title="Avengers - Ultimate"
                    age="16"
                    duration="3h 2min"
                    description="Homem de Ferro, Capitão América, Thor, Hulk e os Vingadores se unem para combater o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a humanidade."
                    id="1"
                    year="2021"
                />
            </div>

            <div
                className="flex flex-col gap-8 px-16"
            >
                {/* Destaques */}
                <Highlights
                    items={films}
                    title="Destaques"
                />

                {/* Recomendados para você */}
                <Highlights
                    items={films}
                    title="Recomendados para você"
                />

                <Top10Ranking
                    items={films}
                />

                <Highlights
                    items={films}
                    title="Popular na Tv"
                />

                <Highlights
                    items={films}
                    title="Séries para você!"
                />
            </div>

        </div >
    )
}

