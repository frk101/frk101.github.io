// src/data/projects.js
import emlakKonut from "../assets/emlak-konut-bizz.png";
import ekaBizz from "../assets/eka-logo.png";
import emlakKonutMobil from "../assets/emlak-konut-mobil.png";
import metpos360 from "../assets/metpos.png";
import aös from "../assets/aös.png";
import asistan from "../assets/asistan.png";
import tactiq from "../assets/tactiq-island.png";

export const projects = [
  {
    title: "Emlak Konut Bizz (Mobil Uygulama)",
    description:
      "React Native ile geliştirilen, Emlak Konut'un çalışanlarına yönelik bir mobil uygulama.",
    tech: [
      "React Native",
      "Redux",
      "Redux Toolkit",
      "TypeScript",
      "Axios",
      "React Navigation",
      "Firebase",
      "React Native Reanimated",
      "React Native Gesture Handler",
      "Geolocation",
      "React Native Maps",
      "Rest API",
    ],
    live: "https://apps.apple.com/us/app/emlak-konut-bizz/id6738863315",
    image: emlakKonut,
  },
  {
    title: "Eka Bizz (Mobil Uygulama)",
    description:
      "React Native ile geliştirilen, Emlak Konut Asansör çalışanlarına yönelik bir mobil uygulama.",
    tech: [
      "React Native",
      "Redux",
      "Redux Toolkit",
      "TypeScript",
      "Axios",
      "React Navigation",
      "Firebase",
      "React Native Reanimated",
      "React Native Gesture Handler",
      "Geolocation",
      "React Native Maps",
      "Rest API",
    ],
    live: "https://apps.apple.com/us/app/eka-bizz/id6745474056",
    image: ekaBizz,
    // image: "/assets/projects/tactiq.png",
  },
  {
    title: "Emlak Konut Mobil (Mobil Uygulama)",
    description:
      "Emlak Konut'un satış ve kiralama işlemlerini kolaylaştıran, ihale yöntemiyle çalışan kullanıcı dostu bir mobil uygulama.",
    tech: [
      "React Native",
      "Redux",
      "Redux Toolkit",
      "Socket.IO",
      "TypeScript",
      "Axios",
      "React Navigation",
      "Firebase",
      "React Native Reanimated",
      "React Native Gesture Handler",
      "Geolocation",
      "React Native Maps",
      "Rest API",
    ],
    image: emlakKonutMobil,
    live: "https://apps.apple.com/us/app/emlak-konut-mobil/id1661701654",
    // image: "/assets/projects/tactiq.png",
  },
  {
    title: "Metpos 360 (Mobil Uygulama)",
    description:
      "React Native ile geliştirilen, Ön  muhasebe ve finansal işlemleri kolaylaştıran bir mobil uygulama. (Bu uygulama aktif olarak kullanılmaktadır fakat tf üzerinden yetkisi olan kişiler kullanabiliyor.)",
    tech: [
      "React Native",
      "Redux",
      "Redux Toolkit",
      "TypeScript",
      "Axios",
      "React Navigation",
      "Firebase",
      "React Native Reanimated",
      "React Native Gesture Handler",
      "Rest API",
    ],
    image: metpos360,
    // image: "/assets/projects/tactiq.png",
  },
  {
    title: "Aös (Mobil Uygulama- Halk Yatırım)",
    description:
      "Akıllı Öneri Sistemi, her gün yeni işlem önerileri, stratejiler, Akıllı Grafikler, Endeks 30 şirket performansları ve daha fazlasını bulabileceğiniz bir Halk Yatırım uygulamasıdır.",
    tech: [
      "React Native",
      "Redux",
      "Redux Toolkit",
      "TypeScript",
      "Axios",
      "React Navigation",
      "Firebase",
      "React Native Reanimated",
      "React Native Gesture Handler",
      "Rest API",
    ],
    image: aös,
    live: "https://apps.apple.com/us/app/a%C3%B6s/id1505794114",
    // image: "/assets/projects/tactiq.png",
  },
  {
    title: "Emlak Konut İş Asistanı (Mobil Uygulama)",
    description:
      "Emlak Konut çalışanlarının iş süreçlerini kolaylaştıran, görev yönetimi ve bildirim özellikleri sunan bir mobil uygulama.",
    tech: [
      "React Native",
      "Redux",
      "Redux Toolkit",
      "TypeScript",
      "Axios",
      "React Navigation",
      "Firebase",
      "React Native Reanimated",
      "React Native Gesture Handler",
      "Rest API",
    ],
    live: "https://apps.apple.com/us/app/emlak-konut-i-%C5%9F-asistani/id1528745366",
    image: asistan,
    github: "https://github.com/frk101/tactiq-island",
    // image: "/assets/projects/tactiq.png",
  },
  {
    title: "Tactiq Island (Mobil Oyun)",
    description:
      "React Native ile geliştirilen, farklı adalarda farklı oyunlar sunan çok oyunculu mobil oyun.",
    tech: ["React Native", "Context", "TypeScript"],
    live: "",
    github: "https://github.com/frk101/tactiq-island",
    image: tactiq,
    // image: "/assets/projects/tactiq.png",
  },
];
