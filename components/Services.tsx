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
                    {/* Service 1 - Product Strategy */}
                    <Reveal width="100%" className="h-full" style={{ height: '100%' }}>
                        <ServiceCard
                            number="01"
                            title="Product Strategy"
                            desc="The Blueprint. We don't write a single line of code until we understand your business model, user flows, and data structure. This prevents costly pivots later."
                            tags={['Roadmapping', 'Data Modeling', 'MVP Scoping']}
                            icon={<Layout className="w-6 h-6" />}
                        />
                    </Reveal>

                    {/* Service 2 - High-Fidelity Design */}
                    <Reveal width="100%" delay={0.1} className="h-full" style={{ height: '100%' }}>
                        <ServiceCard
                            number="02"
                            title="High-Fidelity Design"
                            desc="The Interface. We design pixel-perfect, interactive prototypes in Figma that look and feel like the real thing. No templates, just custom brand-aligned UI."
                            tags={['Figma', 'Design Systems', 'Prototyping']}
                            icon={<Figma className="w-6 h-6" />}
                        />
                    </Reveal>

                    {/* Service 3 - Bubble Development */}
                    <Reveal width="100%" delay={0.2} className="h-full" style={{ height: '100%' }}>
                        <ServiceCard
                            number="03"
                            title="Bubble Development"
                            desc="The Engine. We build robust, scalable applications on Bubble. From complex marketplaces to SaaS platforms, we ship production-grade software fast."
                            tags={['Bubble.io', 'API Integrations', 'Backend Logic']}
                            icon={<Code className="w-6 h-6" />}
                        />
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
