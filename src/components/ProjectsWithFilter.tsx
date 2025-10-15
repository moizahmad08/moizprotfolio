import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "AI-Powered Customer Service Bot",
    description: "Developed an intelligent chatbot using NLP that reduced customer support tickets by 40%",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Automated Data Pipeline",
    description: "Built a scalable ETL pipeline processing 1M+ records daily with real-time monitoring",
    category: "Automation",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "E-commerce Analytics Dashboard",
    description: "Created a real-time analytics platform providing actionable business insights",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "D3.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Predictive Maintenance System",
    description: "ML model predicting equipment failures with 92% accuracy, saving maintenance costs",
    category: "AI/ML",
    technologies: ["Python", "scikit-learn", "AWS", "IoT"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Workflow Automation Suite",
    description: "Automated 15+ business processes, reducing manual work by 60 hours per week",
    category: "Automation",
    technologies: ["Python", "Selenium", "APIs", "Zapier"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Mobile-First SaaS Platform",
    description: "Full-stack application serving 10K+ users with 99.9% uptime",
    category: "Web Development",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"
  }
];

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export const ProjectsWithFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my portfolio of successful projects across various domains
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="glass-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary/90">
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <Link to={`/project/${project.id}`}>
                  <Button variant="ghost" className="w-full group/btn">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
