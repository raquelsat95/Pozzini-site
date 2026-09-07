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

export interface SearchFilters {
  purpose: Purpose;
  type: PropertyType | "todos";
  location: string;
  priceMin: string;
  priceMax: string;
  bedrooms: "" | "1" | "2" | "3" | "4";
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
