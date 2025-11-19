"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="navbar fixed top-0 z-50 bg-base-100/60 backdrop-blur-lg border-b border-base-content/10 supports-[backdrop-filter]:bg-base-100/60">
      <div className="container mx-auto relative">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tight hover:bg-transparent">
            Khamla Phimmachack<span className="text-primary">.</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal px-1 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex-none sm:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-base-100 border-b border-base-content/10 p-4 shadow-2xl sm:hidden flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="btn btn-ghost justify-start text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
