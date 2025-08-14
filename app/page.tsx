import Hero from "./pages/hero";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Approach from "./pages/approach";
import Getintouch from "./pages/getintouch";

export default function Home() {
  return (
    <div className="space-y-0">
    
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about" className="min-h-screen">
        <About />
      </section>
      
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
    
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>
    
      <section id="approach" className="min-h-screen">
        <Approach />
      </section>
      
      <section id="contact" className="min-h-screen">
        <Getintouch />
      </section>
    </div>
  );
}
