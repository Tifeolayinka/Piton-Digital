import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { Rocket, Check, X, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

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


                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-zinc-200">
                                <th className="py-6 px-4 font-mono text-xs uppercase tracking-widest text-zinc-400">Feature</th>
                                <th className="py-6 px-4 font-display font-bold text-xl text-piton-black bg-zinc-50/50">Piton Digital</th>
                                <th className="py-6 px-4 font-display font-bold text-xl text-zinc-300">Generalist Agency</th>
                                <th className="py-6 px-4 font-display font-bold text-xl text-zinc-300">Generic Dev Shop</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {[
                                { feature: 'Strategy', piton: 'Business-First', agency: 'Generic / Fluff', dev: 'None' },
                                { feature: 'Design Quality', piton: 'World-Class (Figma)', agency: 'Hit or Miss', dev: 'Basic / Template' },
                                { feature: 'Development', piton: 'Scalable Bubble', agency: 'Outsourced', dev: 'Spaghetti Code' },
                                { feature: 'Speed', piton: 'Weeks', agency: 'Months', dev: 'Weeks (but buggy)' },
                                { feature: 'Cost', piton: 'High Value', agency: 'Bloated', dev: 'Cheap (at first)' },
                            ].map((row, i) => (
                                <tr key={i} className="group hover:bg-zinc-50 transition-colors">
                                    <td className="py-6 px-4 font-medium text-zinc-500">{row.feature}</td>
                                    <td className="py-6 px-4 font-bold text-piton-black bg-zinc-50/50 group-hover:bg-zinc-100/50 transition-colors">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-piton-accent" />
                                            {row.piton}
                                        </div>
                                    </td>
                                    <td className="py-6 px-4 text-zinc-400">{row.agency}</td>
                                    <td className="py-6 px-4 text-zinc-400">{row.dev}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
