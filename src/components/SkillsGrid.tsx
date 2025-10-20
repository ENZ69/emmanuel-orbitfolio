import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const skillsByCategory = {
  Frontend: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90 },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90 },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 85 },
  ],
  Backend: [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 85 },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 80 },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 85 },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", level: 80 },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 75 },
    { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", level: 70 },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80 },
  ],
  DevOps: [
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 75 },
  ],
};

const SkillsGrid = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof skillsByCategory>("Frontend");

  return (
    <section id="competences-grid" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Design 1: Grille avec onglets</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Organisées par catégorie avec niveau de maîtrise
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(skillsByCategory).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category as keyof typeof skillsByCategory)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {skillsByCategory[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-6 hover-glow group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-background/50 rounded-lg p-3">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
                  <Badge variant="secondary">{skill.level}%</Badge>
                </div>
              </div>

              {/* Progress Ring */}
              <div className="relative w-full h-2 bg-secondary/30 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default SkillsGrid;
