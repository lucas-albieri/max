import { Header } from "./_components/header";
import { MainApresentation } from "./_components/main-apresentation";
import bgScreen from "../../../assets/images/fundo.svg"

export default function Home() {

    const bg = "https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"

    return (
        <div
            className=" flex flex-col h-screen overflow-y-scroll "
            style={{
                backgroundImage: `url(${bgScreen.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}

        >
            <div
                className="relative h-screen"
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
                className="flex flex-col px-16 gap-4 z-10  w-full"
            >
                <h1 className="text-xl font-bold text-gray-200">
                    Destaques
                </h1>
            </div>
        </div>
    )
}

