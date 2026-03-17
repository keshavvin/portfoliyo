function Logo({ size = 40 }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="28" fill="url(#logoBgGrad)" />
        <rect x="4" y="4" width="112" height="112" rx="24" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M30 30 L30 90 M30 60 L55 30 M30 60 L55 90" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M70 30 L70 75 Q70 90 57 90" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="90" cy="30" r="6" fill="white" fillOpacity="0.9" />
        <line x1="80" y1="90" x2="95" y2="90" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-extrabold text-gray-900 tracking-tight">
          Keshav
        </span>
        <span className="text-xs font-semibold gradient-text tracking-widest uppercase">
          Jha
        </span>
      </div>
    </div>
  );
}

export default Logo;
