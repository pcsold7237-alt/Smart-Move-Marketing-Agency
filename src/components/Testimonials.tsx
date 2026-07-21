import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play, Pause, Star, Sparkles, CheckCircle } from "lucide-react";

const testimonialsData = [
  {
    id: "ecomascendx",
    company: "Ecomascendx",
    category: "Amazon E-commerce Agency",
    impact: "Complete visual rebranding and professional asset alignment",
    stars: 5,
    img: "/src/assets/images/ecomascendx_testimonial_1784545677034.jpg",
    accent: "from-[#c0a07c] to-brand-cyan",
  },
  {
    id: "easygo",
    company: "EasyGo Travel Agency",
    category: "Meta Ads & Quality Leads",
    impact: "High-quality travel lead generation & optimized ad targeting",
    stars: 5,
    img: "/src/assets/images/easygo_testimonial_1784546062768.jpg",
    accent: "from-brand-cyan to-[#c0a07c]",
  },
  {
    id: "future-travel",
    company: "Future Tour & Travel Europe",
    category: "Travel Business Growth",
    impact: "Strategic content planning & massive boost in travel inquiries",
    stars: 5,
    img: "/src/assets/images/future_travel_testimonial_1784547557011.jpg",
    accent: "from-brand-cyan to-brand-purple",
  },
  {
    id: "dr-aniqa",
    company: "Dr. Aniqa Inam",
    category: "MRCP UK Medical Training",
    impact: "Professional Instagram aesthetics & highly active engagement",
    stars: 5,
    img: "/src/assets/images/mrcp_testimonial_aniqa_1784545885112.jpg",
    accent: "from-brand-cyan to-brand-purple",
  },
  {
    id: "sikis-salon",
    company: "Sikis Salon & Aesthetics",
    category: "Beauty & Aesthetics Market",
    impact: "Transformed salon aesthetics & noticeable customer inquiry growth",
    stars: 5,
    img: "/src/assets/images/sikis_testimonial_clean_1784547131638.jpg",
    accent: "from-[#c0a07c] to-brand-purple",
  },
  {
    id: "haga-bagel",
    company: "Haga Bagel",
    category: "Swedish Restaurant & Cafe",
    impact: "Total social media makeover & highly profitable Facebook ad campaigns",
    stars: 5,
    img: "/src/assets/images/haga_bagel_testimonial_1784548400684.jpg",
    accent: "from-brand-purple to-[#c0a07c]",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const slideDuration = 6000; // 6 seconds per slide
  const stepTime = 100; // Updates progress every 100ms

  // Handle slide transitions
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    setProgress(0);
  }, []);

  const handleSelect = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
  };

  // Autoplay Logic with fluid Progress Bar
  useEffect(() => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
    }

    if (isPlaying) {
      progressTimerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + (stepTime / slideDuration) * 100;
        });
      }, stepTime);
    }

    return () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [isPlaying, handleNext]);

  const activeTestimonial = testimonialsData[currentIndex];

  // Variants for slide animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-brand-dark/95 border-b border-white/5 overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest block mb-3">
            [ 06 // PARTNER STORIES ]
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6">
            Validated Growth <br />
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Client Confessions
            </span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base max-w-xl mx-auto">
            Swipe or slide through our direct proof elements. Real client accounts, verified outcomes, outstanding results.
          </p>
        </div>

        {/* Company Quick-Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              id={`tab-btn-${item.id}`}
              onClick={() => handleSelect(idx)}
              className={`px-4 py-2 rounded-full font-mono text-xs border transition-all duration-300 relative ${
                idx === currentIndex
                  ? "bg-gradient-to-r from-brand-cyan/15 to-brand-purple/15 text-white border-brand-cyan/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  : "bg-brand-dark-card/20 text-gray-500 border-white/5 hover:border-white/20 hover:text-gray-300"
              }`}
            >
              {item.company}
              {idx === currentIndex && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-cyan rounded-full animate-ping" />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-dark-card/10 rounded-3xl p-6 md:p-8 border border-white/5 relative backdrop-blur-sm">
          
          {/* Left Column: Metadata & Controls (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeTestimonial.category}</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                {activeTestimonial.company}
              </h3>

              {/* Stars & Verification badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-yellow-500 gap-1">
                  {[...Array(activeTestimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full font-mono">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified Client</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-brand-cyan/30 pl-4 italic">
                  &ldquo;{activeTestimonial.impact}&rdquo;
                </p>
                <div className="text-xs font-mono text-gray-500">
                  PLATFORM INTEGRATION &bull; DIRECT CASE ARTIFACT
                </div>
              </div>
            </div>

            {/* Slider Navigation & Autoplay Progress Controls */}
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Play/Pause & Chevron Navigation */}
              <div className="flex items-center gap-3">
                <button
                  id="prev-btn"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/10 bg-brand-dark-card/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  id="play-pause-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full border border-white/10 bg-brand-dark-card/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300"
                  aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  id="next-btn"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/10 bg-brand-dark-card/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Bar Loader indicator */}
              <div className="flex-1 max-w-[200px]">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 mb-1">
                  <span>AUTOPLAY STATUS</span>
                  <span>{isPlaying ? "ACTIVE" : "PAUSED"}</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple transition-all duration-100 ease-linear"
                    style={{ width: `${isPlaying ? progress : 0}%` }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: High-Fidelity Testimonial Image (7 cols) */}
          <div className="lg:col-span-7 relative flex justify-center items-center py-4">
            
            {/* Elegant outer dynamic background glow match-themed */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${activeTestimonial.accent} rounded-3xl blur-[50px] opacity-20 pointer-events-none transition-all duration-1000`} />

            <div className="w-full max-w-xl mx-auto relative group">
              
              {/* Outer border flare */}
              <div className={`absolute -inset-1.5 bg-gradient-to-r ${activeTestimonial.accent} rounded-3xl blur opacity-25 group-hover:opacity-45 transition duration-1000`} />

              {/* Image Frame Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-brand-dark-card/30 flex justify-center items-center">
                
                {/* Framer Motion Slide Transition wrapper */}
                <div className="w-full select-none relative overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full flex justify-center items-center"
                    >
                      <img
                        src={activeTestimonial.img}
                        alt={`${activeTestimonial.company} Verified Client Testimonial`}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto max-h-[600px] object-contain transform hover:scale-[1.015] transition-transform duration-700 ease-out"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Bottom Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              id={`pagination-dot-${idx}`}
              onClick={() => handleSelect(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-brand-cyan" : "w-2 bg-white/10 hover:bg-white/25"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

