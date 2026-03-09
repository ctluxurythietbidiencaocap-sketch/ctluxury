import { useEffect, useRef } from "react";
import { Wifi, Smartphone, Sun, Wind, ShieldCheck } from "lucide-react";
import smartHomeImg from "@/assets/smart-home.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const featureIcons = [
  <Sun size={24} />, <Wind size={24} />, <Wind size={24} />,
  <ShieldCheck size={24} />, <Smartphone size={24} />, <Wifi size={24} />,
];

const SmartHomeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-animate").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = translations.smarthome.features;

  return (
    <section id="smarthome" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">{t(translations.smarthome.label, lang)}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">{t(translations.smarthome.title, lang)}</h2>
          <div className="gold-line mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm scroll-animate">{t(translations.smarthome.subtitle, lang)}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-animate relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg">
              <img src={smartHomeImg} alt="Smart Home System" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold" />
            <div className="absolute bottom-8 left-8 card-luxury p-4 animate-glow-pulse">
              <div className="text-gold font-serif font-bold text-2xl">Smart</div>
              <div className="text-muted-foreground text-xs tracking-wider">Home Control</div>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="scroll-animate card-luxury p-5 group hover-lift" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-gold mb-3 group-hover:scale-110 transition-transform duration-300">{featureIcons[i]}</div>
                <h3 className="font-serif font-semibold text-foreground mb-2 text-sm group-hover:text-gold transition-colors duration-300">{t(feature.title, lang)}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{t(feature.desc, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHomeSection;
