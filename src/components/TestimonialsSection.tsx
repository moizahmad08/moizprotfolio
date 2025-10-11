import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Client Name",
      role: "CEO, Tech Company",
      content: "Exceptional work on our AI integration project. The automation workflows have saved us countless hours and improved our efficiency dramatically.",
      rating: 5,
    },
    {
      name: "Project Manager",
      role: "Digital Agency",
      content: "Professional, skilled, and delivered exactly what we needed. The N8N workflows were complex but implemented flawlessly.",
      rating: 5,
    },
    {
      name: "Startup Founder",
      role: "SaaS Platform",
      content: "Great communication and technical expertise. Built a robust web application that exceeded our expectations.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Client <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          What clients say about working with me
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 glass-card border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <Quote className="h-10 w-10 text-primary/40" />
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
