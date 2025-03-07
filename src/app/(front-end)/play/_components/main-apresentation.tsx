'use client'

import Link from "next/link"

type MainApresentationProps = {
    id: string
    background: string
    title: string
    age: '18' | '16' | '14' | '12' | '10' | 'L'
    year: string
    duration: string
    description: string

}

export function MainApresentation({ id, background, title, age, duration, description, year }: MainApresentationProps) {



    return (
        <div
            className=" relative  w-full z-[2] text-white"
            style={{
                height: 'calc(100vh - 50px)',
            }}
        >
            <div
                className="absolute top-0 h-full left-0 w-4/6  bg-gradient-to-r from-black to-transparent z-[1]"
            />
            <img
                src={background}
                alt={title}
                className="h-full  w-screen object-cover object-right-top absolute z-[0]"

            />
            <div
                className="absolute top-[28rem] left-16 gap-2 w-2/6 flex flex-col z-[3]"
            >
                <h1
                    className="text-6xl font-extrabold"
                >
                    {title}
                </h1>
                <div
                    className="flex gap-2 items-center"
                >
                    <AgeRatingBox age={age} />
                    <p>
                        {year} - {duration}
                    </p>
                </div>

                <p
                    className="text-lg"
                >
                    {description}
                </p>
                <Link
                    href={`/play/${id}`}
                >
                    <div
                        className="cursor-pointer bg-gray-500/40 inline-block px-4 py-2 rounded-md mt-4 w-48 font-bold text-center text-xl"
                    >
                        Ir para o Filme

                    </div>
                </Link>
            </div>
            <div
                className="absolute bottom-0 h-1/5  w-full  bg-gradient-to-t from-black to-transparent z-[1]"
            />
        </div>
    )
}

type AgeRatingBoxProps = {
    age: '18' | '16' | '14' | '12' | '10' | 'L'
}

function AgeRatingBox({ age }: AgeRatingBoxProps) {
    return (
        <div
            className={`font-bold border-white border inline-block px-2 rounded-md text-white ${age === '18' ? 'bg-black' :
                age === '16' ? 'bg-red-600' :
                    age === '14' ? 'bg-orange-600' :
                        age === '12' ? 'bg-yellow-600' :
                            age === '10' ? 'bg-blue-600' :
                                age === 'L' ? 'bg-green-600'
                                    : ''
                }`
            }
        >
            {age}
        </div>
    )
}