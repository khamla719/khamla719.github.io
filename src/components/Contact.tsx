"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Dramatic Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber/20 via-terracotta/15 to-sage/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Animated Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber via-terracotta to-amber rounded-[3rem] opacity-20 blur-xl animate-gradient" />
          
          {/* Main Card */}
          <div className="relative card-premium p-10 md:p-16 lg:p-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/10 border border-amber/20 text-amber mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Available for opportunities</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gradient-animate"
            >
              Let's Solve Something Together
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Have a complex problem that needs fixing? Or just want to talk about electric cars and AI tools?
              I'm always open to new opportunities and interesting conversations.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href={`mailto:${personalData.email}`} 
                className="btn-premium group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px]"
              >
                <Mail className="w-5 h-5" />
                Say Hello
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/khamlaphimmachack/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-outline group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px]"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </motion.div>

            {/* Direct Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-amber/20"
            >
              <p className="text-text-muted text-sm mb-2">Or reach me directly at</p>
              <a 
                href={`mailto:${personalData.email}`}
                className="text-amber hover:text-amber-light transition-colors font-mono text-lg"
              >
                {personalData.email}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
