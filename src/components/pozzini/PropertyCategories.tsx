import { categories } from "@/data/properties";
import { Section } from "./Section";

export function PropertyCategories() {
  return (
    <Section
      id="categorias"
      eyebrow="Categorias"
      title="Encontre o imóvel ideal para você"
      subtitle="Navegue pelos tipos de imóvel e descubra as oportunidades certas para o seu objetivo."
      className="bg-secondary"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href="#contato"
              className="group relative block aspect-4/3 overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <img
                src={category.image}
                alt={category.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent transition-opacity duration-300 group-hover:from-primary/90"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                <span className="font-display text-xl font-semibold text-primary-foreground">
                  {category.label}
                </span>
                <span className="text-sm text-primary-foreground/80 transition-transform duration-300 group-hover:translate-x-1">
                  Ver →
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
