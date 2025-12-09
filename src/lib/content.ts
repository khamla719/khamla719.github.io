export const personalData = {
  name: "Khamla Phimmachack",
  title: "Technical Support Engineer",
  email: "khamla719@gmail.com",
  linkedin: "https://www.linkedin.com/in/khamlaphimmachack/",
  location: "Chattanooga, TN",
  about: {
    greeting: "Hi, I'm Khamla.",
    summary: "I bridge the gap between people and technology, transforming complex challenges into clear, lasting solutions.",
    longSummary: "I’ve spent my career diving into the deep end of technical problems and thrive on the 'Aha!' moment when a solution clicks into place. Support isn't just about fixing bugs—it's about empowering users and making products better."
  },
  experience: [
    {
      role: "Service Technician",
      company: "Tesla",
      period: "Nov 2024 – Present",
      description: "Diagnosing the machines of tomorrow.",
      highlights: [
        "Diagnose and resolve customer-reported technical failures by analyzing vehicle logs, system behavior, and diagnostic outputs",
        "Escalate complex defects to engineering teams with reproducible steps, clear test context, and structured technical summaries",
        "Improve first-time resolution outcomes through systematic troubleshooting and iterative validation without requiring engineering intervention",
        "Document workflows, recurring fixes, and service procedures to expand internal knowledge base and accelerate technician onboarding"
      ]
    },
    {
      role: "Technical Support Engineer",
      company: "Skuid Inc.",
      period: "Dec 2016 – Mar 2021",
      description: "The bridge between frustrated customers and complex code.",
      highlights: [
        "Resolved Tier 2/3 technical support issues for enterprise SaaS customers involving JavaScript, SQL analysis, REST APIs, and platform integrations",
        "Translated incomplete or unclear issue reports into executable steps using log interpretation, browser dev tools, and SQL validation",
        "Escalated critical software defects to Engineering with structured reproduction steps and customer impact summary, improving release accountability",
        "Created and maintained knowledge base documentation and customer training content, improving customer self-service and reducing new-ticket volume",
        "Troubleshot CRM/ERP and API integration failures using structured isolation techniques, reducing dependency on engineering escalation"
      ]
    }
  ],
  projects: [
    {
      title: "Moon Rabbit",
      description: "Built a bilingual landing page and lead management CRM for a small business service, featuring a Next.js 15 App Router architecture, MongoDB-backed pipeline dashboard, and NextAuth authentication to demonstrate familiarity with server components, API routes, and production-ready admin tooling.",
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "NextAuth"],
      live: "https://moon-rabbit-mvp.vercel.app/",
      image: "/projects/moon-rabbit.png"
    },
    {
      title: "SongSense",
      description: "A Thai music/language learning platform that syncs cultural annotations to YouTube videos in real time, using Next.js 15 App Router with TypeScript, MongoDB for song/note management, and NextAuth admin authentication.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth"],
      live: "https://songsense.vercel.app/",
      image: "/projects/songsense.png"
    }
  ],
  education: [
    {
      school: "Dev Bootcamp",
      degree: "Full-Stack Web Development Certificate",
      year: "2015",
      note: "20-week immersive training in full-stack development, agile workflows, debugging, and collaborative project execution."
    }
  ],
  skills: [
    { category: "Languages & Core Technologies", items: ["JavaScript", "SQL", "REST APIs", "HTML/CSS", "SaaS platforms"] },
    { category: "Tools & Platforms", items: ["Jira", "Git/GitHub", "Browser Dev Tools", "Freshdesk", "Salesforce CRM"] },
    { category: "Systems Knowledge", items: ["Linux/CLI", "log analysis", "HTTP fundamentals", "browser debugging"] },
    { category: "Professional Strengths", items: ["Root cause analysis", "escalation management", "knowledge base creation", "customer training", "cross-functional collaboration"] }
  ]
};
