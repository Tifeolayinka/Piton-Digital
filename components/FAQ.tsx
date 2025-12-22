import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const faqs = [
  {
    q: "What is 'Full-Cycle' development?",
    a: "It means we handle everything. We start with strategy to define what we're building, move into UI/UX design to create the visual system, and then build the actual functional software. You don't need to hire a separate designer and developer."
  },
  {
    q: "I already have a design. Can you just build it?",
    a: "Absolutely. If you have Figma files ready, we can jump straight into the build phase. We specialize in converting designs into pixel-perfect Webflow, Bubble, or custom React applications."
  },
  {
    q: "I have a dev team but need a design update. Can you help?",
    a: "Yes. We often partner with technical teams to provide just the UI/UX layer. We deliver organized, developer-ready design files and design systems that your engineers will love working with."
  },
  {
    q: "What kind of 'Internal Systems' do you build?",
    a: "We build custom admin panels, client portals, inventory management systems, and automated CRM dashboards. Basically, if you're running your business on a mess of spreadsheets, we can turn that into a clean, automated software application."
  },
  {
    q: "Why No-Code/Low-Code?",
    a: "Speed and cost. Traditional development takes months and costs 6-figures. By using robust infrastructure like Bubble, Webflow, and Xano, we can ship enterprise-grade software in weeks for a fraction of the cost."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-zinc-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
           <Reveal>
             <h2 className="text-3xl font-display font-bold text-piton-black mb-2">Frequently Asked Questions</h2>
           </Reveal>
           <Reveal delay={0.1}>
             <p className="text-zinc-500">Providing answers to your questions.</p>
           </Reveal>
        </div>

        <div className="space-y-4">
           {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.1} width="100%">
                  <div className="border-b border-zinc-200 pb-4">
                     <button 
                       onClick={() => setOpenIndex(openIndex === i ? null : i)}
                       className="w-full flex items-center justify-between text-left py-4 hover:text-piton-accent transition-colors interactive"
                     >
                        <span className="text-lg font-bold text-piton-black flex items-center gap-3">
                             <div className="w-6 h-6 rounded-full border border-zinc-300 flex items-center justify-center text-xs text-zinc-400 font-mono">
                                  {openIndex === i ? '-' : '+'}
                             </div>
                             {faq.q}
                        </span>
                     </button>
                     <AnimatePresence>
                        {openIndex === i && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: 'auto', opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden"
                           >
                              <p className="pb-4 text-zinc-600 leading-relaxed text-sm pl-9 pr-8">
                                 {faq.a}
                              </p>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
              </Reveal>
           ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;