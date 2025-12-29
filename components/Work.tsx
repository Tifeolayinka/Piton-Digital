import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../src/data/projects';
import { CaseStudyData } from './CaseStudyModal';

interface ProjectCardProps {
  title: string;
  tags: string[];
  image: string;
  color: string;
  onClick?: () => void;
  hasCaseStudy: boolean;
  index: number;
  hoverImage?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, image, onClick, hasCaseStudy, index, hoverImage }) => {
  return (
    <div
      onClick={onClick}
      className={`min-w-[80vw] md:min-w-[600px] lg:min-w-[800px] h-[70vh] relative group mx-4 md:mx-8 ${hasCaseStudy ? 'cursor-pointer' : ''}`}
    >
      {/* Image Container */}
      <div className="w-full h-full relative overflow-hidden bg-zinc-900 flex">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10 pointer-events-none" />

        {/* Left Image (Main) */}
        <div className={`relative h-full overflow-hidden transition-all duration-700 ease-in-out ${hoverImage ? 'w-1/2 group-hover:w-0' : 'w-full'}`}>
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
        </div>

        {/* Right Image (Hover) */}
        {hoverImage && (
          <div className="relative h-full overflow-hidden w-1/2 group-hover:w-full transition-all duration-700 ease-in-out">
            <motion.img
              src={hoverImage}
              alt={`${title} Preview`}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between text-white">
          <div className="flex justify-between items-start">
            <span className="text-xs font-mono uppercase tracking-widest opacity-70">0{index + 1}</span>
            <div className="flex gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 border border-white/20 text-[10px] font-mono uppercase tracking-wider backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>

            {hasCaseStudy && (
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="text-sm font-mono uppercase tracking-wider">View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface WorkProps {
  onProjectClick: (data: CaseStudyData) => void;
}

const Work: React.FC<WorkProps> = ({ onProjectClick }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll progress into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  // Use the first 5 projects for the main work section
  const displayProjects = projects.slice(0, 5);

  return (
    <>
      {/* Desktop: Horizontal Scroll */}
      <section id="work" ref={targetRef} className="relative h-[300vh] bg-[#FDFDFD] hidden md:block">
        {/* Sticky Container */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          <div className="absolute top-10 left-10 z-10 flex items-center gap-4">
            <span className="w-3 h-3 bg-piton-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-mono uppercase tracking-widest">Selected Expeditions</span>
          </div>

          {/* Horizontal Scroll Content */}
          <motion.div style={{ x }} className="flex gap-0 px-4 md:px-20 items-center relative z-10">

            {/* Intro / Title Slide */}
            <div className="min-w-[50vw] md:min-w-[40vw] pr-20 pl-10">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[10vw] font-display font-bold text-piton-black leading-[0.85] tracking-tighter mb-12"
              >
                PROVEN<br />RESULTS
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-400"
              >
                <ArrowRight className="w-4 h-4 text-piton-accent" />
                <span>See What's Possible</span>
              </motion.div>
            </div>

            {displayProjects.map((project, i) => (
              <ProjectCard
                key={i}
                index={i}
                {...project}
                onClick={() => project.caseStudy && onProjectClick(project.caseStudy)}
                hasCaseStudy={!!project.caseStudy}
              />
            ))}

            {/* End Card */}
            <div className="min-w-[400px] flex items-center justify-center pl-20">
              <a href="#contact" className="group flex items-center gap-4 text-4xl font-display font-bold text-piton-black hover:text-piton-accent transition-colors">
                <span>View All Projects</span>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile: Vertical List */}
      <section id="work-mobile" className="py-24 bg-[#FDFDFD] md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-piton-accent rounded-full animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest">Selected Expeditions</span>
            </div>
            <h2 className="text-5xl font-display font-bold text-piton-black leading-[0.9] tracking-tighter mb-4">
              PROVEN<br />RESULTS
            </h2>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <ArrowRight className="w-4 h-4 text-piton-accent" />
              <span>See What's Possible</span>
            </div>
          </div>

          <div className="space-y-6">
            {displayProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => project.caseStudy && onProjectClick(project.caseStudy)}
                className={`relative h-[60vh] rounded-2xl overflow-hidden ${project.caseStudy ? 'cursor-pointer' : ''} group`}
              >
                {/* Image Container */}
                <div className="w-full h-full relative overflow-hidden bg-zinc-900 flex">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10 pointer-events-none" />

                  {/* Left Image (Main) */}
                  <div className={`relative h-full overflow-hidden transition-all duration-700 ease-in-out ${project.hoverImage ? 'w-1/2 group-hover:w-0' : 'w-full'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Image (Hover) */}
                  {project.hoverImage && (
                    <div className="relative h-full overflow-hidden w-1/2 group-hover:w-full transition-all duration-700 ease-in-out">
                      <img
                        src={project.hoverImage}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono uppercase tracking-widest opacity-70">0{i + 1}</span>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 border border-white/20 text-[10px] font-mono uppercase tracking-wider backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-4xl font-display font-bold leading-[0.9] tracking-tighter mb-4">
                        {project.title.split(' ').map((word, idx) => (
                          <span key={idx} className="block">{word}</span>
                        ))}
                      </h3>

                      {project.caseStudy && (
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="text-sm font-mono uppercase tracking-wider">View Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;