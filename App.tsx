import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroScroll from './components/HeroScroll';
import Challenges from './components/Challenges';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import AboutMe from './components/AboutMe';
import Metrics from './components/Metrics';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ClimbingLine from './components/ClimbingLine';
import CustomCursor from './components/CustomCursor';
import Admin from './src/pages/Admin';

const NoiseOverlay = () => (
  <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsAdmin(window.location.hash === '#admin');
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (isAdmin) {
    return <Admin onBack={() => window.location.hash = ''} />;
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-piton-black font-sans selection:bg-piton-accent selection:text-white md:cursor-none antialiased">
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <NoiseOverlay />
      <ClimbingLine />
      <Navbar />

      <main>
        <Hero />

        {/* Scrolling Works Marquee replacing the Vibe Console */}
        <div className="relative z-20 -mt-10 mb-20 w-full overflow-hidden">
          <HeroScroll />
        </div>

        <Challenges />
        <Services />
        <Process />
        <About />
        <AboutMe />
        <Metrics />
        <Work />
        <Testimonial />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default App;