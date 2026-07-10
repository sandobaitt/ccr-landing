import { Hero } from "@/components/Hero";
import { NextRetreat } from "@/components/NextRetreat";
import { Pillars } from "@/components/Pillars";
import { Communities } from "@/components/Communities";
import { SaintsGrid } from "@/components/SaintsGrid";
import { NewsGrid } from "@/components/NewsGrid";
import { DailyGospel } from "@/components/DailyGospel";
import { Donations } from "@/components/Donations";
import { getDailyGospel } from "@/lib/gospel";

export default async function Home() {
  const dailyGospel = await getDailyGospel();

  return (
    <>
      <Hero />
      <NextRetreat />
      <Pillars />
      <Communities />
      <SaintsGrid />
      <NewsGrid />
      <DailyGospel gospel={dailyGospel} />
      <Donations />
    </>
  );
}
