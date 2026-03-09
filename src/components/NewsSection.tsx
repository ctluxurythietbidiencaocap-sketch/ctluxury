import { useEffect, useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import villaImg from "@/assets/villa-classic.jpg";
import hotelImg from "@/assets/hotel-lobby.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const articleImages = [smartHomeImg, hotelImg, villaImg];

const NewsSection = () => {
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

  const articles = translations.news.articles;

  return (
    <section id="news" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">{t(translations.news.label, lang)}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">{t(translations.news.title, lang)}</h2>
          <div className="gold-line mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => {
            const category = typeof article.category === "string" ? article.category : t(article.category, lang);
            return (
              <div key={i} className="scroll-animate card-luxury group hover-lift overflow-hidden cursor-pointer" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="h-52 overflow-hidden relative">
                  <img src={articleImages[i]} alt={t(article.title, lang)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold tracking-widest px-3 py-1 bg-gold/90 text-black rounded-full">{category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                    <Calendar size={12} />
                    <span>{t(article.date, lang)}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-3 leading-tight group-hover:text-gold transition-colors duration-300">{t(article.title, lang)}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{t(article.excerpt, lang)}</p>
                  <div className="flex items-center gap-2 text-gold text-xs group-hover:gap-3 transition-all duration-300">
                    <span className="tracking-wider uppercase">{t(translations.news.readMore, lang)}</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
