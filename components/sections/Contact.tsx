"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    const json = Object.fromEntries(data.entries());

    try {
      const response = await fetch("https://formspree.io/f/xbdvjzld", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(json),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Formspree Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-4 rounded-2xl glass text-accent">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-1">Email</h3>
                <a href="mailto:mr.endlarahul@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                  mr.endlarahul@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 rounded-2xl glass text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-400">Bengaluru, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </Button>
              {status === "error" && (
                <p className="text-red-500 text-sm mt-2 text-center">Oops! There was a problem submitting your form.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
