"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const featuredProject = personalData.projects[0];
  const otherProjects = personalData.projects.slice(1);

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-gradient-animate">
            What I've Built
          </h2>
          <div className="section-divider max-w-md mx-auto" />
        </motion.div>
        
        {/* Featured Project - Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-12"
        >
          <div className="card-premium overflow-hidden hover-lift group">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              {featuredProject.image && (
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-terracotta/20 mix-blend-overlay z-10" />
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sm text-amber mb-4 font-mono">
                  <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
                  Featured Project
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-text-primary group-hover:text-amber transition-colors">
                  {featuredProject.title}
                </h3>
                
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="skill-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {featuredProject.live && featuredProject.live !== "#" && (
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors group/link font-semibold"
                  >
                    View Live Project
                    <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects - Bento Grid */}
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium overflow-hidden hover-lift group"
              >
                {/* Image */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-sage/20 mix-blend-overlay z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-serif font-bold text-text-primary group-hover:text-amber transition-colors">
                      {project.title}
                    </h3>
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-amber/10 text-amber hover:bg-amber hover:text-bg-dark transition-all"
                        aria-label="View live site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-3 py-1 rounded-md bg-surface border border-amber/20 text-amber"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
