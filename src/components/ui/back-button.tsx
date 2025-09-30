'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {

    const navigate = useRouter()

    return (
        <div
            className="absolute top-20 left-4 z-20 p-2 bg-black/30 rounded-full cursor-pointer hover:bg-black/50 transition"
            onClick={() => navigate.back()}
        >
            <ArrowLeft
                size={24}
                className="text-white"
            />
        </div>
    )
}