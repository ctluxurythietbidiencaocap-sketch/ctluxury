import { useEffect, useRef } from "react";
import { Zap, Lightbulb, Lock, Home, Camera, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import smartHomeImg from "@/assets/smart-home.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const icons = [
  <Zap size={32} />, <Lightbulb size={32} />, <Lock size={32} />,
  <Home size={32} />, <Camera size={32} />, <Droplets size={32} />,
];
const badges = ["ABE", "PRO", "SMART", "IoT", "4K AI", "EU"];
const images = [null, null, null, smartHomeImg, null, bathroomImg];

const ProductsSection = () => {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = translations.products.items;

  return (
    <section id="products" ref={sectionRef} className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 7%))" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">{t(translations.products.label, lang)}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">{t(translations.products.title, lang)}</h2>
          <div className="gold-line mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed scroll-animate">
            {t(translations.products.subtitle, lang)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product, i) => (
            <div key={i} className="scroll-animate card-luxury group hover-lift overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
              {images[i] && (
                <div className="h-48 overflow-hidden">
                  <img src={images[i]!} alt={t(product.title, lang)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gold group-hover:scale-110 transition-transform duration-300">{icons[i]}</div>
                  <span className="text-xs font-bold tracking-widest px-3 py-1 border border-gold/40 text-gold rounded-full">{badges[i]}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">{t(product.title, lang)}</h3>
                <div className="text-gold/70 text-xs tracking-wider uppercase mb-3">{t(product.brand, lang)}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(product.description, lang)}</p>
                <div className="grid grid-cols-2 gap-2">
                  {product.features[lang].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      <span className="text-xs text-foreground/60">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Link to="/products" className="btn-luxury-outline text-sm tracking-[0.2em] rounded-none px-10 py-3 inline-flex items-center gap-2">
            {lang === "vi" ? "Xem Tất Cả Sản Phẩm" : "View All Products"}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
