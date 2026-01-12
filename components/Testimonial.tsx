import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import Reveal from './Reveal';

export const VideoPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Trigger every time the video enters the viewport
  const isInView = useInView(containerRef, { amount: 0.5, once: false });

  // Global interaction listener to "prime" audio
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      // Once we have an interaction, we can try to unmute if in view
      if (isInView && videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      // Remove listeners after first interaction
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Enhanced premium animation
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(8px)", "blur(0px)"]);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);

              // If user has already interacted, we can unmute immediately
              if (hasInteracted) {
                videoRef.current.muted = false;
                setIsMuted(false);
              } else {
                // Otherwise stay muted to ensure playback continues
                videoRef.current.muted = true;
                setIsMuted(true);
              }
            })
            .catch((error) => {
              console.log("Autoplay failed:", error);
              setIsPlaying(false);
            });
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        // Always mute when leaving view to be safe
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  }, [isInView, hasInteracted]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={containerRef}
        style={{ scale, opacity, y, rotateX, filter: blur }}
        className="mb-24 max-w-5xl mx-auto px-4 transform-gpu"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50 border border-zinc-100 bg-zinc-900 aspect-video group cursor-pointer" onClick={toggleMute}>
          <video
            ref={videoRef}
            src="https://www.dropbox.com/scl/fi/yw0qecltes8m24g35xlnu/VIDEO-FOR-TIFE.mp4?rlkey=dnxoimcvgvjo93kss7bi69fnj&raw=1"
            loop
            playsInline
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          >
            Your browser does not support the video tag.
          </video>

          {/* Sound Control Overlay */}
          <div className="absolute bottom-6 right-6 z-20">
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          {/* Play/Pause Overlay (Hidden by default, shows on hover or pause) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
          )}

          {/* Tap to Unmute Hint */}
          <AnimatePresence>
            {isMuted && isPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-sm font-medium flex items-center gap-2">
                  <VolumeX size={14} />
                  <span>Tap for sound</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Featured Story</span>
          </div>
          <h3 className="text-xl font-medium text-piton-black mt-2">"Blown away by the dedication"</h3>
        </div>
      </motion.div>
    </div>
  );
};

interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  companyShort: string;
}

const testimonials: TestimonialData[] = [
  {
    quote: "Working with Tife has been an excellent experience. He contributed to a few projects that demanded quick turnarounds and creative problem-solving. His strong design sense and attention to user experience made him an indispensable asset to our team.",
    name: "Chad D.",
    role: "Founder - ChiaDigital",
    companyShort: "ChiaDigital"
  },
  {
    quote: "Tife has been great to work with. He's helped on a project where we need quick turn-arounds and outside of the box thinking! He's got a good eye for design and UX and would be a great compliment to your project!",
    name: "Jonathan B.",
    role: "CEO - Ajuda Benefit",
    companyShort: "Ajuda Benefit"
  },
  {
    quote: "Tife has a great eye for design, works quickly and easy to work alongside. He built a marketplace and custom CMS for us in Bubble. I look forward to working with him again.",
    name: "Nick A.",
    role: "Product Manager - Alteams",
    companyShort: "Alteams"
  },
  {
    quote: "Working with the Piton team felt less like hiring an agency and more like bringing on a technical co-founder. They challenged our assumptions and made the product better for it.",
    name: "Elena Rodriguez",
    role: "Product Lead - Swift",
    companyShort: "Swift"
  }
];

interface TestimonialProps {
  showVideo?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ showVideo = true }) => {
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
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Reveal width="100%">
          <h2 className="text-4xl font-display font-serif font-medium text-piton-black mb-4">
            Founders Who Scaled
          </h2>
        </Reveal>
        <Reveal delay={0.1} width="100%">
          <p className="text-zinc-400 text-sm mb-12">We don't just build products. We build partnerships that generate<br />measurable growth for years to come.</p>
        </Reveal>

        {showVideo && (
          <Reveal delay={0.2} width="100%">
            <VideoPlayer />
          </Reveal>
        )}

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