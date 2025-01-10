import { Header } from "./_components/header";
import bg from "../../../assets/images/welcome/bg.jpg";
import { Plans } from "./_components/plans";
import banner1 from "../../../assets/images/welcome/family.png"
import banner2 from "../../../assets/images/welcome/reality_0.png"
import banner3 from "../../../assets/images/welcome/novelas_1.jpg"
import banner4 from "../../../assets/images/welcome/movies.jpg"
import banner5 from "../../../assets/images/welcome/drama.jpg"
import banner6 from "../../../assets/images/welcome/action.jpg"
import banner7 from "../../../assets/images/welcome/comedy.jpg"
import banner8 from "../../../assets/images/welcome/documentary_romario_o_cara.jpg"
import banner9 from "../../../assets/images/welcome/Brasil.jpg"
import { VerticalBanners } from "./_components/vertical-banners";

export default function Home() {

  const verticalBanners = [
    {
      img: banner1.src,
      title: "Peppa Pig",
      type: "Crianças e Família"
    },
    {
      img: banner2.src,
      title: "Largados e Pelados",
      type: "Reality"
    },
    {
      img: banner3.src,
      title: "Será Isso Amor?",
      type: "Novelas"
    },
    {
      img: banner4.src,
      title: "GODZILLA VS KONG",
      type: "Filmes"
    },
    {
      img: banner5.src,
      title: "A GUERRA DOS TRONOS",
      type: "Drama"
    },
    {
      img: banner6.src,
      title: "THE LAST OF US",
      type: "Ação"
    },
    {
      img: banner7.src,
      title: "THE BIG BANG THEORY",
      type: "Comédia"
    },
    {
      img: banner8.src,
      title: "ROMÁRIO, O CARA",
      type: "Documentários"
    },
    {
      img: banner9.src,
      title: "CHAMPIONS LEAGUE",
      type: "Futebol"
    }
  ]

  return (
    <div
      className="relative h-screen overflow-y-scroll pb-6"
      style={{
        background: "radial-gradient(circle, rgba(1,41,223,1) 0%, rgba(8,18,157,1) 100%)",
      }}
    >
      <Header />

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
          className="absolute w-full h-full bottom-0 "
          style={{
            borderBottomRightRadius: "25%",
            borderBottomLeftRadius: "25%",
            background: 'linear-gradient(180deg, rgba(1,41,223,0) 35%, rgba(0,0,0,1) 100%)'
          }}
        />
      </div>

      <Plans />

      <VerticalBanners
        data={verticalBanners}

      />

    </div>
  );
}
