import React, { useEffect, useRef } from 'react';

const Snowfall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let snowflakes = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Snowflake class
    class Snowflake {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.wind = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.6 + 0.4;
      }

      update() {
        this.y += this.speed;
        this.x += this.wind;

        // Reset if snowflake goes off screen
        if (this.y > canvas.height) {
          this.reset();
        }
        if (this.x > canvas.width || this.x < 0) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.restore();
      }
    }

    // Create snowflakes
    const createSnowflakes = () => {
      const snowflakeCount = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push(new Snowflake());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((snowflake) => {
        snowflake.update();
        snowflake.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Add snow accumulation to elements
    const addSnowToElements = () => {
      const buttons = document.querySelectorAll('button, a[href], .snow-target');
      buttons.forEach((element) => {
        if (!element.classList.contains('snow-added')) {
          element.classList.add('snow-added');
          element.style.position = 'relative';
        }
      });
    };

    createSnowflakes();
    animate();
    addSnowToElements();

    // Re-add snow to new elements that appear
    const observer = new MutationObserver(addSnowToElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <style>{`
        @keyframes snowPile {
          0% { transform: translateY(-5px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .snow-added::before {
          content: '';
          position: absolute;
          top: -4px;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(to bottom,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.7) 50%,
            rgba(255, 255, 255, 0.3) 100%
          );
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
          pointer-events: none;
          animation: snowPile 2s ease-out forwards;
          box-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
        }

        .snow-added::after {
          content: '❄';
          position: absolute;
          top: -8px;
          right: 10%;
          font-size: 8px;
          color: rgba(255, 255, 255, 0.8);
          pointer-events: none;
          animation: snowPile 2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Snowfall;
