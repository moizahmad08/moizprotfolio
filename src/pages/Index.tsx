import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Workflow, Brain, Layers, Mail, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:moizahmadkhan08@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/moizahmad08', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/moiz-ahmad-7a9617324/', '_blank');
  };
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
          backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 25, 0.7), rgba(15, 15, 25, 0.9)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />
        
        {/* Radial gradient effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500 animate-glow" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse" />
                <img 
                  src={profileImg} 
                  alt="Profile"
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/50 shadow-2xl group-hover:scale-110 group-hover:border-secondary/70 transition-all duration-500 ring-4 ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm an <span className="gradient-text">AI Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Building intelligent solutions with AI, automation, and modern web technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="relative overflow-hidden group bg-gradient-to-r from-primary via-secondary to-accent animate-gradient hover:shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={handleContactClick}
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/50 text-primary hover:bg-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 backdrop-blur-sm"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:text-primary transition-colors"
                onClick={handleGithubClick}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:text-primary transition-colors"
                onClick={handleLinkedinClick}
              >
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
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
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
                className="p-6 glass-card border-border/50 hover:border-primary/70 transition-all duration-500 hover:scale-105 group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="space-y-4 relative z-10">
                  <div className={`${skill.color} w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-primary/50`}>
                    <skill.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
                className="px-5 py-2.5 text-base glass-card hover:bg-gradient-to-r hover:from-primary/30 hover:to-secondary/30 hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-110 cursor-default border border-border/50 shadow-lg hover:shadow-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="p-8 md:p-12 glass-card border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-in">
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
      <section id="projects" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Real-world applications showcasing AI integration and automation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: Python Management Server */}
            <Card className="group overflow-hidden glass-card border-border/50 hover:border-primary/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/10 to-background flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                <Code2 className="h-16 w-16 text-primary relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Python Management Server
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Python</Badge>
                    <Badge variant="secondary" className="text-xs">CLI</Badge>
                    <Badge variant="secondary" className="text-xs">Backend</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Console-based server management system built with Python. Features automated task scheduling, 
                  resource monitoring, and real-time system health checks with comprehensive logging.
                </p>
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-muted-foreground font-semibold">Key Features:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Automated task orchestration</li>
                    <li>• Real-time monitoring & alerts</li>
                    <li>• Multi-threaded processing</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Project 2: N8N AI Agent Workflow */}
            <Card className="group overflow-hidden glass-card border-border/50 hover:border-secondary/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="aspect-video bg-gradient-to-br from-secondary/20 via-accent/10 to-background flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                <Brain className="h-16 w-16 text-secondary relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    AI Agent Workflow System
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">N8N</Badge>
                    <Badge variant="secondary" className="text-xs">OpenAI</Badge>
                    <Badge variant="secondary" className="text-xs">Automation</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Intelligent workflow automation using N8N with AI agents. Handles data processing, 
                  decision-making, and task execution through sophisticated AI-powered logic chains.
                </p>
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-muted-foreground font-semibold">Capabilities:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Multi-step AI reasoning</li>
                    <li>• Dynamic workflow branching</li>
                    <li>• External API orchestration</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Project 3: AI Chatbot Platform */}
            <Card className="group overflow-hidden glass-card border-border/50 hover:border-accent/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="aspect-video bg-gradient-to-br from-accent/20 via-primary/10 to-background flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                <Workflow className="h-16 w-16 text-primary relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    N8N AI Chatbot Integration
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">N8N</Badge>
                    <Badge variant="secondary" className="text-xs">NLP</Badge>
                    <Badge variant="secondary" className="text-xs">Webhooks</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enterprise-grade chatbot built with N8N workflows. Features natural language processing, 
                  context retention, and seamless integration with multiple communication platforms.
                </p>
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-muted-foreground font-semibold">Features:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Multi-channel deployment</li>
                    <li>• Context-aware responses</li>
                    <li>• Custom intent recognition</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Have a project in mind? Let's create something amazing!
          </p>
          <Button 
            size="lg" 
            className="relative overflow-hidden group bg-gradient-to-r from-primary via-secondary to-accent animate-gradient text-lg px-10 py-6 shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-500"
            onClick={handleContactClick}
          >
            <span className="relative z-10 flex items-center font-semibold">
              <Mail className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Contact Me
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
