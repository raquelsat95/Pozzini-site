import { useState, type FormEvent } from "react";
import { Calculator, Loader2 } from "lucide-react";
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
import { Section } from "@/components/pozzini/Section";

/** Taxa de juros anual usada na estimativa (ajustar em um único lugar). */
export const ANNUAL_INTEREST_RATE = 0.1149;

const TERM_OPTIONS = [10, 15, 20, 25, 30];

export interface FinancingResult {
  financedAmount: number;
  firstInstallmentSac: number;
  lastInstallmentSac: number;
  installmentPrice: number;
  months: number;
}

function currency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

function parseAmount(raw: string): number {
  const normalized = raw.replace(/\./g, "").replace(",", ".").replace(/[^\d.]/g, "");
  return Number(normalized);
}

export function calculateFinancing(
  propertyValue: number,
  downPayment: number,
  years: number,
): FinancingResult {
  const financedAmount = propertyValue - downPayment;
  const months = years * 12;
  const monthlyRate = Math.pow(1 + ANNUAL_INTEREST_RATE, 1 / 12) - 1;

  const amortization = financedAmount / months;
  const firstInstallmentSac = amortization + financedAmount * monthlyRate;
  const lastInstallmentSac = amortization + amortization * monthlyRate;

  const factor = Math.pow(1 + monthlyRate, months);
  const installmentPrice = (financedAmount * monthlyRate * factor) / (factor - 1);

  return { financedAmount, firstInstallmentSac, lastInstallmentSac, installmentPrice, months };
}

export function FinancingSimulator() {
  const [propertyValue, setPropertyValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [downPaymentMode, setDownPaymentMode] = useState<"brl" | "percent">("brl");
  const [years, setYears] = useState("30");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<FinancingResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = parseAmount(propertyValue);
    const rawDown = parseAmount(downPayment);
    const down = downPaymentMode === "percent" ? (value * rawDown) / 100 : rawDown;
    const term = Number(years);

    console.log("[FinancingSimulator]", "submit", { value, down, downPaymentMode, term });

    if (!Number.isFinite(value) || value <= 0) {
      setResult(null);
      setError("Informe um valor de imóvel válido e maior que zero.");
      return;
    }
    if (!Number.isFinite(down) || down < 0) {
      setResult(null);
      setError("Informe um valor de entrada válido.");
      return;
    }
    if (down >= value) {
      setResult(null);
      setError("A entrada precisa ser menor que o valor do imóvel.");
      return;
    }
    if (!Number.isFinite(term) || term <= 0) {
      setResult(null);
      setError("Selecione um prazo válido.");
      return;
    }

    setError(null);
    setLoading(true);

    window.setTimeout(() => {
      try {
        const computed = calculateFinancing(value, down, term);
        console.log("[FinancingSimulator]", "resultado", computed);
        setResult(computed);
      } catch (err) {
        console.log("[FinancingSimulator]", "erro no cálculo", err);
        setError("Não foi possível calcular agora. Revise os valores e tente novamente.");
        setResult(null);
      } finally {
        setLoading(false);
      }
    }, 350);
  }

  return (
    <Section
      id="simulador"
      eyebrow="Simulador"
      title="Simule seu financiamento"
      subtitle="Faça uma estimativa rápida da parcela mensal e entenda como o seu próximo imóvel pode caber no seu planejamento."
      className="bg-secondary/40"
    >
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_1fr]">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-foreground/10 bg-card p-5 shadow-sm sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="sim-valor">Valor do imóvel (R$)</Label>
              <Input
                id="sim-valor"
                inputMode="decimal"
                placeholder="Ex.: 650.000"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="sim-entrada">Valor de entrada</Label>
              <Input
                id="sim-entrada"
                inputMode="decimal"
                placeholder={downPaymentMode === "percent" ? "Ex.: 20" : "Ex.: 130.000"}
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="sim-modo">Entrada em</Label>
              <Select
                value={downPaymentMode}
                onValueChange={(v) => setDownPaymentMode(v as "brl" | "percent")}
              >
                <SelectTrigger id="sim-modo" className="mt-2 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brl">Reais (R$)</SelectItem>
                  <SelectItem value="percent">Percentual (%)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="sim-prazo">Prazo desejado</Label>
              <Select value={years} onValueChange={setYears}>
                <SelectTrigger id="sim-prazo" className="mt-2 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TERM_OPTIONS.map((option) => (
                    <SelectItem key={option} value={String(option)}>
                      {option} anos
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-5 text-sm font-medium text-destructive">
              {error}
            </p>
          )}

          <Button type="submit" size="lg" disabled={loading} className="mt-6 w-full">
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Calculando...
              </>
            ) : (
              <>
                <Calculator className="size-4" aria-hidden="true" />
                Calcular estimativa
              </>
            )}
          </Button>
        </form>

        <div
          aria-live="polite"
          className="rounded-2xl border border-foreground/10 bg-card p-5 shadow-sm sm:p-7"
        >
          {result ? (
            <div>
              <p className="eyebrow">Estimativa</p>
              <p className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
                {currency(result.installmentPrice)}
                <span className="ml-1 font-sans text-base font-medium text-muted-foreground">
                  /mês
                </span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Parcela fixa estimada na tabela Price em {result.months} meses.
              </p>

              <dl className="mt-6 space-y-3 border-t border-foreground/10 pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Valor financiado</dt>
                  <dd className="font-medium text-foreground">
                    {currency(result.financedAmount)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Primeira parcela (SAC)</dt>
                  <dd className="font-medium text-foreground">
                    {currency(result.firstInstallmentSac)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Última parcela (SAC)</dt>
                  <dd className="font-medium text-foreground">
                    {currency(result.lastInstallmentSac)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Taxa considerada</dt>
                  <dd className="font-medium text-foreground">
                    {(ANNUAL_INTEREST_RATE * 100).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                    })}
                    % ao ano
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-xs text-muted-foreground">
                Simulação estimada. Valores finais dependem da análise de crédito e das condições
                do banco escolhido.
              </p>

              <Button asChild size="lg" variant="gold" className="mt-6 w-full">
                <a href="#contato">Falar com um especialista</a>
              </Button>
            </div>
          ) : (
            <div className="flex h-full flex-col justify-center text-center">
              <Calculator className="mx-auto size-8 text-gold" aria-hidden="true" />
              <p className="mt-4 font-display text-xl font-semibold text-foreground">
                Preencha os campos ao lado
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Em segundos você vê uma estimativa de parcela mensal para planejar sua compra.
              </p>
              <p className="mt-6 text-xs text-muted-foreground">
                Simulação estimada. Valores finais dependem da análise de crédito e das condições
                do banco escolhido.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
