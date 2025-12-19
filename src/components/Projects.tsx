import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MerchantAI - Merchant Analytics Platform",
    description:
      "Backend-first merchant platform that enables product catalog management, order processing, payment workflows, and actionable business analytics with AI-assisted insights.",
    techStack: [
      "Spring Boot",
      "Java 17",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "Google Gemini AI",
    ],
    highlights: [
      "Built merchant product catalog and order lifecycle with Stripe-based payment workflows",
      "Implemented deterministic sales and inventory analytics using SQL aggregation",
      "Integrated AI-driven business insights using Gemini with strict prompt guardrails and fallback handling",
    ],
    githubUrl: "https://github.com/vivek1833/MerchantAI",
  },
  {
    title: "PulsePoint - Hospital Management System",
    description:
      "Full-stack hospital management system with Spring Boot and React.js, managing 1000+ patient records efficiently with RESTful API architecture.",
    techStack: [
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "Docker",
      "React.js",
    ],
    highlights: [
      "Built OTP-based registration with Redis, reducing latency by 60%",
      "Integrated email notifications using Kafka, cutting delivery time by 70%",
      "Implemented JWT authentication securing 10+ endpoints",
    ],
    githubUrl: "https://github.com/vivek1833/pulsepoint",
  },
  {
    title: "Photogram - Social Media Web App",
    description:
      "Social media platform with the MERN stack featuring secure authentication and real-time interactions, supporting 10+ concurrent users.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    highlights: [
      "Architected platform storing 100+ images via Cloudinary integration",
      "Created core social features: posts, likes, comments, follows",
      "Implemented secure authentication with JWT and Bcrypt.js",
    ],
    githubUrl: "https://github.com/vivek1833/Social-media",
  },
  {
    title: "Chatbook - Real-time Chat Platform",
    description:
      "Real-time chat application using React.js and Firebase, supporting 50+ simultaneous chat rooms with advanced features.",
    techStack: ["React.js", "Firebase", "Firestore", "Google Auth"],
    highlights: [
      "Built real-time chat supporting 50+ simultaneous rooms",
      "Integrated Google Authentication with 95% success rate",
      "Developed user search and presence tracking, improving engagement by 40%",
    ],
    githubUrl: "https://github.com/vivek1833/chatbook",
  },
  {
    title: "Task Reminder - Chrome Extension",
    description:
      "A Chrome extension to manage daily tasks with automatic resets and hourly reminders for incomplete tasks.",
    techStack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Add, complete, and delete daily tasks",
      "Tasks automatically reset at midnight",
      "Sends notifications every hour if a task is not completed",
    ],
    githubUrl: "https://github.com/vivek1833/Daily-Reminder",
    image: "static/Images/dailyReminder.png",
  },
  {
    title: "LMS - Learning Management System WebApp",
    description:
      "A web-based platform built for managing courses, subjects, and student registrations with secure JWT authentication.",
    techStack: ["Node.js", "Handlebars", "Mongoose", "JWT"],
    highlights: [
      "Student login and registration",
      "Subjects displayed based on selected course",
      "CRUD operations on courses and subjects",
    ],
    githubUrl: "https://github.com/vivek1833/LMS",
    image: "static/Images/lms.png",
  },
  {
    title: "Crispy King - Online Food Ordering WebApp",
    description:
      "A web application for browsing menus, managing carts, and placing food orders with cookie-based authentication and full CRUD support.",
    techStack: ["Node.js", "Handlebars", "Mongoose", "Cookie-Parser"],
    highlights: [
      "Add and remove items from cart",
      "User authentication using cookies",
      "CRUD operations on food items",
    ],
    githubUrl: "https://github.com/vivek1833/Crispy-King",
    image: "static/Images/crispyKing.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-glow transition-all hover:-translate-y-1 flex flex-col cursor-pointer group"
              onClick={() => window.open(project.githubUrl, "_blank")}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
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
