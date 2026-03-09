import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo.png";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    const el = document.querySelector("#products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />

      {/* Golden glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo emblem */}
        <div className="mb-8 animate-float">
          <img
            src={logoImg}
            alt="CT Luxury"
            className="h-24 w-24 object-contain mx-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]"
          />
        </div>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
          <div className="text-gold text-xs tracking-[0.5em] uppercase">Est. Vietnam</div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Main title */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-gold-gradient animate-fade-up tracking-widest">
          CT LUXURY
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl tracking-[0.2em] text-champagne uppercase mb-4 font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Thiết Bị Điện Cao Cấp & Giải Pháp Nhà Thông Minh
        </p>

        {/* Description */}
        <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Nhà phân phối thiết bị điện cao cấp, hệ thống chiếu sáng, thiết bị nhà thông minh và thiết bị phòng tắm chuẩn châu Âu cho các công trình đẳng cấp.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={scrollToProducts}
            className="btn-luxury text-sm tracking-[0.2em] rounded-none px-10 py-4"
          >
            Khám Phá Sản Phẩm
          </button>
          <button
            onClick={scrollToContact}
            className="btn-luxury-outline text-sm tracking-[0.2em] rounded-none px-10 py-4"
          >
            Liên Hệ Tư Vấn
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors duration-300 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-xs tracking-widest uppercase">Khám Phá</span>
          <ChevronDown className="animate-bounce" size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
