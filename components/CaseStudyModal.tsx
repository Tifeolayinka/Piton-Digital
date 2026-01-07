import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export interface CaseStudyData {
  title: string;
  headline: string;
  services: string[];
  tools: string[];
  timeline: string;
  mainImage: string;
  intro: string;
  challenges: string[];
  process: string;
  stats: { label: string; value: string; suffix?: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
  result: string;
  galleryImages?: { url: string; caption?: string }[];
  liveUrl?: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CaseStudyData;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Parallax effect for hero image
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950">
      {/* Close Button - Fixed */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.5 }}
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
      >
        <X className="w-6 h-6 text-black" />
      </motion.button>

      {/* Main Container */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%", transition: { duration: 0.3, ease: "easeInOut" } }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="w-full h-full bg-white overflow-hidden relative flex flex-col"
      >
        <div ref={containerRef} className="flex-1 overflow-y-auto scrollbar-hide">

          {/* Hero Section */}
          <div className="relative h-[80vh] w-full overflow-hidden">
            <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
              <img src={data.mainImage} alt={data.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 bg-gradient-to-t from-black/80 to-transparent">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="text-piton-accent font-mono uppercase tracking-widest text-sm mb-4 block">Case Study</span>
                <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.9] max-w-5xl">
                  {data.headline}
                </h1>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{ delay: 1, duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 text-white/60 text-xs font-mono uppercase tracking-widest mt-8"
                >
                  <div className="w-px h-8 bg-white/60" />
                  <span>Scroll to Explore</span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="max-w-[1600px] mx-auto px-6 md:px-20 py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

              {/* Sticky Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-20 space-y-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">Services</h3>
                      <div className="flex flex-wrap gap-2">
                        {data.services.map((s, i) => (
                          <span key={i} className="px-3 py-1 border border-zinc-200 rounded-full text-sm font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {data.tools.map((t, i) => (
                          <span key={i} className="px-3 py-1 border border-zinc-200 rounded-full text-sm font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">Timeline</h3>
                      <p className="text-xl font-display font-bold">{data.timeline}</p>
                    </div>
                  </motion.div>

                  {/* Impact Stats (Moved to sidebar for desktop) */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100"
                  >
                    <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">Impact</h3>
                    <div className="space-y-6">
                      {data.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="text-4xl font-display font-bold text-piton-black">{stat.value}</div>
                          <div className="text-sm text-zinc-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Live Site Button */}
                  {data.liveUrl && (
                    <motion.a
                      href={data.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="block w-full py-4 bg-piton-black text-white text-center rounded-xl font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 group"
                    >
                      <span>Visit Live Site</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8 space-y-24">

                {/* Intro */}
                <section>
                  <h2 className="text-3xl font-display font-bold mb-8">The Challenge</h2>
                  <p className="text-xl md:text-2xl leading-relaxed text-zinc-600 font-light">
                    {data.intro}
                  </p>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.challenges.map((challenge, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-piton-accent mt-2 shrink-0" />
                        <p className="text-zinc-600">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Gallery Grid 1 */}
                {data.galleryImages && data.galleryImages.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.galleryImages[0] && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                      >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200 group-hover:shadow-xl transition-all duration-500">
                          <img src={data.galleryImages[0].url} alt={data.galleryImages[0].caption || "Gallery 1"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        {data.galleryImages[0].caption && (
                          <div className="mt-3 flex items-center gap-2">
                            <div className="h-px w-6 bg-zinc-300 group-hover:w-12 group-hover:bg-piton-accent transition-all duration-300" />
                            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-piton-black transition-colors">{data.galleryImages[0].caption}</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                    {data.galleryImages[1] && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group md:mt-20 cursor-pointer"
                      >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200 group-hover:shadow-xl transition-all duration-500">
                          <img src={data.galleryImages[1].url} alt={data.galleryImages[1].caption || "Gallery 2"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        {data.galleryImages[1].caption && (
                          <div className="mt-3 flex items-center gap-2">
                            <div className="h-px w-6 bg-zinc-300 group-hover:w-12 group-hover:bg-piton-accent transition-all duration-300" />
                            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-piton-black transition-colors">{data.galleryImages[1].caption}</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Process */}
                <section>
                  <h2 className="text-3xl font-display font-bold mb-8">The Process</h2>
                  <div className="prose prose-lg text-zinc-600 max-w-none">
                    <p className="whitespace-pre-line text-lg leading-relaxed">{data.process}</p>
                  </div>
                </section>

                {/* Full Width Image */}
                {data.galleryImages && data.galleryImages[2] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200 group-hover:shadow-2xl transition-all duration-500">
                      <img src={data.galleryImages[2].url} alt={data.galleryImages[2].caption || "Process"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    {data.galleryImages[2].caption && (
                      <div className="mt-3 flex items-center gap-2">
                        <div className="h-px w-6 bg-zinc-300 group-hover:w-12 group-hover:bg-piton-accent transition-all duration-300" />
                        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-piton-black transition-colors">{data.galleryImages[2].caption}</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Result & Testimonial */}
                <section>
                  <h2 className="text-3xl font-display font-bold mb-8">The Result</h2>
                  <p className="text-xl leading-relaxed text-zinc-600 mb-16">
                    {data.result}
                  </p>

                  {data.testimonial && (
                    <div className="bg-zinc-50 text-black p-8 md:p-16 rounded-2xl border border-zinc-100">
                      <div className="text-lg md:text-2xl font-medium leading-relaxed relative z-10 mb-8 text-piton-black font-sans">
                        "{data.testimonial.quote}"
                      </div>

                      <div className="flex items-center justify-between border-t border-zinc-200 pt-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-zinc-300 overflow-hidden">
                            <img src={data.testimonial.avatar} alt={data.testimonial.author} className="w-full h-full object-cover" />
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-sm text-piton-black">{data.testimonial.author}</div>
                            <div className="text-[10px] text-zinc-500 uppercase">{data.testimonial.role}</div>
                          </div>
                        </div>
                        <div className="text-zinc-400 font-bold text-sm hidden sm:block">
                          {data.testimonial.company}
                        </div>
                      </div>
                    </div>
                  )}
                </section>

                {/* Vertical Gallery (Remaining Images) */}
                {data.galleryImages && data.galleryImages.length > 3 && (
                  <section className="space-y-16">
                    <h2 className="text-3xl font-display font-bold mb-8">Extra Visuals</h2>
                    <div className="space-y-20">
                      {data.galleryImages.slice(3).map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ y: -10, transition: { duration: 0.3 } }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6 }}
                          className="group cursor-pointer"
                        >
                          <div className="rounded-2xl overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200 group-hover:shadow-2xl transition-all duration-500">
                            <img
                              src={item.url}
                              alt={item.caption || `Gallery Image ${i + 1}`}
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          {item.caption && (
                            <div className="mt-4 flex items-center gap-3">
                              <div className="h-px w-8 bg-zinc-300 group-hover:w-16 group-hover:bg-piton-accent transition-all duration-300" />
                              <p className="text-sm font-mono uppercase tracking-widest text-zinc-500 group-hover:text-piton-black transition-colors">{item.caption}</p>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                <div className="flex justify-center pt-12 pb-20">
                  <button onClick={onClose} className="group flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-piton-black group-hover:border-piton-black transition-all duration-300">
                      <ArrowRight className="w-6 h-6 text-piton-black group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-mono uppercase tracking-widest text-sm text-zinc-400 group-hover:text-piton-black transition-colors">Close Project</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudyModal;
