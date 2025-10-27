import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t">
        <p>© 2024 Vivek Yadav. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
