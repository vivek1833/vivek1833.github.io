import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        <Card className="p-8 shadow-card">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-2xl font-bold">Backend Developer</h3>
                  <p className="text-lg text-primary font-medium">
                    Belzabar Software Design Pvt. Ltd
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  March 2024 - Present
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Spring Boot</Badge>
                <Badge variant="secondary">Postman</Badge>
                <Badge variant="secondary">Java</Badge>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    Constructed in-app notification system using Java and
                    PostgreSQL, delivering{" "}
                    <span className="text-foreground font-medium">
                      5000+ real-time notifications daily
                    </span>{" "}
                    with 99% delivery success rate
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    Enhanced form submission performance by{" "}
                    <span className="text-foreground font-medium">
                      ~70% (8-10s to 2-3s)
                    </span>{" "}
                    through asynchronous processing and query optimization
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    Implemented efficient filtering and sorting for{" "}
                    <span className="text-foreground font-medium">
                      large datasets (10K-15K records)
                    </span>{" "}
                    and managed smooth migrations across development, staging,
                    and production
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    Designed robust role-based authorization system securing{" "}
                    <span className="text-foreground font-medium">
                      2500+ users across 5+ roles
                    </span>{" "}
                    with zero permission issues post-deployment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
