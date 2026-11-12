"use client";

import { useState } from "react";
import { ArrowRight, Code2, ShieldCheck, Sparkles, Zap, Award, Search, CheckCircle2 } from "lucide-react";
import { HERO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aspectmahbub.dev@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs sm:text-sm font-medium text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-emerald-400">7+ Years Veteran</span>
            <span className="text-gray-500">•</span>
            <span>Next.js & C++ Architect</span>
            <span className="text-gray-500">•</span>
            <span className="text-amber-400">100% AdSense Approval</span>
          </div>

          {/* Main Title & Kinetic Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.12]">
            Architecting{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              High-Velocity Web
            </span>{" "}
            &amp;{" "}
            <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              C++ Systems
            </span>{" "}
            with Guaranteed SEO Authority.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            I am <strong className="text-white font-semibold">Aspect Mahbub</strong> — a senior full-stack developer,
            native app engineer, and C++ specialist with over <span className="text-cyan-400 font-medium">7 years</span> of proven search engine dominance and bulletproof Google AdSense monetization architecture.
          </p>

          {/* Role Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-3xl">
            {[
              { label: "Next.js 16 (App Router)", color: "border-cyan-500/30 text-cyan-300 bg-cyan-950/30" },
              { label: "High-Performance C++20", color: "border-rose-500/30 text-rose-300 bg-rose-950/30" },
              { label: "Full Stack & Cross-Platform Apps", color: "border-purple-500/30 text-purple-300 bg-purple-950/30" },
              { label: "7+ Years Technical SEO", color: "border-emerald-500/30 text-emerald-300 bg-emerald-950/30" },
              { label: "AdSense 100% Approval Expert", color: "border-amber-500/30 text-amber-300 bg-amber-950/30" },
            ].map((badge) => (
              <span
                key={badge.label}
                className={`text-xs font-mono font-medium px-3 py-1 rounded-lg border backdrop-blur-sm ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Featured Works</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#adsense-audit"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-emerald-500/40 hover:border-emerald-400 shadow-lg shadow-emerald-500/10 transition-all transform hover:-translate-y-0.5"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Free AdSense &amp; SEO Audit</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-gray-300 hover:text-white text-sm font-medium border border-white/10 transition-all"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>
          </div>

          {/* Live Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full max-w-5xl">
            {HERO_DATA.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 font-mono mt-0.5 text-center">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
