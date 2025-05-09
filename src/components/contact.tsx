import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
          {t("Get In Touch", "Entrer En Contact")}
        </h1>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          {t(
            "Have a project in mind or want to discuss potential opportunities? Feel free to reach out!",
            "Vous avez un projet en tête ou vous souhaitez discuter d'opportunités potentielles ? N'hésitez pas à me contacter !",
          )}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("Name", "Nom")}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("Your name", "Votre nom")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("Email", "Email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("Your email address", "Votre adresse email")}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{t("Subject", "Sujet")}</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t(
                    "What is this regarding?",
                    "De quoi s'agit-il?",
                  )}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t("Message", "Message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("Your message", "Votre message")}
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting
                  ? t("Sending...", "Envoi en cours...")
                  : t("Send Message", "Envoyer le Message")}
              </Button>
              {submitSuccess && (
                <p className="text-green-600 dark:text-green-400 text-center mt-2">
                  {t(
                    "Your message has been sent successfully! I'll get back to you soon.",
                    "Votre message a été envoyé avec succès ! Je vous répondrai bientôt.",
                  )}
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {t("Contact Information", "Informations de Contact")}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">{t("Email", "Email")}</p>
                    <a
                      href="mailto:hello@example.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      hello@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">{t("Phone", "Téléphone")}</p>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">
                      {t("Location", "Emplacement")}
                    </p>
                    <p className="text-muted-foreground">
                      {t("San Francisco, CA", "San Francisco, CA")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                {t("Connect With Me", "Connectez-vous Avec Moi")}
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-2 border hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-2 border hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card p-2 border hover:bg-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                {t("Availability", "Disponibilité")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "I'm currently available for freelance work and open to new opportunities.",
                  "Je suis actuellement disponible pour des missions freelance et ouvert à de nouvelles opportunités.",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
