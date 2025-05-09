import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/types";
import { ExternalLink, Github } from "lucide-react";

const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    titleFr: "Plateforme E-commerce",
    description:
      "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.",
    descriptionFr:
      "Une plateforme e-commerce complète construite avec React, Node.js et MongoDB. Les fonctionnalités comprennent l'authentification des utilisateurs, la gestion des produits, le panier d'achat et le traitement des paiements.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    id: "project2",
    title: "Task Management App",
    titleFr: "Application de Gestion de Tâches",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    descriptionFr:
      "Une application collaborative de gestion de tâches avec des mises à jour en temps réel, une interface glisser-déposer et des fonctionnalités de collaboration en équipe.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    demoUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/yourusername/taskapp",
  },
  {
    id: "project3",
    title: "Weather Dashboard",
    titleFr: "Tableau de Bord Météo",
    description:
      "A weather dashboard that displays current weather conditions and forecasts for multiple locations. Uses OpenWeatherMap API and includes interactive charts.",
    descriptionFr:
      "Un tableau de bord météo qui affiche les conditions météorologiques actuelles et les prévisions pour plusieurs emplacements. Utilise l'API OpenWeatherMap et inclut des graphiques interactifs.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    tags: ["React", "Chart.js", "API Integration", "Geolocation"],
    demoUrl: "https://example.com/weather",
    githubUrl: "https://github.com/yourusername/weather",
  },
  {
    id: "project4",
    title: "Portfolio Website",
    titleFr: "Site Web Portfolio",
    description:
      "A responsive portfolio website built with React and Tailwind CSS. Features dark mode, animations, and contact form integration.",
    descriptionFr:
      "Un site web portfolio réactif construit avec React et Tailwind CSS. Comprend un mode sombre, des animations et l'intégration d'un formulaire de contact.",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    demoUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    id: "project5",
    title: "Recipe Finder App",
    titleFr: "Application de Recherche de Recettes",
    description:
      "A recipe finder application that allows users to search for recipes by ingredients, dietary restrictions, and cuisine type. Includes user authentication and saved recipes.",
    descriptionFr:
      "Une application de recherche de recettes qui permet aux utilisateurs de rechercher des recettes par ingrédients, restrictions alimentaires et type de cuisine. Comprend l'authentification des utilisateurs et les recettes sauvegardées.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
    tags: ["React Native", "Firebase", "Spoonacular API", "Mobile App"],
    demoUrl: "https://example.com/recipes",
    githubUrl: "https://github.com/yourusername/recipes",
  },
];

function Projects() {
  const { t, language } = useLanguage();

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
          {t("My Projects", "Mes Projets")}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t(
            "A showcase of my recent work, personal projects, and contributions.",
            "Une vitrine de mes travaux récents, projets personnels et contributions.",
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image}
                alt={language === "en" ? project.title : project.titleFr}
                className="object-cover w-full h-full transition-all hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                {language === "en" ? project.title : project.titleFr}
              </h2>
              <p className="text-muted-foreground mb-4">
                {language === "en"
                  ? project.description
                  : project.descriptionFr}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.demoUrl && (
                  <Button asChild variant="default" size="sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("Live Demo", "Démo Live")}
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t("View Code", "Voir le Code")}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {t("Want to see more?", "Vous voulez en voir plus?")}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t(
            "Check out my GitHub profile for more projects and contributions.",
            "Consultez mon profil GitHub pour plus de projets et de contributions.",
          )}
        </p>
        <Button asChild variant="outline">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            {t("Visit GitHub Profile", "Visiter le Profil GitHub")}
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Projects;
