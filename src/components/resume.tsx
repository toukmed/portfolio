import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { TimelineItem } from "@/types/types";

const educationItems: TimelineItem[] = [
  {
    id: "edu1",
    title: "Master's in Computer Science",
    titleFr: "Master en Informatique",
    organization: "University of Technology",
    organizationFr: "Université de Technologie",
    period: "2015 - 2017",
    description:
      "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
    descriptionFr:
      "Spécialisé en Génie Logiciel et Intelligence Artificielle. Diplômé avec mention.",
  },
  {
    id: "edu2",
    title: "Bachelor's in Computer Science",
    titleFr: "Licence en Informatique",
    organization: "State University",
    organizationFr: "Université d'État",
    period: "2012 - 2015",
    description:
      "Focused on programming fundamentals, data structures, and web development.",
    descriptionFr:
      "Axé sur les fondamentaux de la programmation, les structures de données et le développement web.",
  },
];

const experienceItems: TimelineItem[] = [
  {
    id: "exp1",
    title: "Senior Frontend Developer",
    titleFr: "Développeur Frontend Senior",
    organization: "Tech Innovations Inc.",
    period: "2020 - Present",
    periodFr: "2020 - Présent",
    description:
      "Lead the frontend development team in building responsive and accessible web applications using React and TypeScript. Implemented CI/CD pipelines and improved performance by 40%.",
    descriptionFr:
      "Direction de l'équipe de développement frontend dans la création d'applications web réactives et accessibles utilisant React et TypeScript. Mise en place de pipelines CI/CD et amélioration des performances de 40%.",
  },
  {
    id: "exp2",
    title: "Full Stack Developer",
    titleFr: "Développeur Full Stack",
    organization: "Digital Solutions Ltd.",
    period: "2017 - 2020",
    description:
      "Developed and maintained multiple web applications using React, Node.js, and MongoDB. Collaborated with UX designers to implement responsive designs and improve user experience.",
    descriptionFr:
      "Développement et maintenance de plusieurs applications web utilisant React, Node.js et MongoDB. Collaboration avec les designers UX pour implémenter des designs responsifs et améliorer l'expérience utilisateur.",
  },
  {
    id: "exp3",
    title: "Web Developer Intern",
    titleFr: "Stagiaire Développeur Web",
    organization: "StartUp Ventures",
    period: "2016 - 2017",
    description:
      "Assisted in developing frontend components and implementing responsive designs. Gained hands-on experience with HTML, CSS, JavaScript, and jQuery.",
    descriptionFr:
      "Assistance au développement de composants frontend et à l'implémentation de designs responsifs. Acquisition d'une expérience pratique avec HTML, CSS, JavaScript et jQuery.",
  },
];

function Resume() {
  const { t, language } = useLanguage();

  const TimelineSection = ({
    items,
    title,
    titleFr,
  }: {
    items: TimelineItem[];
    title: string;
    titleFr: string;
  }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">
        {language === "en" ? title : titleFr}
      </h2>
      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0"
          >
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
            <div>
              <h3 className="text-xl font-semibold">
                {language === "en" ? item.title : item.titleFr}
              </h3>
              <p className="text-muted-foreground">
                {language === "en"
                  ? item.organization
                  : item.organizationFr || item.organization}
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                {language === "en" ? item.period : item.periodFr || item.period}
              </p>
              <p className="text-muted-foreground">
                {language === "en" ? item.description : item.descriptionFr}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            {t("Resume", "Curriculum Vitae")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t(
              "A summary of my education, work experience, and skills.",
              "Un résumé de mon éducation, de mon expérience professionnelle et de mes compétences.",
            )}
          </p>
        </div>
        <Button className="mt-4 md:mt-0">
          <Download className="mr-2 h-4 w-4" />{" "}
          {t("Download CV", "Télécharger CV")}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <TimelineSection
            items={experienceItems}
            title="Work Experience"
            titleFr="Expérience Professionnelle"
          />
        </div>
        <div>
          <TimelineSection
            items={educationItems}
            title="Education"
            titleFr="Formation"
          />

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              {t("Certifications", "Certifications")}
            </h2>
            <ul className="space-y-4">
              <li className="border rounded-lg p-4 bg-card">
                <h3 className="font-semibold">
                  {t("AWS Certified Developer", "Développeur Certifié AWS")}
                </h3>
                <p className="text-sm text-muted-foreground">2022</p>
              </li>
              <li className="border rounded-lg p-4 bg-card">
                <h3 className="font-semibold">
                  {t(
                    "Professional Scrum Master I",
                    "Scrum Master Professionnel I",
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">2021</p>
              </li>
              <li className="border rounded-lg p-4 bg-card">
                <h3 className="font-semibold">
                  {t(
                    "Google UX Design Certificate",
                    "Certificat de Design UX Google",
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">2020</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
