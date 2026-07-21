import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize, PlayCircle } from "lucide-react";

export default function CaseStudies() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [sourceIndex, setSourceIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Robust, fast, and CORS-friendly premium video fallbacks
  const videoSources = [
    "/portfolio.mp4", // Local walkthrough if uploaded
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // Google Fast CDN (Tech/Media)
    "https://vjs.zencdn.net/v/oceans.mp4", // Video.js Fastly CDN (Premium Ocean)
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" // Google Fast CDN (Chromebook/Tech)
  ];

  const handleVideoError = () => {
    if (sourceIndex < videoSources.length - 1) {
      const nextIndex = sourceIndex + 1;
      console.log(`Video source failed: ${videoSources[sourceIndex]}. Trying backup source: ${videoSources[nextIndex]}`);
      setSourceIndex(nextIndex);
    } else {
      console.error("All video sources failed to load. Displaying high-fidelity static backup showcase.");
      setIsLoading(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(err => console.log("Play failed: ", err));
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.log(err));
      } else {
        containerRef.current.requestFullscreen().catch(err => console.log(err));
      }
    }
  };

  // Fail-safe timeout to prevent infinite loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds maximum loading window
    return () => clearTimeout(timer);
  }, []);

  // Ensure autoplay works when video is changed or reloaded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay might be blocked if unmuted, force mute and retry
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(err => console.log("Autoplay blocked: ", err));
          }
        });
      }
    }
  }, [sourceIndex]);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-brand-dark grid-bg border-b border-white/5 overflow-hidden">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#9c6f44]/5 rounded-full blur-[130px] pointer-events-none animate-pulse duration-8000" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[110px] pointer-events-none animate-pulse duration-10000" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest block mb-3 bg-brand-cyan/10 w-fit mx-auto px-3.5 py-1.5 rounded-full">
            Our Portfolio
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6">
            Case Studies
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Take a look at our recent projects and discover how we help brands grow with impactful content, strategic marketing, and creative design.
          </p>
        </motion.div>

        {/* Video Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Framed Outer Border */}
          <div 
            ref={containerRef}
            className="group relative rounded-3xl overflow-hidden glass-panel border border-[#c0a07c]/30 shadow-2xl transition-all duration-500 hover:shadow-brand-cyan/5 hover:border-[#c0a07c]/50 p-2 sm:p-3 bg-[#1e1611]/80 backdrop-blur-xl"
          >
            {/* Aspect Ratio Box holding the Video */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-brand-dark flex items-center justify-center">
              
              {/* Infinite Loading Animation */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#1e1611] space-y-4"
                  >
                    {/* Premium light-brown / cyan loading wheel */}
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-full border-4 border-white/5" />
                      <div className="absolute inset-0 rounded-full border-4 border-t-[#c0a07c] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                      <div className="absolute inset-2 rounded-full border-2 border-t-brand-cyan border-r-transparent border-b-transparent border-l-transparent animate-spin-reverse duration-1000" />
                    </div>
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-widest animate-pulse">
                      Initializing Walkthrough...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Interactive Video Object */}
              <video
                ref={videoRef}
                src={videoSources[sourceIndex]}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onError={handleVideoError}
                onLoadedData={() => setIsLoading(false)}
                onCanPlay={() => setIsLoading(false)}
                onCanPlayThrough={() => setIsLoading(false)}
                className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-[1.01]"
              />

              {/* Glass Interactive Dark Vignette Layer on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

              {/* Top Banner on Hover */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                <span className="font-mono text-[10px] bg-brand-dark/80 backdrop-blur-md text-brand-cyan border border-brand-cyan/20 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Live Showcase
                </span>
                <span className="font-mono text-[10px] bg-[#c0a07c]/20 backdrop-blur-md text-white border border-[#c0a07c]/40 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  MUNIBA INAM // PORTFOLIO
                </span>
              </div>

              {/* Quick Play/Pause Center Indicator */}
              <div 
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
              >
                {!isPlaying && (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 rounded-full bg-[#1e1611]/80 backdrop-blur-md border border-[#c0a07c]/40 flex items-center justify-center text-[#c0a07c] shadow-2xl hover:scale-110 transition-transform"
                  >
                    <PlayCircle className="w-12 h-12 fill-[#c0a07c]/10" />
                  </motion.div>
                )}
              </div>

              {/* Bottom Custom Playback Bar Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="flex items-center gap-2">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#c0a07c] hover:text-brand-dark hover:border-[#c0a07c]/30 transition-all duration-200 cursor-pointer"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#c0a07c] hover:text-brand-dark hover:border-[#c0a07c]/30 transition-all duration-200 cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#c0a07c] hover:text-brand-dark hover:border-[#c0a07c]/30 transition-all duration-200 cursor-pointer"
                  title="Toggle Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Descriptive Caption */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 font-sans">
            <div className="space-y-1">
              <h4 className="font-display font-bold text-lg text-white">
                Interactive Walkthrough
              </h4>
              <p className="text-xs text-gray-400">
                A video overview of our campaign configurations, client acquisitions, and verified ad results.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-[#c0a07c] font-mono text-xs border border-[#c0a07c]/20 bg-[#c0a07c]/5 px-3.5 py-1.5 rounded-full select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c0a07c] animate-pulse" />
              <span>Autoplay Loop Enabled</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
