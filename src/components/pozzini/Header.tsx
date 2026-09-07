import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "bg-background/95 shadow-soft backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#topo"
          className={cn(
            "min-w-0 font-display text-2xl font-bold tracking-tight transition-colors",
            scrolled || open ? "text-foreground" : "text-primary-foreground",
          )}
        >
          Pozzini
          <span className="text-gold">.</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                scrolled ? "text-foreground" : "text-primary-foreground/90",
              )}
            >
              {item.label}
            </a>
          ))}
          <Button variant="gold" size="default" asChild>
            <a href="#busca">Encontrar imóvel</a>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant={scrolled || open ? "outline" : "onDark"}
            size="icon"
            asChild
            aria-label="Falar com a Pozzini"
          >
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
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors",
              scrolled || open
                ? "border-border text-foreground"
                : "border-primary-foreground/40 text-primary-foreground",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 text-base font-medium text-foreground transition-colors hover:text-gold"
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
