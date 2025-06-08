import React, { useEffect, useRef } from 'react';
import './PixelBackground.css';

export default function PixelBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);

        // 星星、星云、行星、银河数据流的简单像素渲染
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // 深空渐变
            const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
            grad.addColorStop(0, '#1a0636');
            grad.addColorStop(1, '#0d0221');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // 星星
            for (let i = 0; i < 120; i++) {
                ctx.fillStyle = i % 3 === 0 ? '#fff' : (i % 3 === 1 ? '#00ffff' : '#ff00ff');
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                ctx.fillRect(x, y, 2, 2);
            }
            // 简单星云
            ctx.globalAlpha = 0.2;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 3, 180, 0, 2 * Math.PI);
            ctx.fillStyle = '#7f3cff';
            ctx.fill();
            ctx.globalAlpha = 1;
            // 行星
            ctx.fillStyle = '#00ffff';
            ctx.beginPath();
            ctx.arc(120, canvas.height - 100, 32, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = '#ff00ff';
            ctx.beginPath();
            ctx.arc(canvas.width - 100, 180, 24, 0, 2 * Math.PI);
            ctx.fill();
            // 银河数据流
            ctx.font = 'bold 18px monospace';
            ctx.fillStyle = '#00ffff';
            for (let i = 0; i < canvas.width; i += 32) {
                ctx.fillText(Math.random() > 0.5 ? '0101' : '1010', i, canvas.height - 24);
            }
        }
        function animate() {
            draw();
            animationId = requestAnimationFrame(animate);
        }
        animate();
        return () => cancelAnimationFrame(animationId);
    }, []);

    return <canvas ref={canvasRef} className="pixel-bg-canvas" />;
} 