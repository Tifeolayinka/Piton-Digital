import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const Counter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // @ts-ignore
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} />;
};

const metrics = [
  {
    id: 1,
    number: 7,
    suffix: "+",
    label: "Years Experience",
    description: "Navigating the digital landscape since 2016."
  },
  {
    id: 2,
    number: 40,
    suffix: "+",
    label: "Projects Launched",
    description: "From rapid MVPs to enterprise-grade platforms."
  },
  {
    id: 3,
    number: 2,
    prefix: "$",
    suffix: "M+",
    label: "Client Revenue Generated",
    description: "Building products that drive real business growth."
  },
  {
    id: 4,
    number: 100,
    suffix: "%",
    label: "Delivery Rate",
    description: "We don't just start climbs. We finish them."
  }
];

const Metrics: React.FC = () => {
  return (
    <section className="py-24 bg-piton-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Decorative line */}
              <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-zinc-800 group-hover:bg-white/20 transition-colors duration-300 md:block hidden" />

              <div className="pl-0 md:pl-6">
                <motion.div
                  className="block text-5xl md:text-6xl font-display font-bold mb-2 text-white md:bg-gradient-to-r md:from-white md:to-zinc-400 md:bg-clip-text md:text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Counter value={metric.number} prefix={metric.prefix} suffix={metric.suffix} />
                </motion.div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-3 text-white">
                  {metric.label}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-[200px]">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;

