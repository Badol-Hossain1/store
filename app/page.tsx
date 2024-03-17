import Card from "@/components/shared/card";
import CustomCarousel from "@/components/shared/carousel";
import Modal from "@/components/shared/modal/modal";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <span className="material-symbols-outlined">
        menu
      </span>

      <Modal /> */}
      <Card />
      <div className="h-[112px]"></div>
      <CustomCarousel />
      <div className="h-[112px]"></div>
    </div>
  );
}
