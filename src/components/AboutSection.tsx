import { useEffect, useRef } from "react";
import { Award, Star, Shield, Gem } from "lucide-react";
import villaImg from "@/assets/villa-classic.jpg";

const stats = [
  { value: "10+", label: "Năm Kinh Nghiệm" },
  { value: "500+", label: "Công Trình" },
  { value: "50+", label: "Thương Hiệu Cao Cấp" },
  { value: "100%", label: "Hài Lòng" },
];

const projectTypes = [
  { icon: "🏰", label: "Biệt thự cổ điển" },
  { icon: "🏛️", label: "Biệt thự tân cổ điển" },
  { icon: "🗼", label: "Lâu đài cổ điển" },
  { icon: "🌿", label: "Villa cao cấp" },
  { icon: "🏖️", label: "Resort" },
  { icon: "🏨", label: "Khách sạn" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-animate").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Về Chúng Tôi</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">
            CT LUXURY
          </h2>
          <div className="gold-line mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed scroll-animate">
            Đơn vị chuyên cung cấp giải pháp thiết bị điện cao cấp tại Việt Nam
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="scroll-animate relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={villaImg}
                alt="CT Luxury Projects"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Gold corner decoration */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold" />
          </div>

          {/* Content */}
          <div className="scroll-animate">
            <p className="text-foreground/80 text-base leading-relaxed mb-6">
              <strong className="text-gold">CT LUXURY</strong> là nhà phân phối thiết bị điện cao cấp, hệ thống chiếu sáng, thiết bị nhà thông minh và thiết bị phòng tắm chuẩn châu Âu hàng đầu tại Việt Nam.
            </p>
            <p className="text-foreground/70 text-base leading-relaxed mb-8">
              Với hơn một thập kỷ kinh nghiệm, chúng tôi tự hào là đối tác tin cậy cho các công trình đẳng cấp, mang đến những giải pháp tối ưu và tinh tế nhất cho không gian sống cao cấp.
            </p>

            {/* Mission */}
            <div className="border border-gold/30 p-6 rounded-lg bg-gold/5 mb-8">
              <div className="flex items-start gap-3">
                <Gem className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-gold font-serif font-semibold mb-2 tracking-wider">SỨ MỆNH</div>
                  <p className="text-foreground/70 text-sm leading-relaxed italic">
                    "Mang đến các giải pháp thiết bị điện và nhà thông minh đẳng cấp châu Âu cho các công trình sang trọng tại Việt Nam."
                  </p>
                </div>
              </div>
            </div>

            {/* Project types */}
            <div className="grid grid-cols-3 gap-3">
              {projectTypes.map((type) => (
                <div
                  key={type.label}
                  className="card-luxury p-3 text-center hover-lift cursor-default"
                >
                  <div className="text-2xl mb-1">{type.icon}</div>
                  <div className="text-xs text-foreground/70 tracking-wider leading-tight">{type.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="scroll-animate card-luxury p-8 text-center hover-lift"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl font-serif font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
