import { Card } from "@/components/ui/card";
import { Bot, Code, Workflow, Zap, Database, Globe } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Integration",
      description: "Custom AI solutions using OpenAI, Claude, and other LLM APIs for chatbots, content generation, and intelligent automation.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Building sophisticated N8N workflows that automate business processes, data synchronization, and multi-step operations.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications built with React, TypeScript, and cutting-edge frontend frameworks.",
    },
    {
      icon: Database,
      title: "API Development",
      description: "RESTful API design and development with Node.js, Python, and seamless third-party service integrations.",
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Connect and synchronize multiple platforms, databases, and services for unified business operations.",
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end application development from database design to frontend deployment and maintenance.",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Services I <span className="gradient-text">Offer</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Comprehensive solutions for your digital transformation
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 glass-card border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
