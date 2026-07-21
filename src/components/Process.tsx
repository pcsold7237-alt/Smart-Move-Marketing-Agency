import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROCESS_STEPS } from "../data";
import { ChevronRight, ArrowUpRight, Check } from "lucide-react";

export default function Process() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const activeStepData = PROCESS_STEPS[activeStepIdx];

  return (
    <section id="process" className="relative py-24 md:py-32 bg-brand-dark grid-bg border-b border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none animate-pulse duration-8000" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none animate-pulse duration-10000" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest block mb-3">
            [ OUR PROCESS ]
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6">
            Our Simple <br />
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
              Six-Step Process
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            A clear six-step process to study your competitors, build your brand, and launch marketing funnels that grow your sales.
          </p>
        </motion.div>

        {/* Stepper Header List - Horizontal on desktop, grid/vertical on mobile */}
        <div className="relative mb-16">
          {/* Connecting glowing line in background for stepper */}
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-white/5 hidden lg:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIdx;
              const isPassed = idx < activeStepIdx;
              
              return (
                <button
                  key={step.step}
                  id={`btn-step-${idx}`}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`relative p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "glass-panel border-brand-cyan/40 bg-brand-cyan/[0.03] shadow-lg shadow-brand-cyan/5"
                      : "border-white/5 hover:border-white/10 bg-white/[0.01] hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-bold ${isActive ? "text-brand-cyan" : "text-gray-500"}`}>
                      STAGE {step.step}
                    </span>
                    {isPassed && (
                      <div className="w-4 h-4 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-brand-cyan" />
                      </div>
                    )}
                  </div>
                  
                  <h4 className={`font-display text-base font-bold ${isActive ? "text-white" : "text-gray-400"}`}>
                    {step.title.split(" & ").pop()?.split(" ").pop() || step.title}
                  </h4>
                  
                  {/* Indicator line on bottom of the button for desktop */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStepLine"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-blue"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Step Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-3xl border border-white/10 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Detailed copy */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-3xl font-extrabold text-brand-cyan/40">
                      {activeStepData.step}
                    </span>
                    <span className="text-gray-600">/</span>
                    <span className="font-mono text-sm uppercase tracking-widest text-brand-purple">
                      {activeStepData.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                    {activeStepData.title}
                  </h3>
                  
                  <p className="text-gray-400 font-mono text-sm uppercase tracking-wider mb-6">
                    {activeStepData.subtitle}
                  </p>

                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-light">
                    {activeStepData.description}
                  </p>
                </div>

                {/* Mobile/Next Controls inside step */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <span className="text-xs text-gray-500 font-mono uppercase">Navigate Flow:</span>
                  <div className="flex gap-2">
                    {PROCESS_STEPS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStepIdx(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === activeStepIdx ? "bg-brand-cyan w-6" : "bg-white/10 hover:bg-white/35"
                        }`}
                        title={`Go to Stage ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables / High-end Checklist */}
              <div className="lg:col-span-5">
                <div className="h-full rounded-2xl bg-white/[0.015] border border-white/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-white text-base mb-6 flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-brand-cyan" />
                      <span>Stage Key Deliverables</span>
                    </h4>

                    <div className="space-y-4">
                      {activeStepData.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="font-mono text-[9px] text-brand-cyan font-bold">{idx + 1}</span>
                          </div>
                          <span className="text-gray-300 text-sm md:text-base font-light">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High-end decorative metrics */}
                  <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-gray-500 uppercase">Process Velocity</p>
                      <p className="text-sm font-semibold text-white">Full-Scale Precision</p>
                    </div>
                    <div className="flex items-center gap-1 text-brand-cyan font-mono text-xs font-semibold bg-brand-cyan/10 px-3 py-1.5 rounded-xl">
                      <span>Interactive System</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
