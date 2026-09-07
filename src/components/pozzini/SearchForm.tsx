import { useState, type FormEvent } from "react";
import { Search, MapPin, Home, BedDouble, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { SearchFilters } from "@/types/pozzini";

const propertyTypes = [
  { value: "todos", label: "Todos os tipos" },
  { value: "casa", label: "Casa" },
  { value: "apartamento", label: "Apartamento" },
  { value: "cobertura", label: "Cobertura" },
  { value: "terreno", label: "Terreno" },
  { value: "comercial", label: "Comercial" },
  { value: "condominio", label: "Condomínio" },
  { value: "outros", label: "Outros" },
] as const;

const initialFilters: SearchFilters = {
  purpose: "comprar",
  type: "todos",
  location: "",
  priceMin: "",
  priceMax: "",
  bedrooms: "",
};

const selectClass =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function SearchForm() {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const update = <K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setMessage(null);

    const min = Number(filters.priceMin);
    const max = Number(filters.priceMax);
    if (filters.priceMin && (Number.isNaN(min) || min < 0)) {
      setError("Informe um valor mínimo válido.");
      return;
    }
    if (filters.priceMax && (Number.isNaN(max) || max < 0)) {
      setError("Informe um valor máximo válido.");
      return;
    }
    if (filters.priceMin && filters.priceMax && min > max) {
      setError("O valor mínimo não pode ser maior que o valor máximo.");
      return;
    }

    setLoading(true);
    console.log("[PozziniSearchForm]", "busca solicitada", filters);
    try {
      // Ainda não há backend de imóveis conectado. A estrutura abaixo está
      // pronta para receber a chamada real (server function ou API) no futuro.
      await new Promise((resolve) => setTimeout(resolve, 500));
      setMessage(
        "Recebemos seus critérios. A busca completa de imóveis será ativada em breve — fale com a Pozzini para receber opções agora.",
      );
    } catch (err) {
      console.log("[PozziniSearchForm]", "erro na busca", err);
      setError("Não foi possível realizar a busca agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      id="busca"
      onSubmit={handleSubmit}
      aria-label="Buscar imóveis"
      className="w-full rounded-xl border border-border/70 bg-card p-4 shadow-card sm:p-6"
    >
      <div
        role="group"
        aria-label="Finalidade"
        className="mb-5 inline-flex rounded-md bg-muted p-1"
      >
        {(["comprar", "alugar"] as const).map((purpose) => (
          <button
            key={purpose}
            type="button"
            aria-pressed={filters.purpose === purpose}
            onClick={() => update("purpose", purpose)}
            className={`h-9 rounded-md px-5 text-sm font-semibold capitalize transition-colors ${
              filters.purpose === purpose
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {purpose}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_1.3fr_1fr_0.9fr]">
        <div className="min-w-0">
          <Label htmlFor="tipo" className="mb-1.5 flex items-center gap-1.5 text-xs">
            <Home className="size-3.5 text-muted-foreground" aria-hidden="true" /> Tipo de imóvel
          </Label>
          <select
            id="tipo"
            className={selectClass}
            value={filters.type}
            onChange={(e) => update("type", e.target.value as SearchFilters["type"])}
          >
            {propertyTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-0">
          <Label htmlFor="local" className="mb-1.5 flex items-center gap-1.5 text-xs">
            <MapPin className="size-3.5 text-muted-foreground" aria-hidden="true" /> Localização
          </Label>
          <Input
            id="local"
            className="h-11"
            placeholder="Cidade, bairro ou região"
            value={filters.location}
            onChange={(e) => update("location", e.target.value)}
          />
        </div>

        <div className="min-w-0">
          <span className="mb-1.5 block text-xs font-medium">Faixa de preço (R$)</span>
          <div className="flex gap-2">
            <Input
              aria-label="Preço mínimo"
              inputMode="numeric"
              className="h-11"
              placeholder="Mín."
              value={filters.priceMin}
              onChange={(e) => update("priceMin", e.target.value.replace(/\D/g, ""))}
            />
            <Input
              aria-label="Preço máximo"
              inputMode="numeric"
              className="h-11"
              placeholder="Máx."
              value={filters.priceMax}
              onChange={(e) => update("priceMax", e.target.value.replace(/\D/g, ""))}
            />
          </div>
        </div>

        <div className="min-w-0">
          <Label htmlFor="quartos" className="mb-1.5 flex items-center gap-1.5 text-xs">
            <BedDouble className="size-3.5 text-muted-foreground" aria-hidden="true" /> Quartos
          </Label>
          <select
            id="quartos"
            className={selectClass}
            value={filters.bedrooms}
            onChange={(e) => update("bedrooms", e.target.value as SearchFilters["bedrooms"])}
          >
            <option value="">Indiferente</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>

      <Button
        type="submit"
        variant="gold"
        size="xl"
        disabled={loading}
        className="mt-5 w-full lg:w-auto lg:min-w-56"
      >
        {loading ? <Loader2 className="animate-spin" /> : <Search />}
        {loading ? "Buscando..." : "Encontrar imóveis"}
      </Button>

      <div aria-live="polite" className="mt-3 text-sm">
        {error && <p className="text-destructive">{error}</p>}
        {message && <p className="text-muted-foreground">{message}</p>}
      </div>
    </form>
  );
}
