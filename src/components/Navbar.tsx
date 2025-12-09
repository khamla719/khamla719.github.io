"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-warm border-b border-amber/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-serif font-bold hover:text-amber transition-colors duration-300"
          >
            Khamla<span className="text-gradient">.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  activeSection === link.href 
                    ? 'text-amber' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber to-terracotta rounded-full transition-all duration-300 ${
                    activeSection === link.href 
                      ? 'w-3/4' 
                      : 'w-0 group-hover:w-1/2'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Contact CTA (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-6 py-2 rounded-full bg-amber/10 border border-amber/30 text-amber hover:bg-amber hover:text-bg-dark transition-all duration-300 text-sm font-semibold"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-primary hover:text-amber transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-warm border-b border-amber/10 animate-slide-up">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.href
                      ? 'bg-amber/10 text-amber'
                      : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="mt-2 px-4 py-3 rounded-lg bg-amber text-bg-dark text-center font-semibold hover:bg-amber-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
