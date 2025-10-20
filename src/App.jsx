import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/services/Services.jsx";
import Footer from "./components/footer/Footer.jsx";
import Contact from "./components/contact/Contact.jsx";
import Projects from "./components/projects/Projects.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.tsx";

function App() {
  return (
    <>
      <Navbar rightSlot={<LanguageSwitcher compact />} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
