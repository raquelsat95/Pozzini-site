import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/pozzini/Header";
import { Hero } from "@/components/pozzini/Hero";
import { FeaturedProperties } from "@/components/pozzini/FeaturedProperties";
import { PropertyCategories } from "@/components/pozzini/PropertyCategories";
import { Services } from "@/components/pozzini/Services";
import { AboutPozzini } from "@/components/pozzini/AboutPozzini";
import { BrokerSection } from "@/components/pozzini/BrokerSection";
import { CTASection } from "@/components/pozzini/CTASection";
import { ContactSection } from "@/components/pozzini/ContactSection";
import { Testimonials } from "@/components/pozzini/Testimonials";
import { Footer } from "@/components/pozzini/Footer";

const title = "Pozziny | Imóveis para Comprar, Alugar e Investir";
const description =
  "Encontre imóveis selecionados para comprar, alugar e investir. Conheça a Pozziny e encontre a oportunidade ideal para você.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <PropertyCategories />
        <Services />
        <AboutPozzini />
        <BrokerSection />
        <CTASection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
