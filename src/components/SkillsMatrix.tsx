"use client";

import { Globe, Cpu, TrendingUp, DollarSign, Smartphone, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function SkillsMatrix() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-rose-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case "DollarSign":
        return <DollarSign className="w-5 h-5 text-amber-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getAccentGlow = (accent: string) => {
    switch (accent) {
      case "cyan":
        return "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]";
      case "rose":
        return "group-hover:border-rose-500/40 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]";
      case "emerald":
        return "group-hover:border-emerald-500/40 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]";
      case "purple":
        return "group-hover:border-purple-500/40 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]";
      default:
        return "group-hover:border-cyan-500/40";
    }
  };

  return (
    <section id="expertise" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mastery &amp; Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Six Pillars of <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Full-Spectrum Engineering</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            A rare synthesis of low-latency computational physics (C++), modern server-rendered web (Next.js), 7+ years of organic SEO algorithms, and guaranteed Google AdSense approval systems.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className={`glass-card p-6 rounded-2xl relative overflow-hidden group transition-all duration-300 ${getAccentGlow(
                category.accentColor
              )}`}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">
                    {category.tagline}
                  </p>
                </div>
              </div>

              {/* Skills Bars */}
              <div className="space-y-3.5 mt-5 pt-4 border-t border-white/5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="font-mono text-cyan-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Track */}
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <div className="text-[11px] text-gray-500 font-mono">
                      {skill.note}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
