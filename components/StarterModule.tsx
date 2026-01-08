import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { Rocket, Target, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const StarterModule: React.FC = () => {
    const features = [
        {
            icon: Target,
            title: "Product Strategy",
            desc: "We unpack your vision and define the most critical path to market."
        },
        {
            icon: Zap,
            title: "Interactive Prototype",
            desc: "A high-fidelity Figma prototype that looks and feels like the real thing."
        },
        {
            icon: ShieldCheck,
            title: "Technical Audit",
            desc: "A full breakdown of the tech stack and architecture needed to scale."
        }
    ];

    return (
        <section id="starter-offer" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-piton-black rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-piton-accent/10 to-transparent pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-piton-accent/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        {/* Left Side: Content */}
                        <div>
                            <Reveal>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-piton-accent/10 border border-piton-accent/20 mb-6">
                                    <Rocket className="w-4 h-4 text-piton-accent" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-piton-accent">The Entry Point</span>
                                </div>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1]">
                                    Start with a <br />
                                    <span className="text-piton-accent">$500 Starter Module.</span>
                                </h2>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
                                    Not ready for a full-scale build? Our Starter Module is a 1-week intensive where we translate your vision into a concrete product strategy and a high-fidelity prototype. It's the fastest way to de-risk your idea.
                                </p>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <div className="flex flex-col sm:flex-row gap-4">
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
                            </Reveal>
                        </div>

                        {/* Right Side: Features Grid */}
                        <div className="grid grid-cols-1 gap-6">
                            {features.map((feature, i) => (
                                <Reveal key={i} delay={0.4 + i * 0.1}>
                                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-piton-accent/50 transition-colors group">
                                        <div className="flex gap-5 items-start">
                                            <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-piton-accent/20 transition-colors">
                                                <feature.icon className="w-6 h-6 text-piton-accent" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                                                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StarterModule;
