"use client";

import { ArrowDown, Send, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlobeScene } from "@/components/globe/GlobeScene";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-dark overflow-clip">
      {/* Background gradient — using will-change for GPU compositing */}
      <div className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-surface/50 to-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Globe — absolutely positioned so it can bleed behind text on small screens */}
      <div className="absolute inset-0 z-[1] flex items-center pt-16 sm:pt-20 justify-center lg:pt-0 lg:justify-end lg:pr-[4%]">
        <div className="w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] sm:max-w-[650px] sm:max-h-[650px] md:max-w-[700px] md:max-h-[700px] lg:w-[55vw] lg:h-[55vw] lg:max-w-[800px] lg:max-h-[800px]">
          <GlobeScene className="w-full h-full" />
        </div>
      </div>

      {/* Wrapper now uses min-h-dvh and vertical centering to automatically fit varying screen heights natively without overflowing padding */}
      <div className="pointer-events-none relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100dvh] flex flex-col justify-center pt-10 lg:flex-row lg:items-center lg:pt-0 lg:pb-0 ">
        <div className="w-full mt-10 md:mt-0">
          {/* Text Content — sits above globe */}
          <div
            className="pointer-events-auto text-center lg:text-left relative z-20 lg:max-w-[50%]"
          >
            {/* Tag line */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Let&apos;s build your next big thing
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight [text-shadow:_0_2px_20px_rgba(0,0,0,0.7),_0_0_40px_rgba(0,0,0,0.4)]">
              Connecting{" "}
              <span className="gradient-text">businesses</span>
              <br />
              to the future
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed [text-shadow:_0_1px_12px_rgba(0,0,0,0.7)]">
              Hi, I&apos;m <span className="text-white font-semibold">Juan Pablo Acosta</span>.
              Full-Stack Software Engineer with 4+ years building scalable
              platforms that drive real results —{" "}
              <span className="text-accent">300%+ sales growth</span>,{" "}
              5x user scaling &amp; 99.9% uptime.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="#contact" size="lg">
                <Send className="w-5 h-5" />
                Let&apos;s Talk
              </Button>
              <Button href="#projects" variant="secondary" size="lg">
                <FolderOpen className="w-5 h-5" />
                See My Work
              </Button>
            </div>

            {/* Quick stats */}
            <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 md:gap-6 max-w-md mx-auto md:mx-0">
              {[
                { value: "300%+", label: "Sales Growth" },
                { value: "99.9%", label: "Uptime" },
                { value: "Top 1%", label: "Nationally" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 animate-fade-in"
        style={{ animationDelay: "1.5s", animationFillMode: "both" }}
      >
        <span
          className="text-xs font-medium text-white uppercase tracking-[0.25em]"
          style={{ textShadow: "0 0 6px #ffffff, 0 0 12px #ffffff" }}
        >
          Scroll
        </span>
        <div className="animate-bounce mt-3">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-10 h-10 rounded-full border border-white/30 animate-ping" />
            <div
              className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center"
              style={{ boxShadow: "0 0 6px #ffffff, 0 0 12px #ffffff" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
