import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const catalogueItems = [
  { key: "switches", path: "/catalogue/switches", vi: "Catalogue Công Tắc Ổ Cắm ABE", en: "ABE Switches & Sockets Catalogue" },
  { key: "chandeliers", path: "/catalogue/chandeliers", vi: "CATALOGUE Đèn Chiếu Sáng & Trang Trí", en: "Lighting & Decorative Catalogue", children: [
    { key: "euroto2026", path: "/catalogue/euroto2026", vi: "CATALOGUE - EUROTO 2026", en: "CATALOGUE - EUROTO 2026" },
  ] },
  { key: "rangos", path: "/catalogue/rangos", vi: "Catalogue Thiết Bị Vệ Sinh RANGOS", en: "RANGOS Sanitary Catalogue" },
  { key: "flova", path: "/catalogue/flova", vi: "Catalogue Thiết Bị Vệ Sinh FLOVA", en: "FLOVA Sanitary Catalogue" },
  { key: "cameras", path: "/catalogue/cameras", vi: "Catalogue Camera An Ninh", en: "Security Camera Catalogue" },
];

const navItems = [
  { key: "home" as const, href: "#home", path: "/" },
  { key: "about" as const, href: "#about", path: "/about" },
  { key: "products" as const, href: "#products", path: "/products" },
  { key: "smarthome" as const, href: "#smarthome", path: null },
  { key: "catalogue" as const, href: null, path: null, hasDropdown: true },
  { key: "news" as const, href: "#news", path: null },
  { key: "contact" as const, href: "#contact", path: null },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogueOpen, setCatalogueOpen] = useState(false);
  const [mobileCatalogueOpen, setMobileCatalogueOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lang, toggleLanguage } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCatalogueOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNav = (item: typeof navItems[0]) => {
    setMenuOpen(false);
    if (isHome && item.href) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavItem = (item: typeof navItems[0]) => {
    const label = t(translations.nav[item.key], lang);

    if ('hasDropdown' in item && item.hasDropdown) {
      return (
        <div key={item.key} ref={dropdownRef} className="relative">
          <button
            onClick={() => setCatalogueOpen(!catalogueOpen)}
            className="px-4 py-2 text-sm tracking-wider text-foreground/80 hover:text-gold transition-all duration-300 relative group uppercase font-medium flex items-center gap-1"
          >
            {label}
            <ChevronDown size={14} className={`transition-transform duration-200 ${catalogueOpen ? 'rotate-180' : ''}`} />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
          </button>
          {catalogueOpen && (
            <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gold/20 rounded-sm shadow-2xl z-50 animate-fade-up py-2">
              {catalogueItems.map((cat) => (
                <div key={cat.key}>
                  <Link
                    to={cat.path}
                    onClick={() => setCatalogueOpen(false)}
                    className="block px-5 py-3 text-sm text-foreground/70 hover:text-gold hover:bg-gold/5 transition-all duration-200 tracking-wide"
                  >
                    {lang === "vi" ? cat.vi : cat.en}
                  </Link>
                  {'children' in cat && cat.children && cat.children.map((child) => (
                    <Link
                      key={child.key}
                      to={child.path}
                      onClick={() => setCatalogueOpen(false)}
                      className="block pl-9 pr-5 py-2.5 text-sm text-foreground/50 hover:text-gold hover:bg-gold/5 transition-all duration-200 tracking-wide"
                    >
                      ↳ {lang === "vi" ? child.vi : child.en}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (isHome) {
      return (
        <button
          key={item.key}
          onClick={() => handleNav(item)}
          className="px-4 py-2 text-sm tracking-wider text-foreground/80 hover:text-gold transition-all duration-300 relative group uppercase font-medium"
        >
          {label}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
        </button>
      );
    }

    const to = item.path || `/${item.href}`;
    return (
      <Link
        key={item.key}
        to={to}
        className="px-4 py-2 text-sm tracking-wider text-foreground/80 hover:text-gold transition-all duration-300 relative group uppercase font-medium"
      >
        {label}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
      </Link>
    );
  };

  const renderMobileNavItem = (item: typeof navItems[0]) => {
    const label = t(translations.nav[item.key], lang);

    if ('hasDropdown' in item && item.hasDropdown) {
      return (
        <div key={item.key}>
          <button
            onClick={() => setMobileCatalogueOpen(!mobileCatalogueOpen)}
            className="py-3 w-full text-left text-foreground/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase text-sm border-b border-white/5 flex items-center justify-between"
          >
            {label}
            <ChevronDown size={14} className={`transition-transform duration-200 ${mobileCatalogueOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileCatalogueOpen && (
            <div className="pl-4 border-l border-gold/20 ml-2">
              {catalogueItems.map((cat) => (
                <div key={cat.key}>
                  <Link
                    to={cat.path}
                    onClick={() => { setMenuOpen(false); setMobileCatalogueOpen(false); }}
                    className="block py-2.5 text-sm text-foreground/60 hover:text-gold transition-colors duration-200 tracking-wide"
                  >
                    {lang === "vi" ? cat.vi : cat.en}
                  </Link>
                  {'children' in cat && cat.children && cat.children.map((child) => (
                    <Link
                      key={child.key}
                      to={child.path}
                      onClick={() => { setMenuOpen(false); setMobileCatalogueOpen(false); }}
                      className="block py-2 pl-4 text-sm text-foreground/40 hover:text-gold transition-colors duration-200 tracking-wide"
                    >
                      ↳ {lang === "vi" ? child.vi : child.en}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (isHome) {
      return (
        <button
          key={item.key}
          onClick={() => handleNav(item)}
          className="py-3 text-left text-foreground/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase text-sm border-b border-white/5"
        >
          {label}
        </button>
      );
    }

    const to = item.path || `/${item.href}`;
    return (
      <Link
        key={item.key}
        to={to}
        onClick={() => setMenuOpen(false)}
        className="py-3 text-left text-foreground/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase text-sm border-b border-white/5 block"
      >
        {label}
      </Link>
    );
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
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoImg} alt="CT Luxury Logo" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          <div className="text-left">
            <div className="text-gold font-serif font-bold text-xl tracking-widest leading-none">CT LUXURY</div>
            <div className="text-muted-foreground text-xs tracking-wider uppercase mt-0.5">High-End Electrical Equipment</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(renderNavItem)}
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
            {navItems.map(renderMobileNavItem)}
            <button
              onClick={() => { toggleLanguage(); setMenuOpen(false); }}
              className="py-3 text-left text-gold/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase text-sm border-b border-white/5 flex items-center gap-2"
            >
              <Globe size={14} />
              {lang === "vi" ? "English" : "Tiếng Việt"}
            </button>
            <a href="tel:0889271571" className="mt-4 btn-luxury text-center text-sm rounded-none tracking-widest flex items-center justify-center gap-2">
              <Phone size={14} /> 0889.271.571
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
