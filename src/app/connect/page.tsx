import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ConnectPage() {
  return (
    <>
      <Header />
      <div className="pt-24">
        <Section id="connect" title="Let's Connect" background="dark">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-foreground/80">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell me about your project or question"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-card p-8 rounded-lg border mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-foreground/70">example@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-foreground/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-foreground/70">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border text-foreground/70 hover:border-primary hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border text-foreground/70 hover:border-primary hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border text-foreground/70 hover:border-primary hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border text-foreground/70 hover:border-primary hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
} 