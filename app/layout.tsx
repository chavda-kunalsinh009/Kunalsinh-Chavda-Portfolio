import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"; // 👈 add this
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Kunalsinh Chavda | SEO Engineer & Digital Marketing Specialist",
  description:
    "SEO Engineer with 2.6 years of proven experience - Specializing in organic growth, technical SEO, and digital marketing strategies",
  keywords: [
    "SEO Engineer",
    "SEO Specialist",
    "Digital Marketing",
    "Organic Growth",
    "Technical SEO",
    "Keyword Research",
    "Link Building",
    "Google Analytics",
  ],
  authors: [{ name: "Kunalsinh Chavada" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kunalsinh Chavda | SEO Engineer",
    description:
      "SEO Engineer with 2.6 years of proven experience in driving organic growth and improving search engine rankings",
    type: "website",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}",
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-black text-white`}
        suppressHydrationWarning
      >
        {children}
        <Analytics /> {/* 👈 add this */}
      </body>
    </html>
  );
}
