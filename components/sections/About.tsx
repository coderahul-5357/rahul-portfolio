"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-white">Education</h3>
                  <p className="text-sm text-gray-400">
                    M.Tech AI/ML @ M.S. Ramaiah University (CGPA 9.0)<br/>
                    B.Tech CSE IoT @ Jain University
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-white">Current Role</h3>
                  <p className="text-sm text-gray-400">
                    Senior Full Stack Dev at Arhitha Agrobot Pvt Ltd, Bengaluru. Building intelligent systems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full border-accent/20 bg-accent/5">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-white">Research Highlight</h3>
                  <p className="text-sm text-gray-400">
                    Research paper on Cardiovascular Analysis submitted to Springer Nature.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
