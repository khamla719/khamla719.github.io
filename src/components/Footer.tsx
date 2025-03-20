"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

// Simple SVG social icons
const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "github":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case "twitter":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              <span className="text-primary">P</span>ortfolio
            </Link>
            <p className="mt-4 text-foreground/80 max-w-md">
              Crafting digital experiences that blend innovation with purpose, creating meaningful solutions for the modern web.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-foreground/80 hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="text-foreground/80 hover:text-primary transition-colors">
                  Innovation Lab
                </Link>
              </li>
              <li>
                <Link href="/connect" className="text-foreground/80 hover:text-primary transition-colors">
                  Connect
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="text-foreground/80 mb-4">
              Have a project in mind or just want to chat? Let's connect!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border text-foreground/70 hover:border-primary hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon name={link.icon} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/60">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 