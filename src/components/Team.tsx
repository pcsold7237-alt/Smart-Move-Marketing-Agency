import { motion } from "motion/react";
import { TEAM_MEMBERS } from "../data";
import { Linkedin, Instagram, ArrowUpRight, Award, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function Team() {
  const leader = TEAM_MEMBERS[0]; // Muniba Inam is our primary growth lead

  return (
    <section id="team" className="relative py-24 md:py-32 bg-brand-dark overflow-hidden border-b border-white/5 grid-bg">
      {/* Background radial highlights */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest block mb-3">
            [ OUR TEAM ]
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6">
            Meet Our <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">Marketing Lead</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            We do not pass your work to junior staff. Your campaigns are created and managed directly by our certified marketing expert.
          </p>
        </motion.div>

        {/* Spotlight Showcase Grid */}
        {leader && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel border border-brand-cyan/20 bg-brand-dark-card/40 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          >
            {/* Ambient lighting inside the card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Side: Premium Portrait Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#eaddcf] bg-brand-dark flex flex-col items-center justify-center p-8 group">
                  {/* Elegant typography/brand badge */}
                  <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
                  <div className="w-28 h-28 rounded-full border-2 border-[#eaddcf] border-dashed flex items-center justify-center mb-6 bg-[#f5efe6] text-brand-cyan font-display font-bold text-5xl shadow-sm">
                    MI
                  </div>
                  <h4 className="font-display font-bold text-xl text-brand-cyan tracking-tight text-center">
                    SmartMove Lead
                  </h4>
                  <p className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mt-1">
                    CERTIFIED STRATEGIST
                  </p>
                  
                  {/* Status Overlay */}
                  <div className="absolute bottom-4 left-4 bg-[#1e1611]/90 backdrop-blur-md border border-[#eaddcf]/20 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-white tracking-widest uppercase font-bold text-white-force">ONLINE // SYSTEM ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Detailed Profile & Expertise */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] text-brand-cyan bg-brand-cyan/15 px-3 py-1.5 rounded-full uppercase tracking-wider font-bold">
                    {leader.specialty}
                  </span>
                  <span className="font-mono text-[10px] text-brand-purple bg-brand-purple/15 px-3 py-1.5 rounded-full uppercase tracking-wider font-bold">
                    Partner &amp; Founder
                  </span>
                </div>

                <h3 className="font-display text-4xl font-black text-white tracking-tight">
                  {leader.name}
                </h3>
                
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                  {leader.bio}
                </p>

                {/* Specific Core Skills Checklist */}
                <div className="border-t border-white/5 pt-6 mt-6">
                  <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-cyan" />
                    <span>Verified Implementation Core</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>Facebook &amp; Google Ads Scaling</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>Premium Content &amp; Copy Creation</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>Bespoke Visual Branding Systems</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>High-Converting Shopify Architectures</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>AI-Powered Digital Optimization</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>Enablers Insight Accredited Lead</span>
                    </div>
                  </div>
                </div>

                {/* Social Connects & Action */}
                <div className="flex flex-wrap items-center justify-between pt-6 border-t border-white/5 gap-4">
                  <div className="flex gap-3">
                    {leader.socials.linkedin && (
                      <a
                        href={leader.socials.linkedin}
                        className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-200 cursor-pointer"
                        title={`${leader.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {leader.socials.instagram && (
                      <a
                        href={leader.socials.instagram}
                        className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-200 cursor-pointer"
                        title={`${leader.name} Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      const c = document.getElementById("contact");
                      if (c) c.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-white-force font-display text-sm font-bold hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <span>Partner with Muniba</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
