"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Palette,
  Rocket,
  Target,
  Award,
  Users,
  Zap,
  Globe,
  MessageSquareText,
  Sparkles,
  Bot,
  MousePointerClick,
  Network,
  Cpu,
} from "lucide-react";

const skills = [
  {
    name: "On-Page SEO",
    icon: Code,
    description:
      "Optimising titles, headings, content and internal links so every page matches what people actually search for.",
  },
  {
    name: "Technical SEO",
    icon: Rocket,
    description:
      "Fixing crawlability, indexing, site speed and Core Web Vitals issues that quietly hold rankings back.",
  },
  {
    name: "AEO - Answer Engine Optimization",
    icon: MessageSquareText,
    description:
      "Writing clear, direct answers and FAQ-style content that wins featured snippets, voice search and AI answers.",
  },
  {
    name: "GEO - Generative Engine Optimization",
    icon: Sparkles,
    description:
      "Making brands easy for ChatGPT, Gemini and Perplexity to understand and cite, through entities, structure and trusted sources.",
  },
  {
    name: "AIO - AI Overviews Optimization",
    icon: Bot,
    description:
      "Shaping pages with concise answer blocks and strong E-E-A-T signals to earn a place in Google AI Overviews.",
  },
  {
    name: "SXO - Search Experience Optimization",
    icon: MousePointerClick,
    description:
      "Matching page type, intent and user experience to the search results so visitors stay and convert, not just click.",
  },
  {
    name: "Entity & Schema SEO",
    icon: Network,
    description:
      "Adding JSON-LD structured data and consistent brand signals so search engines and AI know exactly who you are.",
  },
  {
    name: "Content Strategy",
    icon: Palette,
    description:
      "Keyword research, topic clusters and content briefs built to rank on Google and get quoted by AI.",
  },
  {
    name: "Link Building",
    icon: Target,
    description:
      "White-hat outreach, citations and brand mentions that build real authority without risky shortcuts.",
  },
  {
    name: "AI-Driven SEO Workflows",
    icon: Cpu,
    description:
      "Using AI tools and Claude-based workflows to speed up audits, SERP analysis, content optimisation and reporting.",
  },
];

const achievements = [
  { icon: Award, number: "30+", label: "Websites Optimized Globally" },
  { icon: Users, number: "28+", label: "Happy Clients" },
  { icon: Zap, number: "2.6+", label: "Years Experience" },
  { icon: Globe, number: "100%", label: "Client Satisfaction" },
];

const technologies = [
  "Google Analytics 4",
  "Google Search Console",
  "SEMrush",
  "Ahrefs",
  "Screaming Frog",
  "Yoast SEO",
  "Rank Tracker",
  "Canonical Tags",
  "Schema Markup",
  "Keyword Research",
  "Ubersuggest",
  "ChatGPT (Atlas)",
  "Emergent",
  "Blackbox AI",
  "ComputerX",
  "Google Tag Manager",
  "Microsoft Clarity",
  "Google My Business",
  "llms.txt",
  "robots.txt",
  "sitemap.xml",
  "Indexification & Crawling",
  "Google PageSpeed Insights",
  "GTmetrix",
  "Bing Webmaster Tools",
  "Schema Markup Validator",
  "Robots.txt Tester",
  "Core Web Vitals",
  "Mobile-First Indexing",
  "On-Page SEO",
  "Technical SEO",
  "SEO Auditing",
  "Content Optimization",
  "Link Building",
  "AEO",
  "GEO",
  "AIO",
  "SXO",
  "Gemini",
  "Claude",
  "Claude Code",
  "Claude Cowork",
  "ElevenLabs",
  "HyperFrames",
  "Data Analysis",
  "Conversion Optimization",
  "Reporting & Dashboards",
  "HTML/CSS",
  "JavaScript",
  "Website Architecture",
  "Google Apps Script",
  "Google Sheets",
  "Next.js",
  "Vercel"
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-[85vh] py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

        {/* Soft glows */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Boosting Online
            <br />
            <span className="relative">
              Visibility
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-blue-400/30 blur-2xl"></span>
            </span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Dedicated SEO Engineer specializing in driving organic traffic and improving
            search engine rankings through data-driven strategies and technical excellence.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-gradient-to-br from-purple-500/40 to-blue-500/40">
                    <Image
                      src="/kunal-cutout.webp"
                      alt="Kunalsinh Chavda, SEO Engineer"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Who I Am
                  </h3>
                </div>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    I&apos;m an SEO Engineer with 2.6 years of experience helping 28+ clients grow organic traffic and visibility across 30+ websites. I pair technical SEO and on-page optimization with <b>AEO, GEO, AIO and SXO</b>, so brands rank on Google and also get cited in AI answers from ChatGPT, Gemini and Google AI Overviews.
                  </p>
                  <p>
                    My work starts with data. I use Google Search Console, GA4, SEMrush, Ahrefs and Screaming Frog to find what is holding a site back, then fix it in order of impact: crawlability and speed, structured data, intent-matched content and trusted links.
                  </p>
                  <p>
                    I also build <b>AI-assisted workflows</b> with Claude Code and automation to speed up audits, SERP analysis and reporting, and I keep up with algorithm updates and AI search changes. Every strategy is white-hat and tied to measurable business results.
                  </p>
                  <p>
                    I&apos;ve worked with clients in Australia and the USA across very different industries, including <b>NDIS and disability services</b>, managed IT and cybersecurity, B2B lead generation, online pharmacy eCommerce and architectural hardware. That range has taught me that good SEO starts with understanding the customer, their search intent and how they decide, not with a template.
                  </p>
                  <p>
                    I keep learning alongside client work, with certifications from <b>HubSpot Academy</b>, <b>BrandVeda</b> (SEO, PPC and Social Media Marketing) and <b>Anthropic</b> (AI Fluency, Claude and Claude Code).
                  </p>
                  <p>
                    Outside client work I build practical tools, such as Project Matrix (a Google Sheets business dashboard), an attendance app and an AI sales-email agent, and I run <b>AI UNLOCKED</b>, a Hinglish series that explains AI in simple words. I enjoy turning ideas into working systems, and that shapes how I approach every SEO problem: find the cause, test a fix, measure the result.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Core Skills
                </h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        className="flex gap-4"
                      >
                        <span className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-white/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </span>
                        <div>
                          <h4 className="text-white font-semibold leading-snug">
                            {skill.name}
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed mt-1">
                            {skill.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: 0.2 + index * 0.025 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/70 text-sm">{achievement.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Gradient border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.25 + index * 0.015 }}
                  className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-default"
                >
                  <span className="text-sm md:text-base font-medium">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
