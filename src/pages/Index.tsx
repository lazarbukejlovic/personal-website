import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import SelectedWork from "@/components/SelectedWork";
import InterestsSection from "@/components/InterestsSection";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Index() {
  return (
    <>
      <BackgroundEffects />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <SelectedWork />
        <InterestsSection />
      </main>
      <Footer />
    </>
  );
}
