"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";

// Dynamic headline variations
const headlines = ["Experiences", "Solutions", "Innovations", "Journeys"];

// More unique skills showcase
const skills = ["Problem Solver", "UI Architect", "Code Artisan", "UX Strategist", "Tech Explorer"];

// More engaging manifesto lines
const manifestoLines = [
  "Transforming complex problems into elegant solutions",
  "where innovation meets human-centered design",
  "creating digital experiences that resonate and inspire",
  "blending technology with intuitive interactions"
];

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const [showManifesto, setShowManifesto] = useState(false);
  const [manifestoIndex, setManifestoIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Set isBrowser to true once component mounts (client-side only)
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    if (!isBrowser) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isBrowser]);
  
  // Handle scroll for parallax effect
  useEffect(() => {
    if (!isBrowser) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBrowser]);
  
  // Handle the rotating skills text animation
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
  
  // Handle dynamic headline animation
  useEffect(() => {
    const headlineTimer = setInterval(() => {
      setHeadlineIndex(prev => (prev + 1) % headlines.length);
    }, 4000);
    
    return () => clearInterval(headlineTimer);
  }, []);
  
  // Handle the manifesto display
  useEffect(() => {
    // Show manifesto after a delay
    const showTimer = setTimeout(() => {
      setShowManifesto(true);
    }, 2000);
    
    // Cycle through manifesto lines
    let cycleTimer: NodeJS.Timeout;
    if (showManifesto) {
      cycleTimer = setInterval(() => {
        setManifestoIndex((prev) => (prev + 1) % manifestoLines.length);
      }, 3500);
    }
    
    return () => {
      clearTimeout(showTimer);
      if (cycleTimer) clearInterval(cycleTimer);
    };
  }, [showManifesto]);

  // Calculate background pattern position based on mouse movement - safely for SSR
  const patternX = useTransform(
    useMotionValue(mousePosition.x),
    [0, isBrowser ? window.innerWidth : 1000],
    [-10, 10]
  );
  const patternY = useTransform(
    useMotionValue(mousePosition.y),
    [0, isBrowser ? window.innerHeight : 800],
    [-10, 10]
  );
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Interactive background elements */}
      <div 
        className="absolute inset-0 bg-black z-0"
        style={{ 
          transform: `translateY(${scrollY * 0.05}px)` 
        }}
      >
        {/* Animated grid pattern that responds to mouse movement */}
        <motion.div 
          className="absolute inset-0 opacity-[0.04] bg-grid-pattern"
          style={{ 
            x: patternX,
            y: patternY
          }}
        />
        
        {/* Futuristic diagonal lines */}
        <div className="absolute top-0 right-0 w-1/2 h-screen opacity-[0.03] bg-diagonal-pattern rotate-12 origin-top-right" />
        <div className="absolute bottom-0 left-0 w-1/3 h-screen opacity-[0.03] bg-dot-pattern" />
        
        {/* Subtle animated light trails */}
        <div className="absolute top-1/4 left-1/4 w-[2px] h-[150px] bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 rotate-45 blur-[2px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[2px] h-[200px] bg-gradient-to-b from-secondary/0 via-secondary/20 to-secondary/0 -rotate-45 blur-[2px]" />
      </div>
      
      {/* Asymmetrical abstract shapes with neon glow */}
      <motion.div 
        className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          boxShadow: '0 0 120px rgba(59, 130, 246, 0.08)' 
        }}
      />
      
      <motion.div 
        className="absolute top-2/3 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.05, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ 
          transform: `translateY(${scrollY * -0.08}px)`,
          boxShadow: '0 0 120px rgba(139, 92, 246, 0.08)' 
        }}
      />

      {/* Main content with asymmetrical layout */}
      <div className="container mx-auto relative z-10 min-h-screen pt-36 md:pt-24">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Main headline */}
          <div className="md:w-7/12 px-6 md:px-10 md:pr-0 flex items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 md:mb-12 relative"
              >
                <span className="block text-white/40 text-sm md:text-base tracking-widest uppercase font-mono mb-3 pl-1">
                  — Digital Craftsman
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white relative z-10 leading-tight">
                  Crafting 
                  <div className="overflow-hidden h-[1.1em] mt-2 md:mt-3 relative">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={headlineIndex}
                        className="block absolute w-full"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white">
                          {headlines[headlineIndex]}
                        </span>
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </h1>
                <div className="absolute top-full left-0 w-16 h-[2px] bg-primary mt-4 glow-sm" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl md:text-2xl font-medium mb-12 text-white/80 relative ml-1"
              >
                Turning visions into reality as a <span ref={textRef} className="text-primary font-semibold">Problem Solver</span>
              </motion.h2>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.a 
                  href="#innovation" 
                  className="px-8 py-3 bg-transparent text-white rounded-sm transition-all relative overflow-hidden group shadow-glow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-20"></span>
                  <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300 font-medium">Explore My Creations</span>
                </motion.a>
                <motion.a 
                  href="#connect" 
                  className="px-8 py-3 bg-transparent hover:bg-white/5 rounded-sm border border-white/20 text-white transition-all hover:-translate-y-1 hover:shadow-md text-sm tracking-wide hover:border-primary/50 hover:shadow-glow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium">Start a Conversation</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
          
          {/* Right side - Manifesto */}
          <AnimatePresence>
            {showManifesto && (
              <motion.div 
                className="mt-8 md:mt-0 md:w-5/12 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 px-6 md:px-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                drag
                dragConstraints={{
                  top: -10,
                  left: -10,
                  right: 10,
                  bottom: 10,
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
                }}
                whileDrag={{ scale: 1.05 }}
              >
                <div className="relative cursor-grab active:cursor-grabbing">
                  {/* Decorative element */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 hidden md:block">
                    <div className="relative w-full h-full">
                      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/50 shadow-glow-xs"></div>
                      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary/50 shadow-glow-xs"></div>
                      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary/50 shadow-glow-xs"></div>
                      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/50 shadow-glow-xs"></div>
                    </div>
                  </div>
                  
                  {/* Glass card with manifesto */}
                  <motion.div 
                    className="glass-morphism overflow-hidden rounded-sm border border-white/10 shadow-2xl shadow-black/30"
                    whileHover={{ borderColor: "rgba(59, 130, 246, 0.2)" }}
                  >
                    {/* Abstract shapes inside the glass card */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Abstract geometric shapes */}
                      <motion.div
                        className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/5"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 45, 0],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "mirror",
                        }}
                      />
                      
                      <motion.div
                        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent/5"
                        animate={{
                          scale: [1, 1.3, 1],
                          rotate: [0, -45, 0],
                        }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          repeatType: "mirror",
                        }}
                      />
                      
                      <motion.div
                        className="absolute top-1/4 left-1/3 w-20 h-20 bg-secondary/5 rotate-45"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [45, 90, 45],
                          opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          repeatType: "mirror",
                        }}
                      />
                    </div>
                    
                    {/* Subtle animated glow border effect */}
                    <div className="absolute inset-0 opacity-20 border border-primary/30 rounded-sm overflow-hidden">
                      <div className="absolute inset-0 w-full h-full">
                        <motion.div 
                          className="absolute top-0 -right-[150%] w-[50%] h-[100%] bg-gradient-to-r from-transparent via-white to-transparent skew-x-[45deg]"
                          animate={{
                            right: ["150%", "-150%"]
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 4
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Manifesto content */}
                    <div className="relative z-10 p-6 md:p-8 lg:p-10">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                      >
                        <div className="inline-flex items-center">
                          <div className="w-5 h-px bg-primary mr-3 shadow-glow-xs"></div>
                          <span className="text-sm font-mono uppercase tracking-widest text-primary shadow-text-glow">
                            Personal Manifesto
                          </span>
                        </div>
                      </motion.div>
                      
                      <div className="h-24 flex items-center overflow-hidden">
                        <AnimatePresence mode="wait">
                          {/* Vertical scrolling animation for manifesto text */}
                          <motion.p
                            key={manifestoIndex}
                            className="text-xl md:text-2xl text-white/90 font-light w-full"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            {manifestoLines[manifestoIndex]}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Scroll indicator repositioned */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div 
            className="animate-bounce"
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/40 hover:text-primary transition-colors duration-300"
            >
              <path 
                d="M12 4V20M12 20L18 14M12 20L6 14" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 