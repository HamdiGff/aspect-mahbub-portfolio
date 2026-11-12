"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#020617] py-12 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Aspect Mahbub</div>
              <div className="text-gray-500 font-mono">
                &copy; {year} All Rights Reserved. Ready for Vercel deployment.
              </div>
            </div>
          </div>

          {/* Core Ethos */}
          <div className="text-center md:text-right font-mono text-[11px] text-gray-400">
            <div>
              Built with <span className="text-cyan-400">Next.js 16 (App Router)</span> &amp;{" "}
              <span className="text-rose-400">C++ Algorithmic Precision</span>
            </div>
            <div className="text-emerald-400 mt-0.5">
              100% Core Web Vitals • 7+ Years SEO Authority • Zero AdSense Rejections
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all text-xs font-mono"
            title="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
