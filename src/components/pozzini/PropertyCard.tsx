import { useState } from "react";
import { BedDouble, Bath, Ruler, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/properties";
import { cn } from "@/lib/utils";
import type { Property } from "@/types/pozzini";

export function PropertyCard({ property }: { property: Property }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-card">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={property.image}
          alt={property.imageAlt}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {property.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
            Destaque
          </span>
        )}
        <button
          type="button"
          onClick={() => setFavorite((v) => !v)}
          aria-pressed={favorite}
          aria-label={
            favorite
              ? `Remover ${property.title} dos favoritos`
              : `Salvar ${property.title} nos favoritos`
          }
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-foreground transition-colors hover:bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <Heart className={cn("size-4", favorite && "fill-gold text-gold")} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          {property.typeLabel} · {property.purpose === "alugar" ? "Aluguel" : "Venda"}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
          {property.title}
        </h3>
        <p className="mt-1.5 flex items-start gap-1.5 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span className="min-w-0">{property.location}</span>
        </p>

        <ul className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          {property.bedrooms > 0 && (
            <li className="flex items-center gap-1.5">
              <BedDouble className="size-4" aria-hidden="true" />
              {property.bedrooms} quartos
            </li>
          )}
          <li className="flex items-center gap-1.5">
            <Bath className="size-4" aria-hidden="true" />
            {property.bathrooms} banheiros
          </li>
          <li className="flex items-center gap-1.5">
            <Ruler className="size-4" aria-hidden="true" />
            {property.area} m²
          </li>
        </ul>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
          <p className="min-w-0 font-display text-xl font-bold text-foreground">
            {formatPrice(property.price, property.purpose)}
          </p>
          <Button variant="outline" size="sm" asChild className="shrink-0">
            <a href="#contato">Ver detalhes</a>
          </Button>
        </div>
      </div>
    </article>
  );
}
