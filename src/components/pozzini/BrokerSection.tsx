import { BadgeCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { broker } from "@/data/broker";

export function BrokerSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="corretor"
      ref={ref}
      className={cn("bg-background py-16 sm:py-20 lg:py-28", "reveal", visible && "reveal-in")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-foreground">
              <BadgeCheck className="size-4 text-gold" aria-hidden="true" />
              CRECI {broker.creci} • CONSULTORIA IMOBILIÁRIA
            </p>
          </div>

          <div className="min-w-0 text-center lg:text-left">
            <p className="eyebrow">Corretor responsável</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Atendimento próximo e especializado
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Cada cliente é acompanhado de forma personalizada, do primeiro contato até a
              concretização do negócio. Nosso compromisso é entender seu objetivo, apresentar as
              melhores opções e conduzir todo o processo com clareza, segurança e respeito ao seu
              tempo.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Quer comprar, alugar, vender ou investir? Fale com a Pozziny e tenha à disposição um
              atendimento dedicado para tornar sua experiência imobiliária mais tranquila e
              eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
