import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Download } from "lucide-react";

function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex flex-col space-y-4 md:space-y-6 md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                {t(
                  "Software Engineer & Developer",
                  "Ingénieur Logiciel & Développeur",
                )}
              </h1>
              <p className="text-muted-foreground md:text-xl">
                {t(
                  "I build accessible, inclusive products and digital experiences for the web.",
                  "Je crée des produits accessibles et inclusifs ainsi que des expériences numériques pour le web.",
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">
                    {t("Contact Me", "Me Contacter")}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />{" "}
                  {t("Download CV", "Télécharger CV")}
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="aspect-square rounded-full bg-gradient-to-tr from-primary to-primary/50 opacity-20 blur-3xl absolute -z-10 w-full h-full" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                  alt={t("Profile picture", "Photo de profil")}
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-background shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {t("Featured Projects", "Projets en Vedette")}
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {t(
                "Check out some of my recent work that showcases my skills and expertise.",
                "Découvrez certains de mes travaux récents qui mettent en valeur mes compétences et mon expertise.",
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards would go here */}
            <div className="flex flex-col h-full rounded-lg border bg-card text-card-foreground shadow overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
                  alt="Project 1"
                  className="object-cover w-full h-full transition-all hover:scale-105"
                />
              </div>
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold text-xl">
                  {t("E-commerce Platform", "Plateforme E-commerce")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "A modern e-commerce solution with React, Node.js and MongoDB.",
                    "Une solution e-commerce moderne avec React, Node.js et MongoDB.",
                  )}
                </p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild variant="outline" size="sm">
                  <Link to="/projects/1">
                    {t("View Project", "Voir le Projet")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline">
              <Link to="/projects">
                {t("View All Projects", "Voir Tous les Projets")}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {t("Skills Overview", "Aperçu des Compétences")}
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {t(
                "I specialize in frontend development with expertise in various technologies.",
                "Je me spécialise dans le développement frontend avec une expertise dans diverses technologies.",
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
            {/* Skill badges would go here */}
            <div className="flex flex-col items-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                  <path d="M7 7h.01" />
                </svg>
              </div>
              <span className="text-sm font-medium">React</span>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline">
              <Link to="/skills">
                {t("View All Skills", "Voir Toutes les Compétences")}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {t("Let's Work Together", "Travaillons Ensemble")}
            </h2>
            <p className="max-w-[700px] md:text-xl">
              {t(
                "I'm currently available for freelance work and open to new opportunities.",
                "Je suis actuellement disponible pour des missions freelance et ouvert à de nouvelles opportunités.",
              )}
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                {t("Get in Touch", "Prendre Contact")}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
