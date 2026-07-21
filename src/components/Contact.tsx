import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Mail, Phone, MessageSquare, Linkedin, Twitter, Instagram, ShieldCheck, CheckCircle } from "lucide-react";

export default function Contact({ selectedPlan }: { selectedPlan?: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    niche: "luxury-hospitality",
    plan: selectedPlan || "facebook ads",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSuccessMsg(data.message);
        setForm({
          name: "",
          email: "",
          phone: "",
          business: "",
          niche: "luxury-hospitality",
          plan: "facebook ads",
          message: "",
        });
      } else {
        setErrorMsg(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Failed to connect to our satellite nodes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-brand-dark/50 border-b border-white/5 overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest block mb-3">
              [ 10 // COMMAND CENTER ]
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none uppercase">
              GET FREE <br />
              <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                CONSULTATION
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Have questions or need assistance? We&apos;re here to help! Fill out the form, and our team will get back to you promptly.
            </p>
          </div>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Visual Map Mockup */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              
              {/* Phone Channel */}
              <div className="flex gap-4 group">
                <a 
                  href="https://wa.me/923202479323?text=I'm%20interested%20in%20a%20free%20consultation!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:border-green-500/50 flex items-center justify-center text-green-400 flex-shrink-0 transition-all duration-300 hover:scale-105"
                  aria-label="Chat on WhatsApp"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Chat on WhatsApp</h4>
                  <a 
                    href="https://wa.me/923202479323?text=I'm%20interested%20in%20a%20free%20consultation!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-cyan hover:text-white transition-colors mt-1 block font-mono"
                  >
                    Click the logo to start chat
                  </a>
                </div>
              </div>

              {/* Email channels structured like the screenshot */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-white text-base">Direct Channels</h4>
                  <div className="text-sm space-y-1">
                    <p className="text-gray-400 flex gap-1.5 items-center">
                      <span className="font-mono text-[10px] uppercase text-gray-500">General:</span>
                      <a href="mailto:muslimstudent1991@gmail.com" className="hover:text-brand-cyan transition-colors text-gray-300">muslimstudent1991@gmail.com</a>
                    </p>
                    <p className="text-gray-400 flex gap-1.5 items-center">
                      <span className="font-mono text-[10px] uppercase text-gray-500">HR:</span>
                      <a href="mailto:muslimstudent1991@gmail.com" className="hover:text-brand-cyan transition-colors text-gray-300">muslimstudent1991@gmail.com</a>
                    </p>
                    <p className="text-gray-400 flex gap-1.5 items-center">
                      <span className="font-mono text-[10px] uppercase text-gray-500">Sales:</span>
                      <a href="mailto:muslimstudent1991@gmail.com" className="hover:text-brand-cyan transition-colors text-gray-300">muslimstudent1991@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Strategic Satellite Network Radar visual */}
            <div className="relative glass-panel rounded-2xl border border-white/5 p-6 h-64 overflow-hidden group">
              <div className="absolute inset-0 grid-bg opacity-25 z-0" />
              
              {/* Spinning compass circle line represent satellite target scan */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-brand-cyan/10 rounded-full animate-spin duration-15000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-brand-purple/15 rounded-full animate-spin duration-7000" />

              {/* Ping points indicating nodes on map */}
              <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-brand-cyan shadow-lg shadow-brand-cyan/80">
                <span className="absolute top-0 left-0 w-full h-full rounded-full bg-brand-cyan animate-ping duration-2000" />
              </div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-brand-purple shadow-lg shadow-brand-purple/80">
                <span className="absolute top-0 left-0 w-full h-full rounded-full bg-brand-purple animate-ping duration-3000" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="font-mono text-[9px] text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full uppercase self-start">
                  Live Global Node Target Map
                </span>
                
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase">SATCOM TELEMETRY</p>
                  <p className="font-display font-semibold text-white text-sm">Targeting: US / EU / APAC Hubs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
              
              {/* Form success banner */}
              <AnimatePresence>
                {successMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-5 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-white text-sm">Inquiry Received</h4>
                      <p className="text-xs text-gray-300 mt-1 leading-relaxed">{successMsg}</p>
                    </div>
                  </motion.div>
                )}

                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-3"
                  >
                    <span>⚠️</span>
                    <p>{errorMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form elements matching the exact fields in screenshot */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] text-gray-400 uppercase mb-2">Name *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-brand-dark-card border border-white/10 focus:border-brand-cyan rounded-xl p-4 text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] text-gray-400 uppercase mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. john@yourfirm.com"
                      className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-brand-dark-card border border-white/10 focus:border-brand-cyan rounded-xl p-4 text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] text-gray-400 uppercase mb-2">Phone *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. +92 300 1234567"
                      className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-brand-dark-card border border-white/10 focus:border-brand-cyan rounded-xl p-4 text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                    />
                  </div>
                </div>

                {/* Which service are you interested in? */}
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] text-gray-400 uppercase mb-2">Which service are you interested in? *</label>
                  <select
                    name="plan"
                    value={form.plan}
                    onChange={handleChange}
                    className="w-full bg-brand-dark hover:bg-white/[0.04] focus:bg-brand-dark-card border border-white/10 focus:border-brand-cyan rounded-xl p-4 text-sm text-white focus:outline-none transition-all duration-300 font-sans"
                  >
                    <option value="" disabled>Select Your Service</option>
                    <option value="facebook ads">Facebook Ads</option>
                    <option value="instagram ads">Instagram Ads</option>
                    <option value="lead generation">Lead Generation</option>
                    <option value="brand strategy">Brand Strategy</option>
                    <option value="video editing">Video Editing</option>
                    <option value="reel creation">Reel Creation</option>
                    <option value="performance marketing">Performance Marketing</option>
                    <option value="analytics">Analytics</option>
                    <option value="optimization">Optimization</option>
                    <option value="BASIC PACKAGE (Starter)">BASIC PACKAGE (Starter)</option>
                    <option value="ADVANCE PACKAGE (Growth)">ADVANCE PACKAGE (Growth)</option>
                    <option value="PREMIUM PACKAGE (Dominance)">PREMIUM PACKAGE (Dominance)</option>
                  </select>
                </div>

                {/* Message (Optional) */}
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] text-gray-400 uppercase mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements or questions..."
                    className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-brand-dark-card border border-white/10 focus:border-brand-cyan rounded-xl p-4 text-sm text-white focus:outline-none transition-all duration-300 font-sans resize-none"
                  />
                </div>

                {/* NOTE block exactly from screenshot */}
                <p className="text-xs text-gray-400 leading-relaxed font-sans border-l-2 border-brand-cyan/50 pl-3">
                  <strong>NOTE:</strong> Your information will only be used to contact you regarding your inquiry.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-brand-dark font-display font-bold hover:shadow-lg hover:shadow-brand-cyan/25 transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
