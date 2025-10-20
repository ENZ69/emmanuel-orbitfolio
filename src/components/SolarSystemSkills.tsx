const skills = [
  { name: "React", color: "hsl(193 95% 68%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", color: "hsl(120 100% 40%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", color: "hsl(0 0% 85%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", color: "hsl(120 100% 35%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PHP", color: "hsl(235 65% 50%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", color: "hsl(10 90% 55%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Java", color: "hsl(10 80% 50%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", color: "hsl(120 60% 50%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "HTML", color: "hsl(10 95% 60%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", color: "hsl(210 95% 60%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", color: "hsl(45 95% 60%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", color: "hsl(210 70% 55%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Docker", color: "hsl(200 90% 55%)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const SolarSystemSkills = () => {
  return (
    <section id="competences" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mes Compétences</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Un système solaire de technologies que je maîtrise
          </p>
        </div>

        <div 
          className="relative h-[600px] md:h-[700px] flex items-center justify-center"
        >
          {/* Central Sun (Me) */}
          <div className="absolute z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-pulse-glow shadow-[0_0_100px_rgba(59,130,246,0.5)]">
            <div className="text-5xl md:text-6xl">👨‍💻</div>
          </div>

          {/* Orbital Rings */}
          {[1, 2, 3, 4].map((ring) => (
            <div
              key={ring}
              className="absolute rounded-full border border-primary/10"
              style={{
                width: `${ring * 160}px`,
                height: `${ring * 160}px`,
              }}
            />
          ))}

          {/* Planets (Skills) */}
          {skills.map((skill, index) => {
            const orbitRing = (index % 4) + 1;
            const radius = orbitRing * 160;
            const orbitDuration = 15 + orbitRing * 5;
            const startAngle = (index * 360) / skills.length;

            return (
              <div
                key={skill.name}
                className="planet absolute"
                style={{
                  animation: `orbit-${orbitRing} ${orbitDuration}s linear infinite`,
                  animationDelay: `${-index * (orbitDuration / skills.length)}s`,
                  transform: `rotate(${startAngle}deg)`,
                }}
              >
                <div
                  className="relative group cursor-pointer"
                  style={{
                    transform: `translateX(${radius}px) rotate(-${startAngle}deg)`,
                  }}
                >
                  {/* Planet */}
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 glass-card hover-glow p-3 md:p-4"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 0 30px ${skill.color}80`,
                    }}
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Grid for Mobile */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          {skills.map((skill) => (
            <div key={skill.name} className="glass-card p-4 text-center hover-glow">
              <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-sm font-semibold">{skill.name}</div>
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

export default SolarSystemSkills;
