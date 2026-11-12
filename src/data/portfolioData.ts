export interface Project {
  id: string;
  title: string;
  category: "nextjs" | "cxx" | "seo-adsense" | "apps";
  categoryLabel: string;
  description: string;
  metrics: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlight: string;
}

export interface SkillCategory {
  title: string;
  tagline: string;
  iconName: string;
  skills: { name: string; level: number; note: string }[];
  accentColor: "cyan" | "emerald" | "rose" | "purple";
}

export const HERO_DATA = {
  name: "Aspect Mahbub",
  badge: "Available for Elite Projects & Architecture Consulting",
  headlinePrefix: "Architecting",
  headlineMain: "High-Performance Systems & High-Ranking Web Experiences",
  subheadline:
    "Merging low-level C++ computational power with Next.js edge performance, bleeding-edge UI/UX design, and 7+ years of battle-tested SEO & guaranteed AdSense monetization blueprints.",
  stats: [
    { label: "Years in Industry", value: "7+", subtext: "Mastering algorithms & web since 2018" },
    { label: "Projects Shipped", value: "250+", subtext: "SaaS, mobile apps & C++ engines" },
    { label: "AdSense Approvals", value: "100%", subtext: "Zero-rejection policy architecture" },
    { label: "Core Web Vitals", value: "99.8%", subtext: "Sub-second LCP & perfect INP" },
  ],
};

