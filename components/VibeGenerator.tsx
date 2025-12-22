import React, { useState } from 'react';
import { analyzeVibe } from '../services/geminiService';
import { VibeAnalysisResult } from '../types';
import { RefreshCw, Command, CheckCircle2, Terminal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VibeGenerator: React.FC = () => {
  const [idea, setIdea] = useState('');
  // Pre-populated with SummitLink data to match the screenshot reference
  const [result, setResult] = useState<VibeAnalysisResult | null>({
    appName: "SummitLink",
    slogan: "Connect. Climb. Conquer.",
    vibeScore: 98,
    colorPalette: ["#00A651", "#1a1a1a", "#ffffff"],
    techStack: ["React Native", "Mapbox GL", "Firebase"],
    analysis: "Penetrate the climbing community by delivering indispensable belay partner matching and granular route beta."
  });
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await analyzeVibe(idea);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xl shadow-zinc-200/50 ring-1 ring-black/5 font-sans"
    >
       {/* Mac-style Window Header */}
       <div className="flex items-center justify-between px-5 py-4 bg-zinc-50/80 backdrop-blur-sm border-b border-zinc-100">
          <div className="flex items-center gap-2">
             <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5" />
                <div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5" />
             </div>
             <span className="ml-4 text-xs font-medium text-zinc-400 flex items-center gap-1.5">
                 <Command className="w-3 h-3" /> Piton Console
             </span>
          </div>
       </div>

       {/* Content Area */}
       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left: Input / Code Area */}
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-zinc-100 flex flex-col bg-white relative">
             <div className="flex gap-6 items-start font-mono text-sm flex-1 h-full">
                <div className="flex flex-col text-zinc-200 select-none text-right min-w-[1.5em] pt-1 gap-1">
                   <span>1</span>
                   <span>2</span>
                   <span>3</span>
                   <span>4</span>
                   <span>5</span>
                </div>
                <div className="flex-1 relative h-full">
                   <textarea
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleAnalyze();
                        }
                      }}
                      placeholder="// Enter your product vision here..."
                      className="w-full bg-transparent border-none text-zinc-600 focus:ring-0 p-0 resize-none h-full placeholder-zinc-300 interactive focus:outline-none leading-relaxed font-mono pt-1"
                   />
                </div>
             </div>
             
             <div className="mt-auto pt-6 flex justify-between items-center">
                <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">System Ready</span>
                <button 
                  onClick={handleAnalyze}
                  disabled={loading || !idea}
                  className="px-6 py-3 bg-piton-black text-white rounded-full text-xs font-bold hover:bg-zinc-800 transition-all active:scale-95 flex items-center gap-2 interactive"
                >
                  {loading ? <RefreshCw className="w-3 h-3 animate-spin" /> : <><Sparkles className="w-3 h-3" /> COMPILE STRATEGY</>}
                </button>
             </div>
          </div>

          {/* Right: Output Dashboard */}
          <div className="bg-zinc-50/30 p-8 relative flex flex-col">
              <AnimatePresence mode='wait'>
                 {loading && (
                    <motion.div 
                      key="loader"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/80 backdrop-blur-sm z-10"
                    >
                       <div className="w-12 h-12 border-4 border-piton-accent/20 border-t-piton-accent rounded-full animate-spin"></div>
                       <span className="text-xs font-mono text-zinc-500 tracking-widest">ANALYZING MARKET FIT...</span>
                    </motion.div>
                 )}

                 {result && (
                    <motion.div
                       key="result"
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, ease: "easeOut" }}
                       className="h-full flex flex-col"
                    >
                       {/* Header Badge */}
                       <div className="flex items-center gap-3 mb-10">
                          <div className="px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            SUCCESS
                          </div>
                          <span className="text-xs text-zinc-400 font-mono">Analysis complete</span>
                       </div>
                       
                       {/* Main Content */}
                       <div className="flex-1">
                           <h3 className="text-5xl text-piton-black font-display font-bold mb-4 tracking-tight leading-[0.9]">
                              {result.appName}
                           </h3>
                           <p className="text-zinc-500 italic text-xl font-serif mb-8 border-l-2 border-piton-accent pl-4">
                              "{result.slogan}"
                           </p>
                           
                           <div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm mb-8">
                              <p className="text-zinc-700 leading-relaxed text-sm font-medium">
                                 {result.analysis}
                              </p>
                           </div>
                       </div>

                       {/* Footer Metadata */}
                       <div className="grid grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-zinc-100 shadow-sm">
                              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-3 block">Brand Colors</span>
                              <div className="flex gap-2">
                                {result.colorPalette.map((color, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full shadow-inner ring-1 ring-black/5" style={{ backgroundColor: color }} title={color} />
                                ))}
                              </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-zinc-100 shadow-sm">
                             <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-3 block">Stack</span>
                             <div className="flex flex-wrap gap-2">
                                {result.techStack.slice(0,3).map((tech, i) => (
                                   <span key={i} className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-[10px] font-semibold text-zinc-600">
                                      {tech}
                                   </span>
                                ))}
                             </div>
                          </div>
                       </div>
                    </motion.div>
                 )}
              </AnimatePresence>
          </div>
       </div>
    </motion.div>
  );
};

export default VibeGenerator;