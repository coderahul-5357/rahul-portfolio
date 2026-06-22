"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Hono.js", "NestJS", "FastAPI", "Python"],
  },
  {
    title: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "RAG", "GenAI", "LangChain"],
  },
  {
    title: "Cloud & Infra",
    skills: ["Cloudflare Workers", "Docker", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Wrangler", "n8n", "Firebase"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="font-heading text-xl font-semibold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
