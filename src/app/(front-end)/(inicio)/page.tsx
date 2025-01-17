import { verticalBanners } from "@/constants/vertical-banners";
import { BackgroundMax } from "./_components/background-max";
import { Header } from "./_components/header";
import { Plans } from "./_components/plans";
import { VerticalBanners } from "./_components/vertical-banners";
import { FirstRun } from "./_components/first-run-max";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { AboutMax } from "./_components/about-max";

export default function Home() {



  return (
    <div
      className="relative h-screen overflow-y-scroll pb-6"
      style={{
        background: "radial-gradient(circle, rgba(1,41,223,1) 0%, rgba(8,18,157,1) 100%)",
      }}
    >

      {/* header - header */}
      <Header />

      {/* background azul com a logo e curvatura - background */}
      <BackgroundMax />

      {/* planos - plans */}
      <Plans />

      {/* banners verticais - vertical banners */}
      <VerticalBanners data={verticalBanners} />

      {/* estreias  - firstRun */}
      <FirstRun />

      <AboutMax />

    </div>
  );
}

