import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, ArrowRight, Bot, Sparkles, PhoneCall } from "lucide-react";

// Component imports
import Logo from "./components/Logo";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChatWidget from "./components/AIChatWidget";
import ExtraFeatures from "./components/ExtraFeatures";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState("facebook ads");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "What We Do", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <div className="relative min-h-screen bg-brand-dark text-slate-100 overflow-x-hidden selection:bg-brand-cyan selection:text-brand-dark font-sans">
      
      {/* Custom cursor glow track */}
      <Cursor />
 
      {/* Floating Header Navigation bar */}
      <header className="fixed top-4 inset-x-4 md:inset-x-8 h-20 z-40">
        <nav className="w-full h-full glass-panel border border-white/10 rounded-2xl px-6 md:px-8 flex items-center justify-between relative shadow-lg">
          {/* Logo */}
          <a href="#">
            <Logo size="sm" />
          </a>

          {/* Desktop Links list */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan hover:text-white transition-colors uppercase tracking-widest"
            >
              <span>Satellite Link</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              id="header-cta-book"
              onClick={() => {
                const contact = document.getElementById("contact");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark font-display text-xs font-bold hover:shadow-lg hover:shadow-brand-cyan/25 cursor-pointer"
            >
              Reserve Audit Session
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl glass-panel border border-white/5 flex items-center justify-center text-white cursor-pointer hover:border-brand-cyan/30"
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown menu drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-22 inset-x-0 glass-panel border border-white/10 rounded-2xl p-6 lg:hidden shadow-2xl flex flex-col gap-4 z-50 bg-brand-dark/95"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-gray-300 hover:text-brand-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5 my-2" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const contact = document.getElementById("contact");
                  if (contact) contact.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3.5 rounded-xl bg-brand-cyan text-brand-dark font-display text-sm font-bold text-center cursor-pointer"
              >
                Reserve Audit Session
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Sections Stack */}
      <main>
        {/* HERO SECTION */}
        <Hero
          onStartGrowingClick={() => {
            const contact = document.getElementById("contact");
            if (contact) contact.scrollIntoView({ behavior: "smooth" });
          }}
          onViewWorkClick={() => {
            const testimonials = document.getElementById("testimonials");
            if (testimonials) testimonials.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* ABOUT & STORYTELLING */}
        <About />

        {/* CASE STUDIES PORTFOLIO */}
        <CaseStudies />

        {/* SERVICES CAPABILITIES */}
        <Services />

        {/* PROGRESSIVE PROCESS */}
        <Process />

        {/* TESTIMONIAL CAROUSEL */}
        <Testimonials />

        {/* TEAM MEMBERS */}
        <Team />

        {/* PRICING PLANS */}
        <Pricing onPlanSelect={handlePlanSelect} />

        {/* CONTACT AUDIT COMMAND CENTER */}
        <Contact selectedPlan={selectedPlan} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* AI STRATEGIST CHAT WIDGET */}
      <AIChatWidget />

      {/* OVERLAYS: SCROLL PROGRESS, LOADING SCREENS, COOKIE NOTICES */}
      <ExtraFeatures />

    </div>
  );
}
