import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "vi",
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("ct-luxury-lang");
    return saved === "en" ? "en" : "vi";
  });

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === "vi" ? "en" : "vi";
      localStorage.setItem("ct-luxury-lang", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
