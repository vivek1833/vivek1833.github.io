import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Layout } from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Java", "C++", "Python", "SQL"],
  },
  {
    category: "Backend Technologies",
    icon: Database,
    skills: ["Spring Boot", "Node.js", "Express.js", "Apache Kafka", "Docker"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firestore"],
  },
  {
    category: "Frontend & Tools",
    icon: Layout,
    skills: ["React.js", "Bootstrap", "Git", "Postman", "Firebase"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillsData.map((skillGroup) => {
            const Icon = skillGroup.icon;
            return (
              <Card
                key={skillGroup.category}
                className="p-6 shadow-card hover:shadow-glow transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
