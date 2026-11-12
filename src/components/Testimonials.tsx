"use client";

import { MessageSquareQuote, Star, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolioData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/20 text-xs font-mono text-amber-400 mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by <span className="text-gradient-cyan">Publishers, CTOs &amp; Founders</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Real feedback from clients whose businesses scaled through Aspect&apos;s custom engineering and guaranteed monetization blueprints.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.name}
              className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative group hover:border-amber-500/30 transition-all"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono text-gray-400 ml-2">5.0 / 5.0</span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-gray-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>

                <div className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-emerald-400 border border-emerald-500/20">
                  {t.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
