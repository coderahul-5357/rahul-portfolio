"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Full Stack Developer & AI/ML Engineer",
    company: "Arhitha Agrobot Pvt Ltd, Bengaluru",
    period: "Current",
    isCurrent: true,
  },
  {
    role: "Java Full Stack Intern",
    company: "Coding Ninjas",
    period: "Past",
    isCurrent: false,
  },
  {
    role: "Full Stack Intern",
    company: "StartupKT Business Solutions",
    period: "Past",
    isCurrent: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${exp.isCurrent ? "bg-accent shadow-[0_0_10px_#6c63ff]" : "bg-gray-500"}`}></div>
              <div className="glass p-6 rounded-2xl relative">
                <span className={`text-sm font-semibold mb-2 inline-block ${exp.isCurrent ? "text-accent" : "text-gray-500"}`}>
                  {exp.period}
                </span>
                <h3 className="text-xl font-heading font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-gray-400">{exp.company}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
