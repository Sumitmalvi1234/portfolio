// src/components/Preloader.tsx
import React, { useEffect, useState, useMemo } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps): React.JSX.Element {
  const [progress, setProgress] = useState<number>(0);
  const [logIndex, setLogIndex] = useState<number>(0);
  const [shouldFadeOut, setShouldFadeOut] = useState<boolean>(false);

  const systemsLogs = useMemo(() => [
    "INIT // INITIALIZING MALVI PORTFOLIO OS...",
    "MOUNTING // PORTFOLIO_CORE_ENGINE [SUCCESS]",
    "FETCHING // VECTOR_GRAPHICS_MATRIX... [OK]",
    "ESTABLISHING // ENCRYPTED_NETWORK_LAYERS...",
    "VERIFYING // SECURITY_DETERMINISTIC_CREDENTIALS...",
    "SYSTEM_RUNTIMES // ALL SYSTEMS OPERATIONAL."
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const structuralSegment = Math.floor(100 / systemsLogs.length);
    const targetLogIndex = Math.min(Math.floor(progress / structuralSegment), systemsLogs.length - 1);
    setLogIndex(targetLogIndex);

    if (progress === 100) {
      const exitTimeout = setTimeout(() => {
        setShouldFadeOut(true);
        const completionTimeout = setTimeout(() => {
          onComplete();
        }, 500);
        return () => clearTimeout(completionTimeout);
      }, 400);
      return () => clearTimeout(exitTimeout);
    }
  }, [progress, onComplete, systemsLogs]);

  return (
    <div 
      className={`fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col justify-between p-8 md:p-16 select-none font-mono transition-opacity duration-500 ease-in-out ${
        shouldFadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#1c1010_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 flex justify-between items-start text-[10px] text-neutral-600 tracking-widest">
        <div>SYS_MNT // BOOT_SEQUENCE_A.10</div>
        <div className="text-right">S.MALVI // PORTFOLIO</div>
      </div>

      <div className="relative z-10 my-auto max-w-xl space-y-3">
        <div className="text-xs text-red-500/80 tracking-wide h-6 animate-pulse">
          {systemsLogs[logIndex]}
        </div>
        
        <div className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter tabular-nums">
          {progress}<span className="text-red-600">%</span>
        </div>

        <div className="w-full h-[1px] bg-neutral-900 overflow-hidden relative rounded-full">
          <div 
            className="absolute top-0 bottom-0 left-0 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.5)] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="relative z-10 flex justify-between items-end text-[9px] text-neutral-600 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" />
          ESTABLISHING SECURE_NODE CONNECTION
        </div>
        <div>[ AUTH_STABLE ]</div>
      </div>
    </div>
  );
}
