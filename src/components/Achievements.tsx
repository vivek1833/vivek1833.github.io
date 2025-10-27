import { Card } from "@/components/ui/card";
import { Trophy, Code2, Award, Target } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Kargil Batch Selection",
    description: "Top 150 out of 5,000+ students at Chandigarh University based on coding and analytical performance"
  },
  {
    icon: Code2,
    title: "1200+ Problems Solved",
    description: "Solved 1200+ coding problems across LeetCode, CodeChef, and HackerRank. 5-star coder on HackerRank"
  },
  {
    icon: Award,
    title: "CodeChef Global Rank 340",
    description: "Secured Global Rank 340 in CodeChef Starters 99 among thousands of participants"
  },
  {
    icon: Target,
    title: "TechGig Code Gladiators",
    description: "Finalist in TechGig Code Gladiators Hackathon 2022, selected from thousands nationwide"
  },
  {
    icon: Award,
    title: "JEE-Mains 2020: 91 Percentile",
    description: "Top 10% of 1 million+ test-takers nationally in one of India's most competitive entrance exams"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 gradient-primary rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
