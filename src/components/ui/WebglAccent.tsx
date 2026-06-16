import React, { useEffect, useRef, useState } from 'react';

interface WebglAccentProps {
  poster: string;     // static image shown first and as fallback (real airco photo)
  alt: string;
  /** glTF/GLB model to load. If it is missing/fails, the poster stays — no empty canvas. */
  model?: string;
  className?: string;
}

const WebglAccent: React.FC<WebglAccentProps> = ({
  poster,
  alt,
  model = '/models/airco-unit.glb',
  className,
}) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return; // keep poster only

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const start = async () => {
      if (cancelled || !hostRef.current) return;
      try {
        const { mountAircoScene } = await import('../three/AircoScene');
        if (cancelled || !hostRef.current) return;
        cleanup = await mountAircoScene(hostRef.current, model);
        if (cancelled) { cleanup?.(); cleanup = undefined; return; }
        setShowCanvas(true);
      } catch {
        // No model yet (or load/runtime error) → keep the static poster photo.
      }
    };

    const idle = (window as any).requestIdleCallback as undefined | ((cb: () => void, o?: any) => number);
    const handle = idle ? idle(start, { timeout: 2500 }) : window.setTimeout(start, 1800);

    return () => {
      cancelled = true;
      if (idle && (window as any).cancelIdleCallback) (window as any).cancelIdleCallback(handle);
      else clearTimeout(handle as number);
      cleanup?.();
    };
  }, [model]);

  return (
    <div className={className} style={{ position: 'relative' }}>
      <img
        src={poster}
        alt={alt}
        loading="eager"
        className="w-full h-full object-contain"
        style={{ opacity: showCanvas ? 0 : 1, transition: 'opacity .5s' }}
      />
      <div
        ref={hostRef}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, opacity: showCanvas ? 1 : 0, transition: 'opacity .5s' }}
      />
    </div>
  );
};

export default WebglAccent;
