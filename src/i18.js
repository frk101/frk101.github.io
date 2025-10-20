import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import trCommon from "./locales/tr/common.json";
import enCommon from "./locales/en/common.json";
import trNavbar from "./locales/tr/navbar.json";
import enNavbar from "./locales/en/navbar.json";
import trHero from "./locales/tr/hero.json";
import enHero from "./locales/en/hero.json";
import trAbout from "./locales/tr/about.json";
import enAbout from "./locales/en/about.json";
import trServices from "./locales/tr/services.json";
import enServices from "./locales/en/services.json";
import trProjects from "./locales/tr/projects.json";
import enProjects from "./locales/en/projects.json";
import trContact from "./locales/tr/contact.json";
import enContact from "./locales/en/contact.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        navbar: enNavbar,
        hero: enHero,
        about: enAbout,
        services: enServices,
        projects: enProjects,
        contact: enContact,
      },
      tr: {
        common: trCommon,
        navbar: trNavbar,
        hero: trHero,
        about: trAbout,
        services: trServices,
        projects: trProjects,
        contact: trContact,
      },
    },
    fallbackLng: "tr",
    supportedLngs: ["tr", "en"],
    defaultNS: "common",
    ns: ["common", "navbar", "hero"],
    detection: {
      order: ["localStorage", "querystring", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", lng);
  }
});

export default i18n;
