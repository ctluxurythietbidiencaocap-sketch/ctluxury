import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      <div ref={parallaxRef} className="absolute inset-0 scale-110" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 animate-float">
          <img src={logoImg} alt="CT Luxury" className="h-24 w-24 object-contain mx-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
          <div className="text-gold text-xs tracking-[0.5em] uppercase">Est. Vietnam</div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-gold-gradient animate-fade-up tracking-widest">CT LUXURY</h1>

        <p className="text-xl md:text-2xl tracking-[0.2em] text-champagne uppercase mb-4 font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {t(translations.hero.subtitle, lang)}
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {t(translations.hero.description, lang)}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <button onClick={() => scrollTo("#products")} className="btn-luxury text-sm tracking-[0.2em] rounded-none px-10 py-4">
            {t(translations.hero.cta_products, lang)}
          </button>
          <button onClick={() => scrollTo("#contact")} className="btn-luxury-outline text-sm tracking-[0.2em] rounded-none px-10 py-4">
            {t(translations.hero.cta_contact, lang)}
          </button>
        </div>

        <button onClick={() => scrollTo("#about")} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300 animate-fade-up" style={{ animationDelay: "1s" }}>
          <span className="text-xs tracking-widest uppercase">{t(translations.hero.scroll, lang)}</span>
          <ChevronDown className="animate-bounce" size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
