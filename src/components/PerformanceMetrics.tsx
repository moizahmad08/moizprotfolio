import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, Eye, Clock, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    totalViews: 0,
    uniqueVisitors: 0,
    avgDuration: 0,
    popularPages: [] as any[],
  });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    const { data: views } = await supabase
      .from('page_views')
      .select('*')
      .gte('viewed_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

    if (views) {
      const uniqueVisitors = new Set(views.map(v => v.visitor_id)).size;
      const avgDuration = views.reduce((acc, v) => acc + (v.duration || 0), 0) / views.length;
      
      const pageCounts = views.reduce((acc: any, v) => {
        acc[v.page] = (acc[v.page] || 0) + 1;
        return acc;
      }, {});

      const popularPages = Object.entries(pageCounts)
        .map(([page, count]) => ({ page, views: count }))
        .sort((a: any, b: any) => b.views - a.views)
        .slice(0, 5);

      setMetrics({
        totalViews: views.length,
        uniqueVisitors,
        avgDuration: Math.round(avgDuration),
        popularPages,
      });
    }
  };

  const statCards = [
    { icon: Eye, label: "Total Views", value: metrics.totalViews, color: "text-primary" },
    { icon: Activity, label: "Unique Visitors", value: metrics.uniqueVisitors, color: "text-secondary" },
    { icon: Clock, label: "Avg Duration", value: `${metrics.avgDuration}s`, color: "text-accent" },
    { icon: TrendingUp, label: "Growth", value: "+12%", color: "text-primary" },
  ];

  return (
    <section id="metrics" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Performance <span className="gradient-text">Metrics</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Real-time portfolio analytics
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-6 glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 glass-card border-border/50">
            <h3 className="text-lg font-semibold mb-4">Popular Pages</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={metrics.popularPages}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="page" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="views" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 glass-card border-border/50">
            <h3 className="text-lg font-semibold mb-4">Weekly Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={[
                  { day: "Mon", views: 45 },
                  { day: "Tue", views: 52 },
                  { day: "Wed", views: 61 },
                  { day: "Thu", views: 58 },
                  { day: "Fri", views: 70 },
                  { day: "Sat", views: 48 },
                  { day: "Sun", views: 42 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="views" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </section>
  );
};
