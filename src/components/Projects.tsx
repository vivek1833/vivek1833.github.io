import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "PulsePoint - Hospital Management System",
    description: "Full-stack hospital management system with Spring Boot and React.js, managing 1000+ patient records efficiently with RESTful API architecture.",
    techStack: ["Spring Boot", "PostgreSQL", "Redis", "Apache Kafka", "Docker", "React.js"],
    highlights: [
      "Built OTP-based registration with Redis, reducing latency by 60%",
      "Integrated email notifications using Kafka, cutting delivery time by 70%",
      "Implemented JWT authentication securing 10+ endpoints"
    ],
    githubUrl: "https://github.com/vivekyadav138001/pulsepoint"
  },
  {
    title: "Photogram - Social Media Web App",
    description: "Social media platform with the MERN stack featuring secure authentication and real-time interactions, supporting 10+ concurrent users.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
    highlights: [
      "Architected platform storing 100+ images via Cloudinary integration",
      "Created core social features: posts, likes, comments, follows",
      "Implemented secure authentication with JWT and Bcrypt.js"
    ],
    githubUrl: "https://github.com/vivekyadav138001/photogram"
  },
  {
    title: "Chatbook - Real-time Chat Platform",
    description: "Real-time chat application using React.js and Firebase, supporting 50+ simultaneous chat rooms with advanced features.",
    techStack: ["React.js", "Firebase", "Firestore", "Google Auth"],
    highlights: [
      "Built real-time chat supporting 50+ simultaneous rooms",
      "Integrated Google Authentication with 95% success rate",
      "Developed user search and presence tracking, improving engagement by 40%"
    ],
    githubUrl: "https://github.com/vivekyadav138001/chatbook"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-glow transition-all hover:-translate-y-1 flex flex-col cursor-pointer group"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <ul className="space-y-2 mb-6 text-sm">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2 text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
