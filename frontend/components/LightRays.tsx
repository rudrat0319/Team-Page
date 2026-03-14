"use client";

import { useEffect, useRef } from "react";

interface LightRaysProps {
  /** Number of rays to render */
  rayCount?: number;
  /** Animation speed multiplier (1 = slow, 10 = fast) */
  speed?: number;
  /** Total spread angle of the ray fan in degrees */
  spreadDeg?: number;
  /** Extra className applied to the outer container */
  className?: string;
  /** Content rendered on top of the rays */
  children?: React.ReactNode;
}

/* Two-color palette: pink + blue as specified */
const COLORS = [
  { r: 245, g: 174, b: 174 }, // #F5AEAE
  { r: 32,  g: 96,  b: 223 }, // #2060DF
];

interface Ray {
  angle: number;
  length: number;
  width: number;
  alpha: number;
  phase: number;
  freq: number;
  colorIdx: number; // 0 = pink, 1 = blue
}

export default function LightRays({
  rayCount = 16,
  speed = 3,
  spreadDeg = 80,
  className = "",
  children,
}: LightRaysProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const cfgRef = useRef({ rayCount, speed, spreadDeg });
  useEffect(() => {
    cfgRef.current = { rayCount, speed, spreadDeg };
  }, [rayCount, speed, spreadDeg]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let rays: Ray[] = [];

    function resize() {
      const container = canvas!.parentElement!;
      canvas!.width = container.offsetWidth;
      canvas!.height = container.offsetHeight;
      buildRays();
    }

    function buildRays(): void {
      const { rayCount: count, spreadDeg: spread } = cfgRef.current;
      const halfSpread = (spread / 2) * (Math.PI / 180);
      rays = Array.from({ length: count }, (_, i) => ({
        angle:
          -Math.PI / 2 -
          halfSpread +
          (i / Math.max(count - 1, 1)) * halfSpread * 2,
        length: (canvas?.height ?? 400) * 1.6 + Math.random() * 80,
        width: 6 + Math.random() * 18,
        alpha: 0.04 + Math.random() * 0.13,
        phase: Math.random() * Math.PI * 2,
        freq: 0.3 + Math.random() * 0.7,
        colorIdx: i % 2, // alternating pink and blue
      }));
    }

    function draw(): void {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      const { speed: spd } = cfgRef.current;

      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = 0;

      rays.forEach((ray) => {
        const c = COLORS[ray.colorIdx];
        const pulse = Math.sin(t * ray.freq * 0.02 * spd + ray.phase);
        const alpha = ray.alpha + pulse * 0.04;
        const ex = cx + Math.cos(ray.angle) * ray.length;
        const ey = cy + Math.sin(ray.angle) * ray.length;
        const spread = ray.width + pulse * 3;
        const px = Math.cos(ray.angle + Math.PI / 2) * spread;
        const py = Math.sin(ray.angle + Math.PI / 2) * spread;

        const grad = ctx.createLinearGradient(cx, cy, ex, ey);
        grad.addColorStop(
          0,
          `rgba(${c.r},${c.g},${c.b},${Math.min(alpha * 2.5, 0.45)})`
        );
        grad.addColorStop(
          0.4,
          `rgba(${c.r},${c.g},${c.b},${Math.min(alpha, 0.2)})`
        );
        grad.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(ex - px, ey - py);
        ctx.lineTo(ex + px, ey + py);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Central glow — blend of both colors
      const glow = ctx.createRadialGradient(cx, 0, 0, cx, 0, W * 0.35);
      glow.addColorStop(0, `rgba(180, 140, 220, 0.20)`);
      glow.addColorStop(0.5, `rgba(120, 130, 230, 0.06)`);
      glow.addColorStop(1, `rgba(120, 130, 230, 0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      t++;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "var(--bg-primary)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
}
