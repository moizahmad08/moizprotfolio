import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitCommit, GitPullRequest, GitBranch, ExternalLink, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Activity {
  id: string;
  activity_type: string;
  repo_name: string;
  message: string;
  url: string;
  created_at: string;
}

export const GitHubActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('github-activity');
      
      if (error) throw error;
      
      setActivities(data.activities || []);
    } catch (error) {
      console.error('Error fetching GitHub activity:', error);
      toast({
        title: "Could not load GitHub activity",
        description: "Using cached data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'push':
        return <GitCommit className="h-5 w-5 text-primary" />;
      case 'pull_request':
        return <GitPullRequest className="h-5 w-5 text-secondary" />;
      case 'create':
        return <GitBranch className="h-5 w-5 text-accent" />;
      default:
        return <GitCommit className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <section id="github" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          GitHub <span className="gradient-text">Activity</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Live feed from my repositories
        </p>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                className="p-4 glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{getIcon(activity.activity_type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {activity.repo_name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {activity.activity_type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.message}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted-foreground">
                        {new Date(activity.created_at).toLocaleDateString()}
                      </span>
                      <a
                        href={activity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1"
                      >
                        View on GitHub <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
