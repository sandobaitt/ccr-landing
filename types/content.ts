/** Categoría para las novedades */
export type NewsCategory = 'retiro' | 'recorrida' | 'evento' | 'general';

/** Novedad o publicación del movimiento */
export interface NewsItem {
  _id?: string;
  id: string;
  title: string;
  summary: string;
  category: NewsCategory;
  date: string; // formato ISO 8601 o legible
  imageUrl?: string;
}

/** Insumo solicitado para las recorridas */
export interface SupplyItem {
  id: string;
  name: string;
  description: string;
  urgent: boolean;
  icon: string; // nombre del icono de lucide-react
}

/* Oculto temporalmente por seguridad / problemas
/** Datos bancarios para donaciones * /
export interface DonationInfo {
  bankName: string;
  accountHolder: string;
  cbu: string;
  alias: string;
}
*/

/** Información de contacto de los coordinadores */
export interface CoordinatorInfo {
  id: string;
  name: string;
  role: string;
  phone: string;
  whatsappMsg: string;
}
/** Información del próximo retiro */
export interface RetreatInfo {
  _id?: string;
  id: string;
  name: string;
  open: boolean;
  targetDate: string;
  formsLink: string;
  dateDescription: string;
  locationDescription: string;
  minAge: number;
  maxAge: number;
}

/** Información sobre Santos Redentoristas */
export interface SaintInfo {
  _id?: string;
  id: string;
  name: string;
  title: string;
  shortDescription: string;
  fullBiography: string;
  connectionToCharism: string;
  imageUrl?: string;
}

/** Información sobre Comunidades Post-Retiro */
export interface CommunityInfo {
  _id?: string;
  id: string;
  name: string;
  description: string;
  meetings: string;
  icon: string;
}

/** Versículos o frases diarias */
export interface Verse {
  id: string;
  text: string;
  reference: string;
}
