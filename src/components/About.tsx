import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 shadow-card hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Bachelor of Engineering
                </p>
                <p className="text-sm font-medium">
                  Computer Science (CGPA: 8.04)
                </p>
                <p className="text-sm text-muted-foreground">
                  Chandigarh University | 2020 - 2024
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Current Role</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Backend Developer
                </p>
                <p className="text-sm font-medium">
                  Belzabar Software Design Pvt. Ltd
                </p>
                <p className="text-sm text-muted-foreground">
                  March 2024 - Present
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 shadow-card">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate Backend Developer with hands-on experience in
            building scalable systems using
            <span className="text-foreground font-medium">
              {" "}
              Spring Boot
            </span>{" "}
            and
            <span className="text-foreground font-medium"> PostgreSQL</span>.
            Currently working at Belzabar Software, I've delivered solutions
            that handle thousands of daily users and improved system performance
            by up to 70%. I'm particularly interested in{" "}
            <span className="text-foreground font-medium">
              distributed systems
            </span>
            ,
            <span className="text-foreground font-medium">
              {" "}
              real-time processing
            </span>
            , and creating efficient backend architectures.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
