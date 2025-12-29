import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../src/data/projects';
import { CaseStudyData } from './CaseStudyModal';

interface HeroScrollProps {
  onProjectClick: (data: CaseStudyData) => void;
}

const HeroScroll: React.FC<HeroScrollProps> = ({ onProjectClick }) => {
  const [pause, setPause] = useState(false);

  // Add inline style for the keyframes
  const marqueeKeyframes = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <>
      <style>{marqueeKeyframes}</style>
      <div className="w-full py-12 overflow-hidden border-y border-zinc-100 bg-[#FDFDFD]">

        <div
          className="flex gap-8 pl-4"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div
            className="flex gap-8"
            style={{
              animation: 'marquee 40s linear infinite',
              animationPlayState: pause ? 'paused' : 'running',
              width: "max-content"
            }}
          >
            {[...projects, ...projects, ...projects, ...projects].map((p, i) => (
              <div
                key={i}
                onClick={() => p.caseStudy && onProjectClick(p.caseStudy)}
                className={`relative group w-[320px] aspect-[4/3] overflow-hidden bg-zinc-100 transition-all duration-500 rounded-lg border border-zinc-100 hover:border-piton-accent/50 ${p.caseStudy ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                {/* Persistent Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h4 className="text-white font-display font-bold text-xl">{p.title}</h4>
                    <p className="text-white/70 text-[10px] font-mono uppercase tracking-wider">{p.type} • $2M+ Generated</p>
                  </div>

                  {/* Hover Reveal: View Case Study */}
                  {p.caseStudy && (
                    <div className="absolute bottom-4 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                      <span className="text-piton-accent text-[10px] font-bold uppercase tracking-widest">View Case Study</span>
                      <ArrowUpRight className="w-3 h-3 text-piton-accent" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroScroll;