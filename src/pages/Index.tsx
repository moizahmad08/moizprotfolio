import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Workflow, Brain, Layers, Mail, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const skills = [
    { icon: Brain, name: "AI Development", color: "text-primary" },
    { icon: Code2, name: "Web Development", color: "text-secondary" },
    { icon: Workflow, name: "N8N Workflows", color: "text-primary" },
    { icon: Layers, name: "API Integration", color: "text-secondary" },
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "N8N",
    "OpenAI API", "TensorFlow", "REST APIs", "GraphQL", 
    "Supabase", "Firebase", "Tailwind CSS"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm an <span className="gradient-text">AI Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Building intelligent solutions with AI, automation, and modern web technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="glow-primary group">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Specializing in AI-powered solutions and workflow automation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-primary group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className={`${skill.color} w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    Creating innovative solutions with cutting-edge technology
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Tools and technologies I work with
          </p>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={tech}
                variant="secondary" 
                className="px-4 py-2 text-base bg-card hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 cursor-default border border-border/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm an intermediate student passionate about artificial intelligence and web development. 
                I specialize in creating intelligent automation workflows and building modern web applications.
              </p>
              <p>
                My expertise lies in integrating AI capabilities into practical solutions, developing 
                complex N8N workflows, and building seamless API integrations that power modern applications.
              </p>
              <p>
                With a strong foundation in logic building and system design, I transform ideas into 
                functional, scalable solutions that solve real-world problems.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Coming soon - showcase of my best work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card 
                key={item}
                className="group overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Code2 className="h-16 w-16 text-primary/50 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">Project {item}</h3>
                  <p className="text-muted-foreground">
                    Description of the project will go here. Add your projects to showcase your work.
                  </p>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    View Details →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Have a project in mind? Let's create something amazing!
          </p>
          <Button size="lg" className="glow-primary text-lg px-8">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 AI Developer Portfolio. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
