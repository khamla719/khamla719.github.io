"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";
import { Code2, Database, Wrench, CheckCircle2 } from "lucide-react";

const getIconForCategory = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes("frontend") || lower.includes("web")) return <Code2 className="w-6 h-6" />;
  if (lower.includes("backend") || lower.includes("data")) return <Database className="w-6 h-6" />;
  return <Wrench className="w-6 h-6" />;
};

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
        >
          The Toolkit
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card glass-panel border-t-4 border-t-primary"
            >
              <div className="card-body">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-base-content/10">
                  <div className="text-primary">
                    {getIconForCategory(skillGroup.category)}
                  </div>
                  <h3 className="card-title text-xl">{skillGroup.category}</h3>
                </div>
                
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {skillGroup.items.map((skill, i) => (
                    <motion.div 
                      key={i} 
                      variants={item}
                      className="badge badge-lg bg-base-100/50 border-base-content/10 p-4 gap-2 hover:border-primary hover:text-primary transition-colors duration-300 cursor-default shadow-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 opacity-50" />
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
