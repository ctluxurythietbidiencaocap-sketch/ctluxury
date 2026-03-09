import { useEffect, useRef } from "react";
import villaImg from "@/assets/villa-classic.jpg";
import hotelImg from "@/assets/hotel-lobby.jpg";
import heroBgImg from "@/assets/hero-bg.jpg";
import bathroomImg from "@/assets/bathroom.jpg";

const projects = [
  {
    title: "Biệt Thự Cổ Điển",
    location: "Đồng Nai, Việt Nam",
    type: "Classical Villa",
    image: villaImg,
  },
  {
    title: "Khách Sạn 5 Sao",
    location: "TP. Hồ Chí Minh",
    type: "Luxury Hotel",
    image: hotelImg,
  },
  {
    title: "Lâu Đài Cổ Điển",
    location: "Bình Dương, Việt Nam",
    type: "Classical Castle",
    image: heroBgImg,
  },
  {
    title: "Phòng Tắm Cao Cấp",
    location: "Đà Nẵng, Việt Nam",
    type: "Premium Bathroom",
    image: bathroomImg,
  },
  {
    title: "Villa Cao Cấp",
    location: "Vũng Tàu, Việt Nam",
    type: "Luxury Villa",
    image: villaImg,
  },
  {
    title: "Resort 5 Sao",
    location: "Phú Quốc, Việt Nam",
    type: "Luxury Resort",
    image: hotelImg,
  },
];

const ProjectsSection = () => {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg, hsl(0 0% 7%), hsl(0 0% 4%))" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Portfolio</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="section-title text-gold-gradient scroll-animate">Công Trình Tiêu Biểu</h2>
          <div className="gold-line mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm scroll-animate">
            Những công trình đẳng cấp đã được CT LUXURY trang bị thiết bị và giải pháp cao cấp
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title + i}
              className="scroll-animate group relative overflow-hidden rounded-lg cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-gold text-xs tracking-widest uppercase mb-2">{project.type}</div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs tracking-wider">{project.location}</p>

                {/* Hover line */}
                <div className="mt-4 h-px bg-gradient-to-r from-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 rounded-lg transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
