// src/components/RuntimeTimeline.tsx
import React, { useEffect, useRef } from 'react';
import { Calendar, Network, Box } from 'lucide-react';
import gsap from 'gsap';

export default function RuntimeTimeline(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.js-timeline-header > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.js-timeline-header',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from('.js-timeline-node', {
        x: -40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.js-timeline-track',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      index: "01",
      icon: <Box className="w-3.5 h-3.5 text-red-500" />,
      period: "2024 — PRESENT",
      role: "Full Stack Engineer",
      company: "Autonomous Engineering Lab",
      details: "Architecting cloud-native web infrastructures, developing localized state storage interfaces, and optimizing pipeline performance vectors for high-availability production workloads."
    },
    {
      index: "02",
      icon: <Network className="w-3.5 h-3.5 text-red-500" />,
      period: "2022 — 2024",
      role: "Software Developer",
      company: "Distributed Systems Studio",
      details: "Built resilient transactional pipelines, monitored API throughput bounds, and scaled database schema matrices across multiple environment instances."
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto" id="timeline">
      <div className="container px-0 mx-auto">
        <div className="js-timeline-header mb-16 relative">
          <div className="flex items-center gap-2 font-mono text-[10px] text-red-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-red-950 border border-red-500" />
             Experience Logs
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-3">
            Runtime Timeline
          </h2>
          <p className="text-neutral-400 text-sm mt-4 max-w-xl font-light">
            Chronological record of specialized industry application, technical engineering ownership, and software delivery modules.
          </p>
        </div>

        <div className="row g-4 m-0 w-full">
          <div className="col-12 col-lg-8 px-0">
            <div className="js-timeline-track vstack gap-4 relative before:absolute before:left-[21px] before:top-4 before:bottom-4 before:w-[1px] before:bg-neutral-900">
              {experiences.map((log, idx) => (
                <div key={idx} className="js-timeline-node group relative flex gap-4 items-start">
                  <div className="relative z-10 w-[42px] h-[42px] shrink-0 flex items-center justify-center bg-[#121212] border border-neutral-800 rounded-xl group-hover:border-red-900/40 transition-colors">
                    {log.icon}
                  </div>
                  <div className="w-full p-6 bg-[#121212]/40 rounded-xl border border-neutral-900/80 group-hover:border-red-950/40 transition-all backdrop-blur-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-red-500/80 tracking-wider">
                        <Calendar className="w-3 h-3" /> {log.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-3 tracking-tight">{log.role}</h3>
                    <div className="text-xs font-mono text-neutral-400 mt-0.5">{log.company}</div>
                    <p className="text-neutral-400 text-xs leading-relaxed mt-4 font-light">{log.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
