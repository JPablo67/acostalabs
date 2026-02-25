"use client";

import { Suspense, lazy, useState, useCallback, useRef, useEffect } from "react";
import type { Application } from "@splinetool/runtime";

// Lazy-load the Spline runtime (client-side only)
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineGlobeProps {
  scene: string;
  className?: string;
}

export function SplineGlobe({ scene, className = "" }: SplineGlobeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);

  const handleLoad = useCallback((splineApp: Application) => {
    appRef.current = splineApp;
    setIsLoaded(true);
  }, []);

  /**
   * Scroll‑through fix:
   * Intercept wheel/touch events on the Spline canvas so the page
   * scrolls naturally instead of being swallowed by WebGL.
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };
    container.addEventListener("wheel", handleWheel, { passive: true, capture: true });

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        e.stopPropagation();
      }
    };
    container.addEventListener("touchmove", handleTouch, { passive: true, capture: true });

    return () => {
      container.removeEventListener("wheel", handleWheel, { capture: true } as EventListenerOptions);
      container.removeEventListener("touchmove", handleTouch, { capture: true } as EventListenerOptions);
    };
  }, []);

  /**
   * Performance: pause the Spline render loop when the globe
   * scrolls off-screen so the GPU is free for the rest of the page.
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const app = appRef.current;
        if (!app) return;
        if (entry.isIntersecting) {
          app.play();
        } else {
          app.stop();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className={`spline-globe-wrap relative ${className}`}
      style={{ touchAction: "pan-y" }}
    >
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
            <div
              className="absolute inset-0 w-16 h-16 rounded-full border-2 border-accent/10 border-b-accent animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
            />
          </div>
        </div>
      )}

      {/* Spline Scene */}
      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Spline
            scene={scene}
            onLoad={handleLoad}
            style={{ width: "100%", height: "100%" }}
          />
        </Suspense>
      </div>
    </div>
  );
}
