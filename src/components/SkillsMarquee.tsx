const skills = [
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

const SkillsMarquee = () => {
  return (
    <section id="competences-marquee" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Design 2: Bandeau infini</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Défilement continu des technologies
          </p>
        </div>

        <div className="space-y-8">
          {/* First Row - Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee-left group hover:[animation-play-state:paused]">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 glass-card p-6 w-32 h-32 flex flex-col items-center justify-center gap-3 hover-glow transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-semibold text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee-right group hover:[animation-play-state:paused]">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-rev-${index}`}
                  className="flex-shrink-0 glass-card p-6 w-32 h-32 flex flex-col items-center justify-center gap-3 hover-glow transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-semibold text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Survolez pour mettre en pause
        </p>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default SkillsMarquee;
