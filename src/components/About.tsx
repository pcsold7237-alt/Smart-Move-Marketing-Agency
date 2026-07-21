import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Activity, CheckCircle, Flame, Award, ShieldCheck, FileText, Sparkles, ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const stats = [
    { value: "500+", label: "Elite Campaigns", desc: "Crafted, split-tested, and scaled" },
    { value: "150+", label: "Happy Partners", desc: "Long-term compounding alliances" },
    { value: "20M+", label: "Organic Reach", desc: "Eyes commanded across feeds" },
    { value: "98%", label: "Satisfaction Rate", desc: "Sustained customer retention" },
  ];

  const slides = [
    {
      id: "philosophy",
      category: "OUR PHILOSOPHY",
      title: "Great Marketing is More Than Likes & Followers",
      desc: "At SmartMove Marketing Agency, we believe great marketing is about more than just likes and followers—it's about helping businesses grow with the right strategy. Every vertical we design, copy we write, and pixel we map is oriented towards building true real-world brand equity and business value.",
      icon: Sparkles,
      gradient: "from-brand-cyan/20 to-brand-cyan/5",
      borderColor: "group-hover:border-brand-cyan/30 border-brand-cyan/10",
      accentColor: "text-brand-cyan",
      tag: "STRATEGIC FOUNDATION"
    },
    {
      id: "who_we_serve",
      category: "WHO WE WORK WITH",
      title: "Stronger Presence & Consistent Results",
      desc: "We work with businesses that want a stronger online presence, more quality leads, and consistent results. Whether you're a restaurant looking to attract more customers, a travel agency aiming to increase bookings, or a growing business that needs a professional digital presence, we're here to help.",
      icon: Compass,
      gradient: "from-brand-purple/20 to-brand-purple/5",
      borderColor: "group-hover:border-brand-purple/30 border-brand-purple/10",
      accentColor: "text-brand-purple",
      tag: "IDEAL CLIENT blueprint"
    },
    {
      id: "approach",
      category: "OUR SIMPLE APPROACH",
      title: "Understand, Connect & Deliver Results",
      desc: "Our approach is simple: understand your business deeply, create content that connects emotionally with your audience, and run targeted marketing campaigns that deliver measurable results. We focus on building long-term relationships with our clients by providing honest communication, creative ideas, and reliable support.",
      icon: Activity,
      gradient: "from-brand-blue/20 to-brand-blue/5",
      borderColor: "group-hover:border-brand-blue/30 border-brand-blue/10",
      accentColor: "text-brand-blue",
      tag: "THE COMPASS METHOD"
    },
    {
      id: "what_we_offer",
      category: "WHAT WE OFFER",
      title: "Practical Services to Help You Stand Out",
      desc: "From social media management and content creation to high-performing Meta Ads, modern branding, and custom website solutions, we offer practical, end-to-end digital marketing services designed to help your business stand out and thrive in today's competitive market.",
      icon: CheckCircle,
      gradient: "from-yellow-500/20 to-yellow-500/5",
      borderColor: "group-hover:border-yellow-500/30 border-yellow-500/10",
      accentColor: "text-yellow-500",
      tag: "CAPABILITIES PORTFOLIO"
    },
    {
      id: "promise",
      category: "OUR PROMISE",
      title: "Your Growth is Our Single Priority",
      desc: "At SmartMove Marketing Agency, your growth is our priority—and every strategy we create is built with that goal in mind. We operate with radical transparency, rigorous campaign monitoring, and premium support so that you always know exactly where your marketing investment stands.",
      icon: Flame,
      gradient: "from-brand-cyan/20 via-brand-purple/10 to-brand-dark",
      borderColor: "group-hover:border-brand-cyan/40 border-brand-cyan/20",
      accentColor: "text-brand-cyan animate-pulse",
      tag: "COMMITMENT TO SCALE"
    }
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setIsPlaying(false);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setIsPlaying(false);
    setActiveSlide(index);
  };

  const CurrentIcon = slides[activeSlide].icon;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-brand-dark/50 overflow-hidden border-t border-b border-white/5">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Upper Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
        >
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest block mb-3">
              [ ABOUT US ]
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">
              Growing Your <br />
              <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                Business Online
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light animate-fade-in">
              At SmartMove Marketing Agency, we believe great marketing is about more than just likes and followers—it's about helping businesses grow with the right strategy.
            </p>
          </div>
        </motion.div>

        {/* Organized Agency Pillars interactive slide-deck component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-stretch">
          
          {/* Left Column: Vertical Slide Navigation list */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2 px-2 hidden lg:block">[ AGENCY CHAPTERS ]</p>
            <div className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 no-scrollbar">
              {slides.map((slide, idx) => {
                const isActive = idx === activeSlide;
                const SlideIcon = slide.icon;
                return (
                  <button
                    key={slide.id}
                    id={`btn-about-slide-${slide.id}`}
                    onClick={() => handleDotClick(idx)}
                    className={`flex-shrink-0 lg:w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "glass-panel border-brand-cyan/25 bg-brand-cyan/5 text-white shadow-[0_0_20px_rgba(0,240,255,0.05)]"
                        : "border-white/5 bg-white/[0.01] text-gray-400 hover:border-white/10 hover:bg-white/[0.03] hover:text-gray-200"
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg transition-all duration-300 ${isActive ? "bg-brand-cyan/15 text-brand-cyan scale-110" : "bg-white/5 text-gray-400"}`}>
                      <SlideIcon className="w-4 h-4" />
                    </div>
                    <div className="pr-4">
                      <span className="font-mono text-[9px] text-gray-500 block uppercase mb-0.5">Chapter 0{idx + 1}</span>
                      <h4 className="font-display font-bold text-sm tracking-tight leading-tight">
                        {slide.category}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Displaying Active Slide Details */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full glass-panel rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-brand-cyan/20 transition-colors duration-500"
                >
                  {/* Subtle decorative glowing spot */}
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${slides[activeSlide].gradient} rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-xs text-brand-cyan bg-brand-cyan/10 px-3.5 py-1.5 rounded-full uppercase tracking-widest font-semibold text-[10px]">
                        {slides[activeSlide].tag}
                      </span>
                      <span className="text-gray-500 text-sm">✦</span>
                      <span className="font-mono text-xs text-gray-400 uppercase tracking-widest text-[10px]">
                        {slides[activeSlide].category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3.5xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                      {slides[activeSlide].title}
                    </h3>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-8 max-w-2xl">
                      {slides[activeSlide].desc}
                    </p>
                  </div>

                  {/* Actions & Next preview */}
                  <div className="relative z-10 border-t border-white/5 pt-8 mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3.5 rounded-2xl bg-white/[0.02] border ${slides[activeSlide].borderColor} ${slides[activeSlide].accentColor} transition-colors duration-300`}>
                        <CurrentIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">SMARTMOVE BLUEPRINT</p>
                        <p className="text-sm font-semibold text-white tracking-tight mt-0.5">Active Growth Campaign Chapter</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => {
                          const contact = document.getElementById("contact");
                          if (contact) contact.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 py-3 rounded-xl bg-white text-brand-dark font-display text-xs font-bold hover:bg-brand-cyan transition-all duration-300 cursor-pointer shadow-lg shadow-brand-cyan/5 hover:shadow-brand-cyan/15 text-center"
                      >
                        Launch This Chapter
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Player and Nav controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
              {/* Progress Bar Indicators */}
              <div className="flex items-center gap-2 py-2 max-w-full">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === idx
                        ? "w-8 bg-gradient-to-r from-brand-cyan to-brand-blue"
                        : "w-2 bg-white/10 hover:bg-white/30"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Player play/pause + arrow buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
                  title={isPlaying ? "Pause Auto-play" : "Play Auto-play"}
                  aria-label={isPlaying ? "Pause Slideshow" : "Resume Slideshow"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-brand-cyan/40 hover:bg-brand-cyan/5 transition-all"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Agency Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl text-center border border-white/5 relative group"
            >
              {/* Internal glow dot on hover */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-brand-cyan/20 group-hover:bg-brand-cyan group-hover:scale-125 transition-all duration-300" />
              
              <h3 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight group-hover:text-brand-cyan transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="font-display font-semibold text-gray-200 text-sm mb-1">{stat.label}</p>
              <p className="text-xs text-gray-500 font-mono">{stat.desc}</p>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
