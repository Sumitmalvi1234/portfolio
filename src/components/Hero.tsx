// src/components/Hero.tsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { scrambleText } from '../utils/scramble';

export default function Hero(): React.JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const matrixBgRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const glowAuraRef = useRef<HTMLDivElement>(null);
  const colorTextRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.set([statusRef.current, mainTitleRef.current, actionsRef.current], { opacity: 0, y: 30 });
    tl.set(subtitleRef.current, { opacity: 0 });

    tl.to(statusRef.current, { opacity: 1, y: 0, duration: 0.8 }, '+=0.2')
      .to(mainTitleRef.current, { opacity: 1, y: 0, duration: 1.2 }, '-=0.5')
      .to(subtitleRef.current, {
        opacity: 1,
        duration: 0.1,
        onComplete: () => {
          if (subtitleRef.current) {
            scrambleText(
              subtitleRef.current,
              "Full Stack Systems Engineer developing lightweight, performant web runtimes, scalable application frameworks, and highly deterministic user interfaces.",
              1.5
            );
          }
        }
      }, '-=0.4')
      .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.8, clearProps: 'transform' }, '-=0.6');

    if (colorTextRef.current) {
      gsap.to(colorTextRef.current, {
        filter: 'hue-rotate(360deg)',
        duration: 8,
        repeat: -1,
        ease: 'none'
      });
    }
  }, { scope: heroRef });

  useEffect(() => {
    const matrix = matrixBgRef.current;
    const aura = glowAuraRef.current;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      const moveX = (clientX - window.innerWidth / 2) * 0.04;
      const moveY = (clientY - window.innerHeight / 2) * 0.04;

      if (matrix) {
        gsap.to(matrix, { x: moveX, y: moveY, duration: 1.5, ease: 'power2.out' });
      }

      if (aura) {
        gsap.to(aura, {
          x: clientX - 150,
          y: clientY - 150,
          duration: 0.4,
          ease: 'power1.out'
        });
      }
    };

    const buttons = document.querySelectorAll('.js-magnetic-btn');
    const handleBtnMove = function(this: HTMLElement, e: Event) {
      const mouseEvent = e as MouseEvent;
      const rect = this.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;

      gsap.to(this, {
        x: x * 0.35,
        y: y * 0.35,
        scale: 1.03,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleBtnLeave = function(this: HTMLElement) {
      gsap.to(this, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    buttons.forEach(btn => {
      btn.addEventListener('mousemove', handleBtnMove);
      btn.addEventListener('mouseleave', handleBtnLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      buttons.forEach(btn => {
        btn.removeEventListener('mousemove', handleBtnMove);
        btn.removeEventListener('mouseleave', handleBtnLeave);
      });
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden bg-[#050505]">
      
      <div 
        ref={glowAuraRef}
        className="fixed w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(239,68,68,0.06)_0%,_transparent_70%)] pointer-events-none z-0 mix-blend-screen will-change-transform hidden md:block"
        style={{ left: 0, top: 0 }}
      />

      <div 
        ref={matrixBgRef}
        className="absolute inset-0 bg-[radial-gradient(#261414_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none z-0 scale-105 will-change-transform" 
      />

      <div className="absolute top-1/4 right-[15%] w-16 h-16 border border-red-950/20 rounded-full font-mono text-[8px] text-red-900/30 flex items-center justify-center animate-[spin_20s_linear_infinite] select-none pointer-events-none hidden lg:flex">
        SYS_ENG_01
      </div>
      <div className="absolute bottom-1/4 left-[5%] w-24 h-[1px] bg-gradient-to-r from-transparent via-red-950/20 to-transparent pointer-events-none hidden lg:block" />

      <div className="container relative z-10 mx-auto max-w-7xl px-0">
        <div className="row m-0">
          <div className="col-12 col-lg-9 max-w-3xl px-0">
            
            <div ref={statusRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/20 border border-red-900/30 font-mono text-[10px] text-red-400 uppercase tracking-widest mb-6 transition-all duration-300 hover:border-red-500/30 hover:bg-red-950/40">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              System Status: Active // Core Online
            </div>

            <h1 ref={mainTitleRef} className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.1] select-none">
              Sumit Malvi Build <br />
              <span 
                ref={colorTextRef}
                className="bg-gradient-to-r from-red-500 via-rose-400 via-purple-500 to-red-500 bg-[size:200%_auto] bg-clip-text text-transparent will-change-transform"
              >
                Digital Architecture.
              </span>
            </h1>

            <p 
              ref={subtitleRef} 
              className="text-neutral-400 text-sm md:text-base mt-6 max-w-lg leading-relaxed font-light min-h-[64px] selection:bg-red-500/20 selection:text-red-200"
            >
              Full Stack Systems Engineer developing lightweight, performant web runtimes, scalable application frameworks, and highly deterministic user interfaces.
            </p>

            <div ref={actionsRef} className="flex flex-wrap gap-4 mt-10 font-mono text-xs">
              <Link 
                to="/projects" 
                className="js-magnetic-btn px-5 py-3 bg-red-950/20 border border-red-900/40 text-red-400 hover:bg-red-600 hover:text-black rounded-lg transition-colors duration-300 tracking-wider uppercase font-semibold text-decoration-none shadow-[0_0_15px_rgba(220,38,38,0.03)] will-change-transform"
              >
                Access Deployments
              </Link>
              <Link 
                to="/contact" 
                className="js-magnetic-btn px-5 py-3 bg-[#121212] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 rounded-lg transition-colors duration-300 tracking-wider uppercase text-decoration-none will-change-transform"
              >
                Initialize Connection
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
  