import { Hero } from "@/components/Hero";
import { NextRetreat } from "@/components/NextRetreat";
import { Pillars } from "@/components/Pillars";
import { Communities } from "@/components/Communities";
import { SaintsGrid } from "@/components/SaintsGrid";
import { NewsGrid } from "@/components/NewsGrid";
import { Donations } from "@/components/Donations";

export default function Home() {
  return (
    <>
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
