import React from 'react';
import Reveal from './Reveal';
import { Calendar, Mail, Lock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-piton-black py-32 relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-30">
                <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Clouds" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-piton-black via-piton-black/90 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <Reveal width="100%">
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">READY TO SCALE?</h2>
                    </Reveal>
                    <Reveal delay={0.1} width="100%">
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            We only take on 3 new clients per quarter to ensure maximum attention and results.
                            Secure your spot for Q4 2024.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
                    {/* Option 1: Strategy Call */}
                    <Reveal delay={0.2} className="h-full">
                        <a href="https://calendly.com" target="_blank" rel="noreferrer" className="group flex flex-col h-full p-10 bg-zinc-900/50 border border-zinc-800 hover:border-piton-accent transition-all rounded-2xl text-left interactive hover:bg-zinc-900/80 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-piton-accent rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-2">Book Strategy Call</h3>
                            <p className="text-zinc-400 text-sm mb-8 flex-1">
                                A 30-minute session to analyze your current digital presence and identify revenue opportunities. No sales pressure.
                            </p>
                            <span className="text-piton-accent text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                Select a Time <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </a>
                    </Reveal>

                    {/* Option 2: Email */}
                    <Reveal delay={0.3} className="h-full">
                        <a href="mailto:hello@pitondigital.studio" className="group flex flex-col h-full p-10 bg-zinc-900/50 border border-zinc-800 hover:border-white transition-all rounded-2xl text-left interactive hover:bg-zinc-900/80 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-2">Send a Brief</h3>
                            <p className="text-zinc-400 text-sm mb-8 flex-1">
                                Have a specific project in mind? Send us your requirements and we'll get back to you with a proposal within 24 hours.
                            </p>
                            <span className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                Email Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </a>
                    </Reveal>
                </div>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors interactive text-sm tracking-widest uppercase">X / Twitter</a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors interactive text-sm tracking-widest uppercase">LinkedIn</a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors interactive text-sm tracking-widest uppercase">Instagram</a>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="text-center text-zinc-800 text-[10px] font-mono uppercase">
                        © 2024 PITON DIGITAL. ALL RIGHTS RESERVED.
                    </div>
                    <a href="#admin" onClick={() => window.location.hash = 'admin'} className="flex items-center gap-1 text-zinc-800 hover:text-zinc-600 transition-colors text-[10px] font-mono uppercase tracking-widest interactive">
                        <Lock className="w-3 h-3" /> Admin Access
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
