"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const skills = ["Developer", "Designer", "Innovator", "Creator", "Thinker"];

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!textRef.current) return;
    
    let currentIndex = 0;
    
    const changeText = () => {
      if (!textRef.current) return;
      
      const tl = gsap.timeline();
      tl.to(textRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        onComplete: () => {
          if (!textRef.current) return;
          currentIndex = (currentIndex + 1) % skills.length;
          textRef.current.textContent = skills[currentIndex];
        }
      }).to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5
      });
    };
    
    const interval = setInterval(changeText, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0">
        {/* Animated grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      </div>
      
      {/* Abstract shapes */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
        animate={{
          x: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Crafting Experiences,
            <br />
            Solving Problems
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-foreground/80">
            I'm a passionate <span ref={textRef} className="text-primary transition-colors">Developer</span>
          </h2>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#innovation" 
              className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              View My Work
            </a>
            <a 
              href="#connect" 
              className="px-8 py-3 bg-foreground/5 hover:bg-foreground/10 rounded-md border border-border transition-colors"
            >
              Let's Connect
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="animate-bounce">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto text-foreground/50"
              >
                <path 
                  d="M12 4V20M12 20L18 14M12 20L6 14" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 