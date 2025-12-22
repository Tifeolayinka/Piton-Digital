import React from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';

const AnchorPoint: React.FC<{ pos: number; progress: MotionValue<number> }> = ({ pos, progress }) => {
  const isActive = useTransform(progress, (latest) => latest * 100 > pos);
  const color = useTransform(isActive, (active) => active ? '#00A651' : '#E5E5E5'); // piton-accent vs zinc-200
  
  return (
    <div 
      className="absolute w-2 h-2 -ml-[3px] rotate-45 bg-white border z-10"
      style={{ top: `${pos}%`, borderColor: 'transparent' }}
    >
       <motion.div 
         className="w-full h-full border border-zinc-300 bg-white"
         style={{ borderColor: color }}
       />
    </div>
  );
};

const ClimberIcon = () => (
  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-piton-black">
    {/* Rope above (implied by parent line, but we can add a knot) */}
    
    {/* Climber Figure - Line Art */}
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Head */}
        <circle cx="20" cy="15" r="4" />
        
        {/* Body */}
        <path d="M20 19 L 20 35" />
        
        {/* Arms - Holding the rope */}
        <path d="M20 22 L 12 18 L 18 8" /> {/* Left arm reaching up */}
        <path d="M20 22 L 28 18 L 22 8" /> {/* Right arm reaching up */}
        
        {/* Legs - Pushing against a wall (imaginary) or hanging */}
        <path d="M20 35 L 12 45 L 12 52" /> {/* Left leg */}
        <path d="M20 35 L 28 42 L 28 50" /> {/* Right leg */}
        
        {/* Harness/Gear loops */}
        <path d="M16 35 H 24" />
    </g>
  </svg>
);

const ClimbingLine: React.FC = () => {
  const { scrollYProgress } = useScroll();
  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Map progress to vertical position (0 to 90vh to keep it visible)
  const climberY = useTransform(smoothProgress, (value) => `${value * 90}vh`);
  
  // Anchors at specific percentages
  const anchors = [10, 35, 60, 85]; 

  return (
    <div className="fixed right-6 md:right-10 top-0 bottom-0 w-12 hidden lg:flex flex-col items-center z-30 pointer-events-none opacity-80">
      {/* The Static Rope Line */}
      <div className="absolute top-0 bottom-0 w-[1px] bg-zinc-200" />
      
      {/* The Progress Line (Color Fill) */}
      <motion.div 
        className="absolute top-0 w-[1px] bg-piton-accent origin-top"
        style={{ height: '100%', scaleY: smoothProgress }}
      />

      {/* Anchors (Pitons) */}
      {anchors.map((pos, i) => (
        <AnchorPoint key={i} pos={pos} progress={smoothProgress} />
      ))}

      {/* The Climber */}
      <motion.div 
        className="absolute top-0 -ml-[1px]" // Center on line
        style={{ y: climberY, x: '-50%' }}
      >
         <ClimberIcon />
      </motion.div>
    </div>
  );
};

export default ClimbingLine;