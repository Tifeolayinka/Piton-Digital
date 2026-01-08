import React from 'react';
import { Scan, Zap, Trophy, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const Process: React.FC = () => {
   const steps = [
      {
         icon: Scan,
         number: "01",
         title: "Discovery",
         desc: "We start with a conversation. We map out your requirements, understand your goals, and plan the roadmap."
      },
      {
         icon: Zap,
         number: "02",
         title: "Development",
         desc: "We build your product with speed. You get regular updates and see your vision come to life in real-time."
      },
      {
         icon: Trophy,
         number: "03",
         title: "Launch",
         desc: "We go live with confidence. We ensure everything works perfectly and your product is ready for the world."
      }
   ];

   return (
      <section id="process" className="py-20 md:py-32 bg-zinc-50/50 relative overflow-hidden">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24 flex flex-col items-center">
               <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
                     <div className="w-1.5 h-1.5 rounded-full bg-piton-accent animate-pulse" />
                     <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Our Process</span>
                  </div>
               </Reveal>
               <Reveal delay={0.1}>
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">HOW WE WORK</h2>
               </Reveal>
               <Reveal delay={0.2}>
                  <p className="text-zinc-500 font-mono text-sm md:text-base max-w-lg mx-auto">
                     Simple, transparent, and effective. <br className="hidden md:block" />
                     From idea to launch in record time.
                  </p>
               </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

               {steps.map((step, i) => (
                  <Reveal key={i} delay={i * 0.2} className="h-full pt-8">
                     <div className="bg-zinc-950 border border-zinc-900 p-8 pt-12 rounded-2xl relative group hover:border-piton-accent/30 transition-all duration-500 h-full flex flex-col">

                        {/* Step Number */}
                        <div className="absolute -top-6 left-8 bg-piton-black px-4 py-2 border border-zinc-900 group-hover:border-piton-accent/30 transition-colors rounded-lg">
                           <span className="font-mono text-2xl font-bold text-zinc-700 group-hover:text-piton-accent transition-colors">{step.number}</span>
                        </div>

                        {/* Icon */}
                        <div className="w-12 h-12 bg-zinc-900/50 rounded-lg flex items-center justify-center mb-8 border border-zinc-800 group-hover:bg-piton-accent/10 group-hover:text-piton-accent transition-all duration-300">
                           <step.icon className="w-6 h-6 text-zinc-400 group-hover:text-piton-accent transition-colors" />
                        </div>

                        <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">{step.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                           {step.desc}
                        </p>

                        {/* Bottom Tech Decoration */}
                        <div className="mt-auto pt-6 border-t border-zinc-900 flex justify-between items-center">
                           <div className="flex gap-1">
                              <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-piton-accent transition-colors delay-75" />
                              <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-piton-accent transition-colors delay-100" />
                              <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-piton-accent transition-colors delay-150" />
                           </div>
                           <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-white transition-colors -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                        </div>
                     </div>
                  </Reveal>
               ))}
            </div>
            <div className="mt-24 flex justify-center">
               <Reveal delay={0.6}>
                  <a href="#contact" className="group inline-flex items-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-piton-accent hover:text-white transition-all duration-300 text-sm uppercase tracking-widest interactive">
                     <span>Start Your Project</span>
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
               </Reveal>
            </div>
         </div>
      </section>
   );
};

export default Process;