"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight"
        >
          The Backstory
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-3xl"
        >
          <div className="prose prose-lg mx-auto text-base-content/80">
            <p className="lead text-xl font-medium text-primary/90 mb-6">{personalData.about.longSummary}</p>
            <p>
                My journey started at Dev Bootcamp in San Francisco, but my real education happened in the trenches of support queues and server logs.
                I don't just close tickets; I solve problems. Whether it's a car that won't start or an API that won't authenticate, the process is the same: break it down, find the root cause, fix it, and explain it so it doesn't happen again.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
