import { Button } from "@/components/ui/button";
import { PlayIcon, PlusIcon } from "lucide-react";

export function ActionButtons() {
    return (
        <div className="flex items-center gap-4">
            <Button className="flex items-center justify-center gap-2 bg-white text-black font-medium py-3 px-6 rounded-md hover:bg-white/90 transition w-80">
                <PlayIcon size={20} />
                <span>Assistir T 1 Ep. 1</span>
            </Button>
            <Button className="flex flex-col items-center justify-center text-white/80 hover:text-white transition">
                <PlusIcon size={24} />
                <span className="text-xs mt-1">Minha lista</span>
            </Button>
        </div>
    )
}