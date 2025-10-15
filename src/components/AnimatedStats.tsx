import { useEffect, useState } from "react";
import { Award, Users, Code, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Code, label: "Projects Completed", value: 150, suffix: "+" },
  { icon: Users, label: "Happy Clients", value: 50, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 5, suffix: "+" },
  { icon: Zap, label: "Hours Saved", value: 10000, suffix: "+" }
];

const AnimatedNumber = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      const startTime = Date.now();
      const step = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isVisible, hasAnimated, end, duration]);

  return (
    <span ref={ref} className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
};

export const AnimatedStats = () => {
  return (
    <section className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center animate-fade-in border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <AnimatedNumber end={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
