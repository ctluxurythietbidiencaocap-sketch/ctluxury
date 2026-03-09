import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", email: "", project: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: "Hotline",
      value: "0889.271.571",
      href: "tel:0889271571",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "ctluxury.thietbidiencaocap@gmail.com",
      href: "mailto:ctluxury.thietbidiencaocap@gmail.com",
    },
    {
      icon: <MapPin size={20} />,
      label: "Địa Chỉ",
      value: "6A, hẻm 738, đường Lý Văn Sâm, khu phố 5, Phường Tam Hiệp, Tỉnh Đồng Nai",
      href: "https://maps.google.com/?q=Lý+Văn+Sâm+Tam+Hiệp+Đồng+Nai",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 7%))" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Liên Hệ</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">Liên Hệ Với Chúng Tôi</h2>
          <div className="gold-line mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm scroll-animate">
            Hãy để chúng tôi tư vấn giải pháp thiết bị điện cao cấp phù hợp nhất cho công trình của bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 scroll-animate">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gold mb-2">CT LUXURY</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                CT LUXURY HIGH-END ELECTRICAL EQUIPMENT COMPANY LIMITED
              </p>
            </div>

            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === "Địa Chỉ" ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 shrink-0 rounded-lg">
                  {info.icon}
                </div>
                <div>
                  <div className="text-gold/70 text-xs tracking-widest uppercase mb-1">{info.label}</div>
                  <div className="text-foreground text-sm leading-relaxed group-hover:text-gold transition-colors duration-300">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Quick buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="tel:0889271571"
                className="btn-luxury text-xs rounded-none flex items-center gap-2 flex-1 justify-center py-3"
              >
                <Phone size={14} />
                Gọi Ngay
              </a>
              <a
                href="https://zalo.me/0889271571"
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-outline text-xs rounded-none flex items-center gap-2 flex-1 justify-center py-3"
              >
                <MessageCircle size={14} />
                Chat Zalo
              </a>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden border border-gold/20 mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.234567890123!2d106.82!3d10.944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sL%C3%BD+V%C4%83n+S%C3%A2m%2C+Tam+Hi%E1%BB%87p%2C+%C4%90%E1%BB%93ng+Nai!5e0!3m2!1svi!2svn!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="CT Luxury Location"
                className="grayscale contrast-125 brightness-75"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-animate card-luxury p-8">
            <h3 className="font-serif text-xl font-bold text-gold mb-6 tracking-wider">Yêu Cầu Tư Vấn</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4">
                <CheckCircle className="text-gold animate-scale-in" size={48} />
                <p className="text-foreground font-serif text-lg">Cảm ơn bạn đã liên hệ!</p>
                <p className="text-muted-foreground text-sm text-center">
                  Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gold/70 tracking-wider uppercase mb-1 block">Họ Tên *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-border focus:border-gold px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 rounded-lg"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gold/70 tracking-wider uppercase mb-1 block">Điện Thoại *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border border-border focus:border-gold px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 rounded-lg"
                      placeholder="0888.xxx.xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gold/70 tracking-wider uppercase mb-1 block">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-border focus:border-gold px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 rounded-lg"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="text-xs text-gold/70 tracking-wider uppercase mb-1 block">Loại Công Trình</label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full bg-card border border-border focus:border-gold px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 rounded-lg"
                  >
                    <option value="">Chọn loại công trình</option>
                    <option value="biet-thu-co-dien">Biệt thự cổ điển</option>
                    <option value="biet-thu-tan-co-dien">Biệt thự tân cổ điển</option>
                    <option value="lau-dai">Lâu đài cổ điển</option>
                    <option value="villa">Villa cao cấp</option>
                    <option value="resort">Resort</option>
                    <option value="khach-san">Khách sạn</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gold/70 tracking-wider uppercase mb-1 block">Nội Dung Tư Vấn</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-border focus:border-gold px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 rounded-lg resize-none"
                    placeholder="Mô tả yêu cầu của bạn..."
                  />
                </div>

                <button type="submit" className="btn-luxury w-full text-sm tracking-[0.2em] rounded-none flex items-center justify-center gap-2 py-4">
                  <Send size={14} />
                  Gửi Yêu Cầu Tư Vấn
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
