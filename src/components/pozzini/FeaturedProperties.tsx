import { demoProperties } from "@/data/properties";
import { Section } from "./Section";
import { PropertyCard } from "./PropertyCard";

export function FeaturedProperties() {
  const properties = demoProperties;

  return (
    <Section
      id="imoveis"
      eyebrow="Seleção Pozzini"
      title="Imóveis em destaque"
      subtitle="Uma seleção de imóveis escolhidos para você."
    >
      {properties.length === 0 ? (
        <p className="text-center text-muted-foreground">
          Nenhum imóvel disponível no momento. Fale com a Pozzini para receber opções.
        </p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Imóveis exibidos apenas como exemplo de apresentação, até a conexão com a carteira real
            de imóveis da Pozzini.
          </p>
        </>
      )}
    </Section>
  );
}
