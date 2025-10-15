import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = [
  { name: "Python", level: 95, category: "Languages" },
  { name: "JavaScript/TypeScript", level: 90, category: "Languages" },
  { name: "Machine Learning", level: 92, category: "AI/ML" },
  { name: "TensorFlow/PyTorch", level: 88, category: "AI/ML" },
  { name: "React/Next.js", level: 85, category: "Frontend" },
  { name: "Node.js", level: 87, category: "Backend" },
  { name: "AWS/Cloud Services", level: 83, category: "DevOps" },
  { name: "Docker/Kubernetes", level: 80, category: "DevOps" },
];

const categories = Array.from(new Set(skillsData.map(s => s.category)));

export const SkillsWithRatings = () => {
  return (
    <section id="skills-ratings" className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My proficiency across different technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={category}
              className="glass-card border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillsData
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
