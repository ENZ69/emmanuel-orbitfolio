import { ExternalLink, GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const journeySteps = [
  {
    type: "education",
    title: "Master 1",
    description: "Actuellement en cours",
    status: "En cours",
    icon: GraduationCap,
  },
  {
    type: "certification",
    title: "Certification Développeur Full Stack",
    description: "GoMyCode",
    status: "Obtenue",
    link: "https://diploma.gomycode.app/?id=31733065242678985",
    icon: Award,
  },
  {
    type: "certification",
    title: "Certification Développeur Front-End",
    description: "Force N",
    status: "Obtenue",
    link: "https://formation.force-n.sn/mod/customcert/verify_certificate.php?contextid=248505&code=udGgyQp5HR&qrcode=1",
    icon: Award,
  },
  {
    type: "education",
    title: "Licence en Génie Logiciel",
    description: "Formation universitaire",
    status: "Obtenue",
    icon: GraduationCap,
  },
];

const Journey = () => {
  return (
    <section id="parcours" className="section-padding bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mon Parcours</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Formation et certifications professionnelles
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Journey steps */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`md:flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Card className="glass-card p-6 hover-glow group cursor-pointer transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                            <Icon className="w-6 h-6" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-bold">{step.title}</h3>
                              {step.link && (
                                <a
                                  href={step.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-secondary transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                              )}
                            </div>
                            
                            <p className="text-muted-foreground mb-2">{step.description}</p>
                            
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              step.status === "En cours" 
                                ? "bg-accent/20 text-accent" 
                                : "bg-primary/20 text-primary"
                            }`}>
                              {step.status}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-lg shadow-primary/50" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
