import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navItems = [
  { label: "Trang Chủ", href: "#home" },
  { label: "Giới Thiệu", href: "#about" },
  { label: "Sản Phẩm", href: "#products" },
  { label: "Smart Home", href: "#smarthome" },
  { label: "Công Trình", href: "#projects" },
  { label: "Tin Tức", href: "#news" },
  { label: "Liên Hệ", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
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
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-3 group"
        >
          <img
            src={logoImg}
            alt="CT Luxury Logo"
            className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
          />
          <div className="text-left">
            <div className="text-gold font-serif font-bold text-xl tracking-widest leading-none">
              CT LUXURY
            </div>
            <div className="text-muted-foreground text-xs tracking-wider uppercase mt-0.5">
              High-End Electrical Equipment
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="px-4 py-2 text-sm tracking-wider text-foreground/80 hover:text-gold transition-all duration-300 relative group uppercase font-medium"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Hotline */}
        <a
          href="tel:0889271571"
          className="hidden lg:flex items-center gap-2 btn-luxury text-sm rounded-none tracking-widest"
        >
          <Phone size={14} />
          0889.271.571
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gold p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-md border-t border-gold/20 animate-fade-up">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="py-3 text-left text-foreground/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase text-sm border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:0889271571"
              className="mt-4 btn-luxury text-center text-sm rounded-none tracking-widest flex items-center justify-center gap-2"
            >
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
