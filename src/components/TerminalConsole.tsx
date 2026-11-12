"use client";

import { useState } from "react";
import { Terminal, Copy, Check, Play, CornerDownLeft, Sparkles } from "lucide-react";
import { CODE_LAB_TABS } from "@/data/portfolioData";

export default function TerminalConsole() {
  const [activeTab, setActiveTab] = useState(CODE_LAB_TABS[0].id);
  const [copied, setCopied] = useState(false);
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState<Array<{ cmd: string; res: string }>>([
    {
      cmd: "aspect --status",
      res: "Aspect Mahbub OS v7.4 [READY] | C++ SIMD, Next.js 16 App Router, 7+ Years SEO, AdSense 100% Rate",
    },
  ]);

  const currentTab = CODE_LAB_TABS.find((t) => t.id === activeTab) || CODE_LAB_TABS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = cliInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = "";
    switch (cleanCmd) {
      case "help":
        response = "Available commands: 'skills', 'nextjs', 'cpp', 'seo', 'adsense', 'contact', 'hire', 'clear'";
        break;
      case "skills":
        response = "Expertise: C++20 (AVX2/SIMD), Next.js 16 (App Router), Full-Stack, Mobile Apps, 7+ Years SEO, AdSense Guarantee";
        break;
      case "nextjs":
        setActiveTab("nextjs");
        response = "Switched to Next.js 16 Edge Runtime source preview.";
        break;
      case "cpp":
      case "c++":
        setActiveTab("cpp");
        response = "Switched to C++20 SIMD AVX2 Vector Processing source preview.";
        break;
      case "seo":
        setActiveTab("seo");
        response = "Switched to 7+ Years SEO Semantic Vector Graph preview.";
        break;
      case "adsense":
        setActiveTab("adsense");
        response = "Switched to AdSense Approval Engine Blueprint preview.";
        break;
      case "hire":
      case "contact":
        response = "Direct contact: aspectmahbub.dev@gmail.com | WhatsApp & Telegram available below.";
        break;
      case "clear":
        setCliHistory([]);
        setCliInput("");
        return;
      default:
        response = `Command '${cleanCmd}' not recognized. Type 'help' for available commands.`;
    }

    setCliHistory((prev) => [...prev, { cmd: cliInput, res: response }]);
    setCliInput("");
  };

  return (
    <section id="code-lab" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Code Laboratory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Aspect OS: <span className="text-gradient-cyan">Engineering Under The Hood</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Inspect real source architecture spanning low-level C++ vectorization, Next.js server actions, deep SEO schema, and guaranteed AdSense verification algorithms.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-950/30">
          
          {/* Terminal Window Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10 gap-3">
            
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-gray-400 hidden sm:inline">
                aspect-mahbub@production: ~/core-engine
              </span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto py-1">
              {CODE_LAB_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="text-[10px] opacity-60">({tab.badge})</span>
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-white px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title="Copy snippet"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Code Viewer Panel */}
          <div className="relative bg-[#020617]/95 p-4 sm:p-6 font-mono text-xs sm:text-sm text-gray-200 overflow-x-auto min-h-[300px] border-b border-white/5">
            <div className="text-[11px] text-gray-500 mb-3 flex items-center justify-between border-b border-white/5 pb-2">
              <span>File: {currentTab.filename}</span>
              <span className="text-cyan-400/80 uppercase">{currentTab.language}</span>
            </div>
            <pre className="leading-relaxed">
              <code>{currentTab.code}</code>
            </pre>
          </div>

          {/* Interactive Shell CLI */}
          <div className="bg-slate-950 p-4 font-mono text-xs">
            <div className="space-y-1 mb-3 max-h-36 overflow-y-auto">
              {cliHistory.map((item, i) => (
                <div key={i} className="text-gray-300">
                  <div className="text-cyan-400">
                    <span className="text-emerald-400">aspect@mahbub</span>:
                    <span className="text-indigo-300">~</span>$ {item.cmd}
                  </div>
                  <div className="text-gray-400 pl-4">{item.res}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleRunCommand} className="flex items-center gap-2">
              <span className="text-emerald-400">aspect@mahbub</span>:
              <span className="text-indigo-300">~</span>$
              <input
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="type 'help', 'skills', 'cpp', 'nextjs', 'adsense'..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-gray-600 text-xs"
              />
              <button
                type="submit"
                className="text-cyan-400 hover:text-cyan-300 p-1 rounded hover:bg-white/5 transition-colors"
                title="Execute command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
