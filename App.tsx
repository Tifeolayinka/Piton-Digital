import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
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
import Testimonial, { VideoPlayer } from './components/Testimonial';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ClimbingLine from './components/ClimbingLine';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Admin from './src/pages/Admin';
import CaseStudyModal, { CaseStudyData } from './components/CaseStudyModal';
import StarterModule from './components/StarterModule';
import Reveal from './components/Reveal';
import Portfolio from './src/pages/Portfolio';
import DesignPortfolio from './src/pages/DesignPortfolio';
import NoCodePortfolio from './src/pages/NoCodePortfolio';
import WhatsAppWidget from './components/WhatsAppWidget';

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
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<CaseStudyData | null>(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const checkHash = () => {
      setIsAdmin(window.location.hash === '#admin');
    };

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      checkHash();
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    window.addEventListener('popstate', handleLocationChange);

    // Custom event for internal navigation
    window.addEventListener('pushstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  if (isAdmin) {
    return <Admin onBack={() => window.location.hash = ''} />;
  }

  const renderContent = () => {
    if (currentPath === '/portfolio') {
      return <Portfolio onProjectClick={setSelectedProject} />;
    }
    if (currentPath === '/design') {
      return <DesignPortfolio onProjectClick={setSelectedProject} />;
    }
    if (currentPath === '/nocode') {
      return <NoCodePortfolio onProjectClick={setSelectedProject} />;
    }

    return (
      <main>
        <Hero />

        {/* Scrolling Works Marquee replacing the Vibe Console */}
        <div className="relative z-20 -mt-10 mb-20 w-full overflow-hidden">
          <HeroScroll />
        </div>

        <Reveal isSection={true} width="100%">
          <div className="py-20 bg-white">
            <VideoPlayer />
          </div>
        </Reveal>

        <Reveal isSection={true} width="100%">
          <Challenges />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <Services />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <Work onProjectClick={setSelectedProject} />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <Process />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <About />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <AboutMe />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <Metrics />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <Testimonial showVideo={false} />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <StarterModule />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <FAQ />
        </Reveal>

        <Reveal isSection={true} width="100%">
          <Contact />
        </Reveal>
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-piton-black font-sans selection:bg-piton-accent selection:text-white md:cursor-none antialiased">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <NoiseOverlay />
      <ClimbingLine />
      <Navbar />
      <WhatsAppWidget />

      {renderContent()}

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            data={selectedProject}
          />
        )}
      </AnimatePresence>

      <Analytics />
    </div>
  );
};

export default App;