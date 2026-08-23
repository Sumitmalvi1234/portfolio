// src/components/ProjectsGrid.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Folder } from 'lucide-react';
import { scrambleText } from '../utils/scramble';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  desc: string;
  tags: string[];
  bootstrapCol: string;
}

export default function ProjectsGrid(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const projects: Project[] = [
    { title: "E-Commerce Engine", desc: "High-performance headless store utilizing GraphQL APIs.", tags: ["React", "GraphQL", "Tailwind"], bootstrapCol: "col-12 col-md-8" },
    { title: "AI Dashboard", desc: "Real-time generative metrics layout with custom charting visual tools.", tags: ["TypeScript", "Python", "Vite"], bootstrapCol: "col-12 col-md-4" },
    { title: "Audio Sync Engine", desc: "Low-latency WebAudio workspace for custom atmospheric synthesizer controls.", tags: ["WebAudio", "GSAP", "React"], bootstrapCol: "col-12 col-md-4" },
    { title: "SaaS Analytics Engine", desc: "Enterprise infrastructure platform handling deep analytical workloads.", tags: ["Next.js", "Postgres", "Tailwind"], bootstrapCol: "col-12 col-md-8" }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          onEnter: () => {
            if (titleRef.current) {
              scrambleText(titleRef.current, "Featured Deployments", 1.2);
            }
          }
        }
      });

      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card) => {
        gsap.fromTo(card as HTMLElement, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="container px-0 mx-auto">
        <div className="mb-12 relative">
          <div className="flex items-center gap-2 font-mono text-[10px] text-red-500 uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Chapter 02 · Production Deployments
          </div>
          <h2 ref={titleRef} className="text-4xl font-extrabold tracking-tight text-white min-h-[48px]">Featured Deployments</h2>
          <p className="text-neutral-400 text-sm mt-2 max-w-xl font-light">A curation of production layouts and engineering projects.</p>
        </div>

        <div className="row g-4 m-0 w-full">
          {projects.map((proj, idx) => (
            <div key={idx} className={`${proj.bootstrapCol} px-2`}>
              <div className="project-card h-100 bg-[#121212]/60 border border-neutral-900 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between hover:border-red-950/50 hover:bg-[#140e0e]/40 transition-all duration-300 group opacity-0">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#181818] border border-neutral-800 rounded-xl text-red-500 group-hover:border-red-900/40 transition-colors">
                      <Folder className="w-5 h-5" />
                    </div>
                    <button className="text-neutral-500 hover:text-white border-0 bg-transparent transition-colors duration-200 cursor-pointer">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-200 tracking-tight">{proj.title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-light">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
