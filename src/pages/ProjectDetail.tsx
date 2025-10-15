import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projectsData = {
  "1": {
    title: "AI-Powered Customer Service Bot",
    description: "Developed an intelligent chatbot using NLP that reduced customer support tickets by 40%",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&auto=format&fit=crop",
    challenge: "The client was struggling with high volumes of repetitive customer inquiries, leading to long response times and customer dissatisfaction.",
    solution: "Built an NLP-powered chatbot capable of understanding customer intent and providing accurate responses. Integrated with existing CRM systems for seamless data flow.",
    results: [
      "40% reduction in support tickets",
      "60% faster average response time",
      "85% customer satisfaction rating",
      "24/7 automated support coverage"
    ],
    timeline: "3 months",
    team: "4 developers, 1 UX designer"
  },
  "2": {
    title: "Automated Data Pipeline",
    description: "Built a scalable ETL pipeline processing 1M+ records daily with real-time monitoring",
    category: "Automation",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "AWS", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
    challenge: "Manual data processing was time-consuming and error-prone, creating bottlenecks in business operations.",
    solution: "Designed and implemented a fully automated ETL pipeline using Apache Airflow, with robust error handling and monitoring.",
    results: [
      "Processing 1M+ records daily",
      "99.9% pipeline reliability",
      "80% reduction in processing time",
      "Real-time data availability"
    ],
    timeline: "2 months",
    team: "2 data engineers"
  },
  "3": {
    title: "E-commerce Analytics Dashboard",
    description: "Created a real-time analytics platform providing actionable business insights",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "D3.js", "WebSocket", "AWS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
    challenge: "Business stakeholders lacked visibility into key metrics and couldn't make data-driven decisions quickly.",
    solution: "Built a comprehensive dashboard with real-time data visualization, custom metrics, and automated reporting features.",
    results: [
      "Real-time data updates",
      "15+ custom KPI visualizations",
      "Automated daily/weekly reports",
      "30% improvement in decision speed"
    ],
    timeline: "4 months",
    team: "3 full-stack developers, 1 data analyst"
  },
  "4": {
    title: "Predictive Maintenance System",
    description: "ML model predicting equipment failures with 92% accuracy, saving maintenance costs",
    category: "AI/ML",
    technologies: ["Python", "scikit-learn", "AWS", "IoT", "TensorFlow", "Flask"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop",
    challenge: "Unexpected equipment failures were causing costly downtime and emergency repairs.",
    solution: "Developed ML models analyzing sensor data to predict failures before they occur, enabling proactive maintenance.",
    results: [
      "92% prediction accuracy",
      "45% reduction in downtime",
      "30% lower maintenance costs",
      "Extended equipment lifespan"
    ],
    timeline: "5 months",
    team: "2 ML engineers, 1 IoT specialist"
  },
  "5": {
    title: "Workflow Automation Suite",
    description: "Automated 15+ business processes, reducing manual work by 60 hours per week",
    category: "Automation",
    technologies: ["Python", "Selenium", "APIs", "Zapier", "Google Workspace", "Slack"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&auto=format&fit=crop",
    challenge: "Team spending excessive time on repetitive tasks, limiting focus on strategic work.",
    solution: "Created a suite of automation tools integrating various platforms and streamlining common workflows.",
    results: [
      "60 hours saved per week",
      "15 processes automated",
      "95% reduction in manual errors",
      "ROI achieved in 2 months"
    ],
    timeline: "3 months",
    team: "2 automation engineers"
  },
  "6": {
    title: "Mobile-First SaaS Platform",
    description: "Full-stack application serving 10K+ users with 99.9% uptime",
    category: "Web Development",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Redis", "Stripe"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop",
    challenge: "Need for a scalable, mobile-first platform to serve a growing user base reliably.",
    solution: "Built a performant SaaS application with focus on mobile UX, scalable architecture, and payment integration.",
    results: [
      "10K+ active users",
      "99.9% uptime",
      "4.8/5 app store rating",
      "Sub-2s average load time"
    ],
    timeline: "6 months",
    team: "5 developers, 2 designers, 1 DevOps engineer"
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <Link to="/#projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="glass-card p-8 md:p-12 border-primary/20">
          <Badge className="mb-4">{project.category}</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {project.description}
          </p>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg mb-12"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-muted-foreground">{project.timeline}</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Team</h3>
                <p className="text-muted-foreground">{project.team}</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Category</h3>
                <p className="text-muted-foreground">{project.category}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-base py-2 px-4">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Key Results</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <Card key={index} className="glass-card border-primary/20">
                    <CardContent className="p-6">
                      <p className="text-lg">{result}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <Button className="bg-gradient-to-r from-primary via-secondary to-accent">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Demo
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
