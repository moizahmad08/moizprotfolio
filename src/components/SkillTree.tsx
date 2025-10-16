import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Star, Trophy, Zap } from "lucide-react";

const skills = [
  {
    name: "AI Development",
    level: 4,
    xp: 8500,
    maxXp: 10000,
    icon: Zap,
    achievements: ["First AI Model", "API Integration Master"],
  },
  {
    name: "Web Development",
    level: 5,
    xp: 12000,
    maxXp: 15000,
    icon: Star,
    achievements: ["React Expert", "100 Components Built"],
  },
  {
    name: "N8N Workflows",
    level: 3,
    xp: 5000,
    maxXp: 7500,
    icon: Award,
    achievements: ["Automation Wizard"],
  },
  {
    name: "API Integration",
    level: 4,
    xp: 9000,
    maxXp: 10000,
    icon: Trophy,
    achievements: ["REST Master", "GraphQL Pro"],
  },
];

export const SkillTree = () => {
  const getLevelLabel = (level: number) => {
    if (level >= 5) return "Master";
    if (level >= 4) return "Expert";
    if (level >= 3) return "Advanced";
    if (level >= 2) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skill-tree" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skill <span className="gradient-text">Tree</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          My learning journey and achievements
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="p-6 glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <Badge className="bg-gradient-to-r from-primary to-secondary">
                      Level {skill.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{getLevelLabel(skill.level)}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Progress to next level</span>
                  <span>{skill.xp} / {skill.maxXp} XP</span>
                </div>
                <Progress value={(skill.xp / skill.maxXp) * 100} className="h-2" />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Achievements:</p>
                <div className="flex flex-wrap gap-2">
                  {skill.achievements.map((achievement) => (
                    <Badge
                      key={achievement}
                      variant="secondary"
                      className="text-xs hover:bg-primary/20 transition-colors"
                    >
                      <Trophy className="h-3 w-3 mr-1" />
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
