"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Zap, Award } from "lucide-react";
import { ADSENSE_AUDIT_CHECKLIST } from "@/data/portfolioData";

export default function AdSenseAuditor() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    content: true,
    navigation: true,
    legal: true,
    speed: true,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalPoints = ADSENSE_AUDIT_CHECKLIST.length;
  const currentChecked = Object.values(checkedItems).filter(Boolean).length;
  const score = Math.round((currentChecked / totalPoints) * 100);

  const getStatus = () => {
    if (score === 100) {
      return {
        badge: "100% Guaranteed Approval",
        color: "text-emerald-400 bg-emerald-950/60 border-emerald-500/40",
        message: "Your site meets Aspect Mahbub's Tier-1 approval blueprint! Zero-rejection likelihood on Google's policy crawlers.",
      };
    } else if (score >= 70) {
      return {
        badge: "Conditional - Medium Risk",
        color: "text-amber-400 bg-amber-950/60 border-amber-500/40",
        message: "Almost compliant, but you risk getting flagged for 'Low Value Content' or 'Site Behavior: Navigation'. Let Aspect tune your architecture before applying.",
      };
    } else {
      return {
        badge: "High Rejection Probability",
        color: "text-rose-400 bg-rose-950/60 border-rose-500/40",
        message: "Applying now will likely result in an immediate policy rejection. Aspect's guaranteed blueprint will restructure your layout and guarantee approval.",
      };
    }
  };

  const status = getStatus();

  return (
    <section id="adsense-audit" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="glass-panel p-6 sm:p-10 lg:p-12 rounded-3xl border border-emerald-500/20 relative overflow-hidden shadow-2xl shadow-emerald-950/20">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Proprietary Verification Tool</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Google AdSense <span className="text-gradient-cyan">Approval Readiness Calculator</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Tired of repeated &quot;Low Value Content&quot; or &quot;Navigational Violation&quot; rejections?
                Over the past 7+ years, I have architected and approved hundreds of digital properties with a <strong className="text-emerald-400">100% success rate</strong>.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed first-attempt approval structures</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Turnaround within 48 to 72 hours</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <span>Book Guaranteed Approval Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Checklist & Live Gauge */}
            <div className="lg:col-span-7 bg-slate-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              
              {/* Score Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Calculated Readiness Score
                  </div>
                  <div className="text-3xl sm:text-4xl font-mono font-black text-white mt-0.5">
                    {score}% <span className="text-xs font-normal text-gray-400 font-sans">/ 100%</span>
                  </div>
                </div>

                <div className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold border ${status.color}`}>
                  {status.badge}
                </div>
              </div>

              {/* Status Message */}
              <div className="text-xs sm:text-sm text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5 leading-relaxed">
                {status.message}
              </div>

              {/* Checklist Items */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-2">
                  Verify Site Factors:
                </div>
                {ADSENSE_AUDIT_CHECKLIST.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all ${
                        isChecked
                          ? "bg-emerald-950/30 border-emerald-500/40 text-gray-200"
                          : "bg-slate-900/60 border-white/5 text-gray-400 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                            isChecked
                              ? "bg-emerald-500 border-emerald-400 text-slate-950"
                              : "border-gray-600 bg-slate-800"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <span className="font-mono text-xs text-emerald-400 shrink-0 ml-2">
                        {item.impact}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
