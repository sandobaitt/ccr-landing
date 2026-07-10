import { verses } from '@/data/content';

export interface GospelData {
  text: string;
  reference: string;
}

export async function getDailyGospel(): Promise<GospelData> {
  try {
    // Utilizamos fetch con Next.js cache para no saturar la API
    // Revalidamos cada 3600 segundos (1 hora)
    
    // Obtenemos el texto del evangelio
    const textRes = await fetch(
      'http://feed.evangelizo.org/v2/reader.php?lang=SP&type=reading&content=GSP',
      { next: { revalidate: 3600 } }
    );
    
    // Obtenemos la referencia (título corto)
    const refRes = await fetch(
      'http://feed.evangelizo.org/v2/reader.php?lang=SP&type=reading_st&content=GSP',
      { next: { revalidate: 3600 } }
    );

    if (!textRes.ok || !refRes.ok) {
      throw new Error('API request failed');
    }

    let textHtml = await textRes.text();
    let refHtml = await refRes.text();

    // Limpiar el texto: la API devuelve un string con <br /> y algunas etiquetas HTML
    // 1. Remover el footer que empieza con "Extraído de la Biblia..."
    textHtml = textHtml.split('<br />Extraído')[0];
    
    // 2. Reemplazar <br /> por espacios y remover etiquetas HTML residuales
    const cleanText = textHtml
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/&quot;/g, '"')
      .replace(/<[^>]*>?/gm, '')
      .replace(/\s+/g, ' ')
      .trim();

    // Limpiar referencia
    const cleanRef = refHtml
      .replace(/<[^>]*>?/gm, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText || !cleanRef) {
      throw new Error('Empty gospel content');
    }

    return {
      text: cleanText,
      reference: cleanRef
    };

  } catch (error) {
    console.error('Error fetching Evangelizo Gospel:', error);
    
    // Fallback logic: return one of the 5 backup verses based on the day of the year
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Asegurarse de que el fallback rote de forma segura, asumiendo que verses.length es al menos 1
    const fallbackIndex = dayOfYear % (verses.length || 1);
    
    return verses[fallbackIndex] || {
      text: 'Yo soy el camino, la verdad y la vida.',
      reference: 'Juan 14, 6'
    };
  }
}
