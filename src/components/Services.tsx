import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";
import * as Icons from "lucide-react";

// Helper to resolve icon dynamically
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
};

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clamping currentIndex when visibleCount changes
  useEffect(() => {
    const maxIndex = SERVICES.length - visibleCount;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    const maxIndex = SERVICES.length - visibleCount;
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const maxIndex = SERVICES.length - visibleCount;

  return (
    <section id="services" className="relative py-24 md:py-32 bg-brand-dark grid-bg overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest block mb-3">
            [ SERVICES &amp; CAPABILITIES ]
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6">
            What <br />
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
              We Do
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            We build custom marketing plans, create stunning designs, and launch paid ad campaigns tailored exactly to your business. We never use boring templates.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative overflow-hidden py-4 -mx-3 md:-mx-4 px-3 md:px-4">
          <motion.div
            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className="flex w-full"
          >
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 md:px-4"
              >
                <ServiceCard service={service} index={idx} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 max-w-7xl mx-auto">
          {/* Progress dots */}
          <div className="flex items-center gap-2 overflow-x-auto py-2 max-w-full">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-gradient-to-r from-brand-cyan to-brand-blue"
                    : "w-2 bg-white/10 hover:bg-white/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none"
              aria-label="Previous Slide"
            >
              <Icons.ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none"
              aria-label="Next Slide"
            >
              <Icons.ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

// Interactive 3D Tilt Card
interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Map mouse position to degree rotation bounds (-12 to 12)
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;

    setRotateX(rX);
    setRotateY(rY);

    // Calculate light reflection/glow style based on coordinates
    const gX = ((e.clientX - rect.left) / width) * 100;
    const gY = ((e.clientY - rect.top) / height) * 100;

    setGlowStyle({
      background: `radial-gradient(circle 200px at ${gX}% ${gY}%, rgba(255, 255, 255, 0.08), transparent)`,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowStyle({});
  };

  // Color mappings
  const getAccentBorderClass = (color: string) => {
    switch (color) {
      case "cyan":
        return "group-hover:border-brand-cyan/40";
      case "purple":
        return "group-hover:border-brand-purple/40";
      case "blue":
        return "group-hover:border-brand-blue/40";
      case "magenta":
        return "group-hover:border-brand-magenta/40";
      default:
        return "group-hover:border-brand-cyan/40";
    }
  };

  const getAccentTextClass = (color: string) => {
    switch (color) {
      case "cyan":
        return "text-brand-cyan";
      case "purple":
        return "text-brand-purple";
      case "blue":
        return "text-brand-blue";
      case "magenta":
        return "text-brand-magenta";
      default:
        return "text-brand-cyan";
    }
  };

  const getAccentBgClass = (color: string) => {
    switch (color) {
      case "cyan":
        return "bg-brand-cyan/10 text-brand-cyan";
      case "purple":
        return "bg-brand-purple/10 text-brand-purple";
      case "blue":
        return "bg-brand-blue/10 text-brand-blue";
      case "magenta":
        return "bg-brand-magenta/10 text-brand-magenta";
      default:
        return "bg-brand-cyan/10 text-brand-cyan";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-[1000px] cursor-default h-full"
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: rotateX === 0 ? "transform 0.5s ease" : "none",
        }}
        className={`interactive-card group h-full relative glass-panel p-8 rounded-2xl border border-white/5 transition-all duration-300 flex flex-col justify-between ${getAccentBorderClass(service.accentColor)} hover:shadow-2xl`}
      >
        {/* Dynamic spot reflection layer */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={glowStyle}
        />

        <div>
          {/* Upper Info Row */}
          <div className="flex items-center justify-between mb-8">
            <div className={`p-3.5 rounded-xl transition-transform duration-500 group-hover:scale-110 ${getAccentBgClass(service.accentColor)}`}>
              <DynamicIcon name={service.icon} className="w-6 h-6" />
            </div>
            <span className="font-mono text-[10px] text-gray-500 font-medium tracking-widest uppercase">
              [ CAP. 0{index + 1} ]
            </span>
          </div>

          {/* Title and Description */}
          <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        {/* Lower Info & Metrics */}
        <div>
          {/* Subtags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-mono text-gray-500 bg-white/[0.02] border border-white/5 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metric target ribbon */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-xs text-gray-500 font-mono uppercase">TARGET VELOCITY</span>
            <span className={`text-xs font-mono font-bold uppercase ${getAccentTextClass(service.accentColor)}`}>
              {service.metric}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
