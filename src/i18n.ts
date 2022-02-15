import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/language.json";
import ptBR from "./locales/ptBR/language.json";
import esLatam from "./locales/esLatam/language.json";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

export const resources = {
  en: {
    en,
  },
  ptBr: {
    ptBR,
  },
  esLatam: {
    esLatam,
  },
} as const;

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  lng: "en",
  resources,
});
