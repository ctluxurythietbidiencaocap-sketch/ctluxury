import { Facebook, Youtube, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Trang Chủ", href: "#home" },
    { label: "Giới Thiệu", href: "#about" },
    { label: "Sản Phẩm", href: "#products" },
    { label: "Smart Home", href: "#smarthome" },
    { label: "Công Trình", href: "#projects" },
    { label: "Tin Tức", href: "#news" },
    { label: "Liên Hệ", href: "#contact" },
  ];

  return (
    <footer className="bg-black border-t border-gold/20 relative overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImg}
                alt="CT Luxury"
                className="h-14 w-14 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
              />
              <div>
                <div className="text-gold font-serif font-bold text-2xl tracking-widest">CT LUXURY</div>
                <div className="text-muted-foreground text-xs tracking-wider">High-End Electrical Equipment</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2 italic">
              "Luxury Electrical Solutions for Elite Living"
            </p>
            <p className="text-foreground/60 text-xs leading-relaxed max-w-sm">
              Nhà phân phối thiết bị điện cao cấp, hệ thống chiếu sáng và nhà thông minh chuẩn châu Âu cho các công trình đẳng cấp.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-black transition-all duration-300 rounded-lg"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://zalo.me/0889271571"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-black transition-all duration-300 rounded-lg"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-black transition-all duration-300 rounded-lg"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold font-serif font-semibold tracking-wider mb-5 uppercase text-sm">Menu Nhanh</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground hover:text-gold text-sm transition-colors duration-300 tracking-wider flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/0 group-hover:bg-gold transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-serif font-semibold tracking-wider mb-5 uppercase text-sm">Liên Hệ</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0889271571" className="flex items-start gap-3 group">
                  <Phone className="text-gold/70 group-hover:text-gold mt-0.5 shrink-0 transition-colors duration-300" size={14} />
                  <span className="text-foreground/60 text-xs hover:text-gold transition-colors duration-300">0889.271.571</span>
                </a>
              </li>
              <li>
                <a href="mailto:ctluxury.thietbidiencaocap@gmail.com" className="flex items-start gap-3 group">
                  <Mail className="text-gold/70 group-hover:text-gold mt-0.5 shrink-0 transition-colors duration-300" size={14} />
                  <span className="text-foreground/60 text-xs hover:text-gold transition-colors duration-300 break-all">
                    ctluxury.thietbidiencaocap@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold/70 mt-0.5 shrink-0" size={14} />
                  <span className="text-foreground/60 text-xs leading-relaxed">
                    6A, hẻm 738, đường Lý Văn Sâm, khu phố 5, Phường Tam Hiệp, Tỉnh Đồng Nai
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs tracking-wider">
            © 2025 CT LUXURY HIGH-END ELECTRICAL EQUIPMENT COMPANY LIMITED. All rights reserved.
          </p>
          <p className="text-gold/40 text-xs tracking-wider">
            Luxury · Elegance · Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
