import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Certifications from "@/components/sections/Certifications";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Certifications - Kunalsinh Chavda",
  description:
    "Digital marketing and AI certifications earned by Kunalsinh Chavda from HubSpot Academy, BrandVeda and Anthropic",
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Certifications />
      <Footer />
    </main>
  );
}
