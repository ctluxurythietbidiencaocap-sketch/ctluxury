import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const navKeys = ["home", "about", "products", "smarthome", "projects", "news", "contact"] as const;
const navHrefs = ["#home", "#about", "#products", "#smarthome", "#projects", "#news", "#contact"];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gold/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
          <img src={logoImg} alt="CT Luxury Logo" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          <div className="text-left">
            <div className="text-gold font-serif font-bold text-xl tracking-widest leading-none">CT LUXURY</div>
            <div className="text-muted-foreground text-xs tracking-wider uppercase mt-0.5">High-End Electrical Equipment</div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => scrollTo(navHrefs[i])}
              className="px-4 py-2 text-sm tracking-wider text-foreground/80 hover:text-gold transition-all duration-300 relative group uppercase font-medium"
            >
              {t(translations.nav[key], lang)}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider text-gold/80 hover:text-gold border border-gold/30 hover:border-gold/60 transition-all duration-300 uppercase font-medium"
          >
            <Globe size={14} />
            {lang === "vi" ? "EN" : "VI"}
          </button>
          <a href="tel:0889271571" className="flex items-center gap-2 btn-luxury text-sm rounded-none tracking-widest">
            <Phone size={14} />
            0889.271.571
          </a>
        </div>

        <button className="lg:hidden text-gold p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-md border-t border-gold/20 animate-fade-up">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navKeys.map((key, i) => (
              <button
                key={key}
                onClick={() => scrollTo(navHrefs[i])}
                className="py-3 text-left text-foreground/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase text-sm border-b border-white/5"
              >
                {t(translations.nav[key], lang)}
              </button>
            ))}
            <button
              onClick={() => { toggleLanguage(); setMenuOpen(false); }}
              className="py-3 text-left text-gold/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase text-sm border-b border-white/5 flex items-center gap-2"
            >
              <Globe size={14} />
              {lang === "vi" ? "English" : "Tiếng Việt"}
            </button>
            <a href="tel:0889271571" className="mt-4 btn-luxury text-center text-sm rounded-none tracking-widest flex items-center justify-center gap-2">
              <Phone size={14} />
              0889.271.571
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
