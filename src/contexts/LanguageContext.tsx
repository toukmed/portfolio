import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (en: string, fr: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Local storage key for saving language preference
const LANGUAGE_STORAGE_KEY = "portfolio-language-preference";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get saved language from local storage, default to "en"
  const savedLanguage =
    typeof window !== "undefined"
      ? (localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language) || "en"
      : "en";

  const [language, setLanguage] = useState<Language>(savedLanguage);

  // Save language preference to local storage when it changes
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const t = (en: string, fr: string) => {
    return language === "en" ? en : fr;
  };

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
