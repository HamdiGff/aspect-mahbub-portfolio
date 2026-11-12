"use client";

import { UserCheck, Award, Zap, Code2, Globe, CheckCircle2, ShieldAlert } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>The Developer Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Meet <span className="text-gradient-cyan">Aspect Mahbub</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            Where low-level systems engineering converges with high-impact web performance, modern aesthetic design, and proven search monetization.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Engineering Without Compromise: The Dual Advantage
              </h3>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Most web developers only understand high-level UI frameworks; most systems programmers never touch modern web or SEO. 
                My background bridges both extremes. By writing memory-efficient <strong className="text-rose-400">C++</strong> with SIMD vectorization and cache locality, I understand what actually happens at the hardware level.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                When that algorithmic discipline is applied to <strong className="text-cyan-400">Next.js App Router</strong>, the result is astonishing: zero hydration lag, instantaneous edge execution, and sub-second page loads that achieve a perfect 100/100 Core Web Vitals score.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Over the past <strong className="text-emerald-400">7+ years in SEO</strong>, I have taken platforms from obscurity to dominating competitive Tier-1 search keywords. Furthermore, as an <strong className="text-amber-400">AdSense Approval Specialist</strong>, I have solved the mystery of Google&apos;s strict &quot;Low Value Content&quot; and navigation policies, giving clients guaranteed, first-pass monetization approvals.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-xs font-mono text-cyan-400 font-bold">250+</div>
                <div className="text-xs text-gray-300 font-medium mt-0.5">Sites &amp; Apps</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-xs font-mono text-emerald-400 font-bold">7+ Years</div>
                <div className="text-xs text-gray-300 font-medium mt-0.5">Active SEO Mastery</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="text-xs font-mono text-amber-400 font-bold">100%</div>
                <div className="text-xs text-gray-300 font-medium mt-0.5">AdSense Approval</div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Philosophy Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            <div className="glass-card p-6 rounded-2xl flex-1 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Full-Stack &amp; Next.js 16</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                App Router, React 19, Server Actions, edge caching, and atomic components styled with modern CSS scroll-driven animations.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl flex-1 border border-rose-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">C++ High Performance</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Low-overhead memory architectures, parallel computations, and native engine tooling where every single microsecond counts.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl flex-1 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Monetization &amp; SEO Engine</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Guaranteed AdSense approvals in under 72 hours, 100% policy compliance, high-RPM placements, and organic keyword domination.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
