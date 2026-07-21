import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { PRICING_PLANS } from "../data";

interface PricingProps {
  onPlanSelect: (planName: string) => void;
}

export default function Pricing({ onPlanSelect }: PricingProps) {
  // Converted prices to clean USD values
  const getUSDPrice = (id: string) => {
    switch (id) {
      case "plan_basic":
        return "$90 - $125";
      case "plan_advance":
        return "$180 - $270";
      case "plan_premium":
        return "$360 - $540+";
      default:
        return "";
    }
  };

  const getCleanDescription = (id: string) => {
    switch (id) {
      case "plan_basic":
        return "Best for small businesses or startups that are just beginning to build their brand online.";
      case "plan_advance":
        return "Best for growing brands who want to find more leads and increase their sales.";
      case "plan_premium":
        return "Perfect for established brands and online stores looking to grow and scale quickly.";
      default:
        return "";
    }
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-brand-dark grid-bg overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest block mb-3">
            [ PRICING PLANS ]
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6">
            Simple &amp; Honest <br />
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
              Growth Investments
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Choose the perfect plan to grow your business. No hidden fees. Fully customized to your goals.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => {
            const isFeatured = plan.featured;
            const usdPrice = getUSDPrice(plan.id);
            const cleanDescription = getCleanDescription(plan.id);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-b from-brand-purple/10 to-brand-dark border-brand-purple/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                    : "bg-white/[0.02] border-white/5 hover:border-brand-cyan/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(0,240,255,0.05)]"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold uppercase bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-lg">
                    {plan.badge}
                  </span>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="text-white font-display text-xl font-bold tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1 my-6">
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {usdPrice}
                    </span>
                    <span className="text-gray-400 text-sm font-light">
                      / {plan.period.toLowerCase()}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                    {cleanDescription || plan.description}
                  </p>

                  <div className="w-full h-px bg-white/5 mb-8" />

                  {/* Features list */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300 font-light leading-snug">
                        <Icons.Check className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? "text-brand-purple" : "text-brand-cyan"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call To Action button */}
                <a
                  href="#contact"
                  onClick={() => onPlanSelect(plan.name)}
                  className={`w-full py-4 rounded-xl font-medium tracking-wide text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    isFeatured
                      ? "bg-gradient-to-r from-brand-cyan to-brand-purple text-white hover:opacity-95 shadow-[0_4px_20px_rgba(0,240,255,0.25)] hover:scale-[1.02]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-brand-cyan/40"
                  }`}
                >
                  <span>Select Plan</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
