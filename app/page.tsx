import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { NewsGrid } from "@/components/NewsGrid";
import { Donations } from "@/components/Donations";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <NewsGrid />
      <Donations />
    </>
  );
}
