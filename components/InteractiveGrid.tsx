import React, { useEffect, useRef } from 'react';

interface InteractiveGridProps {
    mousePosition: { x: number; y: number };
}

const InteractiveGrid: React.FC<InteractiveGridProps> = ({ mousePosition }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const gridSize = 40;
        const threshold = 150; // Distance at which lines start to "break"

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'; // Very subtle default line color
            ctx.lineWidth = 1;

            // Draw Vertical Lines
            for (let x = 0; x <= canvas.width; x += gridSize) {
                for (let y = 0; y <= canvas.height; y += 10) { // Draw in segments for granular control
                    const dist = Math.hypot(x - mousePosition.x, y - mousePosition.y);
                    const opacity = Math.max(0, Math.min(1, (dist - 50) / threshold)); // Fade out near mouse

                    if (opacity > 0.01) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x, y + 10);
                        ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 * opacity})`;
                        ctx.stroke();
                    }
                }
            }

            // Draw Horizontal Lines
            for (let y = 0; y <= canvas.height; y += gridSize) {
                for (let x = 0; x <= canvas.width; x += 10) {
                    const dist = Math.hypot(x - mousePosition.x, y - mousePosition.y);
                    const opacity = Math.max(0, Math.min(1, (dist - 50) / threshold));

                    if (opacity > 0.01) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x + 10, y);
                        ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 * opacity})`;
                        ctx.stroke();
                    }
                }
            }

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

export default InteractiveGrid;
