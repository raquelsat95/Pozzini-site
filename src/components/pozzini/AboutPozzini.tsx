import { ShieldCheck, HeartHandshake, Search, Handshake } from "lucide-react";
import brokerAsset from "@/assets/corretor.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const differentials = [
  {
    icon: HeartHandshake,
    title: "Atendimento personalizado",
    text: "Cada cliente é atendido de acordo com o seu momento, seu objetivo e seu ritmo.",
  },
  {
    icon: Search,
    title: "Imóveis selecionados",
    text: "Curadoria criteriosa: apresentamos opções que realmente fazem sentido para você.",
  },
  {
    icon: ShieldCheck,
    title: "Negociação segura",
    text: "Documentação conferida e etapas explicadas com clareza, do início ao fechamento.",
  },
  {
    icon: Handshake,
    title: "Conhecimento de mercado",
    text: "Leitura atenta das regiões e das condições de negócio para decisões mais confiantes.",
  },
];

export function AboutPozzini() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="sobre"
      ref={ref}
      className={cn("bg-secondary py-16 sm:py-20 lg:py-28", "reveal", visible && "reveal-in")}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="overflow-hidden rounded-xl">
          <img
            src={brokerAsset.url}
            alt="Foto do corretor responsável pela Pozzini"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="min-w-0">
          <p className="eyebrow">Sobre a Pozzini</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Mais do que imóveis. Construímos relações.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            A Pozzini nasceu da convicção de que escolher um imóvel é uma decisão de vida — e não
            apenas uma transação. Por isso, trabalhamos com escuta atenta, curadoria de
            oportunidades e informação clara em cada etapa.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Da primeira visita à assinatura, você conta com transparência sobre valores,
            documentação e condições de negociação. Nosso compromisso é com relacionamentos de longo
            prazo: clientes que voltam e indicam a Pozzini quando chega um novo momento.
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {differentials.map((item) => (
              <li key={item.title} className="flex min-w-0 gap-3">
                <item.icon className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-sans text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button variant="default" size="lg" className="mt-8" asChild>
            <a href="#contato">Conheça a Pozzini</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
