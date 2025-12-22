import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import CaseStudyModal, { CaseStudyData } from './CaseStudyModal';

// Simplified project data for the ticker
const projects = [
  {
     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
     title: "Dojohub CRM",
     type: "SaaS Platform",
  },
  {
     image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
     title: "Tamashi LMS",
     type: "EdTech",
  },
  {
     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
     title: "Piton Analytics",
     type: "FinTech",
  },
  {
     image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
     title: "Apex Gear",
     type: "E-Commerce",
  },
   {
     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
     title: "Velvet Rope",
     type: "Social App",
  }
];

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
                    {[...projects, ...projects, ...projects, ...projects].map((p, i) => (
                        <div key={i} className="relative group w-[300px] aspect-[4/3] overflow-hidden bg-zinc-100 cursor-pointer grayscale hover:grayscale-0 transition-all duration-500">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                                <h4 className="text-white font-display font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{p.title}</h4>
                                <p className="text-white/80 text-xs font-mono uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{p.type} • $2M+ Generated</p>
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