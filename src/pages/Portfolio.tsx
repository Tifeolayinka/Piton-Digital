import React from 'react';
import Hero from '../../components/Hero';
import HeroScroll from '../../components/HeroScroll';
import { VideoPlayer } from '../../components/Testimonial';
import Work from '../../components/Work';
import AboutMe from '../../components/AboutMe';
import Testimonial from '../../components/Testimonial';
import Contact from '../../components/Contact';
import Reveal from '../../components/Reveal';
import PortfolioFooter from '../../components/PortfolioFooter';
import { CaseStudyData } from '../../components/CaseStudyModal';

interface PortfolioProps {
    onProjectClick: (project: CaseStudyData) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick }) => {
    return (
        <main>
            <Hero
                title={
                    <>
                        I build <span className="text-piton-accent">high-performance</span> digital products that founders love.
                    </>
                }
                subtitle="I'm Tife Olayinka, a product designer and developer focused on clarity, speed, and scale. I help founders turn messy ideas into structured, scalable software."
                badgeText="→ Product Designer • Developer • Founder ←"
                ctaText="View My Work"
                secondaryCtaText="Let's Talk"
                showLogos={false}
            />

            <div className="relative z-20 -mt-10 mb-20 w-full overflow-hidden">
                <HeroScroll />
            </div>

            <Reveal isSection={true} width="100%">
                <div className="py-20 bg-white">
                    <VideoPlayer />
                </div>
            </Reveal>

            <Reveal isSection={true} width="100%">
                <Work onProjectClick={onProjectClick} />
            </Reveal>

            <Reveal isSection={true} width="100%">
                <AboutMe
                    badgeText="The Hybrid"
                    title={
                        <>
                            Building products that <br />
                            <span className="text-zinc-400">actually work.</span>
                        </>
                    }
                    description={
                        <>
                            <p>
                                I'm a product designer and developer who believes that the best products are built at the intersection of clarity and code.
                            </p>
                            <p>
                                With a background in both UI/UX and engineering, I help founders turn messy ideas into structured, scalable software without the typical agency friction.
                            </p>
                            <p>
                                My goal is simple: to build high-performance digital products that users love and businesses can scale.
                            </p>
                        </>
                    }
                    role="Product Designer & Developer"
                />
            </Reveal>

            <Reveal isSection={true} width="100%">
                <Testimonial showVideo={false} />
            </Reveal>


            <PortfolioFooter />
        </main>
    );
};

export default Portfolio;
