// src/components/EngineSkills.tsx
import React, { useEffect, useRef } from 'react';
import { Terminal, Database, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { scrambleText } from '../utils/scramble';

export default function EngineSkills(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          onEnter: () => {
            if (headingRef.current) {
              scrambleText(headingRef.current, "Tools I Build With", 1.2);
            }
          }
        }
      });

      gsap.fromTo('.js-skill-card', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true 
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      module: "01",
      icon: <Terminal className="w-4 h-4 text-red-500" />,
      title: "Backend & APIs",
      tags: "Node.js · Express · Fastify · GraphQL",
      desc: "Designing APIs and backend services with clear boundaries, validation, authentication, structured data access, and maintainable service architecture."
    },
    {
      module: "02",
      icon: <Database className="w-4 h-4 text-red-500" />,
      title: "Data & Persistence",
      tags: "MySQL · SQL · Data Modeling",
      desc: "Designing relational schemas, queries, indexes, and data access patterns that keep applications reliable and efficient as they grow."
    },
    {
      module: "03",
      icon: <Cpu className="w-4 h-4 text-red-500" />,
      title: "Systems Architecture",
      tags: "Docker · AWS · CI/CD",
      desc: "Breaking complex applications into microservices, provisioning cloud infrastructure, and automating workflows for continuous delivery."
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 min-h-[500px]">
      <div className="container mx-auto max-w-7xl px-0">
        <div className="mb-16 relative">
          <div className="flex items-center gap-2 font-mono text-[10px] text-red-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Chapter 03 · Engineering Toolkit
          </div>
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-3 min-h-[48px] md:min-h-[60px]">
            Tools I Build With
          </h2>
          <p className="text-neutral-400 text-sm mt-4 max-w-xl font-light">
            The technologies I use to design, build, ship, and maintain production software.
          </p>
        </div>

        <div className="row g-4 w-full m-0">
          {categories.map((item, idx) => (
            <div key={idx} className="col-12 col-md-4 px-2">
              <div className="js-skill-card h-100 group relative flex flex-col justify-between p-8 bg-[#121212]/60 rounded-2xl border border-neutral-900 hover:border-red-950/50 hover:bg-[#140e0e]/40 transition-all duration-300 backdrop-blur-sm opacity-0">
                <div>
                  <div className="w-10 h-10 flex items-center justify-center bg-[#181818] border border-neutral-800 rounded-xl group-hover:border-red-900/40 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-6 tracking-tight">{item.title}</h3>
                  <div className="text-[11px] font-mono text-red-500/80 tracking-wide mt-2">{item.tags}</div>
                  <p className="text-neutral-400 text-xs leading-relaxed mt-4 font-light">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between border-t border-neutral-900/60 pt-6 mt-8">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-neutral-600 group-hover:text-red-500/60 transition-colors">
                    <span className="text-red-500/40">⌘</span> MODULE {item.module}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-neutral-800 group-hover:bg-red-500 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
