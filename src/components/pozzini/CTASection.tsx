import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
          Está pensando em vender ou alugar seu imóvel?
        </h2>
        <p className="mt-4 text-base text-primary-foreground/80">
          Fale com a Pozziny e descubra como podemos ajudar a valorizar e apresentar seu imóvel da
          melhor forma.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button variant="gold" size="xl" asChild>
            <a href="#contato">Quero anunciar meu imóvel</a>
          </Button>
          <Button variant="onDark" size="xl" asChild>
            <a href="#contato">Falar com um especialista</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
