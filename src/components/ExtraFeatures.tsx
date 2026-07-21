import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X, Shield, MessageCircle, AlertTriangle } from "lucide-react";
import Logo from "./Logo";

export default function ExtraFeatures() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadText, setLoadText] = useState("ALLOCATING SATCOM NODES...");
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [showCookie, setShowCookie] = useState(true);
  
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // loading screen counter
  useEffect(() => {
    const texts = [
      "ESTABLISHING SECURE STRATEGY SHUNT...",
      "SYNCHRONIZING CONVERSION ENGINES...",
      "TUNING ROI ACQUISITION PIXELS...",
      "MAPPING COMPETITOR CONQUEST HOOKS...",
      "DEPLOYNIG AD METADATA SYSTEMS...",
      "CONQUEST SYSTEM STABILIZED 100%"
    ];

    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        
        // Swapping texts based on percentage
        const textIdx = Math.floor((next / 100) * texts.length);
        setLoadText(texts[textIdx] || texts[texts.length - 1]);
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show newsletter popup after 8 seconds of session
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if already subscribed or closed previously
      const closed = localStorage.getItem("newsletter_popup_closed");
      if (!closed) {
        setShowNewsletterPopup(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowNewsletterPopup(false);
    localStorage.setItem("newsletter_popup_closed", "true");
  };

  const handlePopupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          closePopup();
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator Line */}
      <div className="fixed top-0 inset-x-0 h-1 bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating WhatsApp Action Trigger */}
      <div className="fixed bottom-24 right-6 flex items-center gap-2 md:gap-3.5 z-40">
        {/* Number Badge next to the WhatsApp button - Only visible on desktop/tablet to avoid covering screen on mobile */}
        <motion.a
          href="https://wa.me/923202479323?text=Hi!%20I'm%20interested%20in%20scaling%20my%20business%20and%20booking%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="hidden md:flex bg-brand-dark/95 backdrop-blur-md border border-green-500/30 text-white px-3.5 py-2 rounded-full text-[11px] font-mono items-center gap-2 shadow-lg shadow-green-500/10 hover:border-green-500/60 hover:bg-green-500/15 transition-all cursor-pointer whitespace-nowrap"
          title="Click to chat on WhatsApp"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-400 font-sans">WhatsApp:</span>
          <span className="font-bold text-green-400 font-mono tracking-wide">+92 320 2479323</span>
        </motion.a>

        {/* WhatsApp Circular Button */}
        <a
          href="https://wa.me/923202479323?text=Hi!%20I'm%20interested%20in%20scaling%20my%20business%20and%20booking%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA56] text-white flex items-center justify-center shadow-lg shadow-green-500/20 transition-transform hover:scale-110 cursor-pointer flex-shrink-0"
          title="Direct Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Animated Full Screen Loading Gate */}
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-brand-dark z-50 flex flex-col items-center justify-center p-6 select-none"
          >
            <div className="absolute inset-0 grid-bg opacity-10" />

            <div className="text-center space-y-8 relative z-10">
              {/* Custom High-Fidelity Logo Centerpiece */}
              <div className="relative mb-8">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <Logo size="xl" iconOnly={true} className="text-white" />
                  <div className="text-center mt-2">
                    <h3 className="font-display font-black text-white text-2xl md:text-3xl tracking-widest uppercase">
                      SMART MOVE
                    </h3>
                    <p className="font-mono text-[10px] text-brand-cyan uppercase mt-1.5 tracking-[0.3em] font-bold">
                      MARKETING AGENCY
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Progress and status line */}
              <div className="w-64 mx-auto">
                <div className="flex items-center justify-between text-[10px] font-mono text-brand-cyan mb-2">
                  <span>SYSTEM_INIT_OK</span>
                  <span>{loadProgress}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-cyan transition-all duration-100" style={{ width: `${loadProgress}%` }} />
                </div>
              </div>

              <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest h-6 animate-pulse">
                {loadText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Consent banner */}
      <AnimatePresence>
        {showCookie && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 left-6 max-w-sm w-full bg-brand-dark-card/95 backdrop-filter backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl z-40"
          >
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan flex-shrink-0 mt-0.5">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-sm">Satcom Pixel Consent</h4>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  We use cookies and conversion trackers to optimize target campaigns and analyze satellite traffic data for your scaling formulas.
                </p>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setShowCookie(false)}
                    className="px-4 py-2 bg-brand-cyan text-brand-dark rounded-lg text-xs font-bold hover:bg-white transition-colors cursor-pointer"
                  >
                    Authorize Pixels
                  </button>
                  <button
                    onClick={() => setShowCookie(false)}
                    className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-xs hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Automated Newsletter Popup */}
      <AnimatePresence>
        {showNewsletterPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/80 backdrop-filter backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="glass-panel border border-white/10 rounded-3xl p-8 md:p-10 max-w-md w-full relative shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-white cursor-pointer"
                title="Dismiss Form"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 mx-auto flex items-center justify-center text-brand-cyan">
                  <Send className="w-6 h-6" />
                </div>

                <h3 className="font-display text-2xl font-black text-white leading-none">
                  Claim The Scaling <br />
                  <span className="bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
                    Strategy Codex
                  </span>
                </h3>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Join 15,000+ elite business owners reading our weekly architectural breakdowns of actual active digital campaigns. No fluff, pure ROI.
                </p>

                {subscribed ? (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="py-3 bg-brand-cyan/15 rounded-xl border border-brand-cyan/30 text-xs font-semibold text-brand-cyan"
                  >
                    Satellite alignment OK. Strategy Codex sent.
                  </motion.div>
                ) : (
                  <form onSubmit={handlePopupSubmit} className="space-y-3 pt-2">
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Corporate Email Address"
                      className="w-full bg-white/[0.02] border border-white/10 focus:border-brand-cyan rounded-xl p-3.5 text-xs text-white focus:outline-none focus:bg-brand-dark"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark font-display font-bold text-xs hover:shadow-lg hover:shadow-brand-cyan/20 cursor-pointer"
                    >
                      Authorize Strategy Access
                    </button>
                  </form>
                )}

                <p className="text-[10px] text-gray-500 font-mono">
                  Guarded under absolute data isolation protocols. No SPAM.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
