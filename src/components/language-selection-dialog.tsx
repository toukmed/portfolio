import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function LanguageSelectionDialog() {
  const [open, setOpen] = useState(false);
  const { setLanguage, t } = useLanguage();

  useEffect(() => {
    // Show dialog on component mount (page refresh)
    setOpen(true);
  }, []);

  const selectLanguage = (lang: "en" | "fr") => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {t("Language Selection", "Sélection de la langue")}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t(
              "Please select your preferred language for navigation",
              "Veuillez sélectionner votre langue préférée pour la navigation",
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center space-x-4 py-4">
          <Button
            variant="outline"
            className="w-24 hover:bg-blue-50 dark:hover:bg-blue-900"
            onClick={() => selectLanguage("en")}
          >
            English
          </Button>
          <Button
            variant="outline"
            className="w-24 hover:bg-blue-50 dark:hover:bg-blue-900"
            onClick={() => selectLanguage("fr")}
          >
            Français
          </Button>
        </div>
        <DialogFooter className="sm:justify-center">
          <div className="text-xs text-center text-muted-foreground">
            {t(
              "You can change the language anytime using the language switcher",
              "Vous pouvez changer de langue à tout moment en utilisant le sélecteur de langue",
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
