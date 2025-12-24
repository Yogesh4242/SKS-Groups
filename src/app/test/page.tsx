"use client";

import React, { useEffect, useState } from 'react';

interface BackgroundOption {
  id: number;
  title: string;
  type: "Space Series" | "Gradient Series";
  description: string;
  style: string;
}

const SpaceShowcase = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollPercent((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgrounds: BackgroundOption[] = [
    // SPACE SERIES (1-10)
    { id: 1, type: "Space Series", title: "Deep Nebula", description: "Multi-layered purple and navy gas clouds with 3D depth.", style: "bg-[radial-gradient(ellipse_at_center,_#1e1b4b_0%,_#020617_70%,_#000000_100%)]" },
    { id: 2, type: "Space Series", title: "Supernova", description: "Explosive orange focal point with high-contrast shadows.", style: "bg-[conic-gradient(at_top_right,_#7c2d12_0%,_#1e1b4b_40%,_#000000_100%)]" },
    { id: 3, type: "Space Series", title: "Event Horizon", description: "Minimalist dark void with a gravitational radial pull.", style: "bg-[radial-gradient(circle_at_50%_50%,_#0f172a_0%,_#000000_100%)]" },
    { id: 4, type: "Space Series", title: "Star Matrix", description: "Static star-field pattern with deep space texture overlays.", style: "bg-[#020617] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" },
    { id: 5, type: "Space Series", title: "Cyber Orbit", description: "Neon magenta and cyan accents for a futuristic space feel.", style: "bg-gradient-to-br from-fuchsia-900/30 via-black to-cyan-900/30" },
    { id: 6, type: "Space Series", title: "Cosmic Dust", description: "Textured interstellar particles using carbon-fiber noise.", style: "bg-slate-950 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed" },
    { id: 7, type: "Space Series", title: "Wormhole", description: "Linear perspective depth using sharp angular gradients.", style: "bg-[linear-gradient(220deg,_#000000_0%,_#0f172a_50%,_#000000_100%)]" },
    { id: 8, type: "Space Series", title: "Solar Winds", description: "Deep emerald gas clouds moving from the top-left corner.", style: "bg-[radial-gradient(at_0%_0%,_#064e3b_0%,_#000000_60%)]" },
    { id: 9, type: "Space Series", title: "Void Geometry", description: "Hard-edged shadows simulating 3D structural depth.", style: "bg-[#020617] border-x border-white/5" },
    { id: 10, type: "Space Series", title: "Stellar Nursery", description: "Bright teal energy cluster centered for content focus.", style: "bg-[radial-gradient(circle_at_center,_#164e63_0%,_#000000_100%)]" },
    
    // GRADIENT SERIES (11-20)
    { id: 11, type: "Gradient Series", title: "Violet Mist", description: "Soft, modern lavender wash for a clean UI feel.", style: "bg-[radial-gradient(at_top_left,_#2e1065_0%,_#000000_80%)]" },
    { id: 12, type: "Gradient Series", title: "Pulsar Gold", description: "Luxury gold and amber mesh with warm light sources.", style: "bg-[radial-gradient(circle_at_center,_#451a03_0%,_#000000_70%)]" },
    { id: 13, type: "Gradient Series", title: "Deep Sea", description: "Submerged oceanic space using heavy emerald tones.", style: "bg-[radial-gradient(at_bottom_right,_#064e3b_0%,_#000000_80%)]" },
    { id: 14, type: "Gradient Series", title: "Crimson Sun", description: "Aggressive red-to-black transition for bold statements.", style: "bg-[linear-gradient(to_bottom,_#000000_0%,_#450a0a_50%,_#000000_100%)]" },
    { id: 15, type: "Gradient Series", title: "Ice Crystal", description: "Cold arctic blue with high-energy white hotspots.", style: "bg-[radial-gradient(at_top_right,_#0c4a6e_0%,_#000000_70%)]" },
    { id: 16, type: "Gradient Series", title: "Dark Gravity", description: "Rich purple mesh gradient designed for high readability.", style: "bg-[radial-gradient(at_bottom_left,_#4c1d95_0%,_#000000_70%)]" },
    { id: 17, type: "Gradient Series", title: "Aurora", description: "Vibrant neon green wisps simulating northern lights.", style: "bg-[radial-gradient(circle_at_20%_30%,_#064e3b_0%,_#000000_80%)]" },
    { id: 18, type: "Gradient Series", title: "Magma", description: "Tectonic orange and black with high-contrast lighting.", style: "bg-[conic-gradient(at_bottom_left,_#7c2d12_0%,_#000000_50%)]" },
    { id: 19, type: "Gradient Series", title: "Synth Void", description: "Retro-futuristic dual-tone pink and teal gradient.", style: "bg-[linear-gradient(135deg,_#4a044e_0%,_#000000_50%,_#083344_100%)]" },
    { id: 20, type: "Gradient Series", title: "Abyss", description: "Sophisticated monochrome slate-to-black radial fade.", style: "bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#000000_100%)]" }
  ];

  return (
    <main className="w-full bg-black text-white font-sans selection:bg-cyan-500/30">
      {/* HEADER & PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="h-1.5 bg-white/10 w-full">
          <div 
            className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] transition-all duration-200" 
            style={{ width: `${scrollPercent}%` }}
          />
        </div>
        <div className="flex justify-between items-center p-4 backdrop-blur-xl bg-black/40 border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white">Client Showcase</span>
            <span className="text-[9px] text-cyan-400 font-mono italic">3D Background Concepts</span>
          </div>
          <div className="text-[10px] font-mono bg-cyan-500/20 border border-cyan-500/50 px-3 py-1 rounded-full text-cyan-300">
            {Math.round(scrollPercent)}%
          </div>
        </div>
      </div>

      {/* BACKGROUND SECTIONS */}
      {backgrounds.map((bg) => (
        <section 
          key={bg.id} 
          className={`relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden px-8 border-b border-white/5 ${bg.style}`}
        >
          {/* Noise & Texture Overlays */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/60" />
          
          <div className="relative z-10 text-center w-full max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-white/80 font-semibold">
                {bg.type} — {bg.id}
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-black mb-4 tracking-tighter uppercase leading-[0.9] italic">
              {bg.title}
            </h2>
            
            <p className="text-sm sm:text-lg text-gray-400 font-light mb-10 px-2 leading-relaxed max-w-xs mx-auto">
              {bg.description}
            </p>

            {/* MOBILE-OPTIMIZED BUTTONS */}
            <div className="flex flex-col gap-3 w-full">
              <button className="group relative w-full py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] overflow-hidden active:scale-95 transition-all">
                <span className="relative z-10">Choose Concept</span>
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="w-full py-4 bg-transparent border border-white/20 text-white text-[10px] uppercase tracking-widest active:bg-white/10 transition-colors">
                Technical Specs
              </button>
            </div>
          </div>

          {/* AMBIENT LIGHTING ORBS (3D DEPTH EFFECT) */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />
        </section>
      ))}

      {/* FINAL CALL TO ACTION */}
      <footer className="h-[100dvh] flex flex-col items-center justify-center bg-white text-black text-center px-10">
        <div className="max-w-xs uppercase">
          <h3 className="text-4xl font-black leading-none mb-6">Which one fits your brand?</h3>
          <p className="text-sm text-gray-500 mb-10 tracking-tight">Scroll back up to review or click below to finalize.</p>
          <button className="w-full py-5 bg-black text-white font-bold text-xs tracking-[0.3em] hover:bg-cyan-600 transition-colors">
            Confirm Selection
          </button>
        </div>
      </footer>
    </main>
  );
};

export default SpaceShowcase;