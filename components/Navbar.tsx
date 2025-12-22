import React, { useState, useEffect } from 'react';
import { Menu, X, Triangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Resources', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-zinc-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className="text-2xl font-display font-bold tracking-tighter text-piton-black">piton</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-sans font-medium text-piton-secondary hover:text-piton-black transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-6 py-3 bg-piton-black text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2">
             <span>Get Started</span>
             <span className="text-[10px] bg-zinc-800 px-1.5 rounded border border-zinc-700">Book Strategy</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-piton-black">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 items-center text-center">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  href={link.href} 
                  className="text-piton-black hover:text-piton-accent font-display text-2xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
               <motion.a 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 href="#contact" 
                 className="mt-4 px-8 py-4 bg-piton-black text-white rounded-full font-bold text-sm w-full"
                 onClick={() => setIsOpen(false)}
               >
               Book an intro call
            </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;