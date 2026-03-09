import { useEffect, useRef } from "react";
import { Wifi, Smartphone, Sun, Wind, Eye, ShieldCheck } from "lucide-react";
import smartHomeImg from "@/assets/smart-home.jpg";

const features = [
  { icon: <Sun size={24} />, title: "Điều Khiển Ánh Sáng", desc: "Hệ thống dimmer thông minh tự động điều chỉnh ánh sáng theo thời gian và tâm trạng." },
  { icon: <Wind size={24} />, title: "Điều Khiển Rèm Cửa", desc: "Rèm tự động đóng mở theo lịch trình hoặc điều khiển từ xa bằng giọng nói." },
  { icon: <Wind size={24} />, title: "Điều Khiển Điều Hòa", desc: "Kiểm soát nhiệt độ thông minh, tiết kiệm năng lượng tối ưu cho toàn ngôi nhà." },
  { icon: <ShieldCheck size={24} />, title: "Hệ Thống Bảo Mật", desc: "Tích hợp camera AI, khóa thông minh và cảm biến chuyển động 24/7." },
  { icon: <Smartphone size={24} />, title: "Điều Khiển Smartphone", desc: "Quản lý toàn bộ ngôi nhà qua ứng dụng di động dù ở bất kỳ đâu trên thế giới." },
  { icon: <Wifi size={24} />, title: "Kết Nối IoT", desc: "Nền tảng IoT tiên tiến, kết nối liền mạch mọi thiết bị trong không gian sống." },
];

const SmartHomeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="smarthome" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Công Nghệ</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">Giải Pháp Smart Home</h2>
          <div className="gold-line mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm scroll-animate">
            Hệ thống nhà thông minh tích hợp toàn diện – nơi công nghệ gặp gỡ sự xa xỉ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="scroll-animate relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={smartHomeImg}
                alt="Smart Home System"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
            {/* Decorations */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold" />

            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 card-luxury p-4 animate-glow-pulse">
              <div className="text-gold font-serif font-bold text-2xl">Smart</div>
              <div className="text-muted-foreground text-xs tracking-wider">Home Control</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="scroll-animate card-luxury p-5 group hover-lift"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2 text-sm group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHomeSection;
