export const personalData = {
  name: "Khamla Phimmachack",
  title: "Technical Support Engineer",
  email: "khamla719@gmail.com",
  linkedin: "https://www.linkedin.com/in/khamlaphimmachack/",
  location: "Chattanooga, TN",
  about: {
    greeting: "Hi, I'm Khamla.",
    summary: "I solve technical problems. When something breaks, I figure out why and fix it.",
    longSummary: "I've spent my career working through technical problems. The 'Aha!' moment when a solution clicks is what keeps me going. Support isn't just fixing bugs—it's understanding what went wrong and making sure it doesn't happen again."
  },
  experience: [
    {
      role: "Service Technician",
      company: "Tesla",
      period: "Nov 2024 – Present",
      description: "Fixing electric vehicles.",
      highlights: [
        "Diagnose and resolve customer-reported technical failures by analyzing vehicle logs, system behavior, and diagnostic outputs",
        "Escalate complex defects to engineering teams with reproducible steps, clear test context, and structured technical summaries",
        "Fix most issues on first contact through systematic troubleshooting and iterative validation without engineering help",
        "Document workflows, recurring fixes, and service procedures for the internal knowledge base and new technician training"
      ]
    },
    {
      role: "Technical Support Engineer",
      company: "Skuid Inc.",
      period: "Dec 2016 – Mar 2021",
      description: "Fixing code so customers can work.",
      highlights: [
        "Resolved Tier 2/3 technical support issues for enterprise SaaS customers involving JavaScript, SQL analysis, REST APIs, and platform integrations",
        "Turned incomplete or unclear issue reports into executable steps using log interpretation, browser dev tools, and SQL validation",
        "Escalated critical software defects to Engineering with structured reproduction steps and customer impact summary",
        "Created and maintained knowledge base documentation and customer training content",
        "Troubleshot CRM/ERP and API integration failures using structured isolation techniques"
      ]
    }
  ],
  projects: [
    {
      title: "Moon Rabbit",
      description: "Bilingual landing page and lead management CRM for a small business service. Built with Next.js 15 App Router, MongoDB for the pipeline dashboard, and NextAuth authentication. Uses server components, API routes, and production-ready admin tooling.",
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "NextAuth"],
      live: "https://moon-rabbit-mvp.vercel.app/",
      image: "/projects/moon-rabbit.png"
    },
    {
      title: "SongSense",
      description: "Thai music and language learning platform that syncs cultural annotations to YouTube videos in real time. Built with Next.js 15 App Router and TypeScript, MongoDB for song and note management, and NextAuth admin authentication.",
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