export const CODE_LAB_TABS = [
  {
    id: "nextjs",
    label: "Next.js 16 (App Router)",
    filename: "app/api/metrics/route.ts",
    language: "typescript",
    badge: "Edge Runtime",
    code: `import { NextResponse } from 'next/server';
import { db } from '@/lib/database';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

// Next.js 16 Ultra-Fast Edge Route by Aspect Mahbub
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const clientDomain = searchParams.get('domain');

  // Instant sub-15ms edge compute with zero cold-starts
  const performanceReport = await db.measureVitals({
    domain: clientDomain,
    targetLCP: '< 0.8s',
    clsScore: 0.00,
    inpLatency: '< 30ms',
    cachingStrategy: 'stale-while-revalidate, edge-cache',
    adsenseReadiness: '100% Policy Compliant'
  });

  return NextResponse.json({
    status: 'OPTIMAL_SPEED',
    developer: 'Aspect Mahbub',
    report: performanceReport
  }, { status: 200 });
}`
  },
  {
    id: "cpp",
    label: "C++20 Engine (SIMD)",
    filename: "src/engine/fast_pipeline.cpp",
    language: "cpp",
    badge: "Native Performance",
    code: `#include <iostream>
#include <vector>
#include <span>
#include <immintrin.h>

namespace Aspect::CoreEngine {
    // Memory-aligned high-throughput vector processing
    template <typename T>
    requires std::floating_point<T>
    void parallel_vector_transform(std::span<const T> input, std::span<T> output) noexcept {
        const size_t n = input.size();
        size_t i = 0;

        // AVX2 256-bit SIMD optimization: 8 floats processed per clock cycle
        #if defined(__AVX2__)
        for (; i + 8 <= n; i += 8) {
            __m256 in_vec = _mm256_loadu_ps(&input[i]);
            __m256 result = _mm256_mul_ps(in_vec, _mm256_set1_ps(1.41421356f));
            _mm256_storeu_ps(&output[i], result);
        }
        #endif

        // Clean tail processing for zero cache misses
        for (; i < n; ++i) {
            output[i] = input[i] * 1.41421356f;
        }
    }
}`
  },
  {
    id: "seo",
    label: "7+ Yrs SEO Strategy",
    filename: "seo/semantic_graph.json",
    language: "json",
    badge: "Rank #1 Blueprint",
    code: `{
  "seo_engine": "Aspect Semantic Vector Framework v7.4",
  "experience_years": 7,
  "strategies_executed": [
    "Programmatic SEO topical clusters with 0 duplicate penalty",
    "Entity-first JSON-LD deep knowledge graph bridging",
    "Sub-800ms Time-To-Interactive (TTI) for maximum rank weighting",
    "Zero-click search intent capture & featured snippet optimization",
    "High authority internal topical pagerank flow"
  ],
  "average_organic_growth": "+380% within 90 days",
  "core_web_vitals": {
    "lcp": "0.72s",
    "inp": "28ms",
    "cls": "0.000",
    "status": "Good (100% Green in Google Search Console)"
  }
}`
  },
  {
    id: "adsense",
    label: "AdSense Approval Engine",
    filename: "monetization/approval_blueprint.ts",
    language: "typescript",
    badge: "100% Guaranteed",
    code: `// Aspect Mahbub: Guaranteed AdSense Approval Validation Schema
export const AdSenseApprovalEngine = {
  policyAuditChecks: [
    { item: "High-Value Original Content Density", status: "PASS", weight: "CRITICAL" },
    { item: "Clear Tier-1 Hierarchical Navigation", status: "PASS", weight: "MANDATORY" },
    { item: "Legal Suite (Privacy Policy, Terms, Disclaimer, About)", status: "VERIFIED", weight: "STRICT" },
    { item: "Zero Broken Links / 404 Resolution", status: "100% CLEAN", weight: "ALGORITHM" },
    { item: "High Viewability Above-The-Fold Ad Placements", status: "RPM_MAXIMIZED", weight: "REVENUE" }
  ],
  approvalGuarantee: "Pre-verified compliance ensures first-time approval without rejection loops."
};`
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Next.js & Modern Web",
    tagline: "Ultra-fast App Router, React 19, Server Actions & edge infrastructure",
    iconName: "Globe",
    accentColor: "cyan",
    skills: [
      { name: "Next.js (App Router / SSR / ISR)", level: 98, note: "Server actions, edge rendering & caching" },
      { name: "React 19 & TypeScript", level: 96, note: "Strict typing, hooks architecture, zero hydration lag" },
      { name: "Tailwind CSS & Modern CSS", level: 99, note: "Scroll-driven animations, fluid layouts, glassmorphism" },
      { name: "Vercel & Cloudflare Edge", level: 95, note: "Global CDN, edge middleware, zero-latency deployments" },
    ]
  },
  {
    title: "C++ Systems & Engines",
    tagline: "Low-latency systems, memory safety, SIMD vectorization & algorithms",
    iconName: "Cpu",
    accentColor: "rose",
    skills: [
      { name: "Modern C++ (C++17/20/23)", level: 94, note: "Smart pointers, concepts, templates & RAII" },
      { name: "Memory Optimization & SIMD", level: 92, note: "AVX2 instructions, cache locality, zero-leak design" },
      { name: "Algorithms & Data Structures", level: 96, note: "Asymptotic complexity minimization (O(1)/O(log n))" },
      { name: "Cross-Platform Native Tooling", level: 90, note: "CMake, compiler profiling & native interop" },
    ]
  },
  {
    title: "7+ Years SEO Masterclass",
    tagline: "Dominating organic search results, technical audits & programmatic growth",
    iconName: "TrendingUp",
    accentColor: "emerald",
    skills: [
      { name: "Technical SEO & Core Web Vitals", level: 99, note: "100/100 PageSpeed scores & semantic structure" },
      { name: "Programmatic & Topical SEO", level: 97, note: "Scalable keyword architectures, entity graphs" },
      { name: "Schema.org & Rich Snippets", level: 98, note: "Advanced JSON-LD microdata for Google Knowledge Graph" },
      { name: "Competitor Displacement", level: 95, note: "Intent modeling, internal linking silos, CTR optimization" },
    ]
  },
  {
    title: "AdSense Approval & Monetization",
    tagline: "Proven blueprints for 100% approval success and maximized RPM revenue",
    iconName: "DollarSign",
    accentColor: "emerald",
    skills: [
      { name: "AdSense Policy Compliance", level: 100, note: "Zero rejections, navigational hierarchy, legal compliance" },
      { name: "Ad Layout & High RPM Engineering", level: 96, note: "Heatmap-tested ad placements for 3x revenue uplift" },
      { name: "Valuable Inventory Architecture", level: 98, note: "Eliminating 'low value content' flag triggers" },
      { name: "Monetization Audit Consulting", level: 97, note: "Helping publishers get approved in under 72 hours" },
    ]
  },
  {
    title: "App & Full-Stack Development",
    tagline: "Cross-platform mobile apps, reactive APIs & resilient database architectures",
    iconName: "Smartphone",
    accentColor: "purple",
    skills: [
      { name: "Cross-Platform Mobile Apps", level: 93, note: "Smooth 60/120fps UI, native bridges, offline sync" },
      { name: "PostgreSQL / Supabase / Prisma", level: 94, note: "Indexed schemas, relational integrity & serverless pooling" },
      { name: "REST & GraphQL APIs", level: 95, note: "Secure auth, rate limiting, WebSockets, real-time streams" },
      { name: "App Store & Play Store Publishing", level: 91, note: "Review guidelines, asset pipelines & store optimization" },
    ]
  },
  {
    title: "Aesthetic UI/UX Design",
    tagline: "Future-facing visual design, kinetic micro-interactions & brand identity",
    iconName: "Sparkles",
    accentColor: "cyan",
    skills: [
      { name: "Kinetic Micro-Interactions", level: 98, note: "Spring physics, hover tilt, magnetic controls" },
      { name: "Design Systems & Figma", level: 94, note: "Consistent spacing tokens, dark-mode color harmony" },
      { name: "Web Accessibility (WCAG 2.2)", level: 95, note: "Full keyboard navigation & screen reader harmony" },
      { name: "Cyberpunk & Modern Glass Aesthetic", level: 99, note: "Obsidian dark themes, neon accents & futuristic typography" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "PulseFlow: Next.js Enterprise Analytics Platform",
    category: "nextjs",
    categoryLabel: "Next.js & Full Stack",
    description: "An ultra-responsive real-time monitoring suite built with Next.js 16 App Router, edge server actions, and sub-10ms analytics querying.",
    metrics: "120k Monthly Active Users • 99.9% Uptime",
    tech: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "Vercel Edge"],
    featured: true,
    highlight: "Built for instant data hydration without UI freezes"
  },
  {
    id: "proj-2",
    title: "HyperVector: C++20 High-Speed Math Engine",
    category: "cxx",
    categoryLabel: "C++ & Systems",
    description: "A low-latency SIMD-accelerated math library for physics simulations and graphic pipelines, achieving 8x speedup over standard STL iterations.",
    metrics: "8.4x Speedup • Zero Dynamic Allocations in Hot Path",
    tech: ["C++20", "AVX2 SIMD", "CMake", "Google Benchmark", "Cross-Platform"],
    featured: true,
    highlight: "Custom memory arena eliminating malloc bottlenecks"
  },
  {
    id: "proj-3",
    title: "AdSense Accelerator & Publisher Portal",
    category: "seo-adsense",
    categoryLabel: "SEO & AdSense",
    description: "Architected a compliant digital news & editorial network from scratch that achieved first-attempt Google AdSense approval in 48 hours and scalable \$14+ RPM.",
    metrics: "100% First-Pass Approval • \$14.20 Page RPM",
    tech: ["AdSense Compliance", "Technical SEO", "Next.js", "Schema Graph", "Fast LCP"],
    featured: true,
    highlight: "Certified zero-policy-violation architecture"
  },
  {
    id: "proj-4",
    title: "OmniRank: 7-Year Organic SEO Engine",
    category: "seo-adsense",
    categoryLabel: "SEO & AdSense",
    description: "A programmatic SEO framework with custom schema injection that catapulted a tech resource portal from 0 to 450,000 monthly organic Google impressions.",
    metrics: "+450k Organic Impressions • 120+ #1 Rankings",
    tech: ["Programmatic SEO", "JSON-LD Entity Graph", "Core Web Vitals", "Search Console"],
    featured: true,
    highlight: "Dominating competitive Tier-1 tech queries"
  },
  {
    id: "proj-5",
    title: "NovaTrack: Cross-Platform Native Mobile App",
    category: "apps",
    categoryLabel: "App Development",
    description: "A high-performance productivity and task sync app with biometric security, offline-first local SQLite caching, and fluid gesture-driven UI.",
    metrics: "4.9★ Rating • 45,000+ Downloads",
    tech: ["React Native", "TypeScript", "SQLite", "Biometrics", "C++ Native Modules"],
    featured: false,
    highlight: "Shared native C++ state machine for desktop & mobile"
  },
  {
    id: "proj-6",
    title: "AuraStudio: Modern Design System & Component Library",
    category: "nextjs",
    categoryLabel: "Website Design",
    description: "A futuristic component kit with scroll-driven animations, 3D card tilts, accessible popovers, and tailored dark-mode gradients for web creators.",
    metrics: "100/100 Accessibility • 60 FPS Smooth Scroll",
    tech: ["CSS Scroll-Driven", "Tailwind CSS", "Modern Web Guidance", "Radix Primitives"],
    featured: false,
    highlight: "Zero layout shift with composited CSS transforms"
  }
];

export const ADSENSE_AUDIT_CHECKLIST = [
  { id: "content", label: "Substantial High-Value Original Content (Zero AI Plagiarism / Thin Content)", impact: "+25%" },
  { id: "navigation", label: "Clear Hierarchical Header/Footer Navigation & Breadcrumbs", impact: "+20%" },
  { id: "legal", label: "Mandatory Legal Suite (Privacy Policy, Contact, Terms, Disclaimer)", impact: "+20%" },
  { id: "speed", label: "Fast Page Load & Mobile Usability (Sub-1.2s LCP, No Layout Shifts)", impact: "+15%" },
  { id: "clean_links", label: "Zero Broken Links, 404 Pages, or Placeholder Content", impact: "+10%" },
  { id: "organic_traffic", label: "Verified Organic Search Intent & Natural Reader Flow", impact: "+10%" },
];

export const TIMELINE_EVENTS = [
  {
    year: "2018 - 2020",
    title: "Foundations in C++ Systems & Technical SEO",
    description: "Began deep algorithmic research in C++, memory management, and initiated first enterprise SEO experiments, generating millions of organic impressions and mastering early Google algorithm shifts."
  },
  {
    year: "2020 - 2022",
    title: "AdSense Approval Specialization & Full-Stack Expansion",
    description: "Solved the notoriously difficult Google AdSense 'Low Value Content' & navigation rejections for publishers worldwide. Developed a proprietary 100% approval blueprint while scaling full-stack web and mobile apps."
  },
  {
    year: "2022 - 2024",
    title: "Next.js Mastery & Modern Edge Architectures",
    description: "Adopted Next.js App Router and server actions at inception. Delivered over 150+ high-performance websites with perfect Core Web Vitals, combining low-latency C++ backend services with aesthetic React frontends."
  },
  {
    year: "2024 - Present",
    title: "Elite Consultancy & High-Impact Digital Engineering",
    description: "Consulting for global clients on complex full-stack web applications, custom native apps, algorithmic C++ engines, guaranteed AdSense monetization architecture, and high-stakes organic search dominance."
  }
];

export const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "Founder, Apex Media Group",
    quote: "Aspect Mahbub is the real deal. We were rejected by Google AdSense 4 times in a row. Aspect restructured our website navigation, fixed our technical SEO, and we got approved in less than 48 hours. Absolute genius!",
    rating: 5,
    tag: "AdSense & SEO Client"
  },
  {
    name: "Elena Rostova",
    role: "CTO, VectorLogix Labs",
    quote: "Finding an engineer who can write blazing-fast C++ with SIMD optimizations AND build a stunning modern Next.js front-end is basically impossible—until we hired Aspect. His attention to speed is unmatched.",
    rating: 5,
    tag: "C++ & Next.js Client"
  },
  {
    name: "Zubair Al-Mansoor",
    role: "Managing Director, NovaDigital",
    quote: "The aesthetic quality and smooth animations of our new web platform blew our investors away. Plus, our organic search traffic tripled within two months. Aspect is an all-in-one powerhouse developer.",
    rating: 5,
    tag: "Full-Stack & Web Design"
  }
];
