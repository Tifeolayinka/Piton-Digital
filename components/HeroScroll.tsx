import React, { useState, useMemo } from 'react';
import { projects } from '../src/data/projects';

const HeroScroll: React.FC = () => {
  const [pause, setPause] = useState(false);

  // Collect and randomize gallery images from all projects
  const randomizedGallery = useMemo(() => {
    const allImages: { url: string; title: string; type: string; caption?: string }[] = [];

    projects.forEach(project => {
      const mainImages = new Set([project.image, project.caseStudy?.mainImage].filter(Boolean));

      if (project.hoverImage && !mainImages.has(project.hoverImage)) {
        allImages.push({
          url: project.hoverImage,
          title: project.title,
          type: project.type,
          caption: 'Preview'
        });
      }

      (project.caseStudy?.galleryImages || []).forEach(img => {
        if (!mainImages.has(img.url)) {
          allImages.push({
            url: img.url,
            title: project.title,
            type: project.type,
            caption: img.caption
          });
        }
      });
    });

    // Shuffle helper: ensures no two adjacent items have the same title
    const shuffleSmart = (items: typeof allImages) => {
      if (items.length <= 1) return items;

      let result: typeof allImages = [];
      let pool = [...items].sort(() => Math.random() - 0.5);

      // Greedy selection
      while (pool.length > 0) {
        let found = false;
        for (let i = 0; i < pool.length; i++) {
          const lastItem = result[result.length - 1];
          if (!lastItem || pool[i].title !== lastItem.title) {
            result.push(pool.splice(i, 1)[0]);
            found = true;
            break;
          }
        }

        // If stuck, swap with a random previous item that fits
        if (!found) {
          const stuckItem = pool.pop()!;
          for (let i = 1; i < result.length - 1; i++) {
            if (result[i - 1].title !== stuckItem.title && result[i + 1].title !== stuckItem.title) {
              result.splice(i, 0, stuckItem);
              found = true;
              break;
            }
          }
          if (!found) result.push(stuckItem); // Fallback
        }
      }

      // Final check for the loop: first and last should be different
      if (result.length > 1 && result[0].title === result[result.length - 1].title) {
        for (let i = 1; i < result.length - 1; i++) {
          if (result[i - 1].title !== result[result.length - 1].title &&
            result[i + 1].title !== result[result.length - 1].title &&
            result[0].title !== result[i].title) {
            // Swap result[i] with result[0]
            [result[0], result[i]] = [result[i], result[0]];
            break;
          }
        }
      }

      return result;
    };

    return shuffleSmart(allImages).slice(0, 15);
  }, []);

  // Add inline style for the keyframes
  const marqueeKeyframes = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <>
      <style>{marqueeKeyframes}</style>
      <div className="w-full py-8 overflow-hidden border-y border-zinc-100 bg-[#FDFDFD]">
        <div
          className="flex gap-6 pl-4"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div
            className="flex gap-6"
            style={{
              animation: 'marquee 50s linear infinite',
              animationPlayState: pause ? 'paused' : 'running',
              width: "max-content"
            }}
          >
            {[...randomizedGallery, ...randomizedGallery].map((item, i) => (
              <div
                key={i}
                className="relative group w-[360px] aspect-[4/3] overflow-hidden bg-zinc-100 transition-all duration-500 rounded-lg border border-zinc-200 hover:border-piton-accent/50 cursor-default"
              >
                <img src={item.url} alt={item.caption || item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                {/* Persistent Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h4 className="text-white font-display font-bold text-lg">{item.title}</h4>
                    <p className="text-white/70 text-[9px] font-mono uppercase tracking-wider">
                      {item.type} {item.caption ? `• ${item.caption}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroScroll;