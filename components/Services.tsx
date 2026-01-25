import React from 'react';
import { ArrowDown, ArrowUpRight, Code, Figma, Layout, Smartphone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <Reveal width="100%" className="max-w-3xl">
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-piton-black leading-[1.1] tracking-tight mb-8">
                            Designing Systems That <span className="text-piton-accent"> Make Products Easier to Run.</span>
                        </h2>
                        <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
                            We don't just build apps; we architect systems. By focusing on <span className="font-medium text-piton-black">clarity, structure, and scalability</span>, we ensure your digital products are as easy to manage as they are to use.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="w-20 h-20 rounded-full border border-zinc-200 flex items-center justify-center text-piton-black hover:border-piton-accent hover:text-piton-accent transition-colors cursor-pointer group bg-white">
                            <ArrowDown className="w-8 h-8 group-hover:translate-y-1 transition-transform" />
                        </div>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
                    {/* Service 1 - UI/UX Design */}
                    <Reveal width="100%" className="h-full" style={{ height: '100%' }}>
                        <ServiceCard
                            number="01"
                            title="UI/UX Design"
                            desc="For teams that have dev resources but need world-class interface design. We deliver production-ready Figma files."
                            tags={['Product Design', 'Design Systems', 'Prototyping']}
                            icon={<Figma className="w-6 h-6" />}
                        />
                    </Reveal>

                    {/* Service 2 - No-Code Development */}
                    <Reveal width="100%" delay={0.1} className="h-full" style={{ height: '100%' }}>
                        <ServiceCard
                            number="02"
                            title="No-Code Dev"
                            desc="For founders who have designs ready. We turn your Figma files into pixel-perfect, scalable software using Bubble or Webflow."
                            tags={['Webflow', 'Bubble', 'Weweb', 'Flutterflow']}
                            icon={<Code className="w-6 h-6" />}
                        />
                    </Reveal>

                    {/* Service 3 - Full Cycle */}
                    <Reveal width="100%" delay={0.2} className="h-full" style={{ height: '100%' }}>
                        <ServiceCard
                            number="03"
                            title="Full-Cycle Product"
                            desc="From zero to launched. We handle strategy, design, and development for MVPs, SaaS platforms, and mobile apps."
                            tags={['Strategy', 'Product Design', 'Development']}
                            icon={<Smartphone className="w-6 h-6" />}
                        />
                    </Reveal>

                    {/* Service 4 - Internal Systems */}
                    <Reveal width="100%" className="h-full" style={{ height: '100%' }}>
                        <ServiceCard
                            number="04"
                            title="Internal Systems"
                            desc="Custom admin panels and operational tools for businesses. Replace spreadsheets with powerful, automated software."
                            tags={['Admin Panels', 'Dashboards', 'Automations']}
                            icon={<Layout className="w-6 h-6" />}
                        />
                    </Reveal>

                    {/* Service 5 - Automations */}
                    <Reveal width="100%" delay={0.1} className="h-full" style={{ height: '100%' }}>
                        <ServiceCard
                            number="05"
                            title="Automations"
                            desc="Connecting your favorite tools to save hours of manual data entry. Make.com and Zapier integrations."
                            tags={['Make.com', 'Zapier', 'API Integrations']}
                            icon={<Zap className="w-6 h-6" />}
                        />
                    </Reveal>

                    {/* Service 6 - CTA Card */}
                    <Reveal width="100%" delay={0.2} className="h-full" style={{ height: '100%' }}>
                        <a
                            href="https://cal.com/tifeolayinka/project-consultation"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-piton-black p-12 flex flex-col justify-between group relative overflow-hidden h-full block"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,166,81,0.2),rgba(0,0,0,0)_50%)]"></div>
                            <div className="relative z-10">
                                <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4 block">06</span>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Not sure what you need?</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                                    Book a strategy call. We'll analyze your situation and recommend the right path—whether it's design, build, or both.
                                </p>
                            </div>
                            <div className="relative z-10 flex justify-end">
                                <div className="w-12 h-12 rounded-full bg-white text-piton-black flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </a>
                    </Reveal>

                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ number, title, desc, tags, icon }: any) => (
    <div className="bg-white p-12 flex flex-col h-full hover:bg-zinc-50 transition-colors group">
        <div className="flex justify-between items-start mb-8">
            <span className="text-zinc-300 font-mono text-xs tracking-widest uppercase group-hover:text-piton-accent transition-colors">{number}</span>
            <div className="text-zinc-300 group-hover:text-piton-black transition-colors">
                {icon}
            </div>
        </div>

        <h3 className="text-2xl font-display font-bold text-piton-black mb-4 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
            {desc}
        </p>

        <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
                <span key={tag} className="px-2 py-1 bg-zinc-50 border border-zinc-100 text-[10px] font-mono uppercase tracking-wider text-zinc-500 rounded-sm">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export default Services;
