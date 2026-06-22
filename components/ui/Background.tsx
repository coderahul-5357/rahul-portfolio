"use client";
import { motion } from "framer-motion";
import React from "react";

export function Background() {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none bg-[#0a0a0a]">
      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[#6c63ff]/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6c63ff]/5 rounded-full blur-[150px]"
      />
    </div>
  );
}
