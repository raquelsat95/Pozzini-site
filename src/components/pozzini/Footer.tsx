import { Instagram, Facebook, BadgeCheck } from "lucide-react";
import brokerAsset from "@/assets/corretor.jpg.asset.json";
import { broker } from "@/data/broker";

const columns = [
  {
    title: "Imóveis",
    links: [
      { label: "Comprar", href: "#imoveis" },
      { label: "Alugar", href: "#imoveis" },
      { label: "Imóveis em destaque", href: "#imoveis" },
      { label: "Lançamentos", href: "#categorias" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Contato", href: "#contato" },
      { label: "WhatsApp", href: "#contato" },
      { label: "Fale conosco", href: "#contato" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre nós", href: "#sobre" },
      { label: "Corretor responsável", href: "#corretor" },
      { label: "Serviços", href: "#servicos" },
      { label: "Privacidade", href: "#contato" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram da Pozzini",
    href: "https://www.instagram.com/pozziny.associado",
    icon: Instagram,
  },
  {
    label: "Facebook da Pozzini",
    href: "https://www.facebook.com/profile.php?id=61557336878264",
    icon: Facebook,
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <p className="font-display text-2xl font-bold">
              Pozzini<span className="text-gold">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
              Imobiliária dedicada a conectar pessoas aos imóveis certos, com curadoria,
              transparência e atendimento próximo.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={brokerAsset.url}
                alt="Foto do corretor responsável pela Pozzini"
                loading="lazy"
                width={96}
                height={96}
                className="size-12 shrink-0 rounded-full object-cover object-top ring-1 ring-gold/40"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{broker.name}</p>
                <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-primary-foreground/70">
                  <BadgeCheck className="size-3.5 text-gold" aria-hidden="true" />
                  CRECI {broker.creci} • CONSULTORIA IMOBILIÁRIA
                </p>
              </div>
            </div>

            <ul className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-gold hover:text-gold"
                  >
                    <link.icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="min-w-0">
              <h2 className="font-sans text-sm font-semibold tracking-wider uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pozzini. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#contato" className="transition-colors hover:text-gold">
              Política de privacidade
            </a>
            <a href="#contato" className="transition-colors hover:text-gold">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
