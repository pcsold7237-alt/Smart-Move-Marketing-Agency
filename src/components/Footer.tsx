import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Mail, Send, Check, Linkedin, Twitter, Instagram, Globe } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-dark-card border-t border-white/5 pt-20 pb-12 overflow-hidden">
      
      {/* Animated wave structure header */}
      <div className="absolute top-0 inset-x-0 h-10 overflow-hidden pointer-events-none opacity-10">
        <svg
          className="wave w-[200%] h-full text-brand-cyan fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C150,90 350,30 500,60 C650,90 850,30 1000,60 C1150,90 1350,30 1500,60 L1500,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & description column */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="md" />
            
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              We design cinematic-grade digital experiences, bespoke React ecosystems, and high-converting algorithmic media buying architectures for ambitious local and corporate brands.
            </p>

            {/* Social Gateways */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-200 cursor-pointer"
                title="Smart Move LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-200 cursor-pointer"
                title="Smart Move Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-200 cursor-pointer"
                title="Smart Move Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-200 cursor-pointer"
                title="Smart Move Web"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">[ MENU ]</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#about" className="text-gray-400 hover:text-brand-cyan transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-brand-cyan transition-colors">What We Do</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-brand-cyan transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-brand-cyan transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">[ QUICK LINKS ]</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#process" className="text-gray-400 hover:text-brand-cyan transition-colors">Our Process</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-brand-cyan transition-colors">Our Team</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-brand-cyan transition-colors">Pricing &amp; Plans</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest">[ NEWSLETTER ]</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Get weekly tips on how to grow your business, find new clients, and build your brand. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Corporate Email Address"
                className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-xl pl-4 pr-14 py-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-all duration-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-brand-cyan text-brand-dark flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                title="Subscribe to updates"
              >
                {loading ? <span className="text-xs">...</span> : <Send className="w-4 h-4" />}
              </button>
            </form>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3.5 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 text-xs text-brand-cyan flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Welcome to the inner circle. Elite strategies en route.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Lower footer row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} Smart Move Marketing Agency. All Rights Reserved. Built with React.
          </p>

          {/* Back-To-Top Trigger */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-brand-cyan transition-colors cursor-pointer"
            title="Scroll back to top of page"
          >
            <span>Back to Summit</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-cyan group-hover:text-brand-cyan transition-all duration-300">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
