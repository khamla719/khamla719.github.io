"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero min-h-screen relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-20 max-w-7xl mx-auto px-4">
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-2xl lg:max-w-none flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            className="will-change-transform"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              {personalData.about.greeting}
            </h1>
            <p className="text-xl lg:text-2xl text-base-content/80 mb-8 leading-relaxed">
              {personalData.about.summary}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start will-change-transform"
          >
            <a href="#experience" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-primary/50 transition-all duration-300 group">
              See My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn btn-ghost btn-lg rounded-full px-8 border border-base-content/10 hover:bg-base-content/5">
              Let's Talk
              <MessageCircle className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          className="relative w-full max-w-md lg:max-w-none flex-1 will-change-transform"
        >
          <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <Image 
              src="/profile.png" 
              alt="Khamla Phimmachack" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
          {/* Decorative backdrop */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
