import { verticalBanners } from "@/constants/vertical-banners";
import { BackgroundMax } from "./_components/background-max";
import { Header } from "./_components/header";
import { Plans } from "./_components/plans";
import { VerticalBanners } from "./_components/vertical-banners";
import { FirstRun } from "./_components/first-run-max";
import { AboutMax } from "./_components/about-max";
import { Footer } from "./_components/footer";

export default function Home() {

  return (
    <div
      className="relative h-screen overflow-y-scroll"
      style={{
        background: "radial-gradient(circle, rgba(1,41,223,1) 0%, rgba(8,18,157,1) 100%)",
      }}
    >

      {/* header - header */}
      <Header />

      {/* background azul com a logo e curvatura - background */}
      <BackgroundMax />

      {/* planos - plans */}
      {/* <Plans /> */}

      {/* banners verticais - vertical banners */}
      <VerticalBanners data={verticalBanners} />

      {/* estreias  - firstRun */}
      <FirstRun />

      {/* sobre a max - aboutMax */}
      {/* <AboutMax /> */}

      {/* footer - footer */}
      {/* <Footer /> */}

    </div>
  );
}

