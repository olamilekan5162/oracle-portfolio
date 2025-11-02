import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./components/sections/About";
import ContactSection from "./components/sections/Contact";
import ExperienceSection from "./components/sections/Experience";
import HeroSection from "./components/sections/Hero";
import SkillsSection from "./components/sections/Skills";

export default function App() {
  return (
    <div className="bg-background flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <ProjectsSection /> */}
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
