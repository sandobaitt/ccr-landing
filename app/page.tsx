import { Hero } from "@/components/Hero";
import { NextRetreat } from "@/components/NextRetreat";
import { Pillars } from "@/components/Pillars";
import { Communities } from "@/components/Communities";
import { SaintsGrid } from "@/components/SaintsGrid";
import { NewsGrid } from "@/components/NewsGrid";
import { Donations } from "@/components/Donations";
import { StarryBackground } from "@/components/StarryBackground";

export default function Home() {
  return (
    <>
      <StarryBackground />
      <Hero />
      <NextRetreat />
      <Pillars />
      <Communities />
      <SaintsGrid />
      <NewsGrid />
      <Donations />
    </>
  );
}
