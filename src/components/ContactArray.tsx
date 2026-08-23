// src/components/ContactArray.tsx
import React from 'react';
import { Mail, LampIcon, BirdIcon, Send } from 'lucide-react';

export default function ContactArray(): React.JSX.Element {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="contact">
      <div className="container px-0 mx-auto">
        <div className="row mb-5 text-center text-md-start m-0">
          <div className="col-12 px-0">
            <span className="text-xs uppercase tracking-widest text-red-500 font-mono">Open Channels</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Initialize Contact</h2>
          </div>
        </div>

        <div className="row g-4 items-start m-0 w-full">
          <div className="col-12 col-lg-5 px-0 pe-lg-4">
            <p className="text-neutral-400 text-sm leading-relaxed mb-4 font-light">
              I am always eager to learn, grow, and tackle real-world architecture puzzles. Let’s talk about internships, entry roles, or project collaborations.
            </p>
            
            <div className="vstack gap-3">
              <a href="mailto:malvisumit1163@gmail.com" className="flex items-center gap-4 p-4 bg-neutral-900/20 border border-neutral-900 rounded-xl hover:border-red-500/40 hover:bg-red-950/10 transition-all group text-decoration-none">
                <div className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-red-500"><Mail className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs text-red-500/60 font-mono">DIRECT MAIL</div>
                  <div className="text-sm font-medium text-neutral-200 group-hover:text-red-400 transition-colors">malvisumit1163@gmail.com</div>
                </div>
              </a>

              <div className="row g-2 m-0 w-full">
                <div className="col-6 ps-0 pe-1">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-3 bg-neutral-900/20 border border-neutral-900 rounded-xl hover:border-red-500/40 text-neutral-300 hover:text-white transition-colors text-decoration-none w-100">
                    <LampIcon className="w-4 h-4 text-red-500/70" /> <span className="text-xs font-mono">GITHUB</span>
                  </a>
                </div>
                <div className="col-6 ps-1 pr-0">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-3 bg-neutral-900/20 border border-neutral-900 rounded-xl hover:border-red-500/40 text-neutral-300 hover:text-white transition-colors text-decoration-none w-100">
                    <BirdIcon className="w-4 h-4 text-red-500/70" /> <span className="text-xs font-mono">LINKEDIN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 px-0 mt-5 mt-lg-0">
            <div className="p-4 p-md-5 bg-[#121212]/40 border border-neutral-900 rounded-2xl backdrop-blur-sm">
              <form onSubmit={(e) => e.preventDefault()} className="vstack gap-4">
                <div className="row g-3 m-0 w-full">
                  <div className="col-12 col-sm-6 ps-0 pe-0 pe-sm-2 flex flex-col gap-1">
                    <label className="text-[10px] font-mono text-red-500/60 tracking-wider uppercase">Identity Title</label>
                    <input type="text" placeholder="Your name" className="w-full bg-neutral-950 border border-neutral-900 rounded-lg p-3 text-sm text-neutral-200 outline-none focus:border-red-500/50 transition-colors" />
                  </div>
                  <div className="col-12 col-sm-6 pe-0 ps-0 ps-sm-2 flex flex-col gap-1">
                    <label className="text-[10px] font-mono text-red-500/60 tracking-wider uppercase">Communication Target</label>
                    <input type="email" placeholder="Your email" className="w-full bg-neutral-950 border border-neutral-900 rounded-lg p-3 text-sm text-neutral-200 outline-none focus:border-red-500/50 transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-[10px] font-mono text-red-500/60 tracking-wider uppercase">Payload Packet Description</label>
                  <textarea rows={4} placeholder="Tell me about your team parameters..." className="w-full bg-neutral-950 border border-neutral-900 rounded-lg p-3 text-sm text-neutral-200 outline-none focus:border-red-500/50 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-[#181818] hover:bg-red-600 hover:text-black text-red-400 font-medium rounded-lg text-sm flex items-center justify-center gap-2 border border-neutral-800 hover:border-transparent transition-all duration-200 cursor-pointer">
                  Dispatch Message <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
