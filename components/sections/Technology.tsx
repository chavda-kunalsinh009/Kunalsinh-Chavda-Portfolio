"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Database,
  Smartphone,
  Server,
  Palette,
  Zap,
  GitBranch,
  Box,
  Monitor,
  Sparkles,
} from "lucide-react";
import { SiSemrush, SiGoogle, SiGoogleanalytics, SiLighthouse, SiOpenai, SiGooglegemini, SiAnthropic } from "react-icons/si";
import { FaLink, FaCode } from "react-icons/fa6";

const techCategories = [
  {
    title: "SEO Tools",
    icon: Palette,
    technologies: [
      { name: "SEMrush", description: "Keyword research, competitor gap analysis, site audits and position tracking to find and prioritise ranking opportunities." },
      { name: "Ahrefs", description: "Backlink profiling, content gap analysis and competitor research to guide link building and topic selection." },
      { name: "Google Search Console", description: "Tracking queries, indexing and page experience, then fixing coverage errors and low-CTR pages directly from the data." },
      { name: "Google Analytics 4", description: "Reading organic traffic, engagement and conversion paths to see which pages and keywords actually drive results." },
      { name: "Screaming Frog", description: "Crawling whole sites to catch broken links, redirect chains, duplicate content, missing tags and indexability issues." },
    ],
  },
  {
    title: "Technical SEO",
    icon: Server,
    technologies: [
      { name: "Schema Markup", description: "Writing and validating JSON-LD (Organization, LocalBusiness, FAQ, Article) so search engines and AI understand each page." },
      { name: "Core Web Vitals", description: "Improving LCP, INP and CLS through image, script and layout fixes using PageSpeed Insights and GTmetrix." },
      { name: "Mobile-First Indexing", description: "Making sure mobile pages carry the same content, links and speed as desktop, since Google indexes the mobile version." },
      { name: "Canonical Tags", description: "Setting the right canonical URLs to stop duplicate content and consolidate ranking signals on the preferred page." },
    ],
  },
  {
    title: "Content & Strategy",
    icon: Database,
    technologies: [
      { name: "Keyword Research", description: "Mapping keywords to search intent and funnel stage, then grouping them into clusters each page can target." },
      { name: "Content Optimization", description: "Refining existing pages with better structure, entities, internal links and answer-ready sections to lift rankings and citations." },
      { name: "Yoast SEO", description: "Managing titles, meta descriptions, sitemaps and on-page checks on WordPress sites with Yoast." },
      { name: "Link Building", description: "White-hat outreach, citations and brand mentions that build authority without risky shortcuts." },
    ],
  },
  {
    title: "Analytics & Tools",
    icon: Zap,
    technologies: [
      { name: "Data Analysis", description: "Combining Search Console, GA4 and ranking data to spot trends, declining pages and quick wins." },
      { name: "Rank Tracker", description: "Monitoring keyword positions and visibility over time to measure the impact of every change." },
      { name: "Conversion Optimization", description: "Improving page layouts, calls to action and trust signals so organic visitors turn into enquiries." },
      { name: "Reporting & Dashboards", description: "Building clear monthly reports and dashboards that show clients traffic, rankings and results in plain language." },
    ],
  },

  {
    title: "Technical Knowledge",
    icon: Smartphone,
    technologies: [
      { name: "HTML/CSS for SEO", description: "Reading and editing page markup to fix headings, tags, alt text and layout issues without waiting on developers." },
      { name: "JavaScript Basics", description: "Understanding how JavaScript rendering affects crawling and indexing, and spotting content that search engines can't see." },
      { name: "Website Architecture", description: "Planning URL structure, navigation and internal linking so both users and crawlers reach key pages quickly." },
    ],
  },
  {
    title: "AI & Automation",
    icon: Sparkles,
    technologies: [
      { name: "Claude Code & AI Agents", description: "Building Claude Code skills and agents that automate SEO audits, AI-visibility checks and reporting." },
      { name: "AEO / GEO Optimization", description: "Structuring content as clear, citable answers so it appears in featured snippets, voice search and AI responses." },
      { name: "Apps Script & Sheets Automation", description: "Creating Google Sheets and Apps Script tools, like dashboards and attendance apps, that run without a server." },
      { name: "Next.js & Vercel", description: "Building and deploying fast, SEO-friendly sites and web apps with Next.js and Vercel." },
      { name: "AI Video & Voice Pipelines", description: "Producing short explainer videos with scripted voice-overs, animated visuals and captions through automated pipelines." },
    ],
  },
];

