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

interface DesignPortfolioProps {
    onProjectClick: (project: CaseStudyData) => void;
}

const DesignPortfolio: React.FC<DesignPortfolioProps> = ({ onProjectClick }) => {
    return (
        <main>
            <Hero
                title={
                    <>
                        Crafting <span className="text-piton-accent">world-class</span> interfaces for ambitious products.
                    </>
                }
                subtitle="I'm Tife Olayinka, a product designer specialized in creating clean, intuitive, and high-converting digital experiences. I bridge the gap between complex requirements and elegant design."
                badgeText="→ UI/UX Design • Product Strategy • Prototyping ←"
                ctaText="View Design Work"
                secondaryCtaText="Let's Design"
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
                    badgeText="The Designer"
                    title={
                        <>
                            Designing for <br />
                            <span className="text-zinc-400">clarity and impact.</span>
                        </>
                    }
                    description={
                        <>
                            <p>
                                I specialize in product design that doesn't just look good—it drives results. My approach is rooted in user psychology, visual systems, and a deep understanding of product strategy.
                            </p>
                            <p>
                                I bridge the gap between complex business requirements and intuitive, elegant interfaces. I believe in design that scales, from the first wireframe to the final design system.
                            </p>
                            <p>
                                Whether it's a zero-to-one MVP or a complex internal tool, I focus on creating experiences that feel premium and effortless.
                            </p>
                        </>
                    }
                    role="Product Designer"
                />
            </Reveal>

            <Reveal isSection={true} width="100%">
                <Testimonial showVideo={false} />
            </Reveal>


            <PortfolioFooter />
        </main>
    );
};

export default DesignPortfolio;
