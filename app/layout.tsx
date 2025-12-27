import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Optimizing fonts for performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arnavsaraf.dev"),
  title: {
    default: "Arnav Saraf | Senior Software Engineer",
    template: "%s | Arnav Saraf",
  },
  description: 
    "Senior Software Engineer with 7+ years of experience building scalable backend systems, data pipelines, and microservices using Java, Kotlin, Spring Boot, and Apache Beam across GCP, AWS, and Azure.",
  keywords: [
    "Arnav Saraf",
    "Senior Software Engineer",
    "Backend Engineer",
    "Java Developer",
    "Kotlin Developer",
    "Cloud Architecture",
    "Data Pipelines",
    "Bengaluru Tech",
    "Apache Beam",
    "Spring Boot Specialist",
  ],
  authors: [{ name: "Arnav Saraf" }],
  creator: "Arnav Saraf",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arnavsaraf.dev/",
    title: "Arnav Saraf | Senior Software Engineer",
    description: "Specializing in high-throughput backend systems and cloud-native architectures.",
    siteName: "Arnav Saraf Portfolio",
    images: [
      {
        url: "/og-image.png", // Recommended: Create a 1200x630 image and place it in /public
        width: 1200,
        height: 630,
        alt: "Arnav Saraf - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Saraf | Senior Software Engineer",
    description: "Architecting scalable data pipelines and distributed systems.",
    images: ["/og-image.png"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased min-h-screen flex flex-col`}>
        <Navbar />
        {/* Main wrapper to ensure footer stays at bottom */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}