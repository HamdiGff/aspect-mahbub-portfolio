import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aspectmahbub.vercel.app"),
  title: "Aspect Mahbub | Full Stack & App Developer, C++ & Next.js Expert, 7+ Years SEO & AdSense Authority",
  description:
    "Official portfolio of Aspect Mahbub. Professional Website Designer, Full Stack Developer, C++ & Next.js Expert, and 7+ Years Senior SEO & AdSense Approval Specialist. Delivering high-performance web systems, custom mobile apps, and guaranteed monetization architecture.",
  keywords: [
    "Aspect Mahbub",
    "Aspect Mahbub Portfolio",
    "Next.js Expert",
    "C++ Developer",
    "Full Stack Developer",
    "App Developer",
    "Website Designer",
    "SEO Expert",
    "7 Years SEO Experience",
    "AdSense Approval Expert",
    "Vercel Next.js Developer",
    "High Performance Web Apps"
  ],
  authors: [{ name: "Aspect Mahbub", url: "https://aspectmahbub.vercel.app" }],
  creator: "Aspect Mahbub",
  openGraph: {
    title: "Aspect Mahbub | Senior Full Stack, C++ & Next.js Developer | SEO & AdSense Authority",
    description:
      "Crafting bleeding-edge digital experiences, low-latency C++ engines, and high-impact SEO & AdSense monetization frameworks.",
    url: "https://aspectmahbub.vercel.app",
    siteName: "Aspect Mahbub Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspect Mahbub — Full Stack, C++ & Next.js Expert | SEO Specialist",
    description:
      "Aesthetic, high-performance web engineering and 7+ years proven search ranking & AdSense approvals.",
    creator: "@aspectmahbub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Data (JSON-LD) for maximum SEO authority
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://aspectmahbub.vercel.app/#person",
        "name": "Aspect Mahbub",
        "jobTitle": "Lead Full Stack Developer & SEO/AdSense Strategist",
        "knowsAbout": [
          "Next.js",
          "C++",
          "Full Stack Web Development",
          "Mobile App Development",
          "Search Engine Optimization (SEO)",
          "Google AdSense Approval & Monetization",
          "UI/UX Design",
          "React 19",
          "TypeScript"
        ],
        "description": "Aspect Mahbub is an accomplished full stack engineer, C++ specialist, mobile app creator, and 7+ year SEO & AdSense approval veteran.",
        "url": "https://aspectmahbub.vercel.app"
      },
      {
        "@type": "WebSite",
        "@id": "https://aspectmahbub.vercel.app/#website",
        "url": "https://aspectmahbub.vercel.app",
        "name": "Aspect Mahbub Official Portfolio",
        "publisher": {
          "@id": "https://aspectmahbub.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
