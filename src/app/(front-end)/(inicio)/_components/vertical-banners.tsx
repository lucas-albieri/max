'use client'

import { useWindowSize } from "@/helpers/useWidthWindow";

type Props = {
    img: string
    title: string;
    type: string;
}

export function VerticalBanners({ data }: { data: Props[] }) {

    const { width } = useWindowSize();

    return (
        <div className="flex flex-col items-center justify-center relative mt-12 lg:mt-20 w-full">
            <h2 className="text-white text-center text-xl lg:text-3xl font-semibold w-11/12 lg:w-2/3">
                A Max tem muito mais a ver com você e toda a família. Pra quem curte drama, comédia, realities e de tudo um pouco: o seu lugar é aqui!
            </h2>

            {/* Container com scroll horizontal no mobile */}
            <div className="flex overflow-x-auto gap-0 lg:overflow-hidden w-full mt-12">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-0 lg:gap-8 w-48 lg:w-auto flex-shrink-0 lg:flex-shrink relative"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            style={{
                                height: width > 1024 ? "40vw" : "100%",
                                width: width > 1024 ? "100%" : "90vw",
                                objectFit: "cover",
                            }}
                        />
                        <div className="text-white text-center absolute bottom-0 w-full p-2 uppercase">
                            <h4 className="text-md font-bold mb-8">{item.type}</h4>
                            <p className="text-xs text-gray-300 font-semibold">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}