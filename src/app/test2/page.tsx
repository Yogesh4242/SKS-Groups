"use client";

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

const ConstructionShowcase = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  // --- Initialize Lenis Smooth Scroll ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent((winScroll / height) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  // --- 1. MODERNIZED THEMES (1-10) ---
  const themes = [
    { id: 1, title: "Raw Concrete", style: "bg-[#0f0f0f]", accent: "from-zinc-500/20", glass: "bg-white/5 border-white/10" },
    { id: 2, title: "Flux Orange", style: "bg-black", accent: "from-orange-600/20", glass: "shadow-[0_0_50px_-12px_rgba(234,88,12,0.3)] border-orange-500/20" },
    { id: 3, title: "Blueprint v2", style: "bg-[#020617]", accent: "from-blue-600/20", glass: "border-blue-500/20 backdrop-blur-md" },
    { id: 4, title: "Steel Mesh", style: "bg-zinc-950 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]", accent: "from-zinc-100/5", glass: "bg-black/40 border-white/5" },
    { id: 5, title: "Amber Dig", style: "bg-black", accent: "from-amber-900/30", glass: "border-amber-700/20 shadow-inner" },
    { id: 6, title: "Glass Facade", style: "bg-slate-900", accent: "from-cyan-500/10", glass: "bg-white/5 border-white/20 backdrop-blur-2xl" },
    { id: 7, title: "Grit System", style: "bg-[#0a0a0a]", accent: "from-yellow-500/10", glass: "border-l-4 border-yellow-500 bg-white/5" },
    { id: 8, title: "Foundations", style: "bg-zinc-900", accent: "from-black", glass: "shadow-2xl bg-zinc-800/50 border-white/5" },
    { id: 9, title: "Night Ops", style: "bg-black", accent: "from-zinc-800/40", glass: "border-white/10" },
    { id: 10, title: "Onyx Cast", style: "bg-black border border-white/5", accent: "from-white/5", glass: "bg-zinc-900/80" }
  ];

  // --- 2. CONSTRUCTION PORTALS (11-15) ---
  const portals = [
    { id: 11, name: "Plan Room", feature: "Blueprint & CAD Management", stats: ["42 Active Revisions", "12 Approved Sets"] },
    { id: 12, name: "Site Monitor", feature: "Live Field Telemetry & CCTV", stats: ["3 Active Sites", "98% Safety Score"] },
    { id: 13, name: "Sub-Contractor Hub", feature: "Vendor Compliance & Bidding", stats: ["8 Pending Bids", "14 Insurance Certs"] },
    { id: 14, name: "Logistics Engine", feature: "Heavy Fleet & Material Tracking", stats: ["Fuel Efficiency: +8%", "Ready-Mix ETA: 14m"] },
    { id: 15, name: "Safety Ledger", feature: "OSHA Compliance & Incidents", stats: ["0 Incidents YTD", "Daily Logs Synced"] }
  ];

  // --- 3. JOB-SITE STACKS (16-20) ---
  const trackers = [
    { id: 16, title: "Skyline Residential Tower", status: "Structural Phase", files: 128, progress: "75%" },
    { id: 17, title: "Highway Expansion B-4", status: "Paving Phase", files: 45, progress: "50%" },
    { id: 18, title: "Civic Center Remodel", status: "Permitting", files: 12, progress: "20%" },
    { id: 19, title: "Industrial Warehouse Park", status: "Finished/Punch-list", files: 240, progress: "100%" },
    { id: 20, title: "Coastal Bridge Repair", status: "Foundation Work", files: 89, progress: "40%" }
  ];

  return (
    <main className="w-full bg-black text-white selection:bg-yellow-500/30 font-sans">
      
      {/* GLOBAL NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex justify-between items-center px-8 h-20">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.5em] font-black text-yellow-500">Construct_OS</span>
            <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase">Asset_Portal_v4.0</span>
          </div>
          <div className="flex items-center gap-6">
             <div className="hidden md:block h-px w-24 bg-zinc-800"></div>
             <div className="text-[10px] font-mono border border-yellow-500/20 px-4 py-2 bg-yellow-500/5 text-yellow-500">
               SYSTEM_LOAD: {Math.round(scrollPercent)}%
             </div>
          </div>
        </div>
        <div className="h-[2px] bg-yellow-500 transition-all duration-300 shadow-[0_0_15px_#eab308]" style={{ width: `${scrollPercent}%` }} />
      </nav>

      {/* SECTION 1: MODERNIZED THEMES (1-10) */}
      {themes.map((theme) => (
        <section key={theme.id} className={`h-[100dvh] w-full flex flex-col items-center justify-center relative overflow-hidden px-6 border-b border-white/5 ${theme.style}`}>
          <div className={`absolute inset-0 bg-gradient-to-b ${theme.accent} to-transparent pointer-events-none`} />
          
          <div className="relative z-10 w-full max-w-5xl text-center">
            <div className={`inline-block px-5 py-2 mb-8 border rounded-full ${theme.glass}`}>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.4em]">Visual Framework // 0{theme.id}</span>
            </div>
            
            <h2 className="text-6xl md:text-[11rem] font-black uppercase tracking-tighter leading-none mb-10 transition-all duration-700 hover:tracking-normal cursor-default">
              {theme.title}
            </h2>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="group relative px-12 py-5 overflow-hidden bg-white text-black transition-all">
                <span className="relative z-10 text-xs font-black uppercase tracking-[0.4em]">Apply Finish</span>
                <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className={`px-12 py-5 border text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:bg-white/10 ${theme.glass}`}>
                Specifications
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* SECTION 2: CONSTRUCTION PORTALS (11-15) */}
      {portals.map((portal) => (
        <section key={portal.id} className="h-[100dvh] w-full flex flex-col items-center justify-center bg-[#080808] relative px-6 border-b border-white/5">
          <div className="z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-500 font-mono text-xs uppercase tracking-[0.4em] mb-6 block underline decoration-2 underline-offset-8">Interface_{portal.id}</span>
              <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-none italic">{portal.name}</h2>
              <p className="text-zinc-500 text-xl mb-12 font-light italic leading-relaxed">"{portal.feature}"</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-5 bg-yellow-500 text-black text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-500/10">Access Portal</button>
                <button className="px-10 py-5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Site Reports</button>
              </div>
            </div>
            
            <div className="bg-zinc-900 border-2 border-white/10 p-10 rounded-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19 8l-7 3.2L5 8l7-3.2z"/></svg>
              </div>
              <h4 className="text-[10px] font-mono text-yellow-500 mb-8 uppercase tracking-widest">Active_Site_Telemetry // LIVE</h4>
              <div className="space-y-5">
                {portal.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-black/40 border-l-2 border-yellow-500/40 hover:border-yellow-500 transition-all">
                    <span className="text-xs text-zinc-500 uppercase font-bold tracking-widest">{stat.split(':')[0]}</span>
                    <span className="text-sm font-black text-white tracking-widest">{stat.split(':')[1] || stat}</span>
                  </div>
                ))}
                <div className="pt-6 grid grid-cols-4 gap-2">
                  {[1,2,3,4].map(x => <div key={x} className="h-10 bg-zinc-800 border border-white/5 flex items-center justify-center text-[8px] font-bold text-zinc-500">REF_{x}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SECTION 3: PROJECT STACKS (16-20) */}
      <section className="min-h-screen w-full bg-black flex flex-col items-center py-40 px-6">
        <div className="text-center mb-32">
          <span className="text-yellow-500 font-mono text-xs uppercase tracking-[0.8em] mb-6 block">Structural Archive</span>
          <h2 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-none italic">Job_Stacks</h2>
        </div>

        <div className="relative w-full max-w-3xl">
          {trackers.map((track, i) => (
            <div 
              key={track.id} 
              className="sticky bg-zinc-900 border border-white/10 rounded-sm p-12 mb-24 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-yellow-500 group cursor-pointer"
              style={{ top: `${10 + (i * 3)}rem` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                <div>
                  <h4 className="text-4xl font-black tracking-tighter mb-4 uppercase group-hover:text-yellow-500 transition-colors">{track.title}</h4>
                  <div className="flex gap-3">
                    <span className="px-4 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest">{track.status}</span>
                    <span className="px-4 py-1 bg-white/5 text-zinc-500 text-[10px] font-black uppercase tracking-widest border border-white/10">SITE_{track.id}</span>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 md:text-right">
                  <p className="text-[11px] text-zinc-500 uppercase font-black tracking-widest mb-1">Encrypted Docs</p>
                  <p className="text-6xl font-black text-white tabular-nums tracking-tighter">{track.files}</p>
                </div>
              </div>
              
              <div className="h-[2px] w-full bg-zinc-800 mb-10 overflow-hidden">
                <div 
                  className="h-full bg-yellow-500 group-hover:bg-white transition-all duration-1000 ease-in-out" 
                  style={{ width: track.progress }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(u => (
                    <div key={u} className="w-12 h-12 bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-[9px] font-black text-zinc-500 hover:text-white transition-colors">
                      CREW
                    </div>
                  ))}
                </div>
                <button className="group-hover:text-yellow-500 transition-colors uppercase font-black tracking-[0.3em] flex items-center gap-3">
                  Inspect Stack <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="h-screen flex flex-col items-center justify-center bg-yellow-500 text-black text-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none"></div>
          <h3 className="text-7xl md:text-[15rem] font-black uppercase tracking-tighter leading-none mb-10">Sign_Off.</h3>
          <p className="max-w-xl text-black/70 text-[11px] font-bold tracking-[0.5em] uppercase mb-16 leading-relaxed">
            Deployment sequence initialized. All structural stacks and data portals are ready for final authorization.
          </p>
          <button className="px-24 py-8 bg-black text-white text-xs font-black uppercase tracking-[0.6em] hover:scale-105 transition-transform active:scale-95 shadow-2xl">
            Approve Build Phase
          </button>
      </footer>
    </main>
  );
};

export default ConstructionShowcase;