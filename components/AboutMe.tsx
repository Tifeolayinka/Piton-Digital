import React from 'react';
import Reveal from './Reveal';
import { Twitter, Linkedin, Github } from 'lucide-react';

const AboutMe: React.FC = () => {
    return (
        <section className="py-32 bg-zinc-50 border-t border-zinc-100">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Left Column - Image (5 cols) */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <Reveal width="100%" className="h-full">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group">
                                <div className="absolute inset-0 bg-piton-black/0 group-hover:bg-piton-black/10 transition-colors duration-500 z-10" />
                                <img
                                    src="https://piton-digital.s3.eu-north-1.amazonaws.com/Portfolio+Image.JPG"
                                    alt="Tife Olayinka - Founder"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                />

                                {/* Subtle Name Tag */}
                                <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                    <p className="font-display font-bold text-piton-black">Tife Olayinka</p>
                                    <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Founder</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column - Content (7 cols) */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 mb-6">
                                <div className="w-8 h-px bg-piton-accent"></div>
                                <span className="text-xs font-mono text-piton-accent uppercase tracking-widest">The Founder</span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-piton-black leading-[1.1] tracking-tight mb-8">
                                Bridging the gap between <br />
                                <span className="text-zinc-400">Design & Code.</span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="space-y-6 text-lg text-zinc-500 font-light leading-relaxed max-w-2xl">
                                <p>
                                    I founded Piton Digital with a singular belief: <strong className="text-piton-black font-medium">Great products shouldn't take forever to build.</strong>
                                </p>
                                <p>
                                    My background spans both product design and full-stack engineering. This hybrid perspective allows me to see the whole picture—from the first pixel to the final database query. I don't just hand off designs; I build systems that scale.
                                </p>
                                <p>
                                    When you work with us, you're not getting a bloated agency. You're getting a dedicated partner obsessed with shipping speed and quality.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="mt-10 flex items-center gap-6">
                                <a href="#" className="text-zinc-400 hover:text-piton-accent transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-zinc-400 hover:text-piton-accent transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-zinc-400 hover:text-piton-accent transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
