"use client";

import { personalData } from '@/lib/content';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-bg-dark-elevated border-t border-amber/10">
      {/* Top Gradient Divider */}
      <div className="section-divider" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gradient">
              {personalData.name.split(' ')[0]}.
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Technical Support Engineer specializing in complex problem-solving and root cause analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-amber transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalData.email}`}
                className="text-text-secondary hover:text-amber transition-colors text-sm"
              >
                {personalData.email}
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-amber transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-amber/10">
          <p className="text-text-muted text-sm flex items-center gap-2">
            © {new Date().getFullYear()} {personalData.name}. Built with
            <Heart className="w-4 h-4 text-amber fill-amber animate-pulse" />
            and coffee.
          </p>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-amber/10 border border-amber/20 text-amber hover:bg-amber hover:text-bg-dark transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

