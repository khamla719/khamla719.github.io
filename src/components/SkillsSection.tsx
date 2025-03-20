"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

// Mock data for skills - you can replace with your actual skills
const skills = [
  { id: 1, name: "React", category: "Frontend", level: 90 },
  { id: 2, name: "TypeScript", category: "Languages", level: 85 },
  { id: 3, name: "Node.js", category: "Backend", level: 80 },
  { id: 4, name: "Next.js", category: "Frontend", level: 85 },
  { id: 5, name: "UI/UX Design", category: "Design", level: 75 },
  { id: 6, name: "CSS/SCSS", category: "Frontend", level: 90 },
  { id: 7, name: "GraphQL", category: "API", level: 70 },
  { id: 8, name: "AWS", category: "DevOps", level: 65 },
  { id: 9, name: "Python", category: "Languages", level: 75 },
  { id: 10, name: "Docker", category: "DevOps", level: 70 },
  { id: 11, name: "Figma", category: "Design", level: 80 },
  { id: 12, name: "TailwindCSS", category: "Frontend", level: 95 },
];

// Group skills by category
const skillCategories = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

interface SkillNodeProps {
  skill: typeof skills[0];
  onClick: (skill: typeof skills[0]) => void;
  isActive: boolean;
}

function SkillNode({ skill, onClick, isActive }: SkillNodeProps) {
  const size = 30 + (skill.level / 10);
  
  return (
    <motion.div
      className={`absolute rounded-full cursor-pointer select-none flex items-center justify-center ${
        isActive ? "bg-primary text-white z-10" : "bg-card hover:bg-primary/20 z-0"
      }`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        // Random positions that change based on the skill ID to ensure consistent placement
        top: `${(skill.id * 25) % 400}px`,
        left: `${((skill.id * 47) + 100) % 800}px`,
      }}
      whileHover={{ scale: 1.1 }}
      onClick={() => onClick(skill)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * skill.id }}
    >
      <span className="text-xs font-medium">{skill.name.slice(0, 3)}</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);
  
  const handleSkillClick = (skill: typeof skills[0]) => {
    setSelectedSkill(skill);
  };

  return (
    <Section 
      id="skills" 
      title="Skills Matrix"
      background="gradient"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[450px] border border-border rounded-lg bg-background/50 backdrop-blur-sm p-4 overflow-hidden">
            {/* The actual skill nodes */}
            {skills.map((skill) => (
              <SkillNode
                key={skill.id}
                skill={skill}
                onClick={handleSkillClick}
                isActive={selectedSkill?.id === skill.id}
              />
            ))}
            
            {/* Connection lines between skills - simplified version */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
              <g stroke="var(--border)" strokeOpacity="0.5" strokeWidth="1">
                {/* This is a simplified version, for a real implementation you would compute the actual node positions */}
                {skills.map((skill, index) => {
                  const nextSkill = skills[(index + 1) % skills.length];
                  const x1 = ((skill.id * 47) + 100) % 800 + 15;
                  const y1 = (skill.id * 25) % 400 + 15;
                  const x2 = ((nextSkill.id * 47) + 100) % 800 + 15;
                  const y2 = (nextSkill.id * 25) % 400 + 15;
                  
                  return (
                    <line
                      key={`line-${skill.id}-${nextSkill.id}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                    />
                  );
                })}
              </g>
            </svg>
          </div>
        </div>
        
        <div>
          <div className="bg-card rounded-lg p-6 border border-border h-full">
            <h3 className="text-2xl font-bold mb-6">Tool Expertise</h3>
            
            {selectedSkill ? (
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold text-primary mb-2">{selectedSkill.name}</h4>
                <p className="text-muted mb-4">Category: {selectedSkill.category}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Proficiency</span>
                    <span className="text-sm font-medium">{selectedSkill.level}%</span>
                  </div>
                  <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
                
                <p className="text-foreground/80">
                  With extensive experience in {selectedSkill.name}, I've developed robust solutions 
                  that address complex problems and enhance user experiences.
                </p>
              </motion.div>
            ) : (
              <div className="text-center py-8 text-foreground/70">
                <p>Click on a skill node to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <div key={category} className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <ul className="space-y-3">
              {categorySkills.map(skill => (
                <li key={skill.id} className="flex justify-between items-center">
                  <span>{skill.name}</span>
                  <span className="text-xs px-2 py-1 bg-foreground/5 rounded-full">
                    {skill.level}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
} 