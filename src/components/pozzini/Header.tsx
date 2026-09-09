import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/pozziny-logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Comprar", href: "#imoveis" },
  { label: "Alugar", href: "#imoveis" },
  { label: "Imóveis", href: "#categorias" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-primary-foreground transition-all duration-300",
        scrolled || open
          ? "border-b border-primary-foreground/10 bg-primary/88 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#topo" aria-label="Pozziny Silva Consultoria Imobiliária" className="min-w-0">
          <img
            src={logo}
            alt="Pozziny Silva Consultoria Imobiliária"
            className="h-12 w-auto animate-letter-in object-contain opacity-0 sm:h-14"
          />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-1 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
          <Button variant="gold" size="default" asChild>
            <a href="#busca">Encontrar imóvel</a>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="onDark" size="icon" asChild aria-label="Falar com a Pozziny">
            <a href="#contato">
              <Phone />
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary-foreground/30 text-primary-foreground transition-colors"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="border-t border-primary-foreground/10 bg-primary/95 backdrop-blur-xl lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-primary-foreground/10 py-4 text-base font-medium text-primary-foreground/90 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <Button variant="gold" size="lg" className="w-full" asChild>
                <a href="#busca" onClick={() => setOpen(false)}>
                  Encontrar imóvel
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
