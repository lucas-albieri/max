import logo from "../../../../assets/images/logo.png"
import bg from "../../../../assets/images/welcome/bg.jpg";


export function BackgroundMax() {
    return (
        <div
            className="flex flex-col items-center justify-center relative "
            style={{
                background: `url(${bg.src}) no-repeat center center`,
                backgroundSize: "cover",
                height: "calc(100vh - 14em)",
                borderBottomRightRadius: "25%",
                borderBottomLeftRadius: "25%",
            }}
        >
            <div
                className="flex flex-col items-center justify-end z-20 gap-2"
            >
                <img
                    src={logo.src}
                    className="h-28 object-contain"
                    alt="Logo"
                />
                <p
                    className="text-white text-3xl font-bold "
                >
                    MUITO MAIS A VER
                </p>
                <p
                    className="text-white text-2xl font-bold mt-8"
                >
                    Planos a partir de R$18,90 / mês
                </p>
                <div
                    style={{
                        backgroundColor: "#002be7",
                    }}
                    className="text-white  text-md font-bold px-8 py-3 rounded-md mt-4 cursor-pointer"
                >
                    ASSINE AGORA
                </div>
            </div>

            <div
                className="absolute w-full h-full bottom-0 "
                style={{
                    borderBottomRightRadius: "25%",
                    borderBottomLeftRadius: "25%",
                    background: 'linear-gradient(180deg, rgba(1,41,223,0) 15%, rgba(0,0,0,1) 100%)'
                }}
            />
        </div>
    )
}