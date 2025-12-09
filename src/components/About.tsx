"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-gradient-animate">
            The Backstory
          </h2>
          <div className="section-divider max-w-md mx-auto" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card-premium p-8 md:p-16 hover-lift"
        >
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-amber font-medium text-2xl mb-8">
              {personalData.about.longSummary}
            </p>
            <p className="text-text-secondary">
              Started at Dev Bootcamp in San Francisco. Learned the real work in support queues and server logs.
              I don't just close tickets; I solve problems. Conflicting alerts from an electric vehicle, an API that won't authenticate—same process: break it down, find the root cause, fix it, explain it so it doesn't happen again.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
