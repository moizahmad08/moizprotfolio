import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export const ExperienceTimeline = () => {
  const experiences = [
    {
      type: "work",
      title: "Freelance AI Developer",
      organization: "Self-Employed",
      period: "2023 - Present",
      description: "Building custom AI solutions and automation workflows for clients worldwide. Specializing in N8N integrations, chatbot development, and intelligent systems.",
      skills: ["N8N", "OpenAI API", "Python", "Automation"],
    },
    {
      type: "work",
      title: "Web Development Projects",
      organization: "Various Clients",
      period: "2022 - Present",
      description: "Developed modern web applications using React, TypeScript, and Node.js. Focus on creating responsive, user-friendly interfaces with seamless backend integrations.",
      skills: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      type: "education",
      title: "Intermediate in Computer Science",
      organization: "Educational Institution",
      period: "2021 - Present",
      description: "Strong foundation in programming, algorithms, and system design. Active participation in coding competitions and tech communities.",
      skills: ["Data Structures", "Algorithms", "System Design"],
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          My journey in technology and continuous learning
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-20 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background shadow-lg" />

                <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-[1.02]">
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {exp.type === "work" ? (
                            <Briefcase className="h-5 w-5 text-primary" />
                          ) : (
                            <GraduationCap className="h-5 w-5 text-secondary" />
                          )}
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground font-medium">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground/70 mt-1">{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
