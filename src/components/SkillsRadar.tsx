import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const skills = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", value: 90 },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", value: 85 },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", value: 85 },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", value: 75 },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", value: 85 },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", value: 75 },
];

const allSkills = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const SkillsRadar = () => {
  return (
    <section id="competences-radar" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Design 3: Radar des compétences</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Visualisation graphique des niveaux de maîtrise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <div className="glass-card p-8 animate-fade-in">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={skills}>
                <PolarGrid stroke="hsl(var(--primary) / 0.2)" />
                <PolarAngleAxis 
                  dataKey="name" 
                  tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <Radar
                  name="Compétences"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-fade-in">
            {allSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-4 flex flex-col items-center gap-3 hover-glow transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
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

export default SkillsRadar;
