import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import npLang from "./locales/np/np.json";
import enLang from "./locales/en/en.json";

const resources = {
  en: {
    translation: enLang,
  },
  np: {
    translation: npLang,
  },
};

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
