"use client";

import { personalData } from "@/lib/content";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-10 md:p-16 rounded-[3rem] border-t-4 border-t-primary/50"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Let's Solve Something Together</h2>
          <p className="text-xl text-base-content/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a complex problem that needs fixing? Or just want to talk about electric cars and AI tools?
            I'm always open to new opportunities and interesting conversations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={`mailto:${personalData.email}`} 
              className="btn btn-primary btn-lg rounded-full px-10 w-full sm:w-auto shadow-lg hover:shadow-primary/50 transition-all duration-300 group text-white"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Say Hello
            </a>
            <a 
              href="https://www.linkedin.com/in/khamlaphimmachack/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg rounded-full px-10 w-full sm:w-auto hover:bg-base-content/5"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