const featuredTech = [
  {
    name: "SEMrush",
    favicon: "/favicons/semrush.png",
    icon: SiSemrush,
    description: "Keyword & Rank Tracking",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Google Search Console",
    favicon: "/favicons/gsc.png",
    icon: SiGoogle,
    description: "Search Performance",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Google Analytics 4",
    favicon: "/favicons/ga4.svg",
    icon: SiGoogleanalytics,
    description: "User Behavior",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Ahrefs",
    favicon: "/favicons/ahrefs.svg",
    icon: FaLink,
    description: "Backlink Analysis",
    color: "from-orange-500 to-rose-500",
  },
  {
    name: "Schema Markup",
    favicon: "/favicons/schema.png",
    icon: FaCode,
    description: "Structured Data",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Core Web Vitals",
    favicon: "/favicons/cwv.png",
    icon: SiLighthouse,
    description: "Performance Metrics",
    color: "from-red-500 to-orange-500",
  },
];

const aiTools = [
  {
    name: "ChatGPT",
    favicon: "/favicons/chatgpt.png",
    icon: SiOpenai,
    description: "Content generation, keyword clustering, and SEO strategy automation",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Gemini",
    favicon: "/favicons/gemini.png",
    icon: SiGooglegemini,
    description: "AI-assisted research, content planning, and SERP intent analysis",
    color: "from-blue-400 to-purple-500",
  },
  {
    name: "Claude",
    favicon: "/favicons/claude.ico",
    icon: SiAnthropic,
    description: "Long-form content creation and semantic optimizationI",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Emergent",
    favicon: "/favicons/emergent.png",
    icon: Sparkles,
    description: "Landing Pages & AI-powered workflow automation & code generation",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Blackbox AI",
    favicon: "/favicons/blackbox.ico",
    icon: Box,
    description: "Technical SEO implementation support",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "ComputerX",
    icon: Monitor,
    description: "AI-assisted analysis and productivity enhancement",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative min-h-[80vh] py-16 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

        {/* Soft glows */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm md:text-base font-medium mb-6">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Tools & Technologies
            <br />
            <span className="relative">
              I Master
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 blur-2xl"></span>
            </span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies, frameworks, and tools
            I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {featuredTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.15, delay: 0.1 + index * 0.025 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-200 group cursor-default"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl ${"favicon" in tech && tech.favicon ? "bg-white" : `bg-gradient-to-br ${tech.color}`} border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    {"favicon" in tech && tech.favicon ? (
                      <Image src={tech.favicon} alt={`${tech.name} logo`} width={36} height={36} className="w-9 h-9 object-contain" />
                    ) : (
                      <Icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h4 className="text-white font-bold text-sm md:text-base mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-white/60 text-xs">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* AI Tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
            AI & LLM Tools (SEO, AEO & GEO Optimization)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {aiTools.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.15, delay: 0.1 + index * 0.025 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-200 group cursor-default"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl ${"favicon" in tech && tech.favicon ? "bg-white" : `bg-gradient-to-br ${tech.color}`} border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    {"favicon" in tech && tech.favicon ? (
                      <Image src={tech.favicon} alt={`${tech.name} logo`} width={36} height={36} className="w-9 h-9 object-contain" />
                    ) : (
                      <Icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h4 className="text-white font-bold text-sm md:text-base mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-white/60 text-xs">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-6 md:space-y-8">
          {techCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: categoryIndex * 0.025 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Gradient border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.25,
                          delay: categoryIndex * 0.05 + techIndex * 0.025,
                        }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-200"
                      >
                        <h4 className="text-white font-semibold mb-1.5">
                          {tech.name}
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {tech.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden inline-block">
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

            <div className="relative z-10">
              <GitBranch className="w-12 h-12 text-white/70 mx-auto mb-4" />
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                Continuously learning and adapting to new technologies to stay
                at the forefront of web development. Always exploring the latest
                tools and best practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
