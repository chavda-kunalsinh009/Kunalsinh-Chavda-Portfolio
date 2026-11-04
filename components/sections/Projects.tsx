"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Globe, Bot } from "lucide-react";

const FaviconTile = ({ src, name }: { src: string; name: string }) => (
  <span className="shrink-0 w-10 h-10 rounded-lg bg-white border border-white/20 flex items-center justify-center p-1.5 overflow-hidden">
    <Image src={src} alt={`${name} favicon`} width={32} height={32} className="w-full h-full object-contain" />
  </span>
);

const websites: { name: string; favicon: string; url: string; industry: string; region: string }[] = [
  { name: "SG Computers", favicon: "/favicons/sgcomputers.png", url: "https://www.sgcomputers.com/", industry: "Managed IT & Cybersecurity", region: "Massachusetts, USA" },
  { name: "aMarketForce", favicon: "/favicons/amarketforce.png", url: "https://www.amarketforce.com/", industry: "B2B Lead Generation", region: "Global" },
  { name: "InsulinHub", favicon: "/favicons/insulinhub.png", url: "https://insulinhub.com/", industry: "Online Pharmacy / eCommerce", region: "USA" },
  { name: "Zolon Hardware", favicon: "/favicons/zolon.png", url: "https://zolonhardware.com/", industry: "Architectural Hardware & Railings", region: "Manufacturing" },
  { name: "Synergy West", favicon: "/favicons/synergywest.png", url: "https://synergywest.com.au/", industry: "NDIS Plan Management", region: "Albany, WA" },
  { name: "Access Foundation", favicon: "/favicons/accessfoundation.png", url: "https://www.accessfoundation.com.au/", industry: "NDIS Disability Services", region: "Perth, WA" },
  { name: "Admire Care", favicon: "/favicons/admirecare.ico", url: "https://www.admirecare.net.au/", industry: "NDIS Housing & Support", region: "Perth, WA" },
  { name: "AF Therapy Services", favicon: "/favicons/aftherapy.ico", url: "https://www.aftherapyservices.com.au/", industry: "NDIS Allied Health & Therapy", region: "Perth, WA" },
  { name: "A13 Community Care", favicon: "/favicons/a13.png", url: "https://www.a13communitycare.com.au/", industry: "NDIS Support Coordination", region: "Perth, WA" },
  { name: "SDA Homes WA", favicon: "/favicons/sdahomes.webp", url: "https://sdahomeswa.com.au/", industry: "Specialist Disability Accommodation", region: "Perth, WA" },
  { name: "Distil Management", favicon: "/favicons/distil.png", url: "https://www.distilmanagement.com.au/", industry: "NDIS Plan Management", region: "Western Australia" },
];

type AiProject = {
  name: string;
  favicon?: string;
  url?: string;
  description: string;
  tags: string[];
};

const aiProjects: AiProject[] = [
  {
    name: "Project Matrix",
    favicon: "/favicons/projectmatrix.png",
    url: "https://project-matrix-seven.vercel.app/",
    description:
      "Business and project management dashboard. Google Sheets as the database, Apps Script as the backend and a Vercel front end, with an admin panel.",
    tags: ["Google Sheets", "Apps Script", "Vercel"],
  },
  {
    name: "Attendance System",
    description:
      "Employee attendance app with PIN and GPS-radius check-in, late and half-day rules, an admin dashboard, leave management and monthly CSV reports.",
    tags: ["Apps Script", "Google Sheets", "GPS"],
  },
  {
    name: "Harvey - AI Sales Agent",
    description:
      "Cold-email sales agent set up for outbound: ICP research, personalised drafts powered by Claude, email verification and a human approval step before sending.",
    tags: ["Python", "Claude", "Automation"],
  },
  {
    name: "AI Visibility Skill Chain",
    description:
      "Claude Code skills that find AI-search visibility gaps, score opportunities, write briefs and answer blocks, and produce weekly AI-visibility digests.",
    tags: ["AEO", "GEO", "Claude Code"],
  },
  {
    name: "AI UNLOCKED",
    description:
      "Hinglish explainer Shorts and Reels series on AI, produced with an automated pipeline: scripts, voice-over, animated visuals and captions.",
    tags: ["YouTube", "Instagram", "HyperFrames"],
  },
  {
    name: "AI Video Generator",
    description:
      "Automated short-video generator that turns a script into a finished vertical video with subtitles, voice-over and background footage.",
    tags: ["MoneyPrinterTurbo", "Gemini", "Edge TTS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm md:text-base font-medium mb-6">
            PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Work I&apos;ve Done
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Websites I&apos;ve optimized for search and AI visibility, plus the AI software and automations I&apos;ve built.
          </p>
        </motion.div>

        {/* Websites */}
        <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
          <Globe className="w-6 h-6 text-blue-400" /> Websites Optimized
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {websites.map((site, i) => (
            <motion.a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: (i % 3) * 0.05 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <FaviconTile src={site.favicon} name={site.name} />
                <h4 className="text-lg font-bold text-white flex-1">{site.name}</h4>
                <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white shrink-0" />
              </div>
              <p className="text-white/80 text-sm mt-2">{site.industry}</p>
              <p className="text-purple-300 text-xs mt-1">{site.region}</p>
              <p className="text-white/50 text-xs mt-3">
                {site.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
              </p>
            </motion.a>
          ))}
        </div>

        {/* AI software */}
        <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
          <Bot className="w-6 h-6 text-purple-400" /> AI Software &amp; Automation
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {aiProjects.map((p, i) => {
            const cardClass =
              "block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-200";
            const anim = {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.2, delay: (i % 3) * 0.05 },
            };
            const body = (
              <>
                <div className="flex items-center gap-3 mb-2">
                  {p.favicon && <FaviconTile src={p.favicon} name={p.name} />}
                  <h4 className="text-lg font-bold text-white">{p.name}</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/80 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            );
            return p.url ? (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
                {...anim}
              >
                {body}
              </motion.a>
            ) : (
              <motion.div key={p.name} className={cardClass} {...anim}>
                {body}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
