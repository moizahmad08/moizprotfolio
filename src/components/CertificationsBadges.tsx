import { Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    verified: true
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023",
    verified: true
  },
  {
    title: "Professional Scrum Master",
    issuer: "Scrum.org",
    year: "2022",
    verified: true
  },
  {
    title: "Microsoft Azure AI Engineer",
    issuer: "Microsoft",
    year: "2023",
    verified: true
  }
];

const awards = [
  { title: "Best AI Innovation", event: "Tech Summit 2023" },
  { title: "Automation Excellence Award", event: "DevOps Conference 2023" },
  { title: "Top Contributor", event: "Open Source Initiative 2022" }
];

export const CertificationsBadges = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Certifications & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and industry recognition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="glass-card border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 flex items-center gap-2">
                          {cert.title}
                          {cert.verified && (
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                      <Badge variant="secondary">{cert.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card
                  key={index}
                  className="glass-card border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${(index + certifications.length) * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">{award.title}</h4>
                    <p className="text-sm text-muted-foreground">{award.event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
