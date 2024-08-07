import HeroSection from "@/components/Hero/herosection";
import MorphBanner from "@/components/Home/MorphBanner/morphBanner";
import Section2 from "@/components/Home/section2/section2";
import Section4 from "@/components/Home/section4/section4";
import Section6 from "@/components/Home/section6/section6";
import Section7 from "@/components/Home/section7/section7";
import Discount from "@/components/discount/page";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
      <HeroSection />
      <div className="px-[12.5vw] flex flex-col gap-[5vh] xsm:px-[3vw]">
        <Section2 />
        <Discount />
        <Section4 />
        <Section6 />
        <div className='w-full flex justify-center '><Link className="py-2 px-4 bg-[#CA1C26] text-white rounded" href='/all_destination'>View all</Link></div>
        <MorphBanner />
      </div>
      <Section7 />
    </main>
  );
}
