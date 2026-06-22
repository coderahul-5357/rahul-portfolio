"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Research() {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Research & Publications</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/10 hover:border-accent/30 transition-colors duration-500"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <BookOpen size={200} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
              Status: Technical Review Stage (Springer Nature)
            </span>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Hybrid Spatial-Temporal-Frequency Architecture for Cardiovascular Analysis
            </h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Co-authored with Dr. Subarna Chatterjee, M.S. Ramaiah University.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-2" /> Architecture
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• EfficientNet-B3</li>
                  <li>• BiLSTM</li>
                  <li>• Multi-Head Attention</li>
                  <li>• Transformer & U-Net</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-2" /> Metrics & Data
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Datasets: EchoNet-Dynamic, CAMUS</li>
                  <li>• AUC: 0.929</li>
                  <li>• Accuracy: 91.2%</li>
                </ul>
              </div>
            </div>

            <Button asChild>
              <a href="#contact">View Abstract</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
