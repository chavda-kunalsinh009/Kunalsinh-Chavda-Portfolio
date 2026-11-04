"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  logo: string;
  image?: string;
  date?: string;
  note?: string;
  description: string;
  verifyUrl?: string;
};

const aiCerts: Cert[] = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    logo: "/favicons/anthropic.png",
    image: "/certificates/ai-fluency-framework-foundations.webp",
    description:
      "Anthropic's foundational course on AI fluency, developed with University College Cork, Ringling College of Art + Design, the Higher Education Authority and the National Forum.",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    logo: "/favicons/anthropic.png",
    image: "/certificates/claude-101.webp",
    description:
      "Anthropic's official introductory course on Claude: the fundamentals of how Claude works and how to use it.",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    logo: "/favicons/anthropic.png",
    image: "/certificates/claude-code-101.webp",
    description:
      "Anthropic's official course on Claude Code, the agentic coding tool that lets developers delegate coding tasks.",
  },
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    logo: "/favicons/anthropic.png",
    image: "/certificates/claude-cowork-intro.webp",
    description:
      "Anthropic's official course on Claude Cowork, an agentic knowledge-work desktop application for non-developers.",
  },
  {
    title: "AI Fluency for Builders",
    issuer: "Anthropic x CodePath",
    logo: "/favicons/anthropic.png",
    image: "/certificates/ai-fluency-builders.webp",
    description:
      "Anthropic's course on AI fluency for builders, developed in partnership with CodePath.",
  },
  {
    title: "AI Fluency for Creative Work",
    issuer: "Anthropic x UCC x Ringling",
    logo: "/favicons/anthropic.png",
    image: "/certificates/ai-fluency-creative-work.webp",
    description:
      "Anthropic's course on AI fluency for creative work, developed with University College Cork and Ringling College of Art + Design.",
  },
  {
    title: "AI Fluency for Small Businesses",
    issuer: "Anthropic x PayPal",
    logo: "/favicons/anthropic.png",
    image: "/certificates/ai-fluency-small-businesses.webp",
    description:
      "Anthropic's course on AI fluency for small businesses, developed in partnership with PayPal.",
  },
  {
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic x GivingTuesday",
    logo: "/favicons/anthropic.png",
    image: "/certificates/ai-fluency-nonprofits.webp",
    description:
      "Anthropic's course on AI fluency for nonprofits, developed in partnership with GivingTuesday.",
  },
];

const marketingCerts: Cert[] = [
  {
    title: "Digital Marketing Certification",
    issuer: "HubSpot Academy",
    logo: "/favicons/hubspot.png",
    description:
      "Ten-module certification covering digital marketing fundamentals, content marketing and SEO, ads and social media, email, website strategy, consumer psychology, AI in digital marketing and ethical marketing.",
    verifyUrl:
      "https://app-na2.hubspot.com/academy/achievements/l5x94wgv/en/1/kunalsinh-chavda/digital-marketing",
  },
  {
    title: "SEO Specialist Program",
    issuer: "BrandVeda Digital Marketing Institute",
    logo: "/favicons/brandveda.png",
    image: "/certificates/brandveda-seo.webp",
    date: "31 Jul 2024",
    note: "With distinction",
    description:
      "Completed the SEO Specialist Program at BrandVeda with distinction.",
  },
  {
    title: "PPC Specialist Program",
    issuer: "BrandVeda Digital Marketing Institute",
    logo: "/favicons/brandveda.png",
    image: "/certificates/brandveda-ppc.webp",
    date: "31 Jul 2024",
    note: "With distinction",
    description:
      "Completed the PPC Specialist Program at BrandVeda with distinction.",
  },
  {
    title: "Social Media Marketing Specialist Program",
    issuer: "BrandVeda Digital Marketing Institute",
    logo: "/favicons/brandveda.png",
    image: "/certificates/brandveda-smm.webp",
    date: "31 Jul 2024",
    note: "With distinction",
    description:
      "Completed the Social Media Marketing Specialist Program at BrandVeda with distinction.",
  },
];

function CertCard({ cert, index }: { cert: Cert; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: (index % 3) * 0.05 }}
      className="flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-200"
    >
      {cert.image ? (
        <a
          href={cert.image}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${cert.title} certificate`}
          className="block border-b border-white/10 bg-white"
        >
          <Image
            src={cert.image}
            alt={`${cert.title} certificate`}
            width={900}
            height={680}
            className="w-full h-auto"
          />
        </a>
      ) : (
        <div className="flex items-center justify-center aspect-[4/3] border-b border-white/10 bg-gradient-to-br from-orange-500/20 to-purple-500/20">
          <div className="text-center px-6">
            <span className="inline-flex w-16 h-16 rounded-2xl bg-white items-center justify-center p-2 mb-3">
              <Image src={cert.logo} alt={`${cert.issuer} logo`} width={48} height={48} className="w-full h-full object-contain" />
            </span>
            <p className="text-white font-bold">HubSpot Academy</p>
            <p className="text-white/70 text-sm">Certificate of completion</p>
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="shrink-0 w-9 h-9 rounded-lg bg-white border border-white/20 flex items-center justify-center p-1 overflow-hidden">
            <Image src={cert.logo} alt="" width={28} height={28} className="w-full h-full object-contain" />
          </span>
          <p className="text-white/70 text-sm leading-snug">{cert.issuer}</p>
        </div>
        <h4 className="text-white font-bold text-lg leading-snug mb-2">{cert.title}</h4>
        <p className="text-white/70 text-sm leading-relaxed mb-4">{cert.description}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2">
          {cert.date && (
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/80 text-xs">
              {cert.date}
            </span>
          )}
          {cert.note && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/80 text-xs">
              <BadgeCheck className="w-3.5 h-3.5" /> {cert.note}
            </span>
          )}
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/90 text-xs hover:bg-white/10"
            >
              Verify credential <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
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
            CERTIFICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Learning &amp; Credentials
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Certificates in digital marketing and in working with AI, from HubSpot Academy, BrandVeda and Anthropic.
          </p>
        </motion.div>

        <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
          <Award className="w-6 h-6 text-blue-400" /> Digital Marketing
        </h3>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 mb-16">
          {marketingCerts.map((c, i) => (
            <CertCard key={c.title} cert={c} index={i} />
          ))}
        </div>

        <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
          <Award className="w-6 h-6 text-purple-400" /> AI Fluency &amp; Claude (Anthropic)
        </h3>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {aiCerts.map((c, i) => (
            <CertCard key={c.title} cert={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
