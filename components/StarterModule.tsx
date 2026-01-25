import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { Rocket, Check, X, AlertTriangle, ArrowRight } from 'lucide-react';

const StarterModule: React.FC = () => {
    const categories = [
        "Architect scalable digital systems",
        "Eliminate messy, manual workflows",
        "Maintain structure as you scale",
        "High-fidelity system prototyping",
        "Long-term technical partnership"
    ];

    const competitors = [
        {
            name: "Piton Digital",
            color: "bg-piton-accent",
            textColor: "text-white",
            border: "border-piton-accent",
            values: [
                { type: "check", text: "Done-for-you architecture & systems" },
                { type: "check", text: "Automated, streamlined portals" },
                { type: "check", text: "Built-in scalability & clarity" },
                { type: "check", text: "1-week rapid system validation" },
                { type: "check", text: "Technical co-founder level support" }
            ]
        },
        {
            name: "Boutique Agencies",
            color: "bg-zinc-900",
            textColor: "text-white",
            border: "border-zinc-800",
            values: [
                { type: "check", text: "Yes, but expensive" },
                { type: "warn", text: "Usually extra" },
                { type: "warn", text: "Slower, structured process" },
                { type: "cross", text: "Not included" },
                { type: "warn", text: "Quality varies" }
            ]
        },
        {
            name: "Freelancers on Upwork",
            color: "bg-zinc-900",
            textColor: "text-white",
            border: "border-zinc-800",
            values: [
                { type: "warn", text: "Maybe (if you find the right person)" },
                { type: "cross", text: "You'll wait (and hope they reply)" },
                { type: "cross", text: "Inconsistent availability" },
                { type: "cross", text: "Requires multiple hires" },
                { type: "cross", text: "Hit or miss" }
            ]
        },
        {
            name: "DIY Builders",
            color: "bg-zinc-900",
            textColor: "text-white",
            border: "border-zinc-800",
            values: [
                { type: "cross", text: "Templates only" },
                { type: "cross", text: "Do it yourself" },
                { type: "cross", text: "You're on your own" },
                { type: "cross", text: "Not supported" },
                { type: "cross", text: "No support" }
            ]
        }
    ];

    return (
        <section id="starter-offer" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-piton-accent/10 border border-piton-accent/20 mb-6">
                            <Rocket className="w-4 h-4 text-piton-accent" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-piton-accent">The Piton Advantage</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-piton-black mb-6">
                            Why founders choose <span className="text-piton-accent">Piton.</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="overflow-x-auto pb-8">
                    <div className="min-w-[1000px]">
                        {/* Header Row */}
                        <div className="grid grid-cols-5 gap-4 mb-8">
                            <div className="flex items-center justify-center p-6 rounded-full border-2 border-dashed border-zinc-200 bg-zinc-50">
                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">What You Want to Do</span>
                            </div>
                            {competitors.map((comp, i) => (
                                <div key={i} className={`flex items-center justify-center p-6 rounded-full border-2 ${comp.border} ${comp.color} ${comp.textColor} shadow-xl shadow-black/5`}>
                                    <span className="text-xs font-bold uppercase tracking-widest">{comp.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Category Rows */}
                        <div className="space-y-4">
                            {categories.map((cat, catIdx) => (
                                <div key={catIdx} className="grid grid-cols-5 gap-4 items-stretch">
                                    <div className="flex items-center p-6 bg-white text-sm font-medium text-piton-black">
                                        {cat}
                                    </div>
                                    {competitors.map((comp, compIdx) => {
                                        const val = comp.values[catIdx];
                                        return (
                                            <div key={compIdx} className={`flex items-center gap-3 p-6 rounded-2xl ${compIdx === 0 ? 'bg-zinc-50' : 'bg-white'} transition-colors`}>
                                                {val.type === 'check' && <Check className="w-4 h-4 text-piton-accent shrink-0" />}
                                                {val.type === 'warn' && <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0" />}
                                                {val.type === 'cross' && <X className="w-4 h-4 text-red-500 shrink-0" />}
                                                <span className={`text-[13px] leading-snug ${compIdx === 0 ? 'text-piton-black font-medium' : 'text-zinc-500'}`}>
                                                    {val.text}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <Reveal width="100%">
                        <div className="inline-block p-1 bg-zinc-100 rounded-[2.5rem]">
                            <div className="bg-piton-black rounded-[2.2rem] p-8 md:p-12 lg:px-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="text-left">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to start?</h3>
                                    <p className="text-zinc-400 text-sm max-w-sm">
                                        Get a high-fidelity prototype and strategy in 1 week with our $500 Starter Module.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                                    <a
                                        href="#contact"
                                        className="px-8 py-4 bg-piton-accent text-white rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-piton-accent/20"
                                    >
                                        Claim Your Module
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-zinc-800 bg-zinc-900/50">
                                        <span className="text-white font-bold text-sm">$500</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                        <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Credited to full build</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default StarterModule;
