import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Application E-Commerce",
    description: "Plateforme de commerce électronique complète avec système de paiement intégré et gestion des stocks en temps réel.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
  {
    title: "Système de Gestion",
    description: "Application web de gestion d'entreprise avec tableau de bord analytique et génération de rapports automatisés.",
    tags: ["Laravel", "PHP", "MySQL", "Vue.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "API RESTful",
    description: "API robuste et sécurisée pour application mobile avec authentification JWT et documentation Swagger.",
    tags: ["Spring Boot", "Java", "PostgreSQL", "JWT"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif avec visualisations en temps réel et export de données personnalisables.",
    tags: ["React", "Express", "MongoDB", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projets" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Mes Réalisations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Projets récents et applications développées
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden group hover-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full bg-secondary text-primary-foreground hover:bg-secondary/90 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
