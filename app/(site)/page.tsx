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
import { 
  newsQuery, 
  communitiesQuery, 
  retreatQuery, 
  saintsQuery,
  pillarsQuery,
  suppliesQuery,
  coordinatorsQuery
} from '@/sanity/lib/queries';
import { 
  newsItems as fallbackNews, 
  communities as fallbackCommunities, 
  nextRetreat as fallbackRetreat,
  saints as fallbackSaints,
  supplyItems as fallbackSupplies,
  coordinators as fallbackCoordinators
} from '@/data/content';

export const revalidate = 60; // Revalidate every minute for Sanity data

// Fallback pillars for when Sanity is empty during initial load
const fallbackPillars = [
  {
    icon: 'Church',
    title: 'Espiritualidad',
    description: 'De cada encuentro, retiro, comision u oracion hacemos que crezca en nosotros el amor al Padre',
    gradient: 'from-rose-100 via-orange-100 to-rose-100',
    iconBg: 'bg-rose-200 text-rose-700'
  },
  {
    icon: 'Users',
    title: 'Comunidad',
    description: 'Compartir como Jesus con sus discipulos nos lleva a encontrarnos por dentro y fuera de la parro',
    gradient: 'from-fuchsia-100 via-purple-100 to-fuchsia-100',
    iconBg: 'bg-fuchsia-200 text-fuchsia-700'
  },
  {
    icon: 'HandHeart',
    title: 'Acción Social',
    description: 'Ese amor recibido nos lleva a salir al encuentro del projimo y darle la mano',
    gradient: 'from-blue-100 via-cyan-100 to-blue-100',
    iconBg: 'bg-cyan-200 text-cyan-700'
  },
];

export default async function Home() {
  const dailyGospel = await getDailyGospel();
  
  // Fetch Sanity Data
  const sanityNews = await client.fetch(newsQuery);
  const sanityCommunities = await client.fetch(communitiesQuery);
  const sanityRetreat = await client.fetch(retreatQuery);
  const sanitySaints = await client.fetch(saintsQuery);
  const sanityPillars = await client.fetch(pillarsQuery);
  const sanitySupplies = await client.fetch(suppliesQuery);
  const sanityCoordinators = await client.fetch(coordinatorsQuery);

  // Fallback to static data if Sanity is empty
  const activeNews = sanityNews?.length > 0 ? sanityNews : fallbackNews;
  const activeCommunities = sanityCommunities?.length > 0 ? sanityCommunities : fallbackCommunities;
  const activeRetreat = sanityRetreat || fallbackRetreat;
  const activeSaints = sanitySaints?.length > 0 ? sanitySaints : fallbackSaints;
  const activePillars = sanityPillars?.length > 0 ? sanityPillars : fallbackPillars;
  const activeSupplies = sanitySupplies?.length > 0 ? sanitySupplies : fallbackSupplies;
  const activeCoordinators = sanityCoordinators?.length > 0 ? sanityCoordinators : fallbackCoordinators;

  return (
    <>
      <Hero retreatInfo={activeRetreat} />
      <NextRetreat retreatInfo={activeRetreat} />
      <Pillars pillars={activePillars} />
      <Communities communities={activeCommunities} />
      <SaintsGrid saints={activeSaints} />
      <NewsGrid newsItems={activeNews} />
      <DailyGospel gospel={dailyGospel} />
      <Donations supplies={activeSupplies} coordinators={activeCoordinators} />
    </>
  );
}
