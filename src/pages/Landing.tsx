import ShaderBackground from "@/components/ShaderBackground";
import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/sections/HeroSection";
import CaseStudies from "@/components/sections/CaseStudies";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactFooter from "@/components/sections/ContactFooter";
import SectionDivider from "@/components/SectionDivider";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ShaderBackground />
      <NavHeader />

      <main className="relative z-10">
        <HeroSection />
        <SectionDivider />
        <CaseStudies />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ContactFooter />
      </main>
    </div>
  );
}
