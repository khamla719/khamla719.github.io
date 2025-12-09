"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-amber/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-terracotta/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Section - Now on the left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/10 border border-amber/20 text-amber"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Open to opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.1] tracking-tight"
            >
              {personalData.about.greeting.split(" ")[0]}{" "}
              <span className="text-gradient-animate">
                {personalData.about.greeting.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-xl"
            >
              {personalData.about.summary}
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 w-24 bg-gradient-to-r from-amber to-terracotta rounded-full"
            />

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#experience" 
                className="btn-premium group inline-flex items-center justify-center gap-2"
              >
                See My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="btn-premium-outline group inline-flex items-center justify-center gap-2"
              >
                Let's Talk
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section - Now on the right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-amber/30 shadow-2xl glow-amber">
                <Image 
                  src="/profile.png" 
                  alt="Khamla Phimmachack" 
                  fill 
                  className="object-cover scale-110" 
                  priority 
                />
              </div>
              
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-amber/20 scale-110 animate-pulse" />
              
              {/* Floating Accent Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber to-terracotta rounded-2xl rotate-12 opacity-80 animate-float blur-sm -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-terracotta to-sage rounded-2xl -rotate-12 opacity-60 animate-float-slow blur-sm -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
