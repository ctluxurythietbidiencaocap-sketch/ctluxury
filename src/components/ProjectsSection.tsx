import { useEffect, useRef } from "react";
import villaImg from "@/assets/villa-classic.jpg";
import hotelImg from "@/assets/hotel-lobby.jpg";
import heroBgImg from "@/assets/hero-bg.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const projectImages = [villaImg, hotelImg, heroBgImg, bathroomImg, villaImg, hotelImg];

const ProjectsSection = () => {
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

  const items = translations.projectsSection.items;

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(0 0% 7%), hsl(0 0% 4%))" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">{t(translations.projectsSection.label, lang)}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">{t(translations.projectsSection.title, lang)}</h2>
          <div className="gold-line mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm scroll-animate">{t(translations.projectsSection.subtitle, lang)}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, i) => (
            <div key={i} className="scroll-animate group relative overflow-hidden rounded-lg cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="h-72 overflow-hidden">
                <img src={projectImages[i]} alt={t(project.title, lang)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-gold text-xs tracking-widest uppercase mb-2">{project.type}</div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">{t(project.title, lang)}</h3>
                <p className="text-muted-foreground text-xs tracking-wider">{t(project.location, lang)}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 rounded-lg transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
