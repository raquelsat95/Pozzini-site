import { Quote } from "lucide-react";
import { Section } from "./Section";

const testimonials = [
  {
    quote:
      "O atendimento foi muito próximo do começo ao fim. Recebemos apenas opções que faziam sentido para a nossa família e cada etapa foi explicada com calma.",
    name: "Cliente Pozzini",
    context: "Compra de casa",
  },
  {
    quote:
      "Alugamos nosso apartamento com tranquilidade: documentação organizada, comunicação clara e nenhuma surpresa durante a negociação.",
    name: "Cliente Pozzini",
    context: "Locação",
  },
  {
    quote:
      "Procurava um imóvel para investir e recebi uma leitura honesta sobre potencial e riscos. Isso fez toda a diferença na decisão.",
    name: "Cliente Pozzini",
    context: "Investimento",
  },
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Depoimentos"
      title="O que nossos clientes dizem"
      subtitle="Relatos ilustrativos da experiência que buscamos oferecer em cada atendimento."
      className="bg-secondary"
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <li
            key={item.quote}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft"
          >
            <Quote className="size-6 text-gold" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
              “{item.quote}”
            </blockquote>
            <footer className="mt-5 border-t border-border pt-4">
              <p className="text-sm font-semibold text-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.context}</p>
            </footer>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Depoimentos demonstrativos, a serem substituídos por relatos reais de clientes.
      </p>
    </Section>
  );
}
