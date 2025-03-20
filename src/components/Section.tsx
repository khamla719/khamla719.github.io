"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  background?: "light" | "dark" | "gradient" | "none";
}

export default function Section({
  id,
  title,
  className = "",
  children,
  fullWidth = false,
  background = "none",
}: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getBackgroundClasses = () => {
    switch (background) {
      case "light":
        return "bg-card text-card-foreground";
      case "dark":
        return "bg-foreground/5 text-foreground";
      case "gradient":
        return "bg-gradient-to-tr from-primary/10 via-background to-secondary/10";
      default:
        return "";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${getBackgroundClasses()} ${className}`}
    >
      <motion.div
        ref={ref}
        className={`${fullWidth ? "w-full" : "container mx-auto"}`}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {title && (
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 relative"
            variants={itemVariants}
          >
            {title}
            <span className="absolute -bottom-3 left-0 w-16 h-1 bg-primary"></span>
          </motion.h2>
        )}
        
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
} 