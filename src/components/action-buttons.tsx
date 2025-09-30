'use client'

import { Button } from "@/components/ui/button";
import { HeartIcon, PlayIcon, PlusIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

type Props = {
    type: "serie" | "movie"
    title: string
}

export function ActionButtons({ type, title }: Props) {
    const [isFavorite, setIsFavorite] = useState(false);

    // Verificar se o item está nos favoritos ao montar o componente
    useEffect(() => {
        const favoriteItems = localStorage.getItem('favorites');
        if (favoriteItems) {
            const favorites: string[] = JSON.parse(favoriteItems);
            setIsFavorite(favorites.includes(title));
        }
    }, [title]);

    const handleAddToFavorites = () => {
        try {
            const existingFavorites = localStorage.getItem('favorites');
            let favorites: string[] = existingFavorites ? JSON.parse(existingFavorites) : [];

            if (!favorites.includes(title)) {
                favorites.push(title);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                setIsFavorite(true);
                toast.success('Adicionado aos favoritos com sucesso!', { duration: 3000 });
            }
        } catch (error) {
            toast.error(`Erro ao adicionar aos favoritos: ${error}`);
        }
    };

    const handleRemoveFromFavorites = () => {
        try {
            const existingFavorites = localStorage.getItem('favorites');
            if (existingFavorites) {
                let favorites: string[] = JSON.parse(existingFavorites);
                favorites = favorites.filter(item => item !== title);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                setIsFavorite(false);
                toast.success('Removido dos favoritos com sucesso!', { duration: 3000 });
            }
        } catch (error) {
            toast.error(`Erro ao remover dos favoritos: ${error}`);
        }
    };

    return (
        <div className="flex items-center gap-4">
            <Button className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-white/90 transition w-80">
                <PlayIcon size={20} />
                <span>
                    {type === "serie" ? "Assistir T1 Ep. 1" : "Assistir"}
                </span>
            </Button>

            {isFavorite ? (
                <Button
                    variant={"ghost"}
                    className="flex flex-col items-center justify-center text-white/80 hover:text-white hover:bg-gray-300/15 transition p-4"
                    onClick={handleRemoveFromFavorites}
                >
                    <HeartIcon size={30} fill="currentColor" />
                    <span className="text-xs mt-1">
                        Adicionado à lista
                    </span>
                </Button>
            ) : (
                <Button
                    variant={"ghost"}
                    className="flex flex-col items-center justify-center text-white/80 hover:text-white hover:bg-gray-300/15 transition p-4"
                    onClick={handleAddToFavorites}
                >
                    <PlusIcon size={30} />
                    <span className="text-xs mt-1">
                        Minha lista
                    </span>
                </Button>
            )}
        </div>
    )
}