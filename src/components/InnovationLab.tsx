"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

// Mock data for case studies
const caseStudies = [
  {
    id: 1,
    title: "Interactive Data Dashboard",
    description: "A real-time analytics dashboard visualizing complex data sets through interactive charts and filtering capabilities.",
    tags: ["React", "D3.js", "WebSockets", "Node.js"],
    imageUrl: "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=Dashboard+Project",
  },
  {
    id: 2,
    title: "E-commerce Platform Redesign",
    description: "Complete UX/UI overhaul of an e-commerce platform, resulting in a 35% increase in conversion rates and improved user satisfaction.",
    tags: ["UX Design", "React", "GraphQL", "Stripe"],
    imageUrl: "https://placehold.co/600x400/10b981/FFFFFF/png?text=E-commerce+Project",
  },
  {
    id: 3,
    title: "Mobile Health Application",
    description: "Healthcare tracking application providing personalized insights and recommendations based on user data and behavioral patterns.",
    tags: ["React Native", "TypeScript", "Firebase", "Machine Learning"],
    imageUrl: "https://placehold.co/600x400/8b5cf6/FFFFFF/png?text=Health+App",
  },
  {
    id: 4,
    title: "Content Management System",
    description: "Custom CMS built for a media company that simplified workflow and reduced content publication time by 60%.",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    imageUrl: "https://placehold.co/600x400/ef4444/FFFFFF/png?text=CMS+Project",
  },
];

export default function InnovationLab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: activeIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <Section 
      id="innovation" 
      title="Innovation Lab"
      background="dark"
    >
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <p className="text-lg text-foreground/80">
          Explore a collection of projects where ideas meet execution. Each case study showcases the problem-solving process and technical expertise applied to create innovative solutions.
        </p>
      </div>

      <div className="relative">
        {/* Carousel navigation buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background/80 transition-colors"
          aria-label="Previous case study"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background/80 transition-colors"
          aria-label="Next case study"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="overflow-x-hidden"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="min-w-full p-4"
              >
                <motion.div 
                  className="bg-card rounded-xl overflow-hidden shadow-lg border border-border h-full flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="md:w-1/2 relative aspect-video md:aspect-auto">
                    <img 
                      src={study.imageUrl} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                    
                    <p className="text-foreground/80 mb-6">
                      {study.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-foreground/5 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="mt-auto self-start px-5 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                      View Case Study
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-foreground/20"
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6">Experiment Zone</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-6 border border-border h-full">
            <h4 className="text-xl font-bold mb-3">Interactive Technology Demos</h4>
            <p className="text-foreground/80 mb-4">
              Explore hands-on demos showcasing emerging technologies and experimental concepts.
            </p>
            
            <div className="aspect-video bg-foreground/5 rounded-lg flex items-center justify-center mb-4">
              <p className="text-foreground/50">Interactive Demo Placeholder</p>
            </div>
            
            <button className="px-5 py-2 bg-foreground/5 hover:bg-foreground/10 rounded-md border border-border transition-colors">
              Launch Demo
            </button>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border h-full">
            <h4 className="text-xl font-bold mb-3">Research & Development</h4>
            <p className="text-foreground/80 mb-4">
              Insights from ongoing R&D projects exploring new techniques and technologies.
            </p>
            
            <ul className="space-y-3 mb-4">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Exploring WebGL for immersive data visualization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Machine learning for personalized user experiences</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Progressive Web App performance optimizations</span>
              </li>
            </ul>
            
            <button className="px-5 py-2 bg-foreground/5 hover:bg-foreground/10 rounded-md border border-border transition-colors">
              View Research
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
} 