export type Purpose = "comprar" | "alugar";

export type PropertyType =
  | "casa"
  | "apartamento"
  | "cobertura"
  | "terreno"
  | "comercial"
  | "condominio"
  | "outros";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  typeLabel: string;
  purpose: Purpose;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  featured: boolean;
  image: string;
  imageAlt: string;
}

export type SearchBusiness = "comprar" | "alugar" | "lancamento";

export type SearchPropertyType =
  | "casa"
  | "apartamento"
  | "sala_comercial"
  | "lote_terreno"
  | "studio"
  | "casa_condominio"
  | "imovel_comercial";

export interface SearchFilters {
  business: SearchBusiness;
  type: SearchPropertyType | "";
  city: string;
  neighborhood: string;
  priceMax: string;
}

export interface LeadFormData {
  filters: SearchFilters;
  createdAt: string;
}

export interface ContactFormData {
  name: string;
  whatsapp: string;
  email: string;
  goal: "comprar" | "alugar" | "vender" | "investir" | "";
  message: string;
}
