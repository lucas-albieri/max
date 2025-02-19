import { Header } from "./_components/header";

export default function Home() {
    return (
        <div
            className="flex flex-col bg-primary text-white "
        >
            <Header />
            <div
                className=" relative w-full h-screen "
            >
                <img
                    src="https://wallpapers.com/images/hd/avengers-movie-339j2aimmb8n27xb.jpg"
                    alt="banner"
                    className="h-screen w-screen object-cover object-top absolute"
                    style={{
                        height: 'calc(100vh - 80px)',
                        filter: 'brightness(0.8) blur(3px)',

                    }}
                />
                <div
                    className="absolute top-1/2 left-20 gap-2 flex flex-col"
                >
                    <h1
                        className="text-6xl font-extrabold"
                    >
                        Vingadores - Ultimato
                    </h1>
                    <p
                        className="text-2xl"
                    >
                        A18 | 2019 | 3h 2min
                    </p>
                    <p
                        className="text-lg"
                    >
                        Ação, Ficção Científica
                    </p>
                    <div
                        className=" "
                    >
                        Ir para o Filme
                    </div>
                </div>
            </div>
            <div
                className="bg-primary h-80"
            >

            </div>
        </div>
    )
}