import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { ArrowRight, TrendingUp, Play, ShieldCheck, User, Compass, Layers, Activity, Tag, Video, Upload, Volume2, VolumeX, Sliders, Settings, X, RefreshCw } from "lucide-react";
import Logo from "./Logo";

export default function Hero({ onStartGrowingClick, onViewWorkClick }: { onStartGrowingClick: () => void, onViewWorkClick: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Background Video State
  const [videoSrc, setVideoSrc] = useState<string | null>("/hero.mp4");
  const [videoOpacity, setVideoOpacity] = useState(0.35);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [bgType, setBgType] = useState<"video" | "cinematic-orbitals">("video");
  const [showConfig, setShowConfig] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  // Parallax values for floating abstract shapes
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  
  const springX = useSpring(parallaxX, { damping: 50, stiffness: 200 });
  const springY = useSpring(parallaxY, { damping: 50, stiffness: 200 });

  // Magnetic Button state handlers
  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);

  const btn1X = useMotionValue(0);
  const btn1Y = useMotionValue(0);
  const btn2X = useMotionValue(0);
  const btn2Y = useMotionValue(0);

  const btn1SpringX = useSpring(btn1X, { damping: 20, stiffness: 200 });
  const btn1SpringY = useSpring(btn1Y, { damping: 20, stiffness: 200 });
  const btn2SpringX = useSpring(btn2X, { damping: 20, stiffness: 200 });
  const btn2SpringY = useSpring(btn2Y, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - width / 2) / 30;
      const y = (e.clientY - height / 2) / 30;
      parallaxX.set(x);
      parallaxY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [parallaxX, parallaxY]);

  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>, btnNum: number) => {
    const btn = btnNum === 1 ? btn1Ref.current : btn2Ref.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    if (btnNum === 1) {
      btn1X.set(x * 0.35);
      btn1Y.set(y * 0.35);
    } else {
      btn2X.set(x * 0.35);
      btn2Y.set(y * 0.35);
    }
  };

  const handleMagneticReset = (btnNum: number) => {
    if (btnNum === 1) {
      btn1X.set(0);
      btn1Y.set(0);
    } else {
      btn2X.set(0);
      btn2Y.set(0);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setBgType("video");
      setIsVideoPlaying(true);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setBgType("video");
      setIsVideoPlaying(true);
    }
  };

  const headline = "Boost Your Sales. Generate Quality Leads. Build a Strong Brand.";
  const words = headline.split(" ");

  return (
    <section
      id="hero"
      ref={containerRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500 pt-24 pb-16 px-4 md:px-8 grid-bg ${
        isDraggingOver 
          ? "bg-brand-blue/10 scale-[0.995] border-4 border-dashed border-brand-cyan/50" 
          : "mesh-gradient"
      }`}
    >
      {/* Ambient background video player layer or fallbacks */}
      {bgType === "video" && videoSrc ? (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay={isVideoPlaying}
            loop
            muted={isVideoMuted}
            playsInline
            className="w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: videoOpacity }}
          />
          {/* Dark warm overlay to make sure text remains extremely legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/80 to-brand-dark/95" />
        </div>
      ) : (
        /* FALLBACK: Cinematic Orbitals background matching the branding in the uploaded video */
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
          {/* Background circles & grids resembling the slide layout */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[140px]" />
          
          {/* Elegant rotating golden circular rings inspired by Muniba's certification video design */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute w-[750px] h-[750px] border-2 border-dashed border-[#c0a07c]/25 rounded-full flex items-center justify-center"
            >
              <div className="absolute top-12 left-1/4 w-5 h-5 bg-[#9c6f44] rounded-full blur-[1px] shadow-[0_0_15px_#9c6f44]" />
              <div className="absolute bottom-12 right-1/4 w-4 h-4 bg-[#7a522c] rounded-full blur-[1px] shadow-[0_0_12px_#7a522c]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] border-2 border-double border-[#9c6f44]/20 rounded-full flex items-center justify-center"
            >
              <div className="absolute right-6 top-1/3 w-4 h-4 bg-[#c0a07c] rounded-full blur-[1px] shadow-[0_0_12px_#c0a07c]" />
              <div className="absolute left-6 bottom-1/3 w-3 h-3 bg-brand-cyan rounded-full blur-[1px] shadow-[0_0_10px_var(--color-brand-cyan)]" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[330px] h-[330px] border border-[#c0a07c]/15 rounded-full"
            >
              <div className="absolute top-4 right-1/2 w-2.5 h-2.5 bg-[#8c6239] rounded-full" />
            </motion.div>
          </div>
        </div>
      )}

      {/* Floating 3D/Glass Parallax Orbs & Shapes */}
      <motion.div
        className="absolute top-1/3 right-12 md:right-24 w-16 h-16 pointer-events-none z-10"
        style={{ x: springX, y: springY }}
      >
        <div className="w-full h-full glass-panel rounded-2xl flex items-center justify-center rotate-12 float-slower glow-cyan p-2">
          <Logo iconOnly={true} size="sm" className="text-brand-cyan scale-125" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-10 md:left-32 w-20 h-20 pointer-events-none z-10"
        style={{ x: useSpring(parallaxX, { damping: 40 }), y: useSpring(parallaxY, { damping: 40 }) }}
      >
        <div className="w-full h-full glass-panel rounded-full flex items-center justify-center float-faster glow-purple">
          <TrendingUp className="w-10 h-10 text-brand-purple" />
        </div>
      </motion.div>

      {/* Background Microparticles */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#c0a07c]/30"
            style={{
              top: `${15 + i * 10}%`,
              left: `${10 + (i * 17) % 80}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + (i % 3) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-5xl mx-auto text-center z-10 mt-6">
        {/* Subtle upper tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs md:text-sm text-brand-cyan border border-brand-cyan/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
          <span>SMART MOVE MARKETING AGENCY</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-400">HIGH-END DESIGN &amp; ROI SYSTEMS</span>
        </motion.div>

        {/* Word-by-word animated Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-none">
          {words.map((word, index) => (
            <span key={index} className="inline-block overflow-hidden mr-3 md:mr-4 pb-1">
              <motion.span
                className="inline-block origin-left"
                initial={{ y: "100%", rotate: 4, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Special coloring for strategic focus words */}
                {word.includes("Sales") || word.includes("Leads") || word.includes("Brand") ? (
                  <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent glow-cyan">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Line-by-line Subtitle Reveal */}
        <div className="max-w-2xl mx-auto mb-12 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-sans"
          >
            We help businesses grow with smart digital solutions that boost sales, generate quality leads, and create a powerful brand presence. Turn your vision into lasting success with us.
          </motion.p>
        </div>

        {/* Magnetic CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4">
          {/* CTA 1: Magnetic Start Growing */}
          <motion.button
            id="hero-cta-start"
            ref={btn1Ref}
            style={{ x: btn1SpringX, y: btn1SpringY }}
            onMouseMove={(e) => handleMagneticMove(e, 1)}
            onMouseLeave={() => handleMagneticReset(1)}
            onClick={onStartGrowingClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue font-display text-brand-dark font-bold hover:shadow-lg hover:shadow-brand-cyan/20 transition-all duration-300 cursor-pointer"
          >
            <span>Start Growing Your Business</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </motion.button>

          {/* CTA 2: Magnetic View Our Work */}
          <motion.button
            id="hero-cta-work"
            ref={btn2Ref}
            style={{ x: btn2SpringX, y: btn2SpringY }}
            onMouseMove={(e) => handleMagneticMove(e, 2)}
            onMouseLeave={() => handleMagneticReset(2)}
            onClick={onViewWorkClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full glass-panel border border-white/10 hover:border-brand-purple/40 font-display text-white font-semibold transition-all duration-300 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform duration-300" />
            <span>View Client Testimonials</span>
          </motion.button>
        </div>

        {/* Animated Front Navigation Quick-Jump Shortcuts Suite */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 max-w-5xl mx-auto px-4 text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.35em] text-brand-cyan uppercase font-bold">
              Direct Agency Navigation
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto gap-3 md:gap-4 pt-2">
            {[
              { label: "About Us", href: "#about", icon: User, color: "hover:border-brand-cyan/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:bg-brand-cyan/5" },
              { label: "What We Do", href: "#services", icon: Layers, color: "hover:border-brand-purple/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:bg-brand-purple/5" },
              { label: "Our Process", href: "#process", icon: Activity, color: "hover:border-yellow-500/40 hover:shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:bg-yellow-500/5" },
              { label: "Pricing & Plans", href: "#pricing", icon: Tag, color: "hover:border-red-500/40 hover:shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:bg-red-500/5" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 1.9 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ scale: 1.06, y: -6 }}
                  whileTap={{ scale: 0.96 }}
                  className={`glass-panel border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3.5 transition-all duration-300 group cursor-pointer ${item.color}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Icon className="w-4.5 h-4.5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                  </div>
                  <span className="font-display font-semibold text-xs text-gray-300 group-hover:text-white transition-colors tracking-wide">
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Invisible file upload input for background walkthrough video */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/*"
        className="hidden"
      />

      {/* Floating Background Walkthrough Studio Control Panel */}
      <div className="absolute bottom-6 right-6 z-30 select-none">
        <AnimatePresence>
          {showConfig ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-80 glass-panel border border-[#c0a07c]/30 rounded-2xl p-5 shadow-2xl relative bg-brand-dark/95 backdrop-blur-xl space-y-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#c0a07c]" />
                  <span className="font-display font-bold text-xs text-white uppercase tracking-wider">
                    Walkthrough Studio
                  </span>
                </div>
                <button
                  onClick={() => setShowConfig(false)}
                  className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  title="Close Studio"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Background Source Selector */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                  Background Animation Source
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setBgType("cinematic-orbitals")}
                    className={`px-3 py-2 text-[11px] font-display font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                      bgType === "cinematic-orbitals"
                        ? "bg-[#c0a07c]/15 border-[#c0a07c] text-[#c0a07c]"
                        : "border-white/5 text-gray-400 hover:border-white/10 hover:text-white"
                    }`}
                  >
                    Gold Orbitals
                  </button>
                  <button
                    onClick={() => {
                      if (!videoSrc) {
                        fileInputRef.current?.click();
                      } else {
                        setBgType("video");
                      }
                    }}
                    className={`px-3 py-2 text-[11px] font-display font-semibold rounded-lg border transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                      bgType === "video"
                        ? "bg-[#c0a07c]/15 border-[#c0a07c] text-[#c0a07c]"
                        : "border-white/5 text-gray-400 hover:border-white/10 hover:text-white"
                    }`}
                  >
                    <span>Custom Video</span>
                    {videoSrc && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                  </button>
                </div>
              </div>

              {/* Video Specific Controls */}
              {bgType === "video" && (
                <div className="space-y-3 pt-1 border-t border-white/5">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block">
                    Video Customizer
                  </span>

                  {videoSrc ? (
                    <div className="space-y-3">
                      {/* Play/Mute controls */}
                      <div className="flex items-center justify-between bg-white/5 rounded-xl p-2.5">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              if (videoRef.current) {
                                if (isVideoPlaying) {
                                  videoRef.current.pause();
                                  setIsVideoPlaying(false);
                                } else {
                                  videoRef.current.play().catch(console.error);
                                  setIsVideoPlaying(true);
                                }
                              }
                            }}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                            title={isVideoPlaying ? "Pause Video" : "Play Video"}
                          >
                            <Play className={`w-3.5 h-3.5 ${isVideoPlaying ? "fill-white text-white" : "text-gray-400"}`} />
                          </button>

                          <button
                            onClick={() => setIsVideoMuted(!isVideoMuted)}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                            title={isVideoMuted ? "Unmute Walkthrough Sound" : "Mute Sound"}
                          >
                            {isVideoMuted ? (
                              <VolumeX className="w-3.5 h-3.5 text-gray-400" />
                            ) : (
                              <Volume2 className="w-3.5 h-3.5 text-brand-cyan" />
                            )}
                          </button>
                        </div>

                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="text-[10px] font-mono text-[#c0a07c] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <RefreshCw className="w-3 h-3 animate-spin duration-3000" />
                          <span>Change MP4</span>
                        </button>
                      </div>

                      {/* Opacity Slider */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-mono text-gray-400">
                          <span>Blend Intensity</span>
                          <span>{Math.round(videoOpacity * 100)}%</span>
                        </div>
                        <input
                          type="range"
                          min="0.05"
                          max="0.80"
                          step="0.05"
                          value={videoOpacity}
                          onChange={(e) => setVideoOpacity(parseFloat(e.target.value))}
                          className="w-full accent-[#c0a07c] bg-white/10 h-1 rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-4 border border-dashed border-[#c0a07c]/40 hover:border-[#c0a07c] rounded-xl flex flex-col items-center justify-center gap-2 bg-[#c0a07c]/5 hover:bg-[#c0a07c]/10 text-gray-300 hover:text-white transition-all cursor-pointer group"
                    >
                      <Upload className="w-5 h-5 text-[#c0a07c] group-hover:scale-110 transition-transform" />
                      <span className="font-display font-bold text-xs">Load Walkthrough MP4</span>
                      <span className="text-[9px] font-mono text-gray-500">Drop here or click to browse</span>
                    </button>
                  )}
                </div>
              )}

              {/* Dynamic status/tip banner */}
              <div className="text-[10px] leading-relaxed text-gray-400 font-sans border-t border-white/5 pt-3 flex gap-2">
                <span className="text-[#c0a07c] font-bold shrink-0">💡 TIP:</span>
                <span>You can drag &amp; drop any walkthrough video file directly onto the screen at any time!</span>
              </div>
            </motion.div>
          ) : (
            <motion.button
              layoutId="studioTrigger"
              onClick={() => setShowConfig(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-dark/90 border border-[#c0a07c]/40 hover:border-[#c0a07c]/80 hover:shadow-[0_0_15px_rgba(192,160,124,0.15)] text-white text-xs font-display font-semibold transition-all duration-300 cursor-pointer shadow-lg group relative"
            >
              {/* Small heartbeat dot representing that video upload is ready */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-brand-dark animate-pulse" />
              <Video className="w-3.5 h-3.5 text-[#c0a07c] group-hover:scale-110 transition-transform" />
              <span>🎬 Background Studio</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
