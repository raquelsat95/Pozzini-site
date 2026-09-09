import { ShieldCheck, HeartHandshake, Search, Handshake } from "lucide-react";
import corretorPhoto from "@/assets/corretor-foto.jpg";
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
      className={cn(
        "bg-primary py-20 text-primary-foreground sm:py-28 lg:py-36",
        "reveal",
        visible && "reveal-in",
      )}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="overflow-hidden rounded-xl">
          <img
            src={corretorPhoto}
            alt="Foto do corretor responsável pela Pozziny"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="min-w-0">
          <p className="eyebrow">Sobre a Pozziny</p>
          <h2 className="mt-4 max-w-md font-display text-3xl leading-tight font-normal text-primary-foreground sm:text-4xl lg:text-5xl">
            Não vendemos apenas metros quadrados.
          </h2>
          <p className="mt-6 max-w-md text-base text-primary-foreground/55">
            A Pozziny nasceu da convicção de que escolher um imóvel é uma decisão de vida — e não
            apenas uma transação. Por isso, trabalhamos com escuta atenta, curadoria de
            oportunidades e informação clara em cada etapa.
          </p>
          <p className="mt-4 max-w-md text-base text-primary-foreground/55">
            Da primeira visita à assinatura, você conta com transparência sobre valores,
            documentação e condições de negociação. Nosso compromisso é com relacionamentos de longo
            prazo: clientes que voltam e indicam a Pozziny quando chega um novo momento.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {differentials.map((item) => (
              <li key={item.title} className="flex min-w-0 gap-3">
                <item.icon className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-sans text-sm font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary-foreground/55">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button variant="gold" size="lg" className="mt-10" asChild>
            <a href="#contato">Conheça a Pozziny</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
