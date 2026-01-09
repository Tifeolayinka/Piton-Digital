import React from 'react';
import { Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

const PortfolioFooter: React.FC = () => {
    return (
        <footer id="contact" className="py-20 bg-white border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-2xl font-display font-bold text-piton-black mb-4">Let's build something great together.</h3>
                        <p className="text-zinc-500 max-w-md mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="https://x.com/tife_olayinka" className="text-zinc-400 hover:text-piton-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/olayinka-boluwatife-/" className="text-zinc-400 hover:text-piton-accent transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/tife-olayinka" className="text-zinc-400 hover:text-piton-accent transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Quick Links</span>
                        <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-8">
                            <a href="/" className="text-sm font-medium text-piton-black hover:text-piton-accent transition-colors">Home</a>
                            <a href="/portfolio" className="text-sm font-medium text-piton-black hover:text-piton-accent transition-colors">Portfolio</a>
                            <a href="/design" className="text-sm font-medium text-piton-black hover:text-piton-accent transition-colors">Design</a>
                            <a href="/nocode" className="text-sm font-medium text-piton-black hover:text-piton-accent transition-colors">No-Code</a>
                        </div>
                        <p className="text-xs text-zinc-400 font-mono">
                            © {new Date().getFullYear()} Tife Olayinka. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PortfolioFooter;
