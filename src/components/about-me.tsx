import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

function AboutMe() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <div className="relative mb-6">
              <div className="aspect-square rounded-full bg-gradient-to-tr from-primary to-primary/50 opacity-20 blur-3xl absolute -z-10 w-full h-full" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                alt={t("Profile picture", "Photo de profil")}
                className="rounded-lg w-full object-cover shadow-xl"
              />
            </div>
            <div className="flex flex-col space-y-3">
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
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            {t("About Me", "À Propos de Moi")}
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              {t(
                "Hello! I'm a passionate software engineer with over 5 years of experience in building web applications and digital experiences.",
                "Bonjour ! Je suis un ingénieur logiciel passionné avec plus de 5 ans d'expérience dans la création d'applications web et d'expériences numériques.",
              )}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t("My Journey", "Mon Parcours")}
            </h2>
            <p>
              {t(
                "I started my journey as a self-taught developer, building small projects and exploring different technologies. After completing my Computer Science degree, I worked with several startups and established companies, helping them build scalable and user-friendly applications.",
                "J'ai commencé mon parcours en tant que développeur autodidacte, en créant de petits projets et en explorant différentes technologies. Après avoir obtenu mon diplôme en informatique, j'ai travaillé avec plusieurs startups et entreprises établies, les aidant à construire des applications évolutives et conviviales.",
              )}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t("My Approach", "Mon Approche")}
            </h2>
            <p>
              {t(
                "I believe in writing clean, maintainable code and creating intuitive user experiences. My approach combines technical expertise with a deep understanding of user needs. I'm passionate about accessibility and ensuring that the applications I build can be used by everyone.",
                "Je crois en l'écriture de code propre et maintenable et en la création d'expériences utilisateur intuitives. Mon approche combine expertise technique et compréhension profonde des besoins des utilisateurs. Je suis passionné par l'accessibilité et je m'assure que les applications que je construis puissent être utilisées par tous.",
              )}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t("When I'm Not Coding", "Quand Je Ne Code Pas")}
            </h2>
            <p>
              {t(
                "Outside of work, I enjoy hiking, reading science fiction, and experimenting with new cooking recipes. I'm also an active contributor to open-source projects and occasionally write technical articles on my blog.",
                "En dehors du travail, j'aime faire de la randonnée, lire de la science-fiction et expérimenter de nouvelles recettes de cuisine. Je contribue également activement à des projets open-source et j'écris occasionnellement des articles techniques sur mon blog.",
              )}
            </p>
          </div>

          <div className="mt-10 pt-8 border-t">
            <h2 className="text-2xl font-semibold mb-6">
              {t("Let's Connect", "Connectons-nous")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
                "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités pour faire partie de votre vision.",
              )}
            </p>
            <Button asChild>
              <Link to="/contact">
                {t("Get in Touch", "Prendre Contact")}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
