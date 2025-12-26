import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column - Text */}
                    <div>
                        <Reveal width="100%">
                            <span className="text-piton-accent font-mono text-xs tracking-widest uppercase mb-6 block">Who We Are</span>
                            <h2 className="text-5xl md:text-7xl font-display font-bold text-piton-black leading-[0.95] tracking-tight mb-8">
                                ENGINEERS <br />
                                WITH AN EYE <br />
                                FOR <span className="text-zinc-400">DESIGN.</span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.2} width="100%">
                            <div className="space-y-6 text-lg text-zinc-500 font-light leading-relaxed">
                                <p>
                                    Most agencies are fragmented. Designers who don't code, and developers who don't care about pixels. We bridge that gap.
                                </p>
                                <p>
                                    We are a hybrid team of product strategists, UI/UX experts, and full-stack engineers. We don't hand off files; we ship finished products. Our process is built for speed, scalability, and pixel-perfect execution.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4} width="100%">
                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Business-First Mindset', 'Rapid Prototyping', 'Scalable Architecture', 'Pixel-Perfect Dev'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-piton-accent" />
                                        <span className="text-sm font-bold text-piton-black uppercase tracking-wider">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column - Visuals */}
                    <div className="relative h-[500px] lg:h-[600px] w-full block mt-12 lg:mt-0">
                        <Reveal delay={0.3} className="h-full w-full">
                            {/* Main Image */}
                            <div className="absolute top-0 right-0 w-full lg:w-[80%] h-full lg:h-[85%] bg-zinc-100 rounded-2xl overflow-hidden shadow-2xl z-10">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Team working" />
                            </div>

                            {/* Floating Element 1 */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-4 lg:bottom-10 left-4 lg:left-0 w-[70%] lg:w-[50%] h-[30%] lg:h-[40%] bg-white border border-zinc-100 rounded-2xl shadow-xl p-6 lg:p-8 z-20 flex flex-col justify-between"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-3xl lg:text-5xl font-display font-bold text-piton-black">7+</span>
                                    <div className="w-2 h-2 bg-piton-accent rounded-full animate-pulse"></div>
                                </div>
                                <div>
                                    <h4 className="text-sm lg:text-lg font-bold text-piton-black mb-1">Years of Experience</h4>
                                    <p className="text-[10px] lg:text-xs text-zinc-400">Delivering digital excellence since 2016.</p>
                                </div>
                            </motion.div>

                            {/* Decorative Circle */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 border border-zinc-200 rounded-full z-0 opacity-50"></div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
