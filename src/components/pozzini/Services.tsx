import { Key, Home, Tag, TrendingUp } from "lucide-react";
import { Section } from "./Section";

const services = [
  {
    icon: Home,
    title: "Comprar um imóvel",
    description:
      "Acompanhamento do primeiro contato à escritura, com curadoria de opções alinhadas ao seu perfil e ao seu orçamento.",
    cta: "Quero comprar",
  },
  {
    icon: Key,
    title: "Alugar um imóvel",
    description:
      "Processo de locação claro e organizado, com documentação revisada e suporte durante toda a negociação.",
    cta: "Quero alugar",
  },
  {
    icon: Tag,
    title: "Vender seu imóvel",
    description:
      "Avaliação criteriosa, apresentação profissional do imóvel e condução da negociação com transparência.",
    cta: "Quero vender",
  },
  {
    icon: TrendingUp,
    title: "Investir",
    description:
      "Orientação sobre oportunidades, potencial de valorização e riscos, para decisões de investimento mais seguras.",
    cta: "Quero investir",
  },
];

export function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="Serviços"
      title="Tudo o que você precisa para realizar seu próximo negócio."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-card"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <service.icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.description}</p>
            <a
              href="#contato"
              className="mt-5 text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              {service.cta} →
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
