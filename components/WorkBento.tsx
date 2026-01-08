import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../src/data/projects';
import { CaseStudyData } from './CaseStudyModal';
import Reveal from './Reveal';

interface BentoCardProps {
    project: typeof projects[0];
    className?: string;
    index: number;
    onClick: (data: CaseStudyData) => void;
}

const BentoCard: React.FC<BentoCardProps> = ({ project, className, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => project.caseStudy && onClick(project.caseStudy)}
            className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-zinc-100/10 bg-zinc-900 ${className}`}
        >
            {/* Image */}
            <div className="absolute inset-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">0{index + 1}</span>
                    <div className="flex gap-2 flex-wrap justify-end">
                        {project.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="px-2 py-1 border border-white/20 text-[8px] md:text-[10px] font-mono uppercase tracking-wider backdrop-blur-md text-white">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/60 font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {project.type}
                    </p>

                    {project.caseStudy && (
                        <div className="mt-4 flex items-center gap-2 text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <span>View Case Study</span>
                            <ArrowRight className="w-3 h-3 md:w-4 h-4" />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

interface WorkBentoProps {
    onProjectClick: (data: CaseStudyData) => void;
}

const WorkBento: React.FC<WorkBentoProps> = ({ onProjectClick }) => {
    // We'll use the first 5 projects for the Bento Grid
    const displayProjects = projects.slice(0, 5);

    return (
        <section id="work" className="py-32 bg-[#FDFDFD]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <Reveal>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-3 h-3 bg-piton-accent rounded-full animate-pulse"></span>
                            <span className="text-sm font-mono uppercase tracking-widest">Selected Expeditions</span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-6xl md:text-8xl font-display font-bold text-piton-black leading-[0.85] tracking-tighter">
                            PROVEN<br />RESULTS
                        </h2>
                    </Reveal>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
                    {/* Project 1: Large Feature (Dojohub) */}
                    <BentoCard
                        project={displayProjects[0]}
                        index={0}
                        onClick={onProjectClick}
                        className="md:col-span-4 lg:col-span-4 lg:row-span-2"
                    />

                    {/* Project 2: Vertical (Oqool) */}
                    <BentoCard
                        project={displayProjects[1]}
                        index={1}
                        onClick={onProjectClick}
                        className="md:col-span-2 lg:col-span-2 lg:row-span-2"
                    />

                    {/* Project 3: Horizontal (Recrewer) */}
                    <BentoCard
                        project={displayProjects[2]}
                        index={2}
                        onClick={onProjectClick}
                        className="md:col-span-4 lg:col-span-3 lg:row-span-1"
                    />

                    {/* Project 4: Standard (The Drivory) */}
                    <BentoCard
                        project={displayProjects[3]}
                        index={3}
                        onClick={onProjectClick}
                        className="md:col-span-2 lg:col-span-3 lg:row-span-1"
                    />

                    {/* Project 5: Standard (DemmyPay) - Full width on mobile, half on tablet, 3 cols on desktop */}
                    <BentoCard
                        project={displayProjects[4]}
                        index={4}
                        onClick={onProjectClick}
                        className="md:col-span-4 lg:col-span-6 lg:row-span-1"
                    />
                </div>

                {/* Footer Link */}
                <div className="mt-16 flex justify-center">
                    <Reveal delay={0.5}>
                        <a href="#contact" className="group flex items-center gap-4 text-2xl md:text-3xl font-display font-bold text-piton-black hover:text-piton-accent transition-colors">
                            <span>Have a project in mind?</span>
                            <ArrowRight className="w-6 h-6 md:w-8 h-8 group-hover:translate-x-2 transition-transform" />
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default WorkBento;
