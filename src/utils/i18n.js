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

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
