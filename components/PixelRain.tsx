'use client';
import { useRef, useEffect, useState} from 'react';

export default function PixelRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number>(null!);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        setContext(ctx);

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        };
    }, []);

    useEffect(() => {
        if (!context) return;
        const ctx = context;
        const canvas = canvasRef.current!;

        const PIXEL_SIZE = 4;
        const drops: { x: number; y: number; speed: number; length: number; }[] = [];

        const initDrops = () => {
            const dropCount = Math.floor(canvas.width / PIXEL_SIZE);
            for (let i = 0; i < dropCount; i++) {
                drops.push({
                    x: i * PIXEL_SIZE,
                    y: Math.random() * canvas.height,
                    speed: Math.random() * 5 + 3,
                    length: Math.random() * 10 + 5,
                });
            }
        };

        initDrops();

        const draw = () => {
            console.log("Animation is running!");
            ctx.fillStyle = 'rgba(10, 10, 10, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#1e3a8a';

            drops.forEach((drop) => {
                ctx.fillRect(drop.x, drop.y, PIXEL_SIZE / 2, drop.length * (PIXEL_SIZE / 2));

                drop.y += drop.speed;

                if (drop.y > canvas.height) {
                    drop.y = -drop.length * PIXEL_SIZE;
                    drop.speed = Math.random() * 5 + 3;
                }
            });

            animationFrameId.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };

    }, [context]);

    return (
        <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -x-10 opacity-40"
        />
    );
}