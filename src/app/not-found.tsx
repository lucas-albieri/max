'use client'

import { Button } from "@/components/ui/button";
import { FilmIcon, HomeIcon, PopcornIcon, TvIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white p-4">
            <div className="max-w-3xl w-full text-center space-y-8 animate-in fade-in duration-700">
                <div className="flex justify-center">
                    <div className="relative">
                        <TvIcon className="h-32 w-32 text-purple-300" strokeWidth={1.5} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-bold">404</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Ooops! Conteúdo não encontrado</h1>

                <p className="text-xl md:text-2xl text-purple-200">
                    Parece que esse título saiu do nosso catálogo ou nunca existiu!
                </p>

                <div className="flex flex-wrap justify-center gap-4 py-4">
                    <div className="bg-purple-800/50 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center gap-2">
                        <FilmIcon className="h-8 w-8 text-blue-300" />
                        <p>O filme que você procura pode estar em outra dimensão</p>
                    </div>
                    <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center gap-2">
                        <PopcornIcon className="h-8 w-8 text-purple-300" />
                        <p>Enquanto isso, que tal explorar outros títulos?</p>
                    </div>
                </div>

                <div className="pt-6">
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                    >
                        <Link href="/">
                            <HomeIcon className="mr-2 h-5 w-5" />
                            Voltar para o início
                        </Link>
                    </Button>
                </div>

                <div className="text-purple-300 italic mt-8">"Até os melhores streamings às vezes perdem um episódio..."</div>
            </div>
        </div>
    )
}