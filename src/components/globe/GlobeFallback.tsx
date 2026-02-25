export function GlobeFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated gradient orb as fallback */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-pulse-glow" />

        {/* Globe circle */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-dark-surface to-dark border border-primary/20 shadow-2xl shadow-primary/10">
          {/* Grid lines overlay */}
          <div className="absolute inset-0 rounded-full opacity-20">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute top-1/4 left-2 right-2 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="absolute top-3/4 left-2 right-2 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
            <div className="absolute left-1/4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
            <div className="absolute left-3/4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
          </div>

          {/* Connection dots */}
          <div className="absolute top-[30%] left-[40%] w-2 h-2 bg-accent rounded-full animate-pulse" />
          <div className="absolute top-[45%] left-[55%] w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-[60%] left-[35%] w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {/* Floating connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
        <path
          d="M 200 120 Q 300 80 350 150"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
          strokeDasharray="4 4"
        >
          <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
        </path>
        <path
          d="M 200 120 Q 100 60 50 130"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
          strokeDasharray="4 4"
        >
          <animate attributeName="stroke-dashoffset" values="0;-20" dur="3s" repeatCount="indefinite" />
        </path>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
