import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatCounter = ({ end, label, suffix = "", duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref}>
      <Card className="p-8 text-center glass-card border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-105">
        <div className="text-5xl md:text-6xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">
          {count}{suffix}
        </div>
        <div className="text-muted-foreground text-lg">{label}</div>
      </Card>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          By The <span className="gradient-text">Numbers</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Measurable impact and continuous growth
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter end={2} label="Years Experience" suffix="+" />
          <StatCounter end={15} label="Projects Completed" suffix="+" />
          <StatCounter end={50} label="AI Workflows Built" suffix="+" />
          <StatCounter end={98} label="Client Satisfaction" suffix="%" />
        </div>
      </div>
    </section>
  );
};
