import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/language.json";
import ptBr from "./locales/ptBR/language.json";
import esLatam from "./locales/esLatam/language.json";
import detector from "i18next-browser-languagedetector";

export const defaultNS = "en";
export const resources = {
  en: {
    en,
  },
  ptBr: {
    ptBr,
  },
  esLatam: {
    esLatam,
  },
} as const;

i18n.use(detector).use(initReactI18next).init({
  fallbackLng: "en",
  resources,
  defaultNS,
});
