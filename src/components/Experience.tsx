"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
        >
          Where I've Been
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card glass-panel hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="card-body">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="badge badge-ghost gap-2 py-3">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <h3 className="card-title text-2xl mb-1">{exp.role}</h3>
                <div className="flex items-center gap-2 text-base-content/70 mb-6">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium">{exp.company}</span>
                </div>

                <p className="italic text-base-content/70 mb-6 pl-4 border-l-2 border-primary/30">
                  "{exp.description}"
                </p>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-base-content/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {highlight}
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
