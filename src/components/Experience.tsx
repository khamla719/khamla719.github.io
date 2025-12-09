"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-gradient-animate">
            Where I've Been
          </h2>
          <div className="section-divider max-w-md mx-auto" />
        </motion.div>
        
        <div className="space-y-0">
          {personalData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="timeline-item group"
            >
              <div className="card-premium p-6 md:p-8 hover-lift">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber/10 rounded-xl text-amber group-hover:bg-amber group-hover:text-bg-dark transition-all duration-300 glow-amber">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-text-primary group-hover:text-amber transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 text-terracotta text-sm font-mono whitespace-nowrap">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg italic text-amber mb-6 pl-4 border-l-2 border-amber/50">
                  "{exp.description}"
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary group/item hover:text-text-primary transition-colors">
                      <ChevronRight className="w-5 h-5 text-amber shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
