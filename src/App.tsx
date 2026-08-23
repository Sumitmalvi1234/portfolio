// src/App.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

export default function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading && mainContentRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        gsap.set(['nav', 'footer'], { opacity: 0 });

        tl.to('nav', {
          opacity: 1,
          y: 0,
          duration: 1,
          startAt: { y: -20 }
        })
        .to('footer', {
          opacity: 1,
          duration: 0.8
        }, '-=0.4');

      }, mainContentRef.current);

      return () => ctx.revert(); // Strict memory cleanup prevents layout engine leaking
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div 
        ref={mainContentRef}
        className={`relative min-h-screen w-full bg-[#0a0a0a] font-sans antialiased text-neutral-200 selection:bg-red-500/20 selection:text-red-200 overflow-x-hidden ${
          isLoading ? 'h-screen overflow-hidden' : ''
        }`}
      >
        {/* Ambient Spatial Matrix Layer */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(185,28,28,0.07)_0%,_transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0707]/30 to-[#0a0a0a]" />
        </div>

        <CustomCursor />

        {/* Global Structural Fixed Header */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-neutral-900 bg-[#0a0a0a]/40">
          <Link to="/" className="font-mono text-xs font-bold tracking-wider text-neutral-400 text-decoration-none">
            S.MALVI<span className="text-red-500">//</span>DEV
          </Link>
          <div className="flex gap-4 gap-md-6 text-[10px] font-mono tracking-widest text-neutral-500">

<div className="flex gap-4 gap-md-6 text-[10px] font-mono tracking-widest text-neutral-500">
  <Link to="/skills" className="hover:text-red-500 transition-colors text-decoration-none">ENGINE</Link>
  <Link to="/projects" className="hover:text-red-500 transition-colors text-decoration-none">DEPLOYMENTS</Link>
  <Link to="/timeline" className="hover:text-red-500 transition-colors text-decoration-none">RUNTIME</Link>
  <Link to="/contact" className="hover:text-red-500 transition-colors text-decoration-none">CONNECT</Link>
</div>
          </div>
        </nav>

        {/* Main Render Canvas Outlet */}
        <main className="relative z-10">
          <Outlet />
        </main>

        <footer className="relative z-10 py-12 text-center text-[10px] font-mono tracking-widest text-neutral-600 border-t border-neutral-900 bg-[#0a0a0a]">
          © {new Date().getFullYear()} SUMIT MALVI. ALL SYSTEM RUNTIMES OPERATIONAL.
        </footer>
      </div>
    </>
  );
}
