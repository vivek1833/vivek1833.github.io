import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Backend Developer
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="gradient-primary bg-clip-text text-transparent">Vivek Yadav</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Building scalable backend systems with Spring Boot and PostgreSQL. 
          Passionate about creating efficient, reliable solutions that make a difference.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="gap-2 shadow-glow font-medium"
            asChild
          >
            <a href="#projects">
              <Code2 className="w-5 h-5" />
              View My Work
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2 font-medium"
            asChild
          >
            <a href="#contact">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com/vivekyadav138001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/vivek-yadav-138001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://leetcode.com/vivekyadav138001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LeetCode Profile"
          >
            <Code2 className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
