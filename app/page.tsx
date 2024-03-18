
import Hero from "@/components/containers/hero";
import Main from "@/components/containers/main";

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

    </div>
  );
}
