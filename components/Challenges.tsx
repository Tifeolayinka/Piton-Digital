import React from 'react';
import Reveal from './Reveal';
import { AlertCircle, FileSpreadsheet, Figma, Clock, Link2, Layers } from 'lucide-react';

const challenges = [
  {
    icon: AlertCircle,
    title: "GREAT IDEA, NO TECH TEAM?",
    desc: "You're a non-technical founder with a vision. You need a partner who can execute the tech side without equity."
  },
  {
    icon: FileSpreadsheet,
    title: "OPERATIONS IN SPREADSHEETS?",
    desc: "Your business is growing, but you're drowning in manual admin work. You need a custom internal system to automate the chaos."
  },
  {
    icon: Figma,
    title: "DESIGN READY, NEED BUILD?",
    desc: "You have beautiful Figma designs but your current dev team is too slow or expensive. We bring your designs to life in weeks."
  },
  {
    icon: Clock,
    title: "STUCK IN DEVELOPMENT HELL?",
    desc: "Traditional coding is taking months. We use modern No-Code infrastructure to ship your MVP or internal tool 5x faster."
  },
  {
    icon: Link2,
    title: "DISCONNECTED TOOLS?",
    desc: "Your CRM doesn't talk to your billing, and your billing doesn't talk to email. We build unified systems that connect everything."
  },
  {
    icon: Layers,
    title: "OUTDATED USER EXPERIENCE?",
    desc: "Your current software works but feels like 1999. We redesign your interface to be modern, intuitive, and user-friendly."
  }
];

const Challenges: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
           <Reveal>
             <span className="text-piton-secondary font-bold text-xs tracking-widest uppercase mb-4 block">THE PROBLEMS</span>
           </Reveal>
           <Reveal delay={0.1}>
             <h2 className="text-3xl md:text-5xl font-display font-bold text-piton-black uppercase max-w-2xl mx-auto leading-tight">
               IS YOUR TECHNOLOGY HOLDING YOU BACK?
             </h2>
           </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%" className="h-full">
              <div className="bg-zinc-50 p-8 rounded-xl hover:shadow-lg transition-all group interactive h-full flex flex-col border border-transparent hover:border-zinc-200">
                 <div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-piton-black group-hover:border-piton-black transition-colors duration-300 shadow-sm">
                    <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                 </div>
                 
                 <div className="flex-1"></div>
                 <h3 className="text-sm font-bold text-piton-black uppercase mb-4">
                   {item.title}
                 </h3>
                 <p className="text-piton-secondary text-sm leading-relaxed">
                   {item.desc}
                 </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;