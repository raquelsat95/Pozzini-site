import { useEffect, useRef } from "react";
import { SearchForm } from "./SearchForm";

const HERO_VIDEO_URL = "/hero-video.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      videoRef.current?.pause();
      return;
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.15, 80);
        if (videoRef.current) {
          videoRef.current.style.transform = `scale(1.08) translateY(${offset}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="topo" className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full scale-[1.08] object-cover will-change-transform"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/55 to-primary/90"
        />
        <div aria-hidden="true" className="hero-glow absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-36 pb-10 sm:px-6 sm:pt-44 lg:px-8 lg:pt-52 lg:pb-16">
        <div className="max-w-3xl">
          <p className="eyebrow">Imobiliária Pozziny</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] font-normal text-primary-foreground sm:text-5xl lg:text-6xl">
            Encontre o imóvel que combina com o seu momento.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/55 sm:text-lg">
            Na Pozziny, você encontra imóveis selecionados para comprar, alugar e investir com
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
