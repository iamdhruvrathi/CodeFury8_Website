import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      char?: string;
    }> = [];

    const mouse = { x: 0, y: 0 };

    function mouseMoveHandler(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    window.addEventListener('mousemove', mouseMoveHandler);

    const codeChars = [
      '0', '1', '0', '1', '0', '1', '{', '}', '<', '>', '/',
      '\\', '(', ')', '[', ']', ';', '=', '+', '-'
    ];

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        char: Math.random() > 0.7 ? codeChars[Math.floor(Math.random() * codeChars.length)] : undefined
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply slight attraction to mouse
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          particle.vx -= dx / 5000;
          particle.vy -= dy / 5000;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;

        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00f6ff'; // neon glow

        if (particle.char) {
          // Draw code character
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, '#00f6ff');
          gradient.addColorStop(1, '#ff00f7');
          ctx.fillStyle = gradient;

          ctx.font = `${particle.size * 8}px monospace`;
          ctx.fillText(particle.char, particle.x, particle.y);
        } else {
          // Draw dot
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * 0.2;
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', mouseMoveHandler); // Cleanup mouse event
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default ParticleBackground;