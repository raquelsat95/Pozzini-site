import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types/pozzini";

const initialData: ContactFormData = {
  name: "",
  whatsapp: "",
  email: "",
  goal: "",
  message: "",
};

type Errors = Partial<Record<keyof ContactFormData, string>>;

const selectClass =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactSection() {
  const { ref, visible } = useReveal<HTMLElement>();
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = <K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) =>
    setData((prev) => ({ ...prev, [key]: value }));

  function validate(): Errors {
    const next: Errors = {};
    if (data.name.trim().length < 2) next.name = "Informe seu nome completo.";
    const digits = data.whatsapp.replace(/\D/g, "");
    if (digits.length < 10) next.whatsapp = "Informe um WhatsApp com DDD.";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email))
      next.email = "Informe um e-mail válido.";
    if (!data.goal) next.goal = "Selecione o seu objetivo.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    console.log("[PozziniContactForm]", "envio solicitado", { ...data, message: "[omitido]" });
    try {
      // Sem backend conectado ainda: estrutura pronta para envio real futuro.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch (err) {
      console.log("[PozziniContactForm]", "erro no envio", err);
      setStatus("error");
    }
  }

  return (
    <section
      id="contato"
      ref={ref}
      className={cn("py-16 sm:py-20 lg:py-28", "reveal", visible && "reveal-in")}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="min-w-0">
          <p className="eyebrow">Contato</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Vamos encontrar a melhor oportunidade para você.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Conte o que você procura. Um consultor da Pozzini entra em contato para entender seu
            momento e apresentar as opções mais adequadas.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Fale com a Pozzini"
          className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-7"
        >
          <div className="grid gap-5">
            <div>
              <Label htmlFor="nome">Nome*</Label>
              <Input
                id="nome"
                className="mt-1.5 h-11"
                value={data.name}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "erro-nome" : undefined}
                onChange={(e) => update("name", e.target.value)}
              />
              {errors.name && (
                <p id="erro-nome" className="mt-1 text-xs text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <Label htmlFor="whatsapp">WhatsApp*</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  inputMode="tel"
                  placeholder="(00) 00000-0000"
                  className="mt-1.5 h-11"
                  value={data.whatsapp}
                  aria-invalid={!!errors.whatsapp}
                  aria-describedby={errors.whatsapp ? "erro-whatsapp" : undefined}
                  onChange={(e) => update("whatsapp", e.target.value)}
                />
                {errors.whatsapp && (
                  <p id="erro-whatsapp" className="mt-1 text-xs text-destructive">
                    {errors.whatsapp}
                  </p>
                )}
              </div>

              <div className="min-w-0">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  className="mt-1.5 h-11"
                  value={data.email}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "erro-email" : undefined}
                  onChange={(e) => update("email", e.target.value)}
                />
                {errors.email && (
                  <p id="erro-email" className="mt-1 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="objetivo">Objetivo*</Label>
              <select
                id="objetivo"
                className={cn(selectClass, "mt-1.5")}
                value={data.goal}
                aria-invalid={!!errors.goal}
                aria-describedby={errors.goal ? "erro-objetivo" : undefined}
                onChange={(e) => update("goal", e.target.value as ContactFormData["goal"])}
              >
                <option value="">Selecione</option>
                <option value="comprar">Comprar</option>
                <option value="alugar">Alugar</option>
                <option value="vender">Vender</option>
                <option value="investir">Investir</option>
              </select>
              {errors.goal && (
                <p id="erro-objetivo" className="mt-1 text-xs text-destructive">
                  {errors.goal}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                id="mensagem"
                rows={4}
                className="mt-1.5"
                placeholder="Conte um pouco sobre o imóvel que você procura."
                value={data.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </div>

            <Button type="submit" variant="gold" size="xl" disabled={status === "loading"}>
              {status === "loading" && <Loader2 className="animate-spin" />}
              {status === "loading" ? "Enviando..." : "Quero falar com a Pozzini"}
            </Button>

            <div aria-live="polite" className="text-sm">
              {status === "success" && (
                <p className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="size-4 text-gold" aria-hidden="true" />
                  Recebemos seus dados. O envio automático para a equipe será ativado quando o
                  atendimento online estiver conectado.
                </p>
              )}
              {status === "error" && (
                <p className="text-destructive">
                  Não foi possível enviar agora. Seus dados continuam preenchidos — tente novamente.
                </p>
              )}
            </div>
            <p className="text-xs text-muted-foreground">* Campos obrigatórios.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
