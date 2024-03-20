
import GetReport from "@/components/containers/GetReport";
import BrochureSection from "@/components/containers/brochure";
import ContactInfo from "@/components/containers/contact";

import Hero from "@/components/containers/hero";
import Main from "@/components/containers/main";
import Research from "@/components/containers/research";
import SolutionSection from "@/components/containers/solutions";
import ThemSelves from "@/components/containers/themselves";
import TopNav from "@/components/shared/TopNav";

import Card from "@/components/shared/card";
import { CustomCarousel } from "@/components/shared/carousel";


export default function Home() {
  return (
    <div>

      <TopNav />

      <Main />
      <Card />
      <div className="md:h-[112px] h-[20px]"></div>
      <CustomCarousel />
      <div className="md:h-[112px] h-[40px]"></div>
      <Hero />
      <Research />
      <SolutionSection />
      <BrochureSection title="Download our brochure"
        description="Elementum semper praesent amet integer orci. Enim molestie magna morbi tempor. Sed nascetur felis dictum a ac eget arcu tempus. Aliquet diam lorem semper leo nascetur eget. Tincidunt libero tristique nisl tristique vitae potenti eget egestas. Adipiscing morbi senectus et gravida orci pellentesque."
        buttonText="Download"
      />
      <ThemSelves />
      <GetReport />
      <ContactInfo />



    </div>
  );
}
