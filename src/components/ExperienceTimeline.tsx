"use client";

import { History, Award, CheckCircle2 } from "lucide-react";
import { TIMELINE_EVENTS } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-4">
            <History className="w-3.5 h-3.5" />
            <span>7+ Years Career Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Proven Track Record <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Since 2018</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            From low-level memory engineering to enterprise cloud web development and world-class monetization strategy.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-400 to-indigo-500 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={event.year}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge Center Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-6">
                    <div className="glass-card p-6 rounded-2xl relative group hover:border-cyan-500/40 transition-all">
                      <div className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
