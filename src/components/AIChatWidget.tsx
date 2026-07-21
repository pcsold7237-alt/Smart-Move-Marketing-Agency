import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertCircle, Cpu, Layers, Compass, HelpCircle, Check, ChevronRight } from "lucide-react";
import { ChatMessage } from "../types";

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProtocols, setShowProtocols] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "model",
      text: "Greetings. I am MoveAI Prime, Lead Strategic Intelligence core of Smart Move. We do not design simple templates; we engineer bespoke, high-conversion digital assets.\n\nTell me: what elite industry are we positioning today (e.g., Luxury Resort, Clinic, Real Estate, Café), and I will orchestrate a high-yield growth roadmap for you.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, showProtocols]);

  const handleSend = async (textToSend?: string) => {
    const rawText = textToSend || input;
    if (!rawText.trim() || loading) return;

    if (!textToSend) setInput("");

    // Make sure we go to the chat view if they trigger a quick prompt
    setShowProtocols(false);

    // Create user message
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: rawText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      // Map message history format for the API
      const history = messages.slice(1).map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: rawText,
          history,
        }),
      });

      const data = await res.json();
      
      const replyMsg: ChatMessage = {
        id: `m-${Date.now()}`,
        role: "model",
        text: data.reply || "Connection anomaly detected. Let's try again.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, replyMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "model",
        text: "I was unable to secure a connection to our satellite nodes. Please confirm your secret API keys are in the Settings menu or try again shortly.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    "Orchestrate an ROI plan for Amalfi Reserve",
    "Brief me on the 6-stage blueprint process",
    "How fast can we deploy a local clinic campaign?",
    "Show me the Velvet Bistro viral traffic engine",
  ];

  return (
    <>
      {/* Small floating action bubble button */}
      <motion.button
        id="btn-open-ai-chat"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-blue text-brand-dark flex items-center justify-center shadow-lg shadow-brand-cyan/20 z-40 cursor-pointer hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Main chat modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 w-[345px] sm:w-[410px] h-[550px] rounded-3xl glass-panel border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden z-40"
          >
            {/* Header row */}
            <div className="p-4 bg-brand-cyan/5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm flex items-center gap-1.5">
                    <span>MoveAI Prime Core</span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                  </h4>
                  <p className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Lead Strategic Node</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowProtocols(!showProtocols)}
                  className={`px-2.5 py-1 rounded-lg border text-[9px] font-mono transition-all cursor-pointer ${
                    showProtocols 
                      ? "bg-brand-cyan text-brand-dark border-brand-cyan font-bold" 
                      : "border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan hover:bg-brand-cyan/15"
                  }`}
                  title="View Strategic Persona Guidelines"
                >
                  {showProtocols ? "CHAT VIEW" : "PROTOCOLS"}
                </button>
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              </div>
            </div>

            {/* Content Switcher: Chat vs. Protocols Panel */}
            <div className="flex-grow overflow-hidden relative flex flex-col">
              <AnimatePresence mode="wait">
                {showProtocols ? (
                  /* Protocols guidelines drawer directly inside the widget */
                  <motion.div
                    key="protocols"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex-grow p-4 overflow-y-auto space-y-4 no-scrollbar bg-brand-dark/95 text-xs text-gray-300"
                  >
                    <div className="border border-white/10 rounded-xl p-3 bg-white/[0.01]">
                      <span className="font-mono text-[8px] text-brand-cyan tracking-widest uppercase block mb-1">
                        AI Identity Profile
                      </span>
                      <h5 className="font-display font-bold text-white mb-1.5">MoveAI Prime Strategy Node</h5>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        A highly sophisticated, knowledge-dense strategist trained to analyze luxury resort models, clinical conversion metrics, estate video narratives, and gastronomy velocity.
                      </p>
                    </div>

                    <div className="border border-white/10 rounded-xl p-3 bg-white/[0.01]">
                      <span className="font-mono text-[8px] text-brand-cyan tracking-widest uppercase block mb-1">
                        Tone Matrix Guideline
                      </span>
                      <ul className="space-y-1.5 font-mono text-[10px] text-gray-400">
                        <li className="flex gap-1.5 items-start">
                          <Check className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span><strong>Elite Authority</strong>: Confident, precise, conversion-driven.</span>
                        </li>
                        <li className="flex gap-1.5 items-start">
                          <Check className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span><strong>Luxury Verbiage</strong>: Curation of &quot;high-yield attention assets&quot;.</span>
                        </li>
                        <li className="flex gap-1.5 items-start">
                          <Check className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span><strong>Analytical Rigor</strong>: Speaks with precise data-backed metrics.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-white/10 rounded-xl p-3 bg-white/[0.01]">
                      <span className="font-mono text-[8px] text-brand-cyan tracking-widest uppercase block mb-1">
                        Interactive Blueprint Demos
                      </span>
                      <div className="flex flex-col gap-1.5 mt-2">
                        {quickPrompts.map((q, qIdx) => (
                          <button
                            key={qIdx}
                            onClick={() => handleSend(q)}
                            className="flex items-center justify-between text-left text-[10px] text-brand-cyan hover:text-white bg-white/[0.02] hover:bg-brand-cyan/10 px-3 py-2 rounded-lg border border-white/5 transition-all cursor-pointer"
                          >
                            <span className="truncate pr-2">{q}</span>
                            <ChevronRight className="w-3 h-3 flex-shrink-0 text-brand-cyan" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Standard Chat Messages Space */
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    ref={scrollRef}
                    className="flex-grow p-4 overflow-y-auto space-y-4 no-scrollbar bg-brand-dark/30"
                  >
                    {messages.map((m) => {
                      const isModel = m.role === "model";
                      return (
                        <div key={m.id} className={`flex ${isModel ? "justify-start" : "justify-end"}`}>
                          <div className="flex gap-2 max-w-[85%] items-start">
                            {isModel && (
                              <div className="w-6 h-6 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-cyan flex-shrink-0 mt-1">
                                <Cpu className="w-3.5 h-3.5" />
                              </div>
                            )}
                            
                            <div className={`rounded-2xl p-4.5 text-xs sm:text-sm leading-relaxed ${
                              isModel
                                ? "bg-slate-900 text-slate-100 rounded-tl-none border border-slate-800"
                                : "bg-brand-cyan text-white font-medium rounded-tr-none"
                            }`}>
                              {/* Custom raw markdown parser (bold text and simple lists highlight) */}
                              <div className="whitespace-pre-line space-y-2">
                                {m.text.split("\n").map((line, lIdx) => {
                                  let formatted = line;
                                  // Check for list bullets
                                  const isBullet = line.trim().startsWith("-") || line.trim().startsWith("*");
                                  
                                  // Simple bold parsing
                                  const boldMatch = line.match(/\*\*(.*?)\*\*/g);
                                  if (boldMatch) {
                                    boldMatch.forEach((b) => {
                                      const clean = b.replace(/\*\*/g, "");
                                      formatted = formatted.replace(b, `<strong class="font-bold text-white">${clean}</strong>`);
                                    });
                                  }

                                  if (isBullet) {
                                    return (
                                      <div key={lIdx} className="flex items-start gap-2 pl-2">
                                        <span className="text-brand-cyan mt-1">&bull;</span>
                                        <span dangerouslySetInnerHTML={{ __html: formatted.replace(/^[-*]\s*/, "") }} />
                                      </div>
                                    );
                                  }

                                  return <p key={lIdx} dangerouslySetInnerHTML={{ __html: formatted }} />;
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Pulsing Loading dots */}
                    {loading && (
                      <div className="flex justify-start">
                        <div className="flex gap-2 max-w-[80%] items-start">
                          <div className="w-6 h-6 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-cyan flex-shrink-0 mt-1">
                            <Cpu className="w-3.5 h-3.5 animate-spin [animation-duration:3s]" />
                          </div>
                          <div className="rounded-2xl p-4 bg-white/[0.03] border border-white/5 flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" />
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce [animation-delay:0.15s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce [animation-delay:0.3s]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Seeds inside bottom shelf */}
            {messages.length === 1 && !showProtocols && (
              <div className="px-4 py-2.5 border-t border-white/5 bg-brand-dark/40 flex flex-col gap-1.5">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-brand-cyan" />
                  <span>Interactive Diagnostics</span>
                </span>
                <div className="flex flex-col gap-1 max-h-[110px] overflow-y-auto no-scrollbar">
                  {quickPrompts.map((q, qIdx) => (
                    <button
                      key={qIdx}
                      id={`btn-quick-prompt-${qIdx}`}
                      onClick={() => handleSend(q)}
                      className="text-left text-[10px] sm:text-xs text-brand-cyan hover:text-white bg-white/[0.02] hover:bg-brand-cyan/10 px-3 py-1.5 rounded-lg border border-white/5 transition-all duration-200 cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {q} &rarr;
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input message drawer */}
            <div className="p-3 bg-brand-dark border-t border-white/5 flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder="Ask MoveAI Prime for growth strategies..."
                className="flex-grow bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-all duration-200 font-sans"
              />
              <button
                id="btn-send-ai-chat"
                onClick={() => handleSend()}
                className="w-10 h-10 rounded-xl bg-brand-cyan text-brand-dark flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
