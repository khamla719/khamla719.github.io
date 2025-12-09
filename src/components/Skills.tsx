"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";
import { Code2, Database, Wrench, Sparkles } from "lucide-react";

const getIconForCategory = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes("languages") || lower.includes("core")) return <Code2 className="w-6 h-6" />;
  if (lower.includes("tools") || lower.includes("platforms")) return <Wrench className="w-6 h-6" />;
  if (lower.includes("systems") || lower.includes("knowledge")) return <Database className="w-6 h-6" />;
  return <Sparkles className="w-6 h-6" />;
};

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <section id="skills" className="py-32 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber/5 to-transparent -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-gradient-animate">
            The Toolkit
          </h2>
          <div className="section-divider max-w-md mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {personalData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-premium p-6 md:p-8 hover-lift group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-amber/20">
                <div className="p-3 bg-amber/10 rounded-xl text-amber group-hover:bg-amber group-hover:text-bg-dark transition-all duration-300 glow-amber">
                  {getIconForCategory(skillGroup.category)}
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-text-primary">
                  {skillGroup.category}
                </h3>
              </div>
              
              {/* Skills Grid */}
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skillGroup.items.map((skill, i) => (
                  <motion.span
                    key={i} 
                    variants={item}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
