import { useLanguage } from "@/contexts/LanguageContext";
import { Progress } from "@/components/ui/progress";
import { Skill } from "@/types/types";

const technicalSkills: Skill[] = [
  { name: "React", icon: "react", level: 95 },
  { name: "TypeScript", icon: "typescript", level: 90 },
  { name: "JavaScript", icon: "javascript", level: 95 },
  { name: "HTML/CSS", icon: "html", level: 90 },
  { name: "Node.js", icon: "nodejs", level: 85 },
  { name: "Next.js", icon: "nextjs", level: 80 },
  { name: "Tailwind CSS", icon: "tailwind", level: 90 },
  { name: "GraphQL", icon: "graphql", level: 75 },
  { name: "MongoDB", icon: "mongodb", level: 70 },
  { name: "PostgreSQL", icon: "postgresql", level: 65 },
  { name: "Docker", icon: "docker", level: 60 },
  { name: "AWS", icon: "aws", level: 65 },
];

const softSkills: Skill[] = [
  { name: "Problem Solving", icon: "problem", level: 95 },
  { name: "Communication", icon: "communication", level: 90 },
  { name: "Teamwork", icon: "teamwork", level: 95 },
  { name: "Time Management", icon: "time", level: 85 },
  { name: "Adaptability", icon: "adaptability", level: 90 },
  { name: "Leadership", icon: "leadership", level: 80 },
];

function Skills() {
  const { t } = useLanguage();

  const SkillCard = ({ skill }: { skill: Skill }) => (
    <div className="border rounded-lg p-4 bg-card">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{skill.name}</h3>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2" />
    </div>
  );

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
          {t("Skills & Expertise", "Compétences & Expertise")}
        </h1>
        <p className="text-lg text-muted-foreground mb-10 text-center">
          {t(
            "A comprehensive overview of my technical abilities and soft skills.",
            "Un aperçu complet de mes compétences techniques et interpersonnelles.",
          )}
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {t("Technical Skills", "Compétences Techniques")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {t("Soft Skills", "Compétences Interpersonnelles")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {t("Tools & Technologies", "Outils & Technologies")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Git",
              "VS Code",
              "Figma",
              "Jira",
              "Webpack",
              "Jest",
              "GitHub Actions",
              "Vercel",
            ].map((tool) => (
              <div
                key={tool}
                className="border rounded-lg p-4 bg-card text-center"
              >
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-10">
          <h2 className="text-2xl font-bold mb-4">
            {t("Languages", "Langues")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{t("English", "Anglais")}</h3>
                <span className="text-sm text-muted-foreground">
                  {t("Native/Fluent", "Natif/Courant")}
                </span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{t("French", "Français")}</h3>
                <span className="text-sm text-muted-foreground">
                  {t("Fluent", "Courant")}
                </span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{t("Spanish", "Espagnol")}</h3>
                <span className="text-sm text-muted-foreground">
                  {t("Intermediate", "Intermédiaire")}
                </span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
