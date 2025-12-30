import React, { useState } from 'react';
import { heroProjects } from '../src/data/heroProjects';

const HeroScroll: React.FC = () => {
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
            {[...heroProjects, ...heroProjects, ...heroProjects, ...heroProjects].map((p, i) => (
              <div
                key={i}
                className="relative group w-[320px] aspect-[4/3] overflow-hidden bg-zinc-100 transition-all duration-500 rounded-lg border border-zinc-100 hover:border-piton-accent/50 cursor-default"
              >
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                {/* Persistent Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h4 className="text-white font-display font-bold text-xl">{p.title}</h4>
                    <p className="text-white/70 text-[10px] font-mono uppercase tracking-wider">{p.type} • $2M+ Generated</p>
                  </div>
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