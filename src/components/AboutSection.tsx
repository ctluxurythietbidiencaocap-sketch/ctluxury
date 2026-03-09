import { useEffect, useRef } from "react";
import { Gem, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import villaImg from "@/assets/villa-classic.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const projectTypeKeys = ["classical_villa", "neoclassical_villa", "classical_castle", "premium_villa", "resort", "hotel"] as const;
const projectTypeIcons = ["🏰", "🏛️", "🗼", "🌿", "🏖️", "🏨"];

const statValues = ["10+", "500+", "50+", "100%"];
const statKeys = ["experience", "projects", "brands", "satisfaction"] as const;

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-animate").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">{t(translations.about.label, lang)}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">CT LUXURY</h2>
          <div className="gold-line mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed scroll-animate">
            {t(translations.about.subtitle, lang)}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="scroll-animate relative">
            <div className="relative overflow-hidden rounded-lg">
              <img src={villaImg} alt="CT Luxury Projects" className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold" />
          </div>

          <div className="scroll-animate">
            <p className="text-foreground/80 text-base leading-relaxed mb-6">
              <strong className="text-gold">CT LUXURY</strong> {t(translations.about.desc1, lang)}
            </p>
            <p className="text-foreground/70 text-base leading-relaxed mb-8">
              {t(translations.about.desc2, lang)}
            </p>

            <div className="border border-gold/30 p-6 rounded-lg bg-gold/5 mb-8">
              <div className="flex items-start gap-3">
                <Gem className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-gold font-serif font-semibold mb-2 tracking-wider">{t(translations.about.mission_label, lang)}</div>
                  <p className="text-foreground/70 text-sm leading-relaxed italic">
                    "{t(translations.about.mission, lang)}"
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {projectTypeKeys.map((key, i) => (
                <div key={key} className="card-luxury p-3 text-center hover-lift cursor-default">
                  <div className="text-2xl mb-1">{projectTypeIcons[i]}</div>
                  <div className="text-xs text-foreground/70 tracking-wider leading-tight">{t(translations.about.projectTypes[key], lang)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statKeys.map((key, i) => (
            <div key={key} className="scroll-animate card-luxury p-8 text-center hover-lift" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-4xl font-serif font-bold text-gold mb-2">{statValues[i]}</div>
              <div className="text-muted-foreground text-sm tracking-wider uppercase">{t(translations.about.stats[key], lang)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
