import { Button } from "@/components/ui/button";
import { PlayIcon, PlusIcon } from "lucide-react";

export function ActionButtons() {
    return (
        <div className="flex items-center gap-4">
            <Button className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-white/90 transition w-80">
                <PlayIcon size={20} />
                <span>Assistir T1 Ep. 1</span>
            </Button>
            <Button
                variant={"ghost"}
                className="flex flex-col items-center justify-center text-white/80 hover:text-white hover:bg-gray-300/15 transition p-4">
                <PlusIcon size={30} />
                <span className="text-xs mt-1">Minha lista</span>
            </Button>
        </div>
    )
}