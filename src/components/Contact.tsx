import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Interested in working together or have a question? Feel free to reach out!
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <Card className="p-6 shadow-card hover:shadow-glow transition-shadow">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-2">Email</p>
            <a 
              href="mailto:vivekyadav138001@gmail.com" 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              vivekyadav138001@gmail.com
            </a>
          </Card>
          
          <Card className="p-6 shadow-card hover:shadow-glow transition-shadow">
            <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-2">Phone</p>
            <a 
              href="tel:+919506115091" 
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              +91 9506115091
            </a>
          </Card>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com/vivekyadav138001" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://linkedin.com/in/vivek-yadav-138001" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://leetcode.com/vivekyadav138001" target="_blank" rel="noopener noreferrer">
              <Code2 className="w-5 h-5" />
              LeetCode
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
