import { ReactNode, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Globe, ArrowLeft } from "lucide-react";
import logoImg from "@/assets/logo.png";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const pageNavItems = [
  { key: "home" as const, path: "/" },
  { key: "about" as const, path: "/about" },
  { key: "products" as const, path: "/products" },
  { key: "smarthome" as const, path: "/#smarthome" },
  { key: "catalogue" as const, path: "/catalogue/switches" },
  { key: "news" as const, path: "/#news" },
  { key: "contact" as const, path: "/#contact" },
];

const PageLayout = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path.replace("/#", ""));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/95 backdrop-blur-md border-b border-gold/20 py-2" : "bg-black/80 backdrop-blur-sm py-4"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoImg} alt="CT Luxury Logo" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            <div className="text-left">
              <div className="text-gold font-serif font-bold text-xl tracking-widest leading-none">CT LUXURY</div>
              <div className="text-muted-foreground text-xs tracking-wider uppercase mt-0.5">High-End Electrical Equipment</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {pageNavItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-4 py-2 text-sm tracking-wider transition-all duration-300 relative group uppercase font-medium ${isActive(item.path) ? "text-gold" : "text-foreground/80 hover:text-gold"}`}
              >
                {t(translations.nav[item.key], lang)}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gold transition-all duration-300 ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={toggleLanguage} className="flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider text-gold/80 hover:text-gold border border-gold/30 hover:border-gold/60 transition-all duration-300 uppercase font-medium">
              <Globe size={14} />
              {lang === "vi" ? "EN" : "VI"}
            </button>
            <a href="tel:0889271571" className="flex items-center gap-2 btn-luxury text-sm rounded-none tracking-widest">
              <Phone size={14} /> 0889.271.571
            </a>
          </div>

          <button className="lg:hidden text-gold p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-black/98 backdrop-blur-md border-t border-gold/20 animate-fade-up">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {pageNavItems.map((item) => (
                <Link key={item.key} to={item.path} onClick={() => setMenuOpen(false)} className="py-3 text-left text-foreground/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase text-sm border-b border-white/5">
                  {t(translations.nav[item.key], lang)}
                </Link>
              ))}
              <button onClick={() => { toggleLanguage(); setMenuOpen(false); }} className="py-3 text-left text-gold/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase text-sm border-b border-white/5 flex items-center gap-2">
                <Globe size={14} /> {lang === "vi" ? "English" : "Tiếng Việt"}
              </button>
              <a href="tel:0889271571" className="mt-4 btn-luxury text-center text-sm rounded-none tracking-widest flex items-center justify-center gap-2">
                <Phone size={14} /> 0889.271.571
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Page Hero Banner */}
      <main className="pt-20">{children}</main>

      <Footer />

      {/* Floating contact */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="tel:0889271571" className="w-12 h-12 bg-gold flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-glow-pulse" title="Gọi điện">
          <Phone size={20} className="text-black" />
        </a>
        <a href="https://zalo.me/0889271571" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden bg-[#0068ff]" title="Chat Zalo">
          <span className="text-white font-bold text-xs">Zalo</span>
        </a>
      </div>
    </div>
  );
};

export default PageLayout;
