import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, HTMLMotionProps } from 'framer-motion';

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.25,
  duration = 0.5,
  yOffset = 75,
  className,
  ...props
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const responsiveYOffset = isMobile ? Math.min(yOffset, 20) : yOffset;

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: responsiveYOffset },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

