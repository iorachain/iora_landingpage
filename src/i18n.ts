import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/language.json";
import ptBr from "./locales/ptBR/language.json";
import esLatam from "./locales/esLatam/language.json";
import detector from "i18next-browser-languagedetector";

export const defaultNS = "ptBr";
export const resources = {
  en: {
    translation: en,
  },
  ptBr: {
    translation: ptBr,
  },
  esLatam: {
    translation: esLatam,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    lng: "ptBr",
    fallbackLng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
