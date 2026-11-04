import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Projects - Kunalsinh Chavda",
  description:
    "Websites optimized for SEO and AI visibility, plus AI software and automations built by Kunalsinh Chavda",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}
