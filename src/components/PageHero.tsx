import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; path: string }[];
}

const PageHero = ({ label, title, subtitle, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 2%), hsl(0 0% 6%))" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-xs tracking-wider uppercase">
          {breadcrumb.map((item, i) => (
            <span key={item.path} className="flex items-center gap-2">
              {i > 0 && <span className="text-gold/40">/</span>}
              {i < breadcrumb.length - 1 ? (
                <Link to={item.path} className="text-muted-foreground hover:text-gold transition-colors duration-300">{item.label}</Link>
              ) : (
                <span className="text-gold">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase">{label}</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-gold-gradient tracking-wider mb-4">{title}</h1>
        {subtitle && <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
