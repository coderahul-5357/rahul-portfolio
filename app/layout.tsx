import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Background } from "@/components/ui/Background";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Endla | Portfolio",
  description: "Senior Full Stack Developer & AI/ML Engineer building cloud-native platforms and intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-transparent text-foreground font-sans antialiased selection:bg-accent/30 selection:text-white flex flex-col relative overflow-x-hidden">
        <Background />
        {/* Glow effect at the top */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        {/* Noise overlay */}
        <div className="fixed inset-0 z-[-1] bg-[url('/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
        
        {children}
      </body>
    </html>
  );
}
