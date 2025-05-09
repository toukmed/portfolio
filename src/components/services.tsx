import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Layout,
  Database,
  Search,
  Smartphone,
  Lightbulb,
} from "lucide-react";
import { Service } from "@/types/types";

const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    titleFr: "Développement Frontend",
    description:
      "Building responsive and accessible user interfaces with modern frameworks like React, Vue, or Angular.",
    descriptionFr:
      "Création d'interfaces utilisateur réactives et accessibles avec des frameworks modernes comme React, Vue ou Angular.",
    icon: "layout",
  },
  {
    id: "backend",
    title: "Backend Development",
    titleFr: "Développement Backend",
    description:
      "Developing robust server-side applications with Node.js, Express, and various databases.",
    descriptionFr:
      "Développement d'applications côté serveur robustes avec Node.js, Express et diverses bases de données.",
    icon: "database",
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    titleFr: "Développement Full Stack",
    description:
      "End-to-end application development, from database design to user interface implementation.",
    descriptionFr:
      "Développement d'applications de bout en bout, de la conception de la base de données à l'implémentation de l'interface utilisateur.",
    icon: "code",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    titleFr: "Optimisation SEO",
    description:
      "Improving website visibility and search engine rankings through technical SEO best practices.",
    descriptionFr:
      "Amélioration de la visibilité du site web et du classement dans les moteurs de recherche grâce aux meilleures pratiques SEO techniques.",
    icon: "search",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    titleFr: "Développement d'Applications Mobiles",
    description:
      "Creating cross-platform mobile applications using React Native or Flutter.",
    descriptionFr:
      "Création d'applications mobiles multiplateformes à l'aide de React Native ou Flutter.",
    icon: "smartphone",
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    titleFr: "Conseil Technique",
    description:
      "Providing expert advice on technology stack selection, architecture design, and best practices.",
    descriptionFr:
      "Fourniture de conseils d'experts sur la sélection de la pile technologique, la conception de l'architecture et les meilleures pratiques.",
    icon: "lightbulb",
  },
];

function Services() {
  const { t, language } = useLanguage();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "layout":
        return <Layout className="h-10 w-10" />;
      case "database":
        return <Database className="h-10 w-10" />;
      case "code":
        return <Code className="h-10 w-10" />;
      case "search":
        return <Search className="h-10 w-10" />;
      case "smartphone":
        return <Smartphone className="h-10 w-10" />;
      case "lightbulb":
        return <Lightbulb className="h-10 w-10" />;
      default:
        return <Code className="h-10 w-10" />;
    }
  };

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
          {t("Services I Offer", "Services Que J'Offre")}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t(
            "I provide a range of services to help businesses and individuals build and improve their digital presence.",
            "Je propose une gamme de services pour aider les entreprises et les particuliers à construire et améliorer leur présence numérique.",
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg p-6 bg-card hover:shadow-md transition-shadow"
          >
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
              {renderIcon(service.icon)}
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {language === "en" ? service.title : service.titleFr}
            </h2>
            <p className="text-muted-foreground mb-4">
              {language === "en" ? service.description : service.descriptionFr}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {t("Need a Custom Solution?", "Besoin d'une Solution Personnalisée?")}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t(
            "I'm always open to discussing new projects and how I can help bring your ideas to life.",
            "Je suis toujours ouvert à discuter de nouveaux projets et de la façon dont je peux vous aider à donner vie à vos idées.",
          )}
        </p>
        <Button asChild size="lg">
          <Link to="/contact">
            {t("Let's Discuss Your Project", "Discutons de Votre Projet")}{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-20 border-t pt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("My Work Process", "Mon Processus de Travail")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: t("Discovery", "Découverte"),
              description: t(
                "Understanding your requirements and project goals.",
                "Comprendre vos besoins et les objectifs du projet.",
              ),
            },
            {
              step: "02",
              title: t("Planning", "Planification"),
              description: t(
                "Creating a detailed roadmap and technical specifications.",
                "Création d'une feuille de route détaillée et de spécifications techniques.",
              ),
            },
            {
              step: "03",
              title: t("Development", "Développement"),
              description: t(
                "Building the solution with regular updates and feedback.",
                "Construction de la solution avec des mises à jour régulières et des retours.",
              ),
            },
            {
              step: "04",
              title: t("Delivery", "Livraison"),
              description: t(
                "Thorough testing, deployment, and ongoing support.",
                "Tests approfondis, déploiement et support continu.",
              ),
            },
          ].map((item, index) => (
            <div key={index} className="text-center p-4">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary">{item.step}</span>
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
