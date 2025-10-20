import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import SkillsMarquee from "@/components/SkillsMarquee";
import SkillsRadar from "@/components/SkillsRadar";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SkillsGrid />
      <SkillsMarquee />
      <SkillsRadar />
      <Projects />
      <Journey />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-primary/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Perrin Emmanuel NZAOU. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            Développé avec React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
