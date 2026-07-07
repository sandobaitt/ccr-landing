'use client';
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    
    let mouseX = -1000;
    let mouseY = -1000;
    
    // Mouse interaction radius
    const mouseRadius = 150;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4000); // Adjust density
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          baseAlpha: Math.random() * 0.5 + 0.1, // Base brightness
          alpha: 0,
          vx: (Math.random() - 0.5) * 0.1, // Slow horizontal drift
          vy: Math.random() * -0.2 - 0.05, // Slow upward drift
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isMobile = window.innerWidth <= 768;

      stars.forEach(star => {
        // Twinkling
        star.twinklePhase += star.twinkleSpeed;
        const twinkleFactor = (Math.sin(star.twinklePhase) + 1) / 2; // 0 to 1
        star.alpha = star.baseAlpha + twinkleFactor * 0.3; // Base + twinkle variation

        // Movement
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Mouse interaction (Desktop only)
        let drawRadius = star.radius;
        let drawAlpha = star.alpha;

        if (!isMobile) {
          const dx = mouseX - star.x;
          const dy = mouseY - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius) {
            // Glow effect when close to mouse
            const force = (mouseRadius - distance) / mouseRadius;
            drawRadius += force * 1.5;
            drawAlpha += force * 0.5;
          }
        }

        // Clamp alpha
        drawAlpha = Math.min(drawAlpha, 1);

        ctx.beginPath();
        ctx.arc(star.x, star.y, drawRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${drawAlpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-10] bg-transparent pointer-events-none"
    />
  );
}
