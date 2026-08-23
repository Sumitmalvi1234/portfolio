import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ExternalLink, Folder } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  desc: string;
  tags: string[];
  size: string;
}

const projects: Project[] = [
  { title: "E-Commerce Engine", desc: "High-performance headless store utilizing GraphQL APIs.", tags: ["React", "GraphQL", "Tailwind"], size: "md:col-span-2" },
  { title: "AI Dashboard", desc: "Real-time generative metrics layout with custom charting visual tools.", tags: ["TypeScript", "Python", "Vite"], size: "md:col-span-1" },
  { title: "Audio Sync Engine", desc: "Low-latency WebAudio workspace for custom atmospheric synthesizer controls.", tags: ["WebAudio", "GSAP", "React"], size: "md:col-span-1" },
  { title: "SaaS Analytics Engine", desc: "Enterprise infrastructure platform handling deep analytical workloads.", tags: ["Next.js", "Postgres", "Tailwind"], size: "md:col-span-2" }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2">Featured Work</h2>
        <p className="text-slate-400">A curation of production layouts and engineering projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className={`project-card ${proj.size} bg-slate-900/40 border border-slate-900 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between hover:border-slate-800 transition-colors duration-300 group`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-slate-800/50 rounded-xl text-teal-400 border border-slate-700/30">
                  <Folder className="w-5 h-5" />
                </div>
                <button className="text-slate-500 hover:text-white transition-colors duration-200">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-400 transition-colors duration-200">{proj.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs bg-slate-900 text-slate-400 border border-slate-800 px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
