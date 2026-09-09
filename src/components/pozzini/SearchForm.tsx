import { useState, type FormEvent } from "react";
import { Search, Tag, Home, MapPin, Building2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SearchFilters } from "@/types/pozzini";

const businessOptions = [
  { value: "comprar", label: "Comprar" },
  { value: "alugar", label: "Alugar" },
  { value: "lancamento", label: "Lançamento" },
] as const;

const propertyTypes = [
  { value: "casa", label: "Casa" },
  { value: "apartamento", label: "Apartamento" },
  { value: "sala_comercial", label: "Sala Comercial" },
  { value: "lote_terreno", label: "Lote/Terreno" },
  { value: "studio", label: "Studio" },
  { value: "casa_condominio", label: "Casa de Condomínio" },
  { value: "imovel_comercial", label: "Imóvel Comercial" },
] as const;

const cities = ["São Paulo", "Centro", "Ipiranga", "Sacomã"] as const;

const neighborhoods = [
  "Centro",
  "Ipiranga",
  "Sacomã",
  "Vila Mariana",
  "Cambuci",
  "Liberdade",
  "Aclimação",
  "Vila Prudente",
  "Cursino",
  "Saúde",
  "Bosque da Saúde",
  "Jabaquara",
  "Vila Guarani",
  "Moóca",
  "Água Rasa",
] as const;

const initialFilters: SearchFilters = {
  business: "comprar",
  type: "",
  city: "",
  neighborhood: "",
  priceMax: "",
};

const selectTriggerClass = "h-11 w-full";

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

    const max = Number(filters.priceMax);
    if (filters.priceMax && (Number.isNaN(max) || max < 0)) {
      setError("Informe um preço máximo válido.");
      return;
    }

    setLoading(true);
    if (import.meta.env.DEV) {
      console.log("[PozzinySearchForm]", "busca solicitada", filters);
    }
    try {
      // Ainda não há backend de imóveis conectado. A estrutura abaixo está
      // pronta para receber a chamada real (server function ou API) no futuro.
      await new Promise((resolve) => setTimeout(resolve, 500));
      setMessage(
        "Recebemos seus critérios. A busca completa de imóveis será ativada em breve — fale com a Pozziny para receber opções agora.",
      );
    } catch (err) {
      console.log("[PozzinySearchForm]", "erro na busca", err);
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="min-w-0">
          <Label htmlFor="negocio" className="mb-1.5 flex items-center gap-1.5 text-xs">
            <Tag className="size-3.5 text-muted-foreground" aria-hidden="true" /> Negócio
          </Label>
          <Select
            value={filters.business}
            onValueChange={(value) => update("business", value as SearchFilters["business"])}
          >
            <SelectTrigger id="negocio" className={selectTriggerClass}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent side="bottom" avoidCollisions={false}>
              {businessOptions.map((b) => (
                <SelectItem key={b.value} value={b.value}>
                  {b.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-0">
          <Label htmlFor="tipo" className="mb-1.5 flex items-center gap-1.5 text-xs">
            <Home className="size-3.5 text-muted-foreground" aria-hidden="true" /> Tipo
          </Label>
          <Select
            value={filters.type || "todos"}
            onValueChange={(value) =>
              update("type", (value === "todos" ? "" : value) as SearchFilters["type"])
            }
          >
            <SelectTrigger id="tipo" className={selectTriggerClass}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent side="bottom" avoidCollisions={false}>
              <SelectItem value="todos">Todos os tipos</SelectItem>
              {propertyTypes.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-0">
          <Label htmlFor="cidade" className="mb-1.5 flex items-center gap-1.5 text-xs">
            <MapPin className="size-3.5 text-muted-foreground" aria-hidden="true" /> Cidade
          </Label>
          <Select value={filters.city} onValueChange={(value) => update("city", value)}>
            <SelectTrigger id="cidade" className={selectTriggerClass}>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent side="bottom" avoidCollisions={false}>
              {cities.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-0">
          <Label htmlFor="bairro" className="mb-1.5 flex items-center gap-1.5 text-xs">
            <Building2 className="size-3.5 text-muted-foreground" aria-hidden="true" /> Bairro
          </Label>
          <Select
            value={filters.neighborhood}
            onValueChange={(value) => update("neighborhood", value)}
          >
            <SelectTrigger id="bairro" className={selectTriggerClass}>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent side="bottom" avoidCollisions={false}>
              {neighborhoods.map((n) => (
                <SelectItem key={n} value={n}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-0">
          <Label htmlFor="preco-maximo" className="mb-1.5 block text-xs font-medium">
            Preço máximo (R$)
          </Label>
          <Input
            id="preco-maximo"
            inputMode="numeric"
            className="h-11"
            placeholder="Ex: 500000"
            value={filters.priceMax}
            onChange={(e) => update("priceMax", e.target.value.replace(/\D/g, ""))}
          />
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
        {loading ? "Buscando..." : "Buscar"}
      </Button>

      <div aria-live="polite" className="mt-3 text-sm">
        {error && <p className="text-destructive">{error}</p>}
        {message && <p className="text-muted-foreground">{message}</p>}
      </div>
    </form>
  );
}
