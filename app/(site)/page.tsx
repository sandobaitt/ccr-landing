import { Hero } from "@/components/Hero";
import { NextRetreat } from "@/components/NextRetreat";
import { Pillars } from "@/components/Pillars";
import { Communities } from "@/components/Communities";
import { SaintsGrid } from "@/components/SaintsGrid";
import { NewsGrid } from "@/components/NewsGrid";
import { DailyGospel } from "@/components/DailyGospel";
import { Donations } from "@/components/Donations";
import { getDailyGospel } from "@/lib/gospel";
import { client } from '@/sanity/lib/client';
import { newsQuery, communitiesQuery, retreatQuery, saintsQuery } from '@/sanity/lib/queries';
import { 
  newsItems as fallbackNews, 
  communities as fallbackCommunities, 
  nextRetreat as fallbackRetreat,
  saints as fallbackSaints
} from '@/data/content';

export const revalidate = 60; // Revalidate every minute for Sanity data

export default async function Home() {
  const dailyGospel = await getDailyGospel();
  
  // Fetch Sanity Data
  const sanityNews = await client.fetch(newsQuery);
  const sanityCommunities = await client.fetch(communitiesQuery);
  const sanityRetreat = await client.fetch(retreatQuery);
  const sanitySaints = await client.fetch(saintsQuery);

  // Fallback to static data if Sanity is empty
  const activeNews = sanityNews?.length > 0 ? sanityNews : fallbackNews;
  const activeCommunities = sanityCommunities?.length > 0 ? sanityCommunities : fallbackCommunities;
  const activeRetreat = sanityRetreat || fallbackRetreat;
  const activeSaints = sanitySaints?.length > 0 ? sanitySaints : fallbackSaints;

  return (
    <>
      <Hero />
      <NextRetreat retreatInfo={activeRetreat} />
      <Pillars />
      <Communities communities={activeCommunities} />
      <SaintsGrid saints={activeSaints} />
      <NewsGrid newsItems={activeNews} />
      <DailyGospel gospel={dailyGospel} />
      <Donations />
    </>
  );
}
