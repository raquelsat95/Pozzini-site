/**
 * Dados do corretor responsável.
 * Substituir os valores abaixo pelos dados reais quando confirmados.
 */
export interface Broker {
  /** Nome do corretor (placeholder até confirmação do cliente). */
  name: string;
  /** Cargo exibido junto ao nome. */
  role: string;
  /** Número do CRECI (placeholder até recebermos o número real). */
  creci: string;
}

export const broker: Broker = {
  name: "Corretor responsável",
  role: "Corretor de imóveis",
  creci: "2079/86-F",
};

export const socialLinks = [
  {
    label: "Instagram da Pozzini",
    href: "https://www.instagram.com/pozziny.associado",
  },
  {
    label: "Facebook da Pozzini",
    href: "https://www.facebook.com/profile.php?id=61557336878264",
  },
] as const;
