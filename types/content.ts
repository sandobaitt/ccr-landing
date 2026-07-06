/** Categoría para las novedades */
export type NewsCategory = 'retiro' | 'recorrida' | 'evento' | 'general';

/** Novedad o publicación del movimiento */
export interface NewsItem {
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

/** Datos bancarios para donaciones */
export interface DonationInfo {
  bankName: string;
  accountHolder: string;
  cbu: string;
  alias: string;
}

/** Información del próximo retiro */
export interface RetreatInfo {
  id: string;
  name: string;
  open: boolean;
  targetDate: string;
  formsLink: string;
  requirements: string[];
  minAge: number;
  maxAge: number;
}
