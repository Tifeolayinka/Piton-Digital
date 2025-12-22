import React, { useEffect, useRef } from 'react';

interface InteractiveParticlesProps {
    mousePosition: { x: number; y: number };
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

const InteractiveParticles: React.FC<InteractiveParticlesProps> = ({ mousePosition }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(80, Math.floor(window.innerWidth / 15)); // Responsive count

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5, // Slow movement
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((p, i) => {
                // Move particle
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Mouse interaction (Repulsion & Spotlight)
                const dx = mousePosition.x - p.x;
                const dy = mousePosition.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 200;

                let scale = 1;
                let opacity = 0.1;

                if (distance < maxDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (maxDistance - distance) / maxDistance;
                    const repulsionStrength = 5; // Smoother effect

                    p.vx -= forceDirectionX * force * 0.05 * repulsionStrength;
                    p.vy -= forceDirectionY * force * 0.05 * repulsionStrength;

                    // Spotlight effect
                    scale = 1 + force * 1.5; // Grow up to 2.5x
                    opacity = 0.1 + force * 0.4; // Opacity up to 0.5
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * scale, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    const connectionDistance = 120;

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        const opacity = 1 - dist / connectionDistance;
                        ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.08})`; // Very subtle lines
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePosition]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
        />
    );
};

export default InteractiveParticles;
