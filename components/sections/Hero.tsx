"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-accent/20 text-accent text-sm font-medium"
        >
          M.Tech AI/ML @ M.S. Ramaiah University
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-white"
        >
          Hi, I'm <span className="text-gradient-accent">Rahul Endla</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl font-light"
        >
          Senior Full Stack Developer & AI/ML Engineer building cloud-native platforms and intelligent systems.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <Button asChild size="lg" className="rounded-full w-full sm:w-auto group">
            <a href="#projects">
              View Projects 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-6 items-center text-gray-400"
        >
          <a href="https://github.com/coderahul-5357" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/rahulendla" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
