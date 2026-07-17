import { createClient } from '@sanity/client';
import { readFileSync, createReadStream } from 'fs';
import { join } from 'path';
import { communities, nextRetreat, saints, newsItems } from '../data/content';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function uploadImage(imagePath: string) {
  try {
    const absolutePath = join(process.cwd(), 'public', imagePath);
    console.log(`Subiendo imagen: ${absolutePath}`);
    const asset = await client.assets.upload('image', createReadStream(absolutePath), {
      filename: imagePath.split('/').pop(),
    });
    return asset._id;
  } catch (error) {
    console.error(`Error subiendo imagen ${imagePath}:`, error);
    return null;
  }
}

async function migrate() {
  console.log('Iniciando migración a Sanity...');

  // 1. Redes Sociales (Social Links)
  console.log('Migrando Redes Sociales...');
  const socialLinks = [
    { platform: 'Instagram', url: 'https://www.instagram.com/crecerconcristoredentor', title: 'Instagram', subtitle: 'crecerconcristoredentor' },
    { platform: 'Spotify', url: 'https://open.spotify.com/artist/7hB763FwQo4hSIs2gT3d5U', title: 'Spotify', subtitle: 'Playlist Minis' },
    { platform: 'TikTok', url: 'https://www.tiktok.com/@somoscristoredentor', title: 'TikTok CCR', subtitle: 'Misas y Adoraciones' },
  ];
  for (const social of socialLinks) {
    await client.create({ _type: 'social', ...social });
  }

  // 2. Próximo Retiro
  console.log('Migrando Próximo Retiro...');
  await client.create({
    _type: 'retreat',
    name: nextRetreat.name,
    open: nextRetreat.open,
    targetDate: nextRetreat.targetDate,
    formsLink: nextRetreat.formsLink || '',
    dateDescription: nextRetreat.dateDescription,
    locationDescription: nextRetreat.locationDescription,
    minAge: nextRetreat.minAge,
    maxAge: nextRetreat.maxAge,
  });

  // 3. Comunidades
  console.log('Migrando Comunidades...');
  for (const comm of communities) {
    await client.create({
      _type: 'community',
      name: comm.name,
      description: comm.description,
      meetings: comm.meetings,
      icon: comm.icon,
    });
  }

  // 4. Santos
  console.log('Migrando Santos...');
  for (const saint of saints) {
    let imageRef = null;
    if (saint.imageUrl) {
      imageRef = await uploadImage(saint.imageUrl);
    }
    
    await client.create({
      _type: 'saint',
      name: saint.name,
      title: saint.title,
      shortDescription: saint.shortDescription,
      fullBiography: saint.fullBiography,
      connectionToCharism: saint.connectionToCharism,
      ...(imageRef ? { image: { _type: 'image', asset: { _type: 'reference', _ref: imageRef } } } : {}),
    });
  }

  // 5. Novedades
  console.log('Migrando Novedades...');
  for (const news of newsItems) {
    let imageRef = null;
    if (news.imageUrl) {
      imageRef = await uploadImage(news.imageUrl);
    }

    await client.create({
      _type: 'news',
      title: news.title,
      summary: news.summary,
      category: news.category,
      date: news.date,
      ...(imageRef ? { image: { _type: 'image', asset: { _type: 'reference', _ref: imageRef } } } : {}),
    });
  }

  console.log('¡Migración completada con éxito!');
}

migrate().catch(console.error);
