import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../src/data/projects';
import { CaseStudyData } from './CaseStudyModal';

interface ProjectCardProps {
  title: string;
  headline?: string;
  tags: string[];
  color: string;
  onClick?: () => void;
  hasCaseStudy: boolean;
  index: number;
  mainImage?: string;
  galleryImages?: { url: string; caption: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, headline, tags, onClick, hasCaseStudy, index, mainImage, galleryImages }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow logic for hover state
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && galleryImages && galleryImages.length > 0) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      }, 1500);
    } else {
      setCurrentSlide(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, galleryImages]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-100/10 ${hasCaseStudy ? 'cursor-pointer' : ''}`}
    >
      {/* Container with 4:3 Aspect Ratio */}
      <div className="aspect-[4/3] relative overflow-hidden">

        {/* Project Visuals (Full Size) */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            {!isHovered || !galleryImages || galleryImages.length === 0 ? (
              <motion.img
                key="main"
                src={mainImage}
                alt={title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <motion.img
                key={currentSlide}
                src={galleryImages[currentSlide].url}
                alt={galleryImages[currentSlide].caption}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Dark Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

        {/* Content Overlay - Always Visible */}
        <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-between text-white pointer-events-none">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">0{index + 1}</span>
            <div className="flex gap-2">
              {tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="px-2 py-1 border border-white/20 text-[8px] font-mono uppercase tracking-wider backdrop-blur-md bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-2">
              {title}
            </h3>

            {headline && (
              <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest opacity-70 leading-relaxed mb-4">
                {headline}
              </p>
            )}

            {hasCaseStudy && (
              <div className="flex items-center gap-2 text-white group-hover:text-white transition-colors duration-300">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold">View Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface WorkProps {
  onProjectClick: (data: CaseStudyData) => void;
}

const Work: React.FC<WorkProps> = ({ onProjectClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Strategy', 'UI/UX Design', 'No-code Development'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;

    return projects.filter(project => {
      const services = project.caseStudy?.services || [];
      const normalizedServices = services.map(s => s.toUpperCase());

      if (activeFilter === 'Strategy') {
        return normalizedServices.includes('PRODUCT STRATEGY');
      }
      if (activeFilter === 'UI/UX Design') {
        return normalizedServices.some(s => s.includes('UI') || s.includes('UX'));
      }
      if (activeFilter === 'No-code Development') {
        return normalizedServices.some(s => s.includes('DEVELOPMENT'));
      }
      return false;
    });
  }, [activeFilter]);

  return (
    <section id="work" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-piton-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-mono uppercase tracking-widest">Selected Expeditions</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-bold text-piton-black leading-[0.85] tracking-tighter">
              PROVEN<br />RESULTS
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 md:gap-4 border-b border-zinc-100 pb-4 lg:pb-0 lg:border-none">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-[10px] md:text-xs font-mono uppercase tracking-widest transition-all duration-300 rounded-full ${activeFilter === filter
                  ? 'bg-piton-black text-white'
                  : 'text-zinc-400 hover:text-piton-black hover:bg-zinc-100'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                index={i}
                {...project}
                headline={project.caseStudy?.headline}
                mainImage={project.caseStudy?.mainImage}
                galleryImages={project.caseStudy?.galleryImages}
                onClick={() => project.caseStudy && onProjectClick(project.caseStudy)}
                hasCaseStudy={!!project.caseStudy}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Link */}
        <div className="mt-24 flex justify-center">
          <a href="#contact" className="group flex items-center gap-4 text-2xl md:text-3xl font-display font-bold text-piton-black hover:text-piton-accent transition-colors">
            <span>Have a project in mind?</span>
            <ArrowRight className="w-6 h-6 md:w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;