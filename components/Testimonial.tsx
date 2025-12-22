import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const testimonials = [
  {
    quote: "Life - working with you has been a pleasure. The level of detail and execution you bring to the development process has been crucial in ensuring we meet our MVP targets",
    name: "Chad D.",
    role: "Founder - Bali Family Find",
    companyShort: "Bali FF",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Piton didn't just build our app; they completely reimagined our user journey. The Vibe Coding approach sounds like a gimmick until you feel the difference in the final product. Absolute game changer.",
    name: "Sarah J.",
    role: "CEO - Velvet Rope",
    companyShort: "Velvet",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Fast, precise, and incredibly stylish. The team understood our brand constraints immediately and delivered a Webflow implementation that exceeded our wildest expectations.",
    name: "Marcus T.",
    role: "Director - Horizon Labs",
    companyShort: "Horizon",
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  },
  {
    quote: "Working with the Piton team felt less like hiring an agency and more like bringing on a technical co-founder. They challenged our assumptions and made the product better for it.",
    name: "Elena Rodriguez",
    role: "Product Lead - Swift",
    companyShort: "Swift",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
       <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal width="100%">
              <h2 className="text-4xl font-display font-serif font-medium text-piton-black mb-4">
                 Founders Who Scaled
              </h2>
          </Reveal>
          <Reveal delay={0.1} width="100%">
              <p className="text-zinc-400 text-sm mb-12">We don't just build products. We build partnerships that generate<br/>measurable growth for years to come.</p>
          </Reveal>

          <div className="relative min-h-[320px]">
             <AnimatePresence initial={false} custom={direction} mode="wait">
                 <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className="bg-zinc-50 text-black p-8 md:p-16 rounded-2xl border border-zinc-100 cursor-grab active:cursor-grabbing touch-pan-y"
                 >
                     <div className="text-lg md:text-2xl font-medium leading-relaxed relative z-10 mb-8 text-piton-black font-sans select-none">
                        "{testimonials[currentIndex].quote}"
                     </div>

                     <div className="flex items-center justify-between border-t border-zinc-200 pt-6 select-none">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-300 overflow-hidden">
                               <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-left">
                               <div className="font-bold text-sm text-piton-black">{testimonials[currentIndex].name}</div>
                               <div className="text-[10px] text-zinc-500 uppercase">{testimonials[currentIndex].role}</div>
                            </div>
                        </div>
                        <div className="text-zinc-400 font-bold text-sm hidden sm:block">
                           {testimonials[currentIndex].companyShort}
                        </div>
                     </div>
                 </motion.div>
             </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-10">
             <button 
               onClick={() => paginate(-1)}
               className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-colors text-piton-black interactive focus:outline-none focus:ring-2 focus:ring-piton-accent/20"
               aria-label="Previous testimonial"
             >
               <ChevronLeft className="w-5 h-5" />
             </button>
             
             <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-piton-black w-6' : 'bg-zinc-300 hover:bg-zinc-400'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
             </div>

             <button 
               onClick={() => paginate(1)}
               className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-colors text-piton-black interactive focus:outline-none focus:ring-2 focus:ring-piton-accent/20"
               aria-label="Next testimonial"
             >
               <ChevronRight className="w-5 h-5" />
             </button>
          </div>

       </div>
    </section>
  );
};

export default Testimonial;