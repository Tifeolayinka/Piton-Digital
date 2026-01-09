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

interface NoCodePortfolioProps {
    onProjectClick: (project: CaseStudyData) => void;
}

const NoCodePortfolio: React.FC<NoCodePortfolioProps> = ({ onProjectClick }) => {
    return (
        <main>
            <Hero
                title={
                    <>
                        Building <span className="text-piton-accent">scalable</span> software at the speed of thought.
                    </>
                }
                subtitle="I'm Tife Olayinka, a no-code developer specialized in Bubble and Webflow. I help founders launch production-ready MVPs and internal tools in weeks, not months."
                badgeText="→ Bubble • Webflow • Rapid Development ←"
                ctaText="View No-Code Projects"
                secondaryCtaText="Let's Build"
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
                    badgeText="The Builder"
                    title={
                        <>
                            Shipping software at <br />
                            <span className="text-zinc-400">the speed of thought.</span>
                        </>
                    }
                    description={
                        <>
                            <p>
                                I'm a no-code expert focused on Bubble and Webflow. I help founders launch production-ready software in weeks, not months, by leveraging the power of modern development tools.
                            </p>
                            <p>
                                My process is built for speed and iteration. I don't just build features; I build scalable foundations that allow your product to grow as fast as your business does.
                            </p>
                            <p>
                                If you're looking to validate an idea or automate a complex workflow, I'm here to help you ship faster than you thought possible.
                            </p>
                        </>
                    }
                    role="No-Code Developer"
                />
            </Reveal>

            <Reveal isSection={true} width="100%">
                <Testimonial showVideo={false} />
            </Reveal>


            <PortfolioFooter />
        </main>
    );
};

export default NoCodePortfolio;
