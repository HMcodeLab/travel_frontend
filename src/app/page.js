import HeroSection from "@/components/Hero/herosection";
import Section2 from "@/components/Home/section2/section2";
import Section4 from "@/components/Home/section4/section4";
import Section6 from "@/components/Home/section6/section6";
import Discount from "@/components/discount/page";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
      <HeroSection />
      <div style={{ paddingInline: "10vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
        <Section2 />
        <Discount />
        <Section4 />
        <Section6 />
      </div>
    </main>
  );
}
