import heroImage from "@/assets/hero-pozzini.jpg";
import { SearchForm } from "./SearchForm";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casa contemporânea iluminada ao entardecer com piscina de borda infinita"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/60 to-primary/80"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-10 sm:px-6 sm:pt-40 lg:px-8 lg:pt-48 lg:pb-16">
        <div className="max-w-3xl">
          <p className="eyebrow">Imobiliária Pozzini</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
            Encontre o imóvel que combina com o seu momento.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            Na Pozzini, você encontra imóveis selecionados para comprar, alugar e investir com
            segurança e tranquilidade.
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
