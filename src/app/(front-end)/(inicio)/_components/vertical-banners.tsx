type Props = {
    img: string
    title: string;
    type: string;
}

export function VerticalBanners({ data }: { data: Props[] }) {
    return (
        <div
            className="flex flex-col items-center justify-center relative mt-20 w-full"
        >
            <h2
                className="text-white text-center text-3xl font-semibold w-2/3"
            >
                A Max tem muito mais a ver com você e toda a família. Pra quem curte drama, comédia, realities e de tudo um pouco: o seu lugar é aqui!
            </h2>

            <div className="flex items-center justify-center w-full relative gap-0 mt-16 overflow-x-hidden">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-8 w-full"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            style={{
                                height: "40vw",
                                objectFit: "cover",
                            }}
                        />
                        <div className="text-white text-center absolute bottom-0 w-full p-2 uppercase">
                            <h4
                                className="text-md font-bold mb-8"
                            >
                                {item.type}
                            </h4>
                            <p
                                className="text-xs text-gray-300 font-semibold"
                            >
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}