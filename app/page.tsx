
import GetReport from "@/components/containers/GetReport";
import BrochureSection from "@/components/containers/brochure";
import Hero from "@/components/containers/hero";
import Main from "@/components/containers/main";
import Research from "@/components/containers/research";
import SolutionSection from "@/components/containers/solutions";
import ThemSelves from "@/components/containers/themselves";

import Card from "@/components/shared/card";
import { CustomCarousel } from "@/components/shared/carousel";
import Modal from "@/components/shared/modal/modal";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <span className="material-symbols-outlined">
        menu
      </span>

      <Modal /> */}

      <Main />
      <Card />
      <div className="h-[112px]"></div>
      <CustomCarousel />
      <div className="h-[112px]"></div>
      <Hero />
      <Research />
      <SolutionSection />
      <BrochureSection />
      <ThemSelves />
      <GetReport />


    </div>
  );
}
