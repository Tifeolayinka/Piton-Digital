import React, { MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, PenTool, Code } from 'lucide-react';
import InteractiveParticles from './InteractiveParticles';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    // We need client coordinates relative to the viewport for the fixed/absolute canvas
    // But since the canvas covers the section, and section might be scrolled...
    // Actually, for a Hero section usually at top, clientX/Y works well if canvas is absolute in section.
    // However, if we want the "breaking" to be accurate, we should use coordinates relative to the canvas.
    // Since canvas is absolute inset-0 of the section, e.nativeEvent.offsetX/Y is best if event is on section.
    // But children might block it. So clientX - rect.left is safer.
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: clientY - top });
  };

  return (
    <section
      className="relative pt-32 md:pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white selection:bg-piton-accent selection:text-white perspective-1000 min-h-[90vh] flex flex-col justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Particles Background - Desktop Only */}
      <div className="hidden md:block">
        <InteractiveParticles mousePosition={mousePos} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] text-piton-accent/20"
        >
          <Brain size={64} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-[15%] text-piton-secondary/20"
        >
          <PenTool size={56} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-[20%] text-piton-black/10"
        >
          <Code size={48} />
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 topo-lines pointer-events-none mix-blend-multiply opacity-50" />

      <div className="max-w-5xl mx-auto text-center relative z-10 perspective-1000">
        {/* Parent container handles staggered children */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15, // The "Gap" effect
                delayChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex justify-center mb-6"
          >
            <span className="text-xs font-mono text-piton-secondary uppercase tracking-wider">
              → Clarity • Structure • Scale ←
            </span>
          </motion.div>

          <div className="perspective-1000"> {/* Container for 3D Tilt */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-4xl md:text-7xl font-display font-bold tracking-tight text-piton-black mb-8 leading-[1.1] transform-gpu"
            >
              We build scalable digital products for founders who care about clarity.
            </motion.h1>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-base md:text-xl text-piton-secondary max-w-3xl mx-auto mb-10 font-light leading-relaxed"
          >
            Stop drowning in messy workflows. We build structured, scalable internal tools and MVPs that actually work—handling strategy, design, and no-code development in one unified process.
          </motion.p>

          {/* Trust Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex justify-center items-center gap-2 mb-10 transform-gpu"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white overflow-hidden">
                  <img src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="Designer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex text-yellow-400 text-xs">★★★★★</div>
              <span className="text-xs text-zinc-500 font-medium">Trusted by 12k+ designers</span>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#starter-offer"
              className="px-8 py-4 bg-piton-black text-white rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-3 interactive shadow-xl shadow-piton-black/20"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-600 flex items-center justify-center bg-zinc-800">
                <span className="text-xs">🚀</span>
              </div>
              <div className="flex flex-col text-left leading-none">
                <span>Start with a $500 Starter Module</span>
                <span className="text-[9px] text-zinc-400 font-normal mt-1">Low risk, fast progress</span>
              </div>
            </a>

            <a
              href="#work"
              className="px-8 py-4 bg-transparent text-piton-black font-medium text-sm hover:bg-zinc-50 rounded-full transition-all interactive flex items-center gap-2"
            >
              Book a short call
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } }
            }}
            className="mt-6 text-xs text-zinc-400"
          >
            Structured execution. No fluff.
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 0.4, y: 0, transition: { duration: 1, delay: 0.8 } }
            }}
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 grayscale"
          >
            {/* Simple Logos */}
            {['Shipfast', 'Trailhead', 'Quadrian 360', 'Dojohub', 'Imagine AI'].map((logo, i) => (
              <div key={i} className="flex items-center gap-1 font-bold text-lg text-black">
                <div className="w-4 h-4 bg-black rounded-full" />
                {logo}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;