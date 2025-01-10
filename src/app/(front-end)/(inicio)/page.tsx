import { Header } from "./_components/header";
import bg from "../../../assets/images/welcome/bg.jpg";
import { Plans } from "./_components/plans";

import { VerticalBanners } from "./_components/vertical-banners";
import { verticalBanners } from "@/constants/vertical-banners";

export default function Home() {

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
