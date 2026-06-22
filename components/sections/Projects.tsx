"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "KrishiVeda Platform",
    description: "Cloud-native agri platform providing advanced farming solutions.",
    tags: ["Hono.js", "React", "Prisma", "Cloudflare Workers", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "KrishiVeda Mobile App",
    description: "React Native/Expo app with Google OAuth and deep linking capabilities.",
    tags: ["React Native", "Expo", "OAuth"],
    github: "#",
  },
  {
    title: "Analytics Depot",
    description: "AI-powered analytics platform utilizing Retrieval-Augmented Generation.",
    tags: ["FastAPI", "Celery", "Redis", "Next.js", "RAG"],
    github: "#",
    live: "#",
  },
  {
    title: "Arhitha Agro Platform",
    description: "Full RBAC platform with JWT authentication and Dockerized deployments.",
    tags: ["NestJS", "Next.js 15", "Prisma", "Docker"],
    github: "#",
  },
  {
    title: "LSTM Neural Machine Translation",
    description: "Deep learning NMT model built from scratch for sequence-to-sequence translation.",
    tags: ["PyTorch", "Deep Learning", "LSTM"],
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-white/10 hover:border-accent/50 transition-colors duration-500">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs bg-white/5 border-white/10 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4 pt-4 border-t border-white/5">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                      <FaGithub className="w-4 h-4 mr-2" /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center text-sm text-accent hover:text-accent/80 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
