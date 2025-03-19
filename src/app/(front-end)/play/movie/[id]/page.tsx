import { BookmarkIcon, PlayIcon, PlusIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../_components/header";

type Props = {
    Params: Promise<{ id: string }>
}

export default async function MovieById({ Params }: Props) {

    const params = await Params
    const id = params.id

    // const data = getSerieById(id)

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-800 to-black text-white">
            {/* Navigation Bar */}
            <Header />

            {/* Main Content */}
            <main className="relative">
                {/* Hero Banner */}
                <div className="relative w-full h-[80vh]">
                    <Image
                        src="/placeholder.svg?height=1080&width=1920"
                        alt="Friends cast"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 p-12 w-full">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            {/* 30 Years Badge */}
                            <div className="w-20 h-20">
                                <Image
                                    src="/placeholder.svg?height=80&width=80"
                                    alt="30 Anos"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>

                            {/* Show Title */}
                            <h1 className="text-6xl font-light tracking-wider text-white mb-2">F·R·I·E·N·D·S</h1>

                            {/* Show Info */}
                            <div className="flex items-center gap-3 text-sm text-white/80 mb-4">
                                <span className="flex items-center justify-center px-1 bg-green-600 text-white text-xs">L</span>
                                <span>10 temporadas</span>
                                <span>4K UHD</span>
                                <Image
                                    src="/placeholder.svg?height=20&width=40"
                                    alt="Dolby"
                                    width={40}
                                    height={20}
                                    className="object-contain"
                                />
                                <Image
                                    src="/placeholder.svg?height=20&width=20"
                                    alt="Audio"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-4">
                                <button className="flex items-center justify-center gap-2 bg-white text-black font-medium py-3 px-6 rounded-md hover:bg-white/90 transition w-80">
                                    <PlayIcon size={20} />
                                    <span>Assistir T 1 Ep. 1</span>
                                </button>
                                <button className="flex flex-col items-center justify-center text-white/80 hover:text-white transition">
                                    <PlusIcon size={24} />
                                    <span className="text-xs mt-1">Minha lista</span>
                                </button>
                            </div>

                            {/* Description */}
                            <div className="mt-6 max-w-2xl">
                                <p className="text-white/90 text-lg">
                                    Uma das séries de maior sucesso da TV, "Friends" é uma comédia inteligente e divertida sobre um grupo
                                    de amigos que mora em Nova York.
                                </p>
                                <div className="mt-2 flex flex-col gap-1">
                                    <span className="text-white/70 text-sm">Comédia</span>
                                    <span className="text-white/50 text-xs mt-2">
                                        A disponibilidade de 4K UHD, HDR e Dolby Atmos varia de acordo com o dispositivo e o plano.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}