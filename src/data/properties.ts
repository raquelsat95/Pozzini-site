import casas from "@/assets/cat-casas.jpg";
import apartamentos from "@/assets/cat-apartamentos.jpg";
import coberturas from "@/assets/cat-coberturas.jpg";
import comerciais from "@/assets/cat-comerciais.jpg";
import terrenos from "@/assets/cat-terrenos.jpg";
import lancamentos from "@/assets/cat-lancamentos.jpg";
import type { Property } from "@/types/pozzini";

/**
 * Dados demonstrativos (placeholders) usados apenas para exibir a estrutura
 * dos cards. Devem ser substituídos por dados reais quando houver integração.
 */
export const demoProperties: Property[] = [
  {
    id: "demo-1",
    title: "Casa contemporânea com jardim",
    type: "casa",
    typeLabel: "Casa",
    purpose: "comprar",
    location: "Bairro Jardim — Exemplo, SP",
    bedrooms: 4,
    bathrooms: 3,
    area: 240,
    price: 1850000,
    featured: true,
    image: casas,
    imageAlt: "Fachada de casa contemporânea com jardim frontal",
  },
  {
    id: "demo-2",
    title: "Apartamento claro com varanda",
    type: "apartamento",
    typeLabel: "Apartamento",
    purpose: "alugar",
    location: "Centro — Exemplo, SP",
    bedrooms: 2,
    bathrooms: 2,
    area: 88,
    price: 4200,
    featured: false,
    image: apartamentos,
    imageAlt: "Sala de apartamento moderno com varanda e vista para a cidade",
  },
  {
    id: "demo-3",
    title: "Cobertura com terraço panorâmico",
    type: "cobertura",
    typeLabel: "Cobertura",
    purpose: "comprar",
    location: "Zona Sul — Exemplo, SP",
    bedrooms: 3,
    bathrooms: 4,
    area: 310,
    price: 3200000,
    featured: true,
    image: coberturas,
    imageAlt: "Terraço de cobertura com lounge e vista do skyline ao pôr do sol",
  },
  {
    id: "demo-4",
    title: "Sala comercial em edifício corporativo",
    type: "comercial",
    typeLabel: "Comercial",
    purpose: "alugar",
    location: "Distrito Empresarial — Exemplo, SP",
    bedrooms: 0,
    bathrooms: 2,
    area: 120,
    price: 9800,
    featured: false,
    image: comerciais,
    imageAlt: "Edifício comercial moderno com fachada de vidro",
  },
];

export interface Category {
  id: string;
  label: string;
  image: string;
  alt: string;
}

export const categories: Category[] = [
  { id: "casas", label: "Casas", image: casas, alt: "Casa moderna com jardim" },
  {
    id: "apartamentos",
    label: "Apartamentos",
    image: apartamentos,
    alt: "Interior de apartamento moderno",
  },
  {
    id: "coberturas",
    label: "Coberturas",
    image: coberturas,
    alt: "Terraço de cobertura com vista para a cidade",
  },
  { id: "terrenos", label: "Terrenos", image: terrenos, alt: "Terreno em condomínio residencial" },
  {
    id: "comerciais",
    label: "Imóveis comerciais",
    image: comerciais,
    alt: "Edifício comercial envidraçado",
  },
  {
    id: "lancamentos",
    label: "Lançamentos",
    image: lancamentos,
    alt: "Torre residencial em construção",
  },
];

export function formatPrice(value: number, purpose: Property["purpose"]): string {
  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
  return purpose === "alugar" ? `${formatted}/mês` : formatted;
}
